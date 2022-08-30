# SistemaApi.DadosAdicionaisDoContratoApi

All URIs are relative to *https://virtserver.swaggerhub.com/WESLEYFERREIRA2007_1/Sistema_de_Gerenciamento/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CboDelete**](DadosAdicionaisDoContratoApi.md#v1CboDelete) | **DELETE** /v1/cbo | 
[**v1CboGet**](DadosAdicionaisDoContratoApi.md#v1CboGet) | **GET** /v1/cbo | 
[**v1CboPost**](DadosAdicionaisDoContratoApi.md#v1CboPost) | **POST** /v1/cbo | 
[**v1FuncaoDelete**](DadosAdicionaisDoContratoApi.md#v1FuncaoDelete) | **DELETE** /v1/funcao | 
[**v1FuncaoGet**](DadosAdicionaisDoContratoApi.md#v1FuncaoGet) | **GET** /v1/funcao | 
[**v1FuncaoPatch**](DadosAdicionaisDoContratoApi.md#v1FuncaoPatch) | **PATCH** /v1/funcao | 
[**v1FuncaoPost**](DadosAdicionaisDoContratoApi.md#v1FuncaoPost) | **POST** /v1/funcao | 
[**v1HorariosDelete**](DadosAdicionaisDoContratoApi.md#v1HorariosDelete) | **DELETE** /v1/horarios | 
[**v1HorariosGet**](DadosAdicionaisDoContratoApi.md#v1HorariosGet) | **GET** /v1/horarios | 
[**v1HorariosPatch**](DadosAdicionaisDoContratoApi.md#v1HorariosPatch) | **PATCH** /v1/horarios | 
[**v1HorariosPost**](DadosAdicionaisDoContratoApi.md#v1HorariosPost) | **POST** /v1/horarios | 

<a name="v1CboDelete"></a>
# **v1CboDelete**
> InlineResponse2001 v1CboDelete(cboId)



Remove um CBO do cadastro.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let cboId = "cboId_example"; // String | 

apiInstance.v1CboDelete(cboId, (error, data, response) => {
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
 **cboId** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1CboGet"></a>
# **v1CboGet**
> InlineResponse2013 v1CboGet(cboId)



busca os dados de CBO.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let cboId = "cboId_example"; // String | 

apiInstance.v1CboGet(cboId, (error, data, response) => {
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
 **cboId** | **String**|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1CboPost"></a>
# **v1CboPost**
> InlineResponse2001 v1CboPost(cbo, familia, gradeGrupo, ocupacao, perfilOcupacional, sinonimo, subgrupoPricipal, subgrupo)



adiciona um novo CBO.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let cbo = 56; // Number | 
let familia = 56; // Number | 
let gradeGrupo = "gradeGrupo_example"; // String | 
let ocupacao = "ocupacao_example"; // String | 
let perfilOcupacional = "perfilOcupacional_example"; // String | 
let sinonimo = "sinonimo_example"; // String | 
let subgrupoPricipal = "subgrupoPricipal_example"; // String | 
let subgrupo = "subgrupo_example"; // String | 

apiInstance.v1CboPost(cbo, familia, gradeGrupo, ocupacao, perfilOcupacional, sinonimo, subgrupoPricipal, subgrupo, (error, data, response) => {
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
 **cbo** | **Number**|  | 
 **familia** | **Number**|  | 
 **gradeGrupo** | **String**|  | 
 **ocupacao** | **String**|  | 
 **perfilOcupacional** | **String**|  | 
 **sinonimo** | **String**|  | 
 **subgrupoPricipal** | **String**|  | 
 **subgrupo** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="v1FuncaoDelete"></a>
# **v1FuncaoDelete**
> InlineResponse2001 v1FuncaoDelete(opts)



remove uma função.

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let opts = { 
  'funcId': 56 // Number | 
};
apiInstance.v1FuncaoDelete(opts, (error, data, response) => {
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
 **funcId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1FuncaoGet"></a>
# **v1FuncaoGet**
> InlineResponse2012 v1FuncaoGet(cdempresa)



busca as funções disponiveis para a empresa.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let cdempresa = 56; // Number | 

apiInstance.v1FuncaoGet(cdempresa, (error, data, response) => {
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

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1FuncaoPatch"></a>
# **v1FuncaoPatch**
> InlineResponse2001 v1FuncaoPatch(opts)



Altera uma função.

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let opts = { 
  'funcNome': "funcNome_example", // String | 
  'cboId': 56 // Number | 
};
apiInstance.v1FuncaoPatch(opts, (error, data, response) => {
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
 **funcNome** | **String**|  | [optional] 
 **cboId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1FuncaoPost"></a>
# **v1FuncaoPost**
> InlineResponse2001 v1FuncaoPost(funcNome, cboId)



adiciona uma função.

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let funcNome = "funcNome_example"; // String | 
let cboId = 56; // Number | 

apiInstance.v1FuncaoPost(funcNome, cboId, (error, data, response) => {
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
 **funcNome** | **String**|  | 
 **cboId** | **Number**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1HorariosDelete"></a>
# **v1HorariosDelete**
> InlineResponse2001 v1HorariosDelete(opts)



remove um horário cadastrado.

### Example
```javascript
import {SistemaApi} from 'sistema_api';

let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let opts = { 
  'horaId': 56 // Number | 
};
apiInstance.v1HorariosDelete(opts, (error, data, response) => {
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
 **horaId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1HorariosGet"></a>
# **v1HorariosGet**
> [&#x27;String&#x27;] v1HorariosGet(cdempresa)



busca os dados de horário.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let cdempresa = 56; // Number | 

apiInstance.v1HorariosGet(cdempresa, (error, data, response) => {
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

**[&#x27;String&#x27;]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1HorariosPatch"></a>
# **v1HorariosPatch**
> InlineResponse201 v1HorariosPatch(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo)



altera um horário de trabalho já cadastrado.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let descricao = "descricao_example"; // String | 
let domEntrada = "domEntrada_example"; // String | 
let domAlmocoSaida = "domAlmocoSaida_example"; // String | 
let domAmocoRetorno = "domAmocoRetorno_example"; // String | 
let domSaida = "domSaida_example"; // String | 
let domIntervalo = "domIntervalo_example"; // String | 
let segEntrada = "segEntrada_example"; // String | 
let segAlmocoSaida = "segAlmocoSaida_example"; // String | 
let segAmocoRetorno = "segAmocoRetorno_example"; // String | 
let segSaida = "segSaida_example"; // String | 
let segIntervalo = "segIntervalo_example"; // String | 
let terEntrada = "terEntrada_example"; // String | 
let terAlmocoSaida = "terAlmocoSaida_example"; // String | 
let terAmocoRetorno = "terAmocoRetorno_example"; // String | 
let terSaida = "terSaida_example"; // String | 
let terIntervalo = "terIntervalo_example"; // String | 
let quarEntrada = "quarEntrada_example"; // String | 
let quarAlmocoSaida = "quarAlmocoSaida_example"; // String | 
let quarAmocoRetorno = "quarAmocoRetorno_example"; // String | 
let quarSaida = "quarSaida_example"; // String | 
let quarIntervalo = "quarIntervalo_example"; // String | 
let quinEntrada = "quinEntrada_example"; // String | 
let quinAlmocoSaida = "quinAlmocoSaida_example"; // String | 
let quinAmocoRetorno = "quinAmocoRetorno_example"; // String | 
let quinSaida = "quinSaida_example"; // String | 
let quinIntervalo = "quinIntervalo_example"; // String | 
let sexEntrada = "sexEntrada_example"; // String | 
let sexAlmocoSaida = "sexAlmocoSaida_example"; // String | 
let sexAmocoRetorno = "sexAmocoRetorno_example"; // String | 
let sexSaida = "sexSaida_example"; // String | 
let sexIntervalo = "sexIntervalo_example"; // String | 
let sabEntrada = "sabEntrada_example"; // String | 
let sabAlmocoSaida = "sabAlmocoSaida_example"; // String | 
let sabAmocoRetorno = "sabAmocoRetorno_example"; // String | 
let sabSaida = "sabSaida_example"; // String | 
let sabIntervalo = "sabIntervalo_example"; // String | 

apiInstance.v1HorariosPatch(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo, (error, data, response) => {
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
 **descricao** | **String**|  | 
 **domEntrada** | **String**|  | 
 **domAlmocoSaida** | **String**|  | 
 **domAmocoRetorno** | **String**|  | 
 **domSaida** | **String**|  | 
 **domIntervalo** | **String**|  | 
 **segEntrada** | **String**|  | 
 **segAlmocoSaida** | **String**|  | 
 **segAmocoRetorno** | **String**|  | 
 **segSaida** | **String**|  | 
 **segIntervalo** | **String**|  | 
 **terEntrada** | **String**|  | 
 **terAlmocoSaida** | **String**|  | 
 **terAmocoRetorno** | **String**|  | 
 **terSaida** | **String**|  | 
 **terIntervalo** | **String**|  | 
 **quarEntrada** | **String**|  | 
 **quarAlmocoSaida** | **String**|  | 
 **quarAmocoRetorno** | **String**|  | 
 **quarSaida** | **String**|  | 
 **quarIntervalo** | **String**|  | 
 **quinEntrada** | **String**|  | 
 **quinAlmocoSaida** | **String**|  | 
 **quinAmocoRetorno** | **String**|  | 
 **quinSaida** | **String**|  | 
 **quinIntervalo** | **String**|  | 
 **sexEntrada** | **String**|  | 
 **sexAlmocoSaida** | **String**|  | 
 **sexAmocoRetorno** | **String**|  | 
 **sexSaida** | **String**|  | 
 **sexIntervalo** | **String**|  | 
 **sabEntrada** | **String**|  | 
 **sabAlmocoSaida** | **String**|  | 
 **sabAmocoRetorno** | **String**|  | 
 **sabSaida** | **String**|  | 
 **sabIntervalo** | **String**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="v1HorariosPost"></a>
# **v1HorariosPost**
> InlineResponse201 v1HorariosPost(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo)



cadastra um horário.

### Example
```javascript
import {SistemaApi} from 'sistema_api';
let defaultClient = SistemaApi.ApiClient.instance;


let apiInstance = new SistemaApi.DadosAdicionaisDoContratoApi();
let descricao = "descricao_example"; // String | 
let domEntrada = "domEntrada_example"; // String | 
let domAlmocoSaida = "domAlmocoSaida_example"; // String | 
let domAmocoRetorno = "domAmocoRetorno_example"; // String | 
let domSaida = "domSaida_example"; // String | 
let domIntervalo = "domIntervalo_example"; // String | 
let segEntrada = "segEntrada_example"; // String | 
let segAlmocoSaida = "segAlmocoSaida_example"; // String | 
let segAmocoRetorno = "segAmocoRetorno_example"; // String | 
let segSaida = "segSaida_example"; // String | 
let segIntervalo = "segIntervalo_example"; // String | 
let terEntrada = "terEntrada_example"; // String | 
let terAlmocoSaida = "terAlmocoSaida_example"; // String | 
let terAmocoRetorno = "terAmocoRetorno_example"; // String | 
let terSaida = "terSaida_example"; // String | 
let terIntervalo = "terIntervalo_example"; // String | 
let quarEntrada = "quarEntrada_example"; // String | 
let quarAlmocoSaida = "quarAlmocoSaida_example"; // String | 
let quarAmocoRetorno = "quarAmocoRetorno_example"; // String | 
let quarSaida = "quarSaida_example"; // String | 
let quarIntervalo = "quarIntervalo_example"; // String | 
let quinEntrada = "quinEntrada_example"; // String | 
let quinAlmocoSaida = "quinAlmocoSaida_example"; // String | 
let quinAmocoRetorno = "quinAmocoRetorno_example"; // String | 
let quinSaida = "quinSaida_example"; // String | 
let quinIntervalo = "quinIntervalo_example"; // String | 
let sexEntrada = "sexEntrada_example"; // String | 
let sexAlmocoSaida = "sexAlmocoSaida_example"; // String | 
let sexAmocoRetorno = "sexAmocoRetorno_example"; // String | 
let sexSaida = "sexSaida_example"; // String | 
let sexIntervalo = "sexIntervalo_example"; // String | 
let sabEntrada = "sabEntrada_example"; // String | 
let sabAlmocoSaida = "sabAlmocoSaida_example"; // String | 
let sabAmocoRetorno = "sabAmocoRetorno_example"; // String | 
let sabSaida = "sabSaida_example"; // String | 
let sabIntervalo = "sabIntervalo_example"; // String | 

apiInstance.v1HorariosPost(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo, (error, data, response) => {
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
 **descricao** | **String**|  | 
 **domEntrada** | **String**|  | 
 **domAlmocoSaida** | **String**|  | 
 **domAmocoRetorno** | **String**|  | 
 **domSaida** | **String**|  | 
 **domIntervalo** | **String**|  | 
 **segEntrada** | **String**|  | 
 **segAlmocoSaida** | **String**|  | 
 **segAmocoRetorno** | **String**|  | 
 **segSaida** | **String**|  | 
 **segIntervalo** | **String**|  | 
 **terEntrada** | **String**|  | 
 **terAlmocoSaida** | **String**|  | 
 **terAmocoRetorno** | **String**|  | 
 **terSaida** | **String**|  | 
 **terIntervalo** | **String**|  | 
 **quarEntrada** | **String**|  | 
 **quarAlmocoSaida** | **String**|  | 
 **quarAmocoRetorno** | **String**|  | 
 **quarSaida** | **String**|  | 
 **quarIntervalo** | **String**|  | 
 **quinEntrada** | **String**|  | 
 **quinAlmocoSaida** | **String**|  | 
 **quinAmocoRetorno** | **String**|  | 
 **quinSaida** | **String**|  | 
 **quinIntervalo** | **String**|  | 
 **sexEntrada** | **String**|  | 
 **sexAlmocoSaida** | **String**|  | 
 **sexAmocoRetorno** | **String**|  | 
 **sexSaida** | **String**|  | 
 **sexIntervalo** | **String**|  | 
 **sabEntrada** | **String**|  | 
 **sabAlmocoSaida** | **String**|  | 
 **sabAmocoRetorno** | **String**|  | 
 **sabSaida** | **String**|  | 
 **sabIntervalo** | **String**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

