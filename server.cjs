const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const BASE_DIR = path.join(__dirname, 'v2');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif',
  '.webp': 'image/webp'
};

// Load static data once
const PRICES = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'api', 'prices.html'), 'utf8'));
const TOP_MOVERS = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'api', 'top-movers.json'), 'utf8'));

// Mock chart data generator
function generateChartData(coinId, days) {
  const prices = [];
  const basePrice = PRICES[coinId]?.usd || 100;
  const points = days === 1 ? 24 : days === 7 ? 7 : days === 30 ? 30 : 365;
  const now = Date.now();
  for (let i = 0; i < points; i++) {
    const time = now - (points - i) * (days * 24 * 60 * 60 * 1000 / points);
    const variation = (Math.random() - 0.5) * 0.02;
    const price = basePrice * (1 + variation * (i / points));
    prices.push([time, price]);
  }
  return { prices };
}

// User data store (in-memory for now)
const userDataStore = new Map();

function serveStatic(reqPath, res) {
  const filePath = path.join(BASE_DIR, reqPath);
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end('Not Found'); return;
  }
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      serveFile(indexPath, res);
      return;
    }
    res.writeHead(404); res.end('Not Found'); return;
  }
  serveFile(filePath, res);
}

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Device-Id, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200); res.end(); return;
  }

  // API routes
  if (pathname === '/api/verify-token') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ valid: true, screen: 'dashboard' }));
    return;
  }

  if (pathname === '/api/price') {
    const ids = parsed.query.ids;
    const vs = parsed.query.vs_currencies || 'usd';
    if (ids) {
      const result = {};
      ids.split(',').forEach(id => {
        const key = Object.keys(PRICES).find(k => k === id);
        if (key) {
          result[key] = { [vs]: PRICES[key].usd, [`${vs}_24h_change`]: PRICES[key].usd_24h_change };
        }
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(PRICES));
    return;
  }

  if (pathname === '/api/chart') {
    const id = parsed.query.id || 'bitcoin';
    const days = parseInt(parsed.query.days) || 1;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(generateChartData(id, days)));
    return;
  }

  if (pathname === '/api/top-movers') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(TOP_MOVERS));
    return;
  }

  if (pathname === '/api/user-data/load') {
    const deviceId = req.headers['x-device-id'] || 'anonymous';
    const data = userDataStore.get(deviceId) || {};
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data }));
    return;
  }

  if (pathname === '/api/user-data/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const deviceId = req.headers['x-device-id'] || 'anonymous';
        userDataStore.set(deviceId, parsed);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch {
        res.writeHead(400); res.end('Bad Request');
      }
    });
    return;
  }

  if (pathname === '/api/wallet/register') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (pathname === '/api/wallet/incoming') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ transfers: [] }));
    return;
  }

  if (pathname === '/api/heartbeat') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  // Static files
  let reqPath = pathname;
  if (reqPath === '/' || reqPath === '/index.html') {
    reqPath = '/index.html';
  }

  // If requesting v2/ directly, serve from v2 folder
  if (reqPath.startsWith('/v2/')) {
    reqPath = reqPath.substring(3); // strip /v2
  } else if (reqPath.startsWith('/api/')) {
    // already handled above
  } else {
    // Serve from root for simulator
    const rootPath = path.join(__dirname, reqPath);
    if (fs.existsSync(rootPath)) {
      serveFile(rootPath, res);
      return;
    }
  }

  serveStatic(reqPath, res);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
