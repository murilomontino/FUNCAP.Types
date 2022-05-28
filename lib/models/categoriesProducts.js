"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCategory = exports.Category = void 0;

/* eslint-disable no-unused-vars */
let Category;
exports.Category = Category;

(function (Category) {
  Category[Category["Music"] = 1] = "Music";
  Category[Category["Literature"] = 2] = "Literature";
  Category[Category["Video"] = 3] = "Video";
  Category[Category["Event"] = 4] = "Event";
  Category[Category["Exhibition"] = 5] = "Exhibition";
})(Category || (exports.Category = Category = {}));

const mapCategory = [{
  id: Category.Music,
  categoria: 'Música'
}, {
  id: Category.Literature,
  categoria: 'Literatura'
}, {
  id: Category.Video,
  categoria: 'Vídeo'
}, {
  id: Category.Event,
  categoria: 'Evento'
}, {
  id: Category.Exhibition,
  categoria: 'Exposição'
}];
exports.mapCategory = mapCategory;