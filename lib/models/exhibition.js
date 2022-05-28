"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExhibitionPhotosTypes = void 0;

/* eslint-disable no-unused-vars */
// Fotos sobre a exposição
let ExhibitionPhotosTypes; // Obras de Exposição

exports.ExhibitionPhotosTypes = ExhibitionPhotosTypes;

(function (ExhibitionPhotosTypes) {
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["foto_de_montagem"] = 1] = "foto_de_montagem";
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["foto_de_artista"] = 2] = "foto_de_artista";
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["foto_de_local"] = 3] = "foto_de_local";
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["foto_de_evento"] = 4] = "foto_de_evento";
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["foto_de_abertura"] = 5] = "foto_de_abertura";
  ExhibitionPhotosTypes[ExhibitionPhotosTypes["outros"] = 6] = "outros";
})(ExhibitionPhotosTypes || (exports.ExhibitionPhotosTypes = ExhibitionPhotosTypes = {}));