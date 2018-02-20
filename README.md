# Getting started

Buzones para envios de mensajes en Redyser

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=API%20Buzones-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=API%20Buzones-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `APIBuzonesLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=API%20Buzones-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=API%20Buzones-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=API%20Buzones-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=API%20Buzones-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  API BuzonesController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=API%20BuzonesController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MessagesController](#messages_controller)
* [GruposController](#grupos_controller)
* [BoxesController](#boxes_controller)
* [ApplicationsController](#applications_controller)

## <a name="messages_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MessagesController") MessagesController

### Get singleton instance

The singleton instance of the ``` MessagesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MessagesController;
```

### <a name="get_unnammed_endpoint_get"></a>![Method: ](https://apidocs.io/img/method.png ".MessagesController.getUnnammedEndpointGet") getUnnammedEndpointGet

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add Description


```javascript
function getUnnammedEndpointGet(callback)
```

#### Example Usage

```javascript


    controller.getUnnammedEndpointGet(function(error, response, context) {

    
    });
```



### <a name="update_applications_iris2_boxes_juande_mc_messages5a0d6278c1371500112e5dde_patch"></a>![Method: ](https://apidocs.io/img/method.png ".MessagesController.updateApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddePatch") updateApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddePatch

> *Tags:*  ``` Skips Authentication ``` 

> Modifica uno o variso de los campos: borrado, leido o consultado.


```javascript
function updateApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddePatch(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VyLl9pZCIsInVzZXJuYW1lIjoidXNlci51c2VybmFtZSIsImFkbWluIjoidXNlci5hZG1pbiIsImlhdCI6MTUxMzg0NTg2MywiZXhwIjoxNTE0NDUwNjYzLCJpc3MiOiJyZWR5c2VyLmNvbSIsInN1YiI6InVzZXJJbmZvIn0.tZTpGJa9o0jsjxJNeuiREquYDiskr3dkfCDPpsewwk8';
    var body = new ModificarUnMensajeLeidoBorradoRequest(
{

    "leido": true,

    "borrado": false

});
    var contentType = 'application/json';

    controller.updateApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddePatch(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_applications_iris2_boxes_juande_mc_messages5a0d6278c1371500112e5dde_get"></a>![Method: ](https://apidocs.io/img/method.png ".MessagesController.getApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddeGet") getApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddeGet

> *Tags:*  ``` Skips Authentication ``` 

> Devuelve el mensaje (123456) del buzón (juande.mc) de la aplicación (iris2).


```javascript
function getApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddeGet(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VyLl9pZCIsInVzZXJuYW1lIjoidXNlci51c2VybmFtZSIsImFkbWluIjoidXNlci5hZG1pbiIsImlhdCI6MTUxMzg0NTg2MywiZXhwIjoxNTE0NDUwNjYzLCJpc3MiOiJyZWR5c2VyLmNvbSIsInN1YiI6InVzZXJJbmZvIn0.tZTpGJa9o0jsjxJNeuiREquYDiskr3dkfCDPpsewwk8';

    controller.getApplicationsIris2BoxesJuandeMcMessages5a0d6278c1371500112e5ddeGet(token, function(error, response, context) {

    
    });
```



### <a name="create_applications_iris2_boxes_juandemc_messages_post"></a>![Method: ](https://apidocs.io/img/method.png ".MessagesController.createApplicationsIris2BoxesJUANDEMCMessagesPost") createApplicationsIris2BoxesJUANDEMCMessagesPost

> *Tags:*  ``` Skips Authentication ``` 

> Crea un nuevo mensaje en el buzón (juande.mc) de la aplicación (iris2).


```javascript
function createApplicationsIris2BoxesJUANDEMCMessagesPost(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTg2MDM2NjF9.z_F1iok_-d4RTtjoGzUYFYC1V7DTtP339nofkaA_Y7Y';
    var body = new CrearUnMensajeRequest(
{

    "leido": false,

    "borrado": false,

    "data":{

        "type" : "url",

        "url" : "http://www.redyser.com"

    },

    "expireAt": "2018-03-12T08:05:57.982Z"

});
    var contentType = 'application/json';

    controller.createApplicationsIris2BoxesJUANDEMCMessagesPost(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_applications_iris2_boxes_juandemc_messages_get"></a>![Method: ](https://apidocs.io/img/method.png ".MessagesController.getApplicationsIris2BoxesJUANDEMCMessagesGet") getApplicationsIris2BoxesJUANDEMCMessagesGet

> *Tags:*  ``` Skips Authentication ``` 

> 
> Devuelve todos los mensajes del buzón (juande.mc) de la aplicación (iris2). Acepta parametros en la url:
> 
> 
> borrado: true/false
> 
> 
> leido: true/false
> 
> 
> fecha: mensajes desde esa fecha (ej.-2017-01-21)
> 
> 
> skip: se salta ese número de documentos
> 
> 
> limit: número documentos máximo que devolverá
> 
> 
> order: (fecha/-fecha), ordena por ese campo


```javascript
function getApplicationsIris2BoxesJUANDEMCMessagesGet(borrado, fecha, limit, skip, order, token, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| borrado |  ``` Required ```  | TODO: Add a parameter description |
| fecha |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| skip |  ``` Required ```  | TODO: Add a parameter description |
| order |  ``` Required ```  | TODO: Add a parameter description |
| token |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var borrado = false;
    var fecha = "2017-11-15";
    var limit = 20;
    var skip = 0;
    var order = '-fecha';
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgwNzg2MjF9.P1Jry3Mu1g4xaHhUsE7cYtTkczeg5mup3E5uKPUP0Ps';
    var contentType = 'application/json';

    controller.getApplicationsIris2BoxesJUANDEMCMessagesGet(borrado, fecha, limit, skip, order, token, contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="grupos_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GruposController") GruposController

### Get singleton instance

The singleton instance of the ``` GruposController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GruposController;
```

### <a name="create_groups5a564715825d4f0e94946c1a_applications_iris2_messages_post2"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.createGroups5a564715825d4f0e94946c1aApplicationsIris2MessagesPost2") createGroups5a564715825d4f0e94946c1aApplicationsIris2MessagesPost2

> *Tags:*  ``` Skips Authentication ``` 

> Crea un nuevo mensaje en los buzones de los usuarios(group) de la aplicación (iris2).


```javascript
function createGroups5a564715825d4f0e94946c1aApplicationsIris2MessagesPost2(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTM2MTI1OTAsInN0ciI6InN0ciIsImludCI6MSwiaXNzIjoicmVkeXNlci5jb20iLCJib29sIjp0cnVlfQ.f3t0DAv5eqd47UBsnQ3e4AZvnup9vSlvZB-iBjvegIo';
    var body = new CrearUnMensajeAlGrupoPorNombreRequest(
{

  "leido": false,

  "borrado": false,

  "data":{

    "type" : "recogidas_pendientes",

    "numero" : 7

  }

});
    var contentType = 'application/json';

    controller.createGroups5a564715825d4f0e94946c1aApplicationsIris2MessagesPost2(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="update_groups_applications_iris2_groupname_todos_patch"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.updateGroupsApplicationsIris2GroupnameTodosPatch") updateGroupsApplicationsIris2GroupnameTodosPatch

> *Tags:*  ``` Skips Authentication ``` 

> Modifica uno o variso de los campos.


```javascript
function updateGroupsApplicationsIris2GroupnameTodosPatch(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';
    var body = new ModificarUnGrupoPorNombreRequest(
{

    "nombre": "Informática",

    "aplicacion": "iris2",

    "usuarios": [

        "JUANDE.MC",

        "SCORDOBA"

    ]

});
    var contentType = 'application/json';

    controller.updateGroupsApplicationsIris2GroupnameTodosPatch(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_groups_applications_iris2_groupname_todos_get"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.getGroupsApplicationsIris2GroupnameTodosGet") getGroupsApplicationsIris2GroupnameTodosGet

> *Tags:*  ``` Skips Authentication ``` 

> Devuelve el grupo (123456).


```javascript
function getGroupsApplicationsIris2GroupnameTodosGet(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';

    controller.getGroupsApplicationsIris2GroupnameTodosGet(token, function(error, response, context) {

    
    });
```



### <a name="update_groups5a564715825d4f0e94946c1a_patch"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.updateGroups5a564715825d4f0e94946c1aPatch") updateGroups5a564715825d4f0e94946c1aPatch

> *Tags:*  ``` Skips Authentication ``` 

> Modifica uno o variso de los campos.


```javascript
function updateGroups5a564715825d4f0e94946c1aPatch(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';
    var body = new ModificarUnGrupoRequest(
{

    "nombre": "Informática",

    "aplicacion": "iris2",

    "usuarios": [

        "JUANDE.MC",

        "SCORDOBA"

    ]

});
    var contentType = 'application/json';

    controller.updateGroups5a564715825d4f0e94946c1aPatch(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_groups_applications_iris2_get"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.getGroupsApplicationsIris2Get") getGroupsApplicationsIris2Get

> *Tags:*  ``` Skips Authentication ``` 

> 
> Devuelve todos los grupos de la aplicación. Acepta parametros en la url:
> 
> 
> skip: se salta ese número de documentos
> 
> 
> limit: número documentos máximo que devolverá


```javascript
function getGroupsApplicationsIris2Get(borrado, fecha, limit, skip, token, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| borrado |  ``` Required ```  | TODO: Add a parameter description |
| fecha |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| skip |  ``` Required ```  | TODO: Add a parameter description |
| token |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var borrado = false;
    var fecha = "2017-11-15";
    var limit = 20;
    var skip = 0;
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';
    var contentType = 'application/json';

    controller.getGroupsApplicationsIris2Get(borrado, fecha, limit, skip, token, contentType, function(error, response, context) {

    
    });
```



### <a name="get_groups5a564715825d4f0e94946c1a_get"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.getGroups5a564715825d4f0e94946c1aGet") getGroups5a564715825d4f0e94946c1aGet

> *Tags:*  ``` Skips Authentication ``` 

> Devuelve el grupo (123456).


```javascript
function getGroups5a564715825d4f0e94946c1aGet(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';

    controller.getGroups5a564715825d4f0e94946c1aGet(token, function(error, response, context) {

    
    });
```



### <a name="create_groups_post"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.createGroupsPost") createGroupsPost

> *Tags:*  ``` Skips Authentication ``` 

> Crea un nuevo grupo.


```javascript
function createGroupsPost(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTc5Mzk5NDd9.-pLDemUYmYPpjG5CZ7VI7UUBcC8mC_KAbEyNpzHsTMw';
    var body = new CrearUnGrupoRequest(
{

    "nombre": "Informática",

    "aplicacion": "iris2",

    "usuarios":["JUANDE.MC", "SCORDOBA"]

});
    var contentType = 'application/json';

    controller.createGroupsPost(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_groups_get"></a>![Method: ](https://apidocs.io/img/method.png ".GruposController.getGroupsGet") getGroupsGet

> *Tags:*  ``` Skips Authentication ``` 

> 
> Devuelve todos los grupos. Acepta parametros en la url:
> 
> 
> skip: se salta ese número de documentos
> 
> 
> limit: número documentos máximo que devolverá


```javascript
function getGroupsGet(borrado, fecha, limit, skip, token, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| borrado |  ``` Required ```  | TODO: Add a parameter description |
| fecha |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| skip |  ``` Required ```  | TODO: Add a parameter description |
| token |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var borrado = false;
    var fecha = "2017-11-15";
    var limit = 20;
    var skip = 0;
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTU2NzUxNTJ9.94eDQR7Rn8sUblFCaGzoEC1XxbS8XGYtFhgGzslrzKU';
    var contentType = 'application/json';

    controller.getGroupsGet(borrado, fecha, limit, skip, token, contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="boxes_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BoxesController") BoxesController

### Get singleton instance

The singleton instance of the ``` BoxesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BoxesController;
```

### <a name="get_applications_iris2_boxes_get"></a>![Method: ](https://apidocs.io/img/method.png ".BoxesController.getApplicationsIris2BoxesGet") getApplicationsIris2BoxesGet

> *Tags:*  ``` Skips Authentication ``` 

> Devuelve todos los buzones que tienen mensajes de la aplicación (iris2).


```javascript
function getApplicationsIris2BoxesGet(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTc5Mzk5NDd9.-pLDemUYmYPpjG5CZ7VI7UUBcC8mC_KAbEyNpzHsTMw';

    controller.getApplicationsIris2BoxesGet(token, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="applications_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ApplicationsController") ApplicationsController

### Get singleton instance

The singleton instance of the ``` ApplicationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ApplicationsController;
```

### <a name="create_applications_iris2_messages_post"></a>![Method: ](https://apidocs.io/img/method.png ".ApplicationsController.createApplicationsIris2MessagesPost") createApplicationsIris2MessagesPost

> *Tags:*  ``` Skips Authentication ``` 

> Crea un nuevo mensaje en los buzones de los usuarios(group) de la aplicación (iris2).


```javascript
function createApplicationsIris2MessagesPost(token, body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTc5Mzk5NDd9.-pLDemUYmYPpjG5CZ7VI7UUBcC8mC_KAbEyNpzHsTMw';
    var body = new CrearUnMensajeAAplicaciNRequest(
{

  "leido": false,

  "borrado": false,

  "data":{

    "type" : "recogidas_pendientes",

    "numero" : 7

  }

});
    var contentType = 'application/json';

    controller.createApplicationsIris2MessagesPost(token, body, contentType, function(error, response, context) {

    
    });
```



### <a name="get_applications_get"></a>![Method: ](https://apidocs.io/img/method.png ".ApplicationsController.getApplicationsGet") getApplicationsGet

> *Tags:*  ``` Skips Authentication ``` 

> Devuelve todas las aplicaciones que tienen mensajes.


```javascript
function getApplicationsGet(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTY4NzUwMDN9.2Eo8_bhTyLVywxi4P2zTSQ86WLXwCMdneJdmygeClaw';

    controller.getApplicationsGet(token, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



