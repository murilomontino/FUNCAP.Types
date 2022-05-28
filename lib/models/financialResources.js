"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapFinancialResources = exports.FinancialResources = void 0;

/* eslint-disable no-unused-vars */
let FinancialResources;
exports.FinancialResources = FinancialResources;

(function (FinancialResources) {
  FinancialResources[FinancialResources["NaoInformado"] = 0] = "NaoInformado";
  FinancialResources[FinancialResources["LeiAldirBlanc"] = 1] = "LeiAldirBlanc";
  FinancialResources[FinancialResources["Funcart"] = 2] = "Funcart";
  FinancialResources[FinancialResources["RecursoDoArtista"] = 3] = "RecursoDoArtista";
  FinancialResources[FinancialResources["Federal"] = 4] = "Federal";
  FinancialResources[FinancialResources["Municipal"] = 5] = "Municipal";
})(FinancialResources || (exports.FinancialResources = FinancialResources = {}));

const mapFinancialResources = [{
  id: FinancialResources.NaoInformado,
  recursos: 'Não informado'
}, {
  id: FinancialResources.LeiAldirBlanc,
  recursos: 'Lei Aldir Blanc'
}, {
  id: FinancialResources.Funcart,
  recursos: 'Funcart'
}, {
  id: FinancialResources.RecursoDoArtista,
  recursos: 'Recurso do artista'
}, {
  id: FinancialResources.Federal,
  recursos: 'Federais'
}, {
  id: FinancialResources.Municipal,
  recursos: 'Municipais'
}];
exports.mapFinancialResources = mapFinancialResources;