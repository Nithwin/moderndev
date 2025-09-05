const fs = require('fs');
const path = require('path');
const https = require('https');

const repoRoot = path.resolve(__dirname, '..', '..');
const membersPath = path.join(repoRoot, 'MEMBERS.md');
const readmePath = path.join(repoRoot, 'README.md');

function readMembers() {
  if (!fs.existsSync(membersPath)) return [];
  const text = fs.readFileSync(membersPath, 'utf8');
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const users = lines.map((l) => {
    // match markdown link to github profile
    // e.g. - [Name](https://github.com/username)
    const m = l.match(/\((https?:\/\/github.com\/([^\/\)]+)\/?)(?:\))?/i);
    if (m) return { url: m[1].replace(/\/$/, ''), login: m[2] };
    return null;
  }).filter(Boolean);
  return users;
}

function fetchJson(url, token) {
  const headers = { 'User-Agent': 'moderndev-bot' };
  if (token) headers['Authorization'] = `token ${token}`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(new Error(`Invalid JSON from ${url}: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

async function buildHtml(token) {
  const users = readMembers();
  const items = [];
  for (const u of users) {
    try {
      const api = `https://api.github.com/users/${u.login}`;
      const data = await fetchJson(api, token);
      const avatar = data && data.avatar_url ? data.avatar_url : `https://avatars.githubusercontent.com/${u.login}`;
      const html = `  <a href="${u.url}" target="_blank" rel="noopener noreferrer" title="${u.login}" style="display:inline-block; margin:4px; width:48px; height:48px; border-radius:50%; overflow:hidden;">
    <img src="${avatar}&s=96" width="48" height="48" style="display:block; object-fit:cover; width:48px; height:48px;" alt="${u.login}"/>
  </a>`;
      items.push(html);
    } catch (err) {
      console.error(`Failed to fetch ${u.login}: ${err.message}`);
      const html = `  <a href="${u.url}" target="_blank" rel="noopener noreferrer" title="${u.login}">${u.login}</a>`;
      items.push(html);
    }
  }

  if (items.length === 0) return '';
  return `<p align="center">\n${items.join('\n')}\n</p>`;
}

async function main() {
  const token = process.env.GITHUB_TOKEN || null;
  const snippet = await buildHtml(token);
  if (!snippet) {
    console.log('No contributors found in MEMBERS.md');
    return;
  }

  const readme = fs.readFileSync(readmePath, 'utf8');
  const start = '<!-- CONTRIBUTORS:START -->';
  const end = '<!-- CONTRIBUTORS:END -->';
  const idxStart = readme.indexOf(start);
  const idxEnd = readme.indexOf(end);
  if (idxStart === -1 || idxEnd === -1) {
    console.error('Markers not found in README.md');
    process.exit(1);
  }

  const before = readme.slice(0, idxStart + start.length);
  const after = readme.slice(idxEnd);
  const newReadme = `${before}\n${snippet}\n${after}`;

  if (newReadme !== readme) {
    fs.writeFileSync(readmePath, newReadme, 'utf8');
    console.log('README.md updated with contributors');
  } else {
    console.log('No changes required');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
