"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCategoriesVideos = exports.CategoriesVideos = void 0;

/* eslint-disable no-unused-vars */
let CategoriesVideos;
exports.CategoriesVideos = CategoriesVideos;

(function (CategoriesVideos) {
  CategoriesVideos[CategoriesVideos["NaoInformado"] = 0] = "NaoInformado";
  CategoriesVideos[CategoriesVideos["VideoClipe"] = 1] = "VideoClipe";
  CategoriesVideos[CategoriesVideos["Show"] = 2] = "Show";
})(CategoriesVideos || (exports.CategoriesVideos = CategoriesVideos = {}));

const mapCategoriesVideos = [{
  id: CategoriesVideos.NaoInformado,
  categoria: 'Não informado'
}, {
  id: CategoriesVideos.VideoClipe,
  categoria: 'VideoClipe'
}, {
  id: CategoriesVideos.Show,
  categoria: 'Show'
}];
exports.mapCategoriesVideos = mapCategoriesVideos;