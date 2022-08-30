# SistemaApi.GuiasApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGuias**](GuiasApi.md#getGuias) | **GET** /v1/guias | 
[**postGuia**](GuiasApi.md#postGuia) | **POST** /v1/guias | 

<a name="getGuias"></a>
# **getGuias**
> InlineResponse2002 getGuias(mes, ano)



retorna lista de todas as guias de uma competencia

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.GuiasApi();
let mes = 56; // Number | 
let ano = "ano_example"; // String | 

apiInstance.getGuias(mes, ano, (error, data, response) => {
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
 **mes** | **Number**|  | 
 **ano** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postGuia"></a>
# **postGuia**
> InlineResponse2001 postGuia(name, tipoGuia, guia)



faz o envio de uma guia para armazenamento

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.GuiasApi();
let name = "name_example"; // String | 
let tipoGuia = "tipoGuia_example"; // String | 
let guia = null; // Object | 

apiInstance.postGuia(name, tipoGuia, guia, (error, data, response) => {
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
 **name** | **String**|  | 
 **tipoGuia** | **String**|  | 
 **guia** | [**Object**](.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

