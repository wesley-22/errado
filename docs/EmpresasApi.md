# SistemaApi.EmpresasApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmpresas**](EmpresasApi.md#getEmpresas) | **GET** /v1/empresas | 

<a name="getEmpresas"></a>
# **getEmpresas**
> InlineResponse2003 getEmpresas(email)



retorna lista de todas as empresas relacionadas ao usuário

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.EmpresasApi();
let email = 56; // Number | 

apiInstance.getEmpresas(email, (error, data, response) => {
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
 **email** | **Number**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

