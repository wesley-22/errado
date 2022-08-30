# SistemaApi.MdulosApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModulos**](MdulosApi.md#getModulos) | **GET** /v1/modulos | 
[**putModulo**](MdulosApi.md#putModulo) | **PUT** /v1/modulos | 
[**v1ModulosDelete**](MdulosApi.md#v1ModulosDelete) | **DELETE** /v1/modulos | 
[**v1ModulosPost**](MdulosApi.md#v1ModulosPost) | **POST** /v1/modulos | 

<a name="getModulos"></a>
# **getModulos**
> InlineResponse2005 getModulos(userId)



retorna a lista de módulos disponiveis.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.MdulosApi();
let userId = 56; // Number | 

apiInstance.getModulos(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putModulo"></a>
# **putModulo**
> InlineResponse2001 putModulo(modId, opts)



altera um determinado módulo.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.MdulosApi();
let modId = 56; // Number | 
let opts = { 
  'modNome': "modNome_example", // String | 
  'modNivel': 56 // Number | 
};
apiInstance.putModulo(modId, opts, (error, data, response) => {
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
 **modId** | **Number**|  | 
 **modNome** | **String**|  | [optional] 
 **modNivel** | **Number**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1ModulosDelete"></a>
# **v1ModulosDelete**
> InlineResponse2001 v1ModulosDelete(modId)



remove um determinado módulo.

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.MdulosApi();
let modId = 56; // Number | 

apiInstance.v1ModulosDelete(modId, (error, data, response) => {
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
 **modId** | **Number**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1ModulosPost"></a>
# **v1ModulosPost**
> InlineResponse2001 v1ModulosPost(modNome, modNivel)



adiciona um novo módulo.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.MdulosApi();
let modNome = "modNome_example"; // String | 
let modNivel = 56; // Number | 

apiInstance.v1ModulosPost(modNome, modNivel, (error, data, response) => {
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
 **modNome** | **String**|  | 
 **modNivel** | **Number**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

