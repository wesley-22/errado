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
import {ApiClient} from './ApiClient';
import {ContratacoesCandidatoBody} from './model/ContratacoesCandidatoBody';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse2004} from './model/InlineResponse2004';
import {InlineResponse2005} from './model/InlineResponse2005';
import {InlineResponse2006} from './model/InlineResponse2006';
import {InlineResponse201} from './model/InlineResponse201';
import {InlineResponse2011} from './model/InlineResponse2011';
import {InlineResponse2012} from './model/InlineResponse2012';
import {InlineResponse2013} from './model/InlineResponse2013';
import {InlineResponse401} from './model/InlineResponse401';
import {V1CboBody} from './model/V1CboBody';
import {V1ContratacoesBody} from './model/V1ContratacoesBody';
import {V1HorariosBody} from './model/V1HorariosBody';
import {V1HorariosBody1} from './model/V1HorariosBody1';
import {V1UsuarioBody} from './model/V1UsuarioBody';
import {V1UsuarioBody1} from './model/V1UsuarioBody1';
import {ContrataesApi} from './api/ContrataesApi';
import {DadosAdicionaisDoContratoApi} from './api/DadosAdicionaisDoContratoApi';
import {EmpresasApi} from './api/EmpresasApi';
import {FriasApi} from './api/FriasApi';
import {FuncionriosApi} from './api/FuncionriosApi';
import {GuiasApi} from './api/GuiasApi';
import {LoginApi} from './api/LoginApi';
import {MdulosApi} from './api/MdulosApi';
import {UsurioApi} from './api/UsurioApi';

/**
* Api_para_o_Sistema_de_Gerenciamento_de_Entregas.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SistemaApi = require('index'); // See note below*.
* var xxxSvc = new SistemaApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SistemaApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SistemaApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SistemaApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ContratacoesCandidatoBody model constructor.
     * @property {module:model/ContratacoesCandidatoBody}
     */
    ContratacoesCandidatoBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse2012 model constructor.
     * @property {module:model/InlineResponse2012}
     */
    InlineResponse2012,

    /**
     * The InlineResponse2013 model constructor.
     * @property {module:model/InlineResponse2013}
     */
    InlineResponse2013,

    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401,

    /**
     * The V1CboBody model constructor.
     * @property {module:model/V1CboBody}
     */
    V1CboBody,

    /**
     * The V1ContratacoesBody model constructor.
     * @property {module:model/V1ContratacoesBody}
     */
    V1ContratacoesBody,

    /**
     * The V1HorariosBody model constructor.
     * @property {module:model/V1HorariosBody}
     */
    V1HorariosBody,

    /**
     * The V1HorariosBody1 model constructor.
     * @property {module:model/V1HorariosBody1}
     */
    V1HorariosBody1,

    /**
     * The V1UsuarioBody model constructor.
     * @property {module:model/V1UsuarioBody}
     */
    V1UsuarioBody,

    /**
     * The V1UsuarioBody1 model constructor.
     * @property {module:model/V1UsuarioBody1}
     */
    V1UsuarioBody1,

    /**
    * The ContrataesApi service constructor.
    * @property {module:api/ContrataesApi}
    */
    ContrataesApi,

    /**
    * The DadosAdicionaisDoContratoApi service constructor.
    * @property {module:api/DadosAdicionaisDoContratoApi}
    */
    DadosAdicionaisDoContratoApi,

    /**
    * The EmpresasApi service constructor.
    * @property {module:api/EmpresasApi}
    */
    EmpresasApi,

    /**
    * The FriasApi service constructor.
    * @property {module:api/FriasApi}
    */
    FriasApi,

    /**
    * The FuncionriosApi service constructor.
    * @property {module:api/FuncionriosApi}
    */
    FuncionriosApi,

    /**
    * The GuiasApi service constructor.
    * @property {module:api/GuiasApi}
    */
    GuiasApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The MdulosApi service constructor.
    * @property {module:api/MdulosApi}
    */
    MdulosApi,

    /**
    * The UsurioApi service constructor.
    * @property {module:api/UsurioApi}
    */
    UsurioApi
};
