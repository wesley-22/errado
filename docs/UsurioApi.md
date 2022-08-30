# SistemaApi.UsurioApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsuario**](UsurioApi.md#getUsuario) | **GET** /v1/usuario | 
[**v1UsuarioDelete**](UsurioApi.md#v1UsuarioDelete) | **DELETE** /v1/usuario | 
[**v1UsuarioPost**](UsurioApi.md#v1UsuarioPost) | **POST** /v1/usuario | 
[**v1UsuarioPut**](UsurioApi.md#v1UsuarioPut) | **PUT** /v1/usuario | 

<a name="getUsuario"></a>
# **getUsuario**
> InlineResponse200 getUsuario(opts)



retorna os dados de usuário

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.UsurioApi();
let opts = { 
  'id': 56 // Number | ID do funcionario
};
apiInstance.getUsuario(opts, (error, data, response) => {
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
 **id** | **Number**| ID do funcionario | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1UsuarioDelete"></a>
# **v1UsuarioDelete**
> v1UsuarioDelete(userId)



### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.UsurioApi();
let userId = 56; // Number | ID única do usuário.

apiInstance.v1UsuarioDelete(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID única do usuário. | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v1UsuarioPost"></a>
# **v1UsuarioPost**
> v1UsuarioPost(email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome, tipo)



cadastra um novo usuário.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.UsurioApi();
let email = "email_example"; // String | 
let telefone = 56; // Number | 
let whatsapp = true; // Boolean | 
let oauthgoogle = "oauthgoogle_example"; // String | 
let oauthhotmail = "oauthhotmail_example"; // String | 
let nome = 56; // Number | 
let tipo = 56; // Number | 

apiInstance.v1UsuarioPost(email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome, tipo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **telefone** | **Number**|  | 
 **whatsapp** | **Boolean**|  | 
 **oauthgoogle** | **String**|  | 
 **oauthhotmail** | **String**|  | 
 **nome** | **Number**|  | 
 **tipo** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="v1UsuarioPut"></a>
# **v1UsuarioPut**
> v1UsuarioPut(opts)



### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.UsurioApi();
let opts = { 
  'body': new SistemaApi.V1UsuarioBody(), // V1UsuarioBody | 
  'email': "email_example", // String | e-mail do usuário.
  'telefone': 56, // Number | telefone do usuário.
  'whatsapp': true, // Boolean | caso o telefone seja do whatsapp.
  'oauthgoogle': "oauthgoogle_example", // String | oauth do usuário.
  'oauthhotmail': "oauthhotmail_example", // String | oauth do usuário.
  'nome': 56, // Number | nome do usuário.
  'tipo': 56 // Number | email do usuário.
};
apiInstance.v1UsuarioPut(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1UsuarioBody**](V1UsuarioBody.md)|  | [optional] 
 **email** | **String**| e-mail do usuário. | [optional] 
 **telefone** | **Number**| telefone do usuário. | [optional] 
 **whatsapp** | **Boolean**| caso o telefone seja do whatsapp. | [optional] 
 **oauthgoogle** | **String**| oauth do usuário. | [optional] 
 **oauthhotmail** | **String**| oauth do usuário. | [optional] 
 **nome** | **Number**| nome do usuário. | [optional] 
 **tipo** | **Number**| email do usuário. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

