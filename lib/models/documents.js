"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTypesProducts = exports.TypesProducts = void 0;
let TypesProducts;
exports.TypesProducts = TypesProducts;

(function (TypesProducts) {
  TypesProducts[TypesProducts["MP3"] = 1] = "MP3";
  TypesProducts[TypesProducts["URL"] = 2] = "URL";
  TypesProducts[TypesProducts["PDF"] = 3] = "PDF";
  TypesProducts[TypesProducts["CAPA"] = 4] = "CAPA";
  TypesProducts[TypesProducts["PHOTOS"] = 5] = "PHOTOS";
  TypesProducts[TypesProducts["MP4"] = 6] = "MP4";
  TypesProducts[TypesProducts["LINK"] = 7] = "LINK";
  TypesProducts[TypesProducts["NAO_INFORMADO"] = 99] = "NAO_INFORMADO";
})(TypesProducts || (exports.TypesProducts = TypesProducts = {}));

const mapTypesProducts = [{
  id: TypesProducts.MP3,
  tipo: 'MP3'
}, {
  id: TypesProducts.URL,
  tipo: 'URL'
}, {
  id: TypesProducts.PDF,
  tipo: 'PDF'
}, {
  id: TypesProducts.CAPA,
  tipo: 'CAPA'
}, {
  id: TypesProducts.PHOTOS,
  tipo: 'PHOTOS'
}, {
  id: TypesProducts.MP4,
  tipo: 'MP4'
}, {
  id: TypesProducts.LINK,
  tipo: 'LINK'
}, {
  id: TypesProducts.NAO_INFORMADO,
  tipo: 'NAO_INFORMADO'
}];
exports.mapTypesProducts = mapTypesProducts;