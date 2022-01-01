const mergeSortedArrays = (a, b) => {
    const _a = [...a],
      _b = [...b];
    return Array.from({ length: _a.length + _b.length }, () => {
      if (!_a.length) return _b.shift();
      else if (!_b.length) return _a.shift();
      else return _a[0] > _b[0] ? _b.shift() : _a.shift();
    });
  };


  module.exports = {mergeSortedArrays}