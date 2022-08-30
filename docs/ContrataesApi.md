# SistemaApi.ContrataesApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ContratacoesCandidatoGet**](ContrataesApi.md#v1ContratacoesCandidatoGet) | **GET** /v1/contratacoes/candidato | 
[**v1ContratacoesCandidatoPost**](ContrataesApi.md#v1ContratacoesCandidatoPost) | **POST** /v1/contratacoes/candidato | 
[**v1ContratacoesGet**](ContrataesApi.md#v1ContratacoesGet) | **GET** /v1/contratacoes | 
[**v1ContratacoesPatch**](ContrataesApi.md#v1ContratacoesPatch) | **PATCH** /v1/contratacoes | 
[**v1ContratacoesPost**](ContrataesApi.md#v1ContratacoesPost) | **POST** /v1/contratacoes | 

<a name="v1ContratacoesCandidatoGet"></a>
# **v1ContratacoesCandidatoGet**
> InlineResponse2011 v1ContratacoesCandidatoGet(contratacaoId)



busca os dados da contratação.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.ContrataesApi();
let contratacaoId = "contratacaoId_example"; // String | 

apiInstance.v1ContratacoesCandidatoGet(contratacaoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contratacaoId** | **String**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1ContratacoesCandidatoPost"></a>
# **v1ContratacoesCandidatoPost**
> InlineResponse201 v1ContratacoesCandidatoPost(nomePai, nomeMae, dtNasc, estadoNasc, cidadeNasc, nCpf, nCtps, dtCtps, nRg, dtRg, emitenteRg, nRua, estado, cidade, bairro)



adiciona uma nova contratação.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.ContrataesApi();
let nomePai = "nomePai_example"; // String | 
let nomeMae = "nomeMae_example"; // String | 
let dtNasc = "dtNasc_example"; // String | 
let estadoNasc = "estadoNasc_example"; // String | 
let cidadeNasc = "cidadeNasc_example"; // String | 
let nCpf = "nCpf_example"; // String | 
let nCtps = "nCtps_example"; // String | 
let dtCtps = "dtCtps_example"; // String | 
let nRg = "nRg_example"; // String | 
let dtRg = "dtRg_example"; // String | 
let emitenteRg = "emitenteRg_example"; // String | 
let nRua = "nRua_example"; // String | 
let estado = "estado_example"; // String | 
let cidade = "cidade_example"; // String | 
let bairro = "bairro_example"; // String | 

apiInstance.v1ContratacoesCandidatoPost(nomePai, nomeMae, dtNasc, estadoNasc, cidadeNasc, nCpf, nCtps, dtCtps, nRg, dtRg, emitenteRg, nRua, estado, cidade, bairro, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nomePai** | **String**|  | 
 **nomeMae** | **String**|  | 
 **dtNasc** | **String**|  | 
 **estadoNasc** | **String**|  | 
 **cidadeNasc** | **String**|  | 
 **nCpf** | **String**|  | 
 **nCtps** | **String**|  | 
 **dtCtps** | **String**|  | 
 **nRg** | **String**|  | 
 **dtRg** | **String**|  | 
 **emitenteRg** | **String**|  | 
 **nRua** | **String**|  | 
 **estado** | **String**|  | 
 **cidade** | **String**|  | 
 **bairro** | **String**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="v1ContratacoesGet"></a>
# **v1ContratacoesGet**
> InlineResponse2006 v1ContratacoesGet(cdempresa)



busca lista de contratações de uma empresa.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.ContrataesApi();
let cdempresa = 56; // Number | 

apiInstance.v1ContratacoesGet(cdempresa, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cdempresa** | **Number**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1ContratacoesPatch"></a>
# **v1ContratacoesPatch**
> InlineResponse201 v1ContratacoesPatch(contratacaoId, status)



atualiza o status da contratação

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.ContrataesApi();
let contratacaoId = 56; // Number | 
let status = true; // Boolean | 

apiInstance.v1ContratacoesPatch(contratacaoId, status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contratacaoId** | **Number**|  | 
 **status** | **Boolean**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1ContratacoesPost"></a>
# **v1ContratacoesPost**
> InlineResponse2001 v1ContratacoesPost(cdempresa, nome, data, funcao, cboId, horaId, salario, tipoContrato, modNome, email, telefone, whatsapp, dtContratacao)



adiciona uma nova contratação.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.ContrataesApi();
let cdempresa = 56; // Number | 
let nome = "nome_example"; // String | 
let data = "data_example"; // String | 
let funcao = "funcao_example"; // String | 
let cboId = "cboId_example"; // String | 
let horaId = "horaId_example"; // String | 
let salario = "salario_example"; // String | 
let tipoContrato = "tipoContrato_example"; // String | 
let modNome = "modNome_example"; // String | 
let email = "email_example"; // String | 
let telefone = "telefone_example"; // String | 
let whatsapp = "whatsapp_example"; // String | 
let dtContratacao = "dtContratacao_example"; // String | 

apiInstance.v1ContratacoesPost(cdempresa, nome, data, funcao, cboId, horaId, salario, tipoContrato, modNome, email, telefone, whatsapp, dtContratacao, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cdempresa** | **Number**|  | 
 **nome** | **String**|  | 
 **data** | **String**|  | 
 **funcao** | **String**|  | 
 **cboId** | **String**|  | 
 **horaId** | **String**|  | 
 **salario** | **String**|  | 
 **tipoContrato** | **String**|  | 
 **modNome** | **String**|  | 
 **email** | **String**|  | 
 **telefone** | **String**|  | 
 **whatsapp** | **String**|  | 
 **dtContratacao** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

