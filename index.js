/*  


*/

const Mf = (x) => Math.floor(x);

const int = (obb) => {
  let min = obb?.min || 0;
  let max = obb?.max || 1;
  let block = obb?.block || [];
  let out;

  do {
    out = Mf(Math.random() * (max - min) + min);
  } while (block.includes(out) && block.length < max - min);

  return !block.includes(out) ? out : null;
};

module.exports = { int };
