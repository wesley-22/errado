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
 * The V1CboBody model module.
 * @module model/V1CboBody
 * @version 1.0.0
 */
export class V1CboBody {
  /**
   * Constructs a new <code>V1CboBody</code>.
   * @alias module:model/V1CboBody
   * @class
   * @param ocupacao {String} 
   */
  constructor(ocupacao) {
    this.ocupacao = ocupacao;
  }

  /**
   * Constructs a <code>V1CboBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CboBody} obj Optional instance to populate.
   * @return {module:model/V1CboBody} The populated <code>V1CboBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1CboBody();
      if (data.hasOwnProperty('cbo'))
        obj.cbo = ApiClient.convertToType(data['cbo'], 'Number');
      if (data.hasOwnProperty('familia'))
        obj.familia = ApiClient.convertToType(data['familia'], 'Number');
      if (data.hasOwnProperty('grade_grupo'))
        obj.gradeGrupo = ApiClient.convertToType(data['grade_grupo'], 'String');
      if (data.hasOwnProperty('ocupacao'))
        obj.ocupacao = ApiClient.convertToType(data['ocupacao'], 'String');
      if (data.hasOwnProperty('perfil_ocupacional'))
        obj.perfilOcupacional = ApiClient.convertToType(data['perfil_ocupacional'], 'String');
      if (data.hasOwnProperty('sinonimo'))
        obj.sinonimo = ApiClient.convertToType(data['sinonimo'], 'String');
      if (data.hasOwnProperty('subgrupo_pricipal'))
        obj.subgrupoPricipal = ApiClient.convertToType(data['subgrupo_pricipal'], 'String');
      if (data.hasOwnProperty('subgrupo'))
        obj.subgrupo = ApiClient.convertToType(data['subgrupo'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} cbo
 */
V1CboBody.prototype.cbo = undefined;

/**
 * @member {Number} familia
 */
V1CboBody.prototype.familia = undefined;

/**
 * @member {String} gradeGrupo
 */
V1CboBody.prototype.gradeGrupo = undefined;

/**
 * @member {String} ocupacao
 */
V1CboBody.prototype.ocupacao = undefined;

/**
 * @member {String} perfilOcupacional
 */
V1CboBody.prototype.perfilOcupacional = undefined;

/**
 * @member {String} sinonimo
 */
V1CboBody.prototype.sinonimo = undefined;

/**
 * @member {String} subgrupoPricipal
 */
V1CboBody.prototype.subgrupoPricipal = undefined;

/**
 * @member {String} subgrupo
 */
V1CboBody.prototype.subgrupo = undefined;
