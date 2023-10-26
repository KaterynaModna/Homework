"use strict";

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest;

function moveHtml() {
  return src('app/index.html').pipe(dest('build/'));
}

exports.moveHtml = moveHtml;