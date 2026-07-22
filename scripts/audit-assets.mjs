#!/usr/bin/env node
/**
 * 零依赖静态资源审计脚本。
 * 在仓库根目录运行：node scripts/audit-assets.mjs
 *
 * 输出：
 * 1. HTML/CSS/JS 中引用但不存在的本地资源
 * 2. 仓库中疑似未被任何文本文件引用的资源
 *
 * 注意：动态拼接路径可能无法被静态正则识别，删除前仍需人工确认。
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const textExtensions = new Set([".html", ".css", ".js", ".mjs", ".json", ".svg"]);
const assetExtensions = new Set([
  ".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg", ".ico",
  ".mp3", ".wav", ".ogg", ".m4a", ".mp4", ".webm", ".woff", ".woff2",
  ".ttf", ".otf", ".css", ".js"
]);
const ignoredDirectories = new Set([".git", "node_modules"]);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".DS_Store") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function normalizeReference(reference) {
  const clean = reference.split(/[?#]/, 1)[0].trim();
  if (!clean || /^(?:https?:|data:|blob:|mailto:|tel:|javascript:|#)/i.test(clean)) {
    return null;
  }
  return clean;
}

function resolveReference(sourceFile, reference) {
  if (reference.startsWith("/dreaming-quintet/")) {
    return path.join(root, reference.slice(1));
  }
  if (reference.startsWith("/")) {
    return path.join(root, reference.slice(1));
  }
  return path.resolve(path.dirname(sourceFile), reference);
}

function extractReferences(content) {
  const references = new Set();
  const patterns = [
    /(?:src|href|poster)\s*=\s*["']([^"']+)["']/gi,
    /url\(\s*["']?([^"')]+)["']?\s*\)/gi,
    /["']((?:\.\.\/|\.\/|\/dreaming-quintet\/)[^"']+\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp3|wav|ogg|m4a|mp4|webm|woff2?|ttf|otf|css|js)(?:[?#][^"']*)?)["']/gi
  ];

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      const normalized = normalizeReference(match[1]);
      if (normalized) references.add(normalized);
    }
  }
  return references;
}

const allFiles = await walk(root);
const textFiles = allFiles.filter((file) => textExtensions.has(path.extname(file).toLowerCase()));
const assetFiles = allFiles.filter((file) => assetExtensions.has(path.extname(file).toLowerCase()));

const referencedAssets = new Set();
const missing = [];

for (const file of textFiles) {
  let content;
  try {
    content = await fs.readFile(file, "utf8");
  } catch {
    continue;
  }

  for (const reference of extractReferences(content)) {
    const resolved = resolveReference(file, reference);
    referencedAssets.add(path.normalize(resolved));
    try {
      await fs.access(resolved);
    } catch {
      missing.push({
        source: path.relative(root, file),
        reference
      });
    }
  }
}

const entryFiles = new Set([
  path.join(root, "index.html"),
  path.join(root, ".nojekyll")
].map(path.normalize));

const unused = assetFiles
  .map(path.normalize)
  .filter((file) => !referencedAssets.has(file) && !entryFiles.has(file))
  .map((file) => path.relative(root, file))
  .sort();

console.log("\n=== 缺失的本地资源 ===");
if (missing.length === 0) {
  console.log("未发现。\n");
} else {
  for (const item of missing) console.log(`- ${item.source} -> ${item.reference}`);
  console.log();
}

console.log("=== 疑似未引用资源（删除前人工确认） ===");
if (unused.length === 0) {
  console.log("未发现。\n");
} else {
  for (const file of unused) console.log(`- ${file}`);
  console.log();
}

if (missing.length > 0) process.exitCode = 1;
