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
import {ApiClient} from "../ApiClient";
import {InlineResponse2001} from '../model/InlineResponse2001';
import {InlineResponse2005} from '../model/InlineResponse2005';

/**
* Mdulos service.
* @module api/MdulosApi
* @version 1.0.0
*/
export class MdulosApi {

    /**
    * Constructs a new MdulosApi. 
    * @alias module:api/MdulosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getModulos operation.
     * @callback moduleapi/MdulosApi~getModulosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retorna a lista de módulos disponiveis.
     * @param {Number} userId 
     * @param {module:api/MdulosApi~getModulosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getModulos(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getModulos");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'user_id': userId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/v1/modulos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the putModulo operation.
     * @callback moduleapi/MdulosApi~putModuloCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * altera um determinado módulo.
     * @param {Number} modId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.modNome 
     * @param {Number} opts.modNivel 
     * @param {module:api/MdulosApi~putModuloCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    putModulo(modId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'modId' is set
      if (modId === undefined || modId === null) {
        throw new Error("Missing the required parameter 'modId' when calling putModulo");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'mod_id': modId,'mod_nome': opts['modNome'],'mod_nivel': opts['modNivel']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/v1/modulos', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v1ModulosDelete operation.
     * @callback moduleapi/MdulosApi~v1ModulosDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * remove um determinado módulo.
     * @param {Number} modId 
     * @param {module:api/MdulosApi~v1ModulosDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v1ModulosDelete(modId, callback) {
      
      let postBody = null;
      // verify the required parameter 'modId' is set
      if (modId === undefined || modId === null) {
        throw new Error("Missing the required parameter 'modId' when calling v1ModulosDelete");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'mod_id': modId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/v1/modulos', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v1ModulosPost operation.
     * @callback moduleapi/MdulosApi~v1ModulosPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adiciona um novo módulo.
     * @param {String} modNome 
     * @param {Number} modNivel 
     * @param {module:api/MdulosApi~v1ModulosPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v1ModulosPost(modNome, modNivel, callback) {
      
      let postBody = null;
      // verify the required parameter 'modNome' is set
      if (modNome === undefined || modNome === null) {
        throw new Error("Missing the required parameter 'modNome' when calling v1ModulosPost");
      }
      // verify the required parameter 'modNivel' is set
      if (modNivel === undefined || modNivel === null) {
        throw new Error("Missing the required parameter 'modNivel' when calling v1ModulosPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'mod_nome': modNome,'mod_nivel': modNivel
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/v1/modulos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}