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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0.0
 */
export class InlineResponse2002 {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002();
      if (data.hasOwnProperty('competencia'))
        obj.competencia = ApiClient.convertToType(data['competencia'], 'Number');
      if (data.hasOwnProperty('tipo'))
        obj.tipo = ApiClient.convertToType(data['tipo'], 'String');
      if (data.hasOwnProperty('nome_arq'))
        obj.nomeArq = ApiClient.convertToType(data['nome_arq'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} competencia
 */
InlineResponse2002.prototype.competencia = undefined;

/**
 * Allowed values for the <code>tipo</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2002.TipoEnum = {
  /**
   * value: "Nome do Usuário"
   * @const
   */
  nomeDoUsurio: "Nome do Usuário"
};
/**
 * @member {module:model/InlineResponse2002.TipoEnum} tipo
 */
InlineResponse2002.prototype.tipo = undefined;

/**
 * @member {String} nomeArq
 */
InlineResponse2002.prototype.nomeArq = undefined;

