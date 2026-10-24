import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function createCrcTable() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  return table;
}

const crcTable = createCrcTable();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function generateIconPng(size) {
  // Create RGBA image buffer
  const scanlineLength = 1 + size * 4;
  const rawData = Buffer.alloc(scanlineLength * size);

  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.44;

  for (let y = 0; y < size; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter byte: None

    for (let x = 0; x < size; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= r) {
        // Carapace base: dark navy / black (#0A0D12)
        let red = 10;
        let green = 13;
        let blue = 18;
        let alpha = 255;

        // Border ring: Claw Cyan (#06B6D4)
        if (dist >= r - Math.max(1, size * 0.08)) {
          red = 6;
          green = 182;
          blue = 212;
        } else {
          // Center core: Lobster Red carapace shield (#E4048A)
          const coreDist = Math.sqrt(dx * dx * 1.3 + dy * dy * 0.9);
          if (coreDist <= r * 0.6) {
            red = 228;
            green = 4;
            blue = 138;
          } else if (coreDist <= r * 0.72) {
            // Inner cyan ridge
            red = 6;
            green = 182;
            blue = 212;
          }
        }

        rawData[pxOffset] = red;
        rawData[pxOffset + 1] = green;
        rawData[pxOffset + 2] = blue;
        rawData[pxOffset + 3] = alpha;
      } else {
        // Transparent outside circle
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  // PNG Header
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR Chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // 8 bits per channel
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // deflate
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // no interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatData = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const sizes = [16, 48, 128];
const dirs = ['public/icons', 'assets/icons'];

for (const dir of dirs) {
  fs.mkdirSync(dir, { recursive: true });
  for (const s of sizes) {
    const png = generateIconPng(s);
    const target = path.join(dir, `icon-${s}.png`);
    fs.writeFileSync(target, png);
    console.log(`[+] Wrote ${target} (${png.length} bytes)`);
  }
}
