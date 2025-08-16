// findCaseConflict.js
const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, cb);
    else cb(full);
  });
}

const seen = {};
walk('./src', file => {
  if (file.match(/\.jsx?$/)) {
    const base = path.basename(file).toLowerCase();
    if (seen[base]) {
      console.log('⚠️ Conflicto de archivos similares:', seen[base], '<->', file);
    } else {
      seen[base] = file;
    }
  }
});
