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
import {InlineResponse401} from '../model/InlineResponse401';

/**
* Login service.
* @module api/LoginApi
* @version 1.0.0
*/
export class LoginApi {

    /**
    * Constructs a new LoginApi. 
    * @alias module:api/LoginApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the v1LoginPost operation.
     * @callback moduleapi/LoginApi~v1LoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * faz o envio dos dados de login
     * @param {String} login 
     * @param {String} senha 
     * @param {module:api/LoginApi~v1LoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v1LoginPost(login, senha, callback) {
      
      let postBody = null;
      // verify the required parameter 'login' is set
      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling v1LoginPost");
      }
      // verify the required parameter 'senha' is set
      if (senha === undefined || senha === null) {
        throw new Error("Missing the required parameter 'senha' when calling v1LoginPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'login': login,'senha': senha
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
        '/v1/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}