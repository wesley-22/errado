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
import {InlineResponse2004} from '../model/InlineResponse2004';

/**
* Frias service.
* @module api/FriasApi
* @version 1.0.0
*/
export class FriasApi {

    /**
    * Constructs a new FriasApi. 
    * @alias module:api/FriasApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getFerias operation.
     * @callback moduleapi/FriasApi~getFeriasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retorna o status do ultimo periodo aquisitivo de férias do funcionário.
     * @param {String} funcId 
     * @param {module:api/FriasApi~getFeriasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFerias(funcId, callback) {
      
      let postBody = null;
      // verify the required parameter 'funcId' is set
      if (funcId === undefined || funcId === null) {
        throw new Error("Missing the required parameter 'funcId' when calling getFerias");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'funcId': funcId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/v1/ferias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}