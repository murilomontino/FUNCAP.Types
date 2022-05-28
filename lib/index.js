"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TypeMusicAlbums: true,
  TypesProducts: true,
  mapTypesProducts: true,
  CategoriesVideos: true,
  mapCategoriesVideos: true,
  ExhibitionPhotosTypes: true,
  FinancialResources: true,
  mapFinancialResources: true,
  Category: true,
  mapCategory: true
};
Object.defineProperty(exports, "CategoriesVideos", {
  enumerable: true,
  get: function () {
    return _videos.CategoriesVideos;
  }
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function () {
    return _categoriesProducts.Category;
  }
});
Object.defineProperty(exports, "ExhibitionPhotosTypes", {
  enumerable: true,
  get: function () {
    return _exhibition.ExhibitionPhotosTypes;
  }
});
Object.defineProperty(exports, "FinancialResources", {
  enumerable: true,
  get: function () {
    return _financialResources.FinancialResources;
  }
});
Object.defineProperty(exports, "TypeMusicAlbums", {
  enumerable: true,
  get: function () {
    return _musics.TypeMusicAlbums;
  }
});
Object.defineProperty(exports, "TypesProducts", {
  enumerable: true,
  get: function () {
    return _documents.TypesProducts;
  }
});
Object.defineProperty(exports, "mapCategoriesVideos", {
  enumerable: true,
  get: function () {
    return _videos.mapCategoriesVideos;
  }
});
Object.defineProperty(exports, "mapCategory", {
  enumerable: true,
  get: function () {
    return _categoriesProducts.mapCategory;
  }
});
Object.defineProperty(exports, "mapFinancialResources", {
  enumerable: true,
  get: function () {
    return _financialResources.mapFinancialResources;
  }
});
Object.defineProperty(exports, "mapTypesProducts", {
  enumerable: true,
  get: function () {
    return _documents.mapTypesProducts;
  }
});

var _musics = require("./models/musics");

var _documents = require("./models/documents");

var _videos = require("./models/videos");

var _exhibition = require("./models/exhibition");

var _financialResources = require("./models/financialResources");

var _categoriesProducts = require("./models/categoriesProducts");

var _products = require("./products");

Object.keys(_products).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _products[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _products[key];
    }
  });
});