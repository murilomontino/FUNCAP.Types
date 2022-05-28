"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _albums = require("./getters/albums");

Object.keys(_albums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _albums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _albums[key];
    }
  });
});

var _books = require("./getters/books");

Object.keys(_books).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _books[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _books[key];
    }
  });
});

var _album = require("./setters/album");

Object.keys(_album).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _album[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _album[key];
    }
  });
});

var _books2 = require("./setters/books");

Object.keys(_books2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _books2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _books2[key];
    }
  });
});

var _products = require("./setters/products");

Object.keys(_products).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _products[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _products[key];
    }
  });
});

var _tracks = require("./setters/tracks");

Object.keys(_tracks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tracks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tracks[key];
    }
  });
});

var _exhibition = require("./setters/exhibition");

Object.keys(_exhibition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _exhibition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exhibition[key];
    }
  });
});

var _documents = require("./getters/documents");

Object.keys(_documents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _documents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _documents[key];
    }
  });
});

var _exhibitions = require("./getters/exhibitions");

Object.keys(_exhibitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _exhibitions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exhibitions[key];
    }
  });
});

var _videos = require("./getters/videos");

Object.keys(_videos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _videos[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _videos[key];
    }
  });
});

var _videos2 = require("./setters/videos");

Object.keys(_videos2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _videos2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _videos2[key];
    }
  });
});

var _youtube = require("./getters/youtube");

Object.keys(_youtube).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _youtube[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _youtube[key];
    }
  });
});

var _youtube2 = require("./setters/youtube");

Object.keys(_youtube2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _youtube2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _youtube2[key];
    }
  });
});

var _documents2 = require("./setters/documents");

Object.keys(_documents2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _documents2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _documents2[key];
    }
  });
});