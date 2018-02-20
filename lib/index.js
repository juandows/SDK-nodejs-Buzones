/**
  * @module APIBuzonesLib
  *
  * Buzones para envios de mensajes en Redyser
  */

'use strict';

const Configuration = require('./configuration');
const MessagesController = require('./Controllers/MessagesController');
const GruposController = require('./Controllers/GruposController');
const BoxesController = require('./Controllers/BoxesController');
const ApplicationsController = require('./Controllers/ApplicationsController');
const CrearUnMensajeAlGrupoPorNombreRequest =
  require('./Models/CrearUnMensajeAlGrupoPorNombreRequest');
const CrearUnMensajeAlGrupoRequest = require('./Models/CrearUnMensajeAlGrupoRequest');
const ModificarUnGrupoPorNombreRequest = require('./Models/ModificarUnGrupoPorNombreRequest');
const CrearUnMensajeAlGrupoPorNombreResponse =
  require('./Models/CrearUnMensajeAlGrupoPorNombreResponse');
const ModificarUnGrupoRequest = require('./Models/ModificarUnGrupoRequest');
const CrearUnMensajeAlGrupoResponse = require('./Models/CrearUnMensajeAlGrupoResponse');
const ModificarUnGrupoPorNombreResponse = require('./Models/ModificarUnGrupoPorNombreResponse');
const ModificarUnGrupoResponse = require('./Models/ModificarUnGrupoResponse');
const CrearUnGrupoRequest = require('./Models/CrearUnGrupoRequest');
const LeerGruposDeUnaAplicacionResponse = require('./Models/LeerGruposDeUnaAplicacionResponse');
const CrearUnGrupoResponse = require('./Models/CrearUnGrupoResponse');
const LeerGruposResponse = require('./Models/LeerGruposResponse');
const LeerUnGrupoPorNombreResponse = require('./Models/LeerUnGrupoPorNombreResponse');
const LeerUnGrupoResponse = require('./Models/LeerUnGrupoResponse');
const CrearUnMensajeRequest = require('./Models/CrearUnMensajeRequest');
const ModificarUnMensajeLeidoBorradoResponse =
  require('./Models/ModificarUnMensajeLeidoBorradoResponse');
const ModificarUnMensajeLeidoBorradoRequest =
  require('./Models/ModificarUnMensajeLeidoBorradoRequest');
const LeerMensajesResponse = require('./Models/LeerMensajesResponse');
const Data5 = require('./Models/Data5');
const CrearUnMensajeResponse = require('./Models/CrearUnMensajeResponse');
const Data14 = require('./Models/Data14');
const LeerUnMensajeResponse = require('./Models/LeerUnMensajeResponse');
const Data6 = require('./Models/Data6');
const CrearUnMensajeAAplicaciNResponse = require('./Models/CrearUnMensajeAAplicaciNResponse');
const CrearUnMensajeAAplicaciNRequest = require('./Models/CrearUnMensajeAAplicaciNRequest');
const Data = require('./Models/Data');
const Datum = require('./Models/Datum');
const LeerAplicacionesResponse = require('./Models/LeerAplicacionesResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of APIBuzonesLib
    Configuration,
    // controllers of APIBuzonesLib
    MessagesController,
    GruposController,
    BoxesController,
    ApplicationsController,
    // models of APIBuzonesLib
    CrearUnMensajeAlGrupoPorNombreRequest,
    CrearUnMensajeAlGrupoRequest,
    ModificarUnGrupoPorNombreRequest,
    CrearUnMensajeAlGrupoPorNombreResponse,
    ModificarUnGrupoRequest,
    CrearUnMensajeAlGrupoResponse,
    ModificarUnGrupoPorNombreResponse,
    ModificarUnGrupoResponse,
    CrearUnGrupoRequest,
    LeerGruposDeUnaAplicacionResponse,
    CrearUnGrupoResponse,
    LeerGruposResponse,
    LeerUnGrupoPorNombreResponse,
    LeerUnGrupoResponse,
    CrearUnMensajeRequest,
    ModificarUnMensajeLeidoBorradoResponse,
    ModificarUnMensajeLeidoBorradoRequest,
    LeerMensajesResponse,
    Data5,
    CrearUnMensajeResponse,
    Data14,
    LeerUnMensajeResponse,
    Data6,
    CrearUnMensajeAAplicaciNResponse,
    CrearUnMensajeAAplicaciNRequest,
    Data,
    Datum,
    LeerAplicacionesResponse,
    // exceptions of APIBuzonesLib
    APIException,
};

module.exports = initializer;
