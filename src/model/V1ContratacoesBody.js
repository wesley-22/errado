/*
 * sistema-api
 * Api para o Sistema de Gerenciamento de Entregas
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The V1ContratacoesBody model module.
 * @module model/V1ContratacoesBody
 * @version 1.0.0
 */
export class V1ContratacoesBody {
  /**
   * Constructs a new <code>V1ContratacoesBody</code>.
   * @alias module:model/V1ContratacoesBody
   * @class
   * @param cdempresa {Number} 
   * @param nome {String} 
   * @param data {String} 
   * @param funcao {String} 
   * @param cboId {String} 
   * @param horaId {String} 
   * @param salario {String} 
   * @param tipoContrato {String} 
   * @param modNome {String} 
   * @param email {String} 
   * @param telefone {String} 
   * @param whatsapp {String} 
   * @param dtContratacao {String} 
   */
  constructor(cdempresa, nome, data, funcao, cboId, horaId, salario, tipoContrato, modNome, email, telefone, whatsapp, dtContratacao) {
    this.cdempresa = cdempresa;
    this.nome = nome;
    this.data = data;
    this.funcao = funcao;
    this.cboId = cboId;
    this.horaId = horaId;
    this.salario = salario;
    this.tipoContrato = tipoContrato;
    this.modNome = modNome;
    this.email = email;
    this.telefone = telefone;
    this.whatsapp = whatsapp;
    this.dtContratacao = dtContratacao;
  }

  /**
   * Constructs a <code>V1ContratacoesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1ContratacoesBody} obj Optional instance to populate.
   * @return {module:model/V1ContratacoesBody} The populated <code>V1ContratacoesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1ContratacoesBody();
      if (data.hasOwnProperty('cdempresa'))
        obj.cdempresa = ApiClient.convertToType(data['cdempresa'], 'Number');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('funcao'))
        obj.funcao = ApiClient.convertToType(data['funcao'], 'String');
      if (data.hasOwnProperty('cbo_id'))
        obj.cboId = ApiClient.convertToType(data['cbo_id'], 'String');
      if (data.hasOwnProperty('hora_id'))
        obj.horaId = ApiClient.convertToType(data['hora_id'], 'String');
      if (data.hasOwnProperty('salario'))
        obj.salario = ApiClient.convertToType(data['salario'], 'String');
      if (data.hasOwnProperty('tipo_contrato'))
        obj.tipoContrato = ApiClient.convertToType(data['tipo_contrato'], 'String');
      if (data.hasOwnProperty('mod_nome'))
        obj.modNome = ApiClient.convertToType(data['mod_nome'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('telefone'))
        obj.telefone = ApiClient.convertToType(data['telefone'], 'String');
      if (data.hasOwnProperty('whatsapp'))
        obj.whatsapp = ApiClient.convertToType(data['whatsapp'], 'String');
      if (data.hasOwnProperty('dt_contratacao'))
        obj.dtContratacao = ApiClient.convertToType(data['dt_contratacao'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} cdempresa
 */
V1ContratacoesBody.prototype.cdempresa = undefined;

/**
 * @member {String} nome
 */
V1ContratacoesBody.prototype.nome = undefined;

/**
 * @member {String} data
 */
V1ContratacoesBody.prototype.data = undefined;

/**
 * @member {String} funcao
 */
V1ContratacoesBody.prototype.funcao = undefined;

/**
 * @member {String} cboId
 */
V1ContratacoesBody.prototype.cboId = undefined;

/**
 * @member {String} horaId
 */
V1ContratacoesBody.prototype.horaId = undefined;

/**
 * @member {String} salario
 */
V1ContratacoesBody.prototype.salario = undefined;

/**
 * @member {String} tipoContrato
 */
V1ContratacoesBody.prototype.tipoContrato = undefined;

/**
 * @member {String} modNome
 */
V1ContratacoesBody.prototype.modNome = undefined;

/**
 * @member {String} email
 */
V1ContratacoesBody.prototype.email = undefined;

/**
 * @member {String} telefone
 */
V1ContratacoesBody.prototype.telefone = undefined;

/**
 * @member {String} whatsapp
 */
V1ContratacoesBody.prototype.whatsapp = undefined;

/**
 * @member {String} dtContratacao
 */
V1ContratacoesBody.prototype.dtContratacao = undefined;

