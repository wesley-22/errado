# SistemaApi.FriasApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFerias**](FriasApi.md#getFerias) | **GET** /v1/ferias | 

<a name="getFerias"></a>
# **getFerias**
> InlineResponse2004 getFerias(funcId)



retorna o status do ultimo periodo aquisitivo de férias do funcionário.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.FriasApi();
let funcId = "funcId_example"; // String | 

apiInstance.getFerias(funcId, (error, data, response) => {
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
 **funcId** | **String**|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

