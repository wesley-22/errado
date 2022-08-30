# SistemaApi.FuncionriosApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFuncionarios**](FuncionriosApi.md#getFuncionarios) | **GET** /v1/funcionarios | 

<a name="getFuncionarios"></a>
# **getFuncionarios**
> [&#x27;String&#x27;] getFuncionarios(empresaId)



retorna a lista de todos os funcionarios da empresa

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.FuncionriosApi();
let empresaId = 56; // Number | 

apiInstance.getFuncionarios(empresaId, (error, data, response) => {
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
 **empresaId** | **Number**|  | 

### Return type

**[&#x27;String&#x27;]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

