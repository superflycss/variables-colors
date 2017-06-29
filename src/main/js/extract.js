var fs = require('fs');
var path = require('path');

var location = path.join(__dirname, '../gpl/md.gpl');
var lr = require('readline').createInterface({
  input: require('fs').createReadStream(location)
});

var loop = '';
var loopQuoted = '';

var toHex = require("hex-rgb-converter").toHex;

lr.on('line', function (line) {
  let arr = line.trim().split(/\s+/);
  const [r,g,b,n1,n2] = arr;
  const variable = `  --color-md-${n1}-${n2}: #${toHex(r, g, b)};\n`;

  loop = `${n1}-${n2}, `;
  loopQuoted += `'${n1}-${n2}', `;

  console.log(variable );
// console.log(loop);
});
