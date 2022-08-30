# SistemaApi.LoginApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1LoginPost**](LoginApi.md#v1LoginPost) | **POST** /v1/login | 

<a name="v1LoginPost"></a>
# **v1LoginPost**
> InlineResponse2001 v1LoginPost(login, senha)



faz o envio dos dados de login

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.LoginApi();
let login = "login_example"; // String | 
let senha = "senha_example"; // String | 

apiInstance.v1LoginPost(login, senha, (error, data, response) => {
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
 **login** | **String**|  | 
 **senha** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

