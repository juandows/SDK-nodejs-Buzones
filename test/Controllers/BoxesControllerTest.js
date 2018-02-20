/*
 * APIBuzonesLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.BoxesController;
const CrearUnMensajeAlGrupoPorNombreRequest = testerlib.CrearUnMensajeAlGrupoPorNombreRequest;
const CrearUnMensajeAlGrupoRequest = testerlib.CrearUnMensajeAlGrupoRequest;
const ModificarUnGrupoPorNombreRequest = testerlib.ModificarUnGrupoPorNombreRequest;
const CrearUnMensajeAlGrupoPorNombreResponse = testerlib.CrearUnMensajeAlGrupoPorNombreResponse;
const ModificarUnGrupoRequest = testerlib.ModificarUnGrupoRequest;
const CrearUnMensajeAlGrupoResponse = testerlib.CrearUnMensajeAlGrupoResponse;
const ModificarUnGrupoPorNombreResponse = testerlib.ModificarUnGrupoPorNombreResponse;
const ModificarUnGrupoResponse = testerlib.ModificarUnGrupoResponse;
const CrearUnGrupoRequest = testerlib.CrearUnGrupoRequest;
const LeerGruposDeUnaAplicacionResponse = testerlib.LeerGruposDeUnaAplicacionResponse;
const CrearUnGrupoResponse = testerlib.CrearUnGrupoResponse;
const LeerGruposResponse = testerlib.LeerGruposResponse;
const LeerUnGrupoPorNombreResponse = testerlib.LeerUnGrupoPorNombreResponse;
const LeerUnGrupoResponse = testerlib.LeerUnGrupoResponse;
const CrearUnMensajeRequest = testerlib.CrearUnMensajeRequest;
const ModificarUnMensajeLeidoBorradoResponse = testerlib.ModificarUnMensajeLeidoBorradoResponse;
const ModificarUnMensajeLeidoBorradoRequest = testerlib.ModificarUnMensajeLeidoBorradoRequest;
const LeerMensajesResponse = testerlib.LeerMensajesResponse;
const Data5 = testerlib.Data5;
const CrearUnMensajeResponse = testerlib.CrearUnMensajeResponse;
const Data14 = testerlib.Data14;
const LeerUnMensajeResponse = testerlib.LeerUnMensajeResponse;
const Data6 = testerlib.Data6;
const CrearUnMensajeAAplicaciNResponse = testerlib.CrearUnMensajeAAplicaciNResponse;
const CrearUnMensajeAAplicaciNRequest = testerlib.CrearUnMensajeAAplicaciNRequest;
const Data = testerlib.Data;
const Datum = testerlib.Datum;
const LeerAplicacionesResponse = testerlib.LeerAplicacionesResponse;


describe("BoxesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Devuelve todos los buzones que tienen mensajes de la aplicación (iris2).
     */
    it("should testLeerBuzones1 response", function testLeerBuzones1Test(done) {
        // parameters for the API call
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTc5Mzk5NDd9.-pLDemUYmYPpjG5CZ7VI7UUBcC8mC_KAbEyNpzHsTMw';

        controller.getApplicationsIris2BoxesGet(token, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

});
