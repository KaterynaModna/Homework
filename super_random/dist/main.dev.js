"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cytaty = [{
  cytata: "\"\u041D\u0435 \u043F\u043E\u043D\u0442\u0443\u0439\u0442\u0435\u0441\u044F \u043F\u0430\u0446\u0430\u043D\u0438, \u0434\u0456\u0432\u0447\u0430\u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0442\u044C \u0443 \u0432\u0430\u0441 \u043F\u0440\u043E\u0441\u0442\u0430\u0442\u0443\""
}, {
  cytata: "\"\u041A\u043E\u0433\u0434\u0430 \u0442\u0438 \u0442\u0454\u0440\u044F\u0435\u0448 \u043B\u044E\u0431\u043E\u0432\u044C \u0432\u0441\u0454\u0439 \u0436\u0438\u0437\u043D\u0456, \u0432\u0436\u0435 \u043D\u0454 \u0432\u0430\u0436\u043D\u043E 13 \u0442\u043E\u0431\u0456, 14, 39 \u0430\u0431\u043E 80. \u0422\u043E\u0431\u0456 \u0431\u0443\u0434\u0435 \u0431\u043E\u043B\u044C\u043D\u043E \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u0436\u0438\u0437\u043D\u0456\""
}, {
  cytata: "\"\u041D\u0454 \u043C\u0438 \u0442\u0430\u043A\u0456\u0454, \u0436\u0438\u0437\u043D\u044C \u0442\u0430\u043A\u0430\u044F\""
}, {
  cytata: "\"\u0412 \u0436\u0438\u0437\u043D\u0456 \u043D\u0430\u0434\u043E \u0431\u0438\u0442\u044C \u0443\u043F\u0435\u0440\u0442\u0438\u043C, \u043D\u043E \u043D\u0454 \u0431\u0430\u0440\u0430\u043D\u043E\u043C\""
}, {
  cytata: "\"\u041D\u0454 \u0432\u0430\u0436\u043D\u043E \u0445\u0442\u043E \u043D\u0430\u0432\u043F\u0440\u043E\u0442\u0438, \u0432\u0430\u0436\u043D\u043E \u0445\u0442\u043E \u0440\u044F\u0434\u043E\u043C\""
}, {
  cytata: "\"\u0421\u0435\u043A\u0440\u0435\u0442 \u043C\u043E\u0457\u0445 \u0449\u0430\u0441\u043B\u0438\u0432\u0438\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0456\u0439 \u0432 \u0442\u043E\u043C\u0443, \u0448\u043E \u0457\u0445 \u043D\u0435\u043C\u0430\""
}, {
  cytata: "\"\u0412\u0434\u044F\u0433\u043D\u0438 \u043F\u043E\u0441\u043C\u0456\u0448\u043A\u0443, \u0431\u0435\u0439\u0431\u0430, \u0456 \u0432\u043F\u0435\u0440\u0435\u0434.\""
}, {
  cytata: "\"\u0413\u0440\u043E\u0448\u0456 \u0442\u0435\u0436 \u0441\u0442\u0440\u0430\u0436\u0434\u0430\u044E\u0442\u044C, \u0432\u0456\u0434 \u0442\u043E\u0433\u043E, \u0449\u043E \u0443 \u043D\u0438\u0445 \u043D\u0435\u043C\u0430 \u043C\u0435\u043D\u0435\""
}, {
  cytata: "\"\u042F \u0440\u0430\u043D\u0456\u043C\u0430 \u044F\u043A \u0440\u043E\u0437\u0430, \u043D\u043E \u0442\u0432\u043E\u044F \u043A\u0440\u043E\u0432 \u043C\u043E\u0436\u0435 \u043F\u0440\u043E\u043B\u0438\u0442\u0438\u0441\u044C \u0456\u0437-\u0437\u0430 \u043C\u043E\u0457\u0445 \u0448\u0438\u043F\u0456\u0432\""
}, {
  cytata: "\"\u042F\u043A\u0449\u043E \u0411\u043E\u0433 \u043C\u0435\u043D\u0456 \u0421\u0443\u0434\u0434\u044F, \u0442\u043E\u0434\u0456 \u0434\u0438\u044F\u0432\u043E\u043B \u2013 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\""
}, {
  cytata: "\"\u0422\u0432\u0456\u0439 \u043F\u043E\u043D\u0442 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D, \u043A\u043E\u043B\u0438 \u0442\u0438 \u0441\u0430\u043C \u0441\u0435\u0431\u0435 \u0437\u0440\u043E\u0431\u0438\u0432\""
}, {
  cytata: "\"\u042F\u043A\u0449\u043E \u0432\u0430\u0441 \u043D\u0435 \u0437\u0430\u0441\u043B\u0443\u0436\u0435\u043D\u043E \u043E\u0431\u0456\u0434\u0454\u043B\u0438, \u043F\u043E\u0432\u0435\u0440\u043D\u0438\u0442\u044C\u0441\u044F \u0438 \u0437\u0430\u0441\u043B\u0443\u0436\u0456\u0442\u044C\""
}, {
  cytata: "\"\u041A\u043E\u043B\u0438 \u0441\u0443\u0434\u044C\u0431\u0430 \u0437\u0432\u0435\u043B\u0430 \u0432\u0430\u0441 \u0437\u0456 \u043C\u043D\u043E\u044E, \u0442\u043E \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0432\u0430\u0448 \u0447\u0430\u0441 \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430 \u0441\u0432\u043E\u0457 \u0433\u0440\u0456\u0445\u0438\""
}, {
  cytata: "\"\u0422\u0438 \u0437\u0456 \u043C\u043D\u043E\u044E \u043D\u0435 \u0441\u043F\u0440\u0430\u0432\u0438\u0448\u0441\u044F, \u043D\u0430\u0432\u0456\u0442\u044C \u044F\u043A\u0449\u043E \u0443 \u0442\u0435\u0431\u0435 \u0454 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F\""
}, {
  cytata: "\"\u042F \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0430, \u0449\u043E \u044F \u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0430 \u0437 \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0443, \u044F\u043A\u0443 \u0449\u0435 \u043D\u0435 \u0432\u0441\u0442\u0438\u0433\u043B\u0438 \u0432\u0438\u0433\u0430\u0434\u0430\u0442\u0438\""
}, {
  cytata: "\"\u0429\u0430\u0441\u043B\u0438\u0432\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u0430 \u0431\u0443\u0442\u044C \u0432\u0436\u0435 \u0437\u0430\u0440\u0430\u0437, \u0431\u043E \u0446\u0435 \u0456 \u0454 \u0436\u0438\u0442\u0442\u044F!\""
}, {
  cytata: "\"\u041E\u0442\u0432\u0454\u0447\u0430\u044E \u0440\u0454\u0437\u043A\u043E! \u041F\u043E\u0441\u0438\u043B\u0430\u044E \u0434\u0454\u0440\u0437\u043A\u043E! \u041A\u043E\u043C\u0443 \u043D\u0435 \u043D\u0440\u0430\u0432\u0456\u0442\u0441\u044F, \u0442\u043E\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u0454\u043D!\""
}, {
  cytata: "\"\u041C\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u2014 \u0446\u0435 \u0442\u044C\u043C\u0430. \u0414\u043B\u044F \u043C\u0435\u043D\u0435 \u043F\u043E\u0433\u0430\u0441 \u0441\u0432\u0454\u0442. \u041F\u0440\u043E\u0441\u0442\u043E \u044F \u043B\u044E\u0431\u043B\u044E, \u0430 \u0432\u0456\u043D \u043C\u0435\u043D\u044F \xAB\u043D\u0454\u0442\xBB.\""
}, {
  cytata: "\"\u042F\u043A\u0448\u043E \u0448\u043E \u2013 \u0432\u0430\u0448\u0435 \u043C\u043D\u0435\u043D\u0456\u0454 \u0434\u0430\u0432\u043D\u043E \u0432\u0436\u0435 \u043D\u0430 \u0441\u043C\u0456\u0442\u0442\u0454\u0437\u0432\u0430\u043B\u0438\u0449\u0456\""
}, {
  cytata: "\"\u0421\u0442\u0430\u0442\u0443\u0441 \u2013 \u0446\u0435 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u0443\u0448\u0456 \u043B\u044E\u0434\u0438\u043D\u0438, \u0430 \u043D\u0435 \u0434\u0435\u0448\u0435\u0432\u0438\u0439 \u043F\u0430\u0444\u043E\u0441.\""
}, {
  cytata: "\"\u0422\u0430\u043A \u0431\u0443\u0432\u0430\u0454 \u043C\u0438 \u043B\u044E\u0431\u0438\u043C\u043E \u0442\u0438\u0445, \u0445\u0442\u043E \u043D\u0430\u0441 \u043D\u0435 \u043B\u044E\u0431\u0435, \u0410 \u043B\u044E\u0434\u0438 \u0438\u043D\u043A\u043E\u043B\u0438 \u0431\u0443\u0432\u0430\u044E\u0442\u044C \u0433\u0456\u0440\u0448\u0435 \u0441\u043E\u0431\u0430\u043A\u2026\""
}, {
  cytata: "\"\u042F\u043A\u0449\u043E \u0431\u0443\u0434\u0435\u0448 \u043C\u043D\u043E\u0439 \u0437\u043B\u043E\u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u0437\u043B\u043E\u0432\u0438\u0448 \u043F\u0435\u0440\u0435\u0434\u043E\u0437!\""
}, {
  cytata: "\"\u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456, \u0436\u0438\u0442\u0442\u044F \u043F\u0440\u043E\u0441\u0442\u0435, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0430\u043F\u043E\u043B\u0435\u0433\u043B\u0438\u0432\u043E \u0439\u043E\u0433\u043E \u0443\u0441\u043A\u043B\u0430\u0434\u043D\u044E\u0454\u043C. \u041A\u043E\u043D\u0444\u0443\u0446\u0438\u0439\""
}, {
  cytata: "\"\u0425\u0442\u043E \u043C\u0430\u043B\u043E \u0445\u043E\u0447\u0435, \u0442\u043E\u0439 \u0434\u0435\u0448\u0435\u0432\u043E \u0441\u0442\u043E\u0457\u0442\u044C.\""
}, {
  cytata: "\"\u0412\u0435\u0434\u0438 \u043C\u0435\u043D\u0435, \u0441\u043B\u0456\u0434\u0443\u0439 \u0437\u0430 \u043C\u043D\u043E\u044E \u0430\u0431\u043E \u0439\u0434\u0438 \u0437 \u043C\u043E\u0433\u043E \u0448\u043B\u044F\u0445\u0443\""
}, {
  cytata: "\"\u041D\u0435 \u0432\u0447\u0430\u0441\u043D\u043E \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u0456\u043A\u043E\u0442\u0430, \u043C\u0435\u043D\u0441\u0442\u0440\u0443\u0430\u0446\u0456\u044F, \u0441\u043C\u0435\u0440\u0442\u044C \u0447\u0438 \u0441\u0443\u0441\u0456\u0434\u043A\u0430. \u0410\u043B\u0435 \u043D\u0435 \u043B\u044E\u0431\u043E\u0432\""
}, {
  cytata: "\"\u0412 \u0441\u0432\u0456\u0442\u0456 \u0442\u0430\u043A \u0431\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043E, \u0449\u043E \u0456\u043D\u043A\u043E\u043B\u0438 \u044F \u0434\u0443\u043C\u0430\u044E, \u0449\u043E \u044F \u043D\u0435 \u0437\u0432\u0456\u0434\u0441\u0438. \u0414\u0436\u043E\u043D\u043D\u0456 \u0414\u0435\u043F\u043F\""
}, {
  cytata: "\"\u0422\u0443\u0442 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u043B\u0430 \u0431\u0443\u0442\u0438 \u043A\u043B\u0430\u0441\u043D\u0430 \u0446\u0438\u0442\u0430\u0442\u0430, \u0430\u043B\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043C\u0435\u043D\u0456 \u043B\u0456\u043D\u044C\""
}, {
  cytata: "\"\u041F\u0440\u043E\u0434\u0430\u043C \u0434\u0443\u0448\u0443. \u0414\u043E\u0440\u043E\u0433\u043E.\""
}, {
  cytata: "\"\u041B\u044E\u0434\u0438, \u043A\u0430\u043A \u0441\u0432\u0456\u0447\u043A\u0438 \u2014 \u043E\u0434\u043D\u0456 \u0433\u043E\u0440\u044F\u0442\u044C, \u0456\u043D\u0448\u0456 \u2014 \u0440\u0435\u043A\u0442\u0430\u043B\u044C\u043D\u0456.\""
}, {
  cytata: "\"\u0412\u0441\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u2026 \u0406 \u0446\u0435 \u0442\u043E\u0436\u0435\""
}, {
  cytata: "\"\u0412\u0434\u044F\u0433\u0430\u044E \u0440\u043E\u0436\u0435\u0432\u0456 \u043E\u043A\u0443\u043B\u044F\u0440\u0438, \u0449\u043E\u0431 \u043F\u0440\u0438\u043A\u0440\u0438\u0441\u0438\u0442\u044C \u0442\u0432\u0456\u0439 \u0441\u0456\u0440\u0438\u0439 \u0441\u0432\u0456\u0442 \u0445\u043E\u0447\u0430 \u0431 \u0432 \u0441\u0432\u043E\u0457\u0445 \u043E\u0447\u0430\u0445\""
}, {
  cytata: "\"\u041D\u0454 \u0432\u0430\u0436\u043D\u043E \u0448\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u043A\u0440\u0438\u0441\u0438, \u0449\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0443 \u043A\u0456\u0441\u0438!\""
}];
var btn = document.querySelector("#button");
var cytata = document.querySelector(".text_quote");
btn.addEventListener("click", function () {
  var random = Math.floor(Math.random() * cytaty.length);
  cytata.innerHTML = cytaty[random].cytata;
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

  function shoot() {
    confetti(_objectSpread({}, defaults, {
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    }));
    confetti(_objectSpread({}, defaults, {
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    }));
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
});