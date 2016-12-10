'use strict';

function cutHex(h) {
  return (h.charAt(0) === "#")
    ? h.substring(1, 7)
    : h;
}

function hexToR(h) {
  return parseInt((cutHex(h)).substring(0, 2),16);
}

function hexToG(h) {
  return parseInt((cutHex(h)).substring(2, 4),16);
}

function hexToB(h) {
  return parseInt((cutHex(h)).substring(4, 6),16);
}

exports.get = function (color) {
    if (color !== 'undefined') {
      var r = hexToR(color);
      var g = hexToG(color);
      var b = hexToB(color);
    } else {
      return new Error('color must be in #000000 or 000000 format');
    }

  return ((r * 0.299 + g * 0.587 + b * 0.114) > 186)
    ? '#000000'
    : '#ffffff';
}

