# Interface: INodeOptions

The options when running the node.

## Properties

### serverName?

> `optional` **serverName**: `string`

The name of the server, defaults to "TWIN Node Server".

#### Default

```ts
"TWIN Node Server"
```

***

### serverVersion?

> `optional` **serverVersion**: `string`

The version of the server, defaults to the current version.

***

### envVars?

> `optional` **envVars**: `object`

Additional environment variables to set.

#### Index Signature

\[`key`: `string`\]: `string`

***

### envFilenames?

> `optional` **envFilenames**: `string`[]

Additional environment variable filenames to load, defaults to .env.

***

### envPrefix?

> `optional` **envPrefix**: `string`

The prefix for environment variables, defaults to "TWIN_".

***

### configFilenames?

> `optional` **configFilenames**: `string`[]

A list of JSON files to load as configuration files.
The files will be loaded in the order they are provided, and the last one will
override any previous values.

***

### config?

> `optional` **config**: `IEngineConfig`

Provides the ability to have some initial custom configuration for the engine.
This will be merged with any configuration loaded from the environment variables.

***

### executionDirectory?

> `optional` **executionDirectory**: `string`

The directory to override the execution location, defaults to process directory.

***

### localesDirectory?

> `optional` **localesDirectory**: `string`

The directory to override the locales directory, defaults to the locales directory.

***

### openApiSpecFile?

> `optional` **openApiSpecFile**: `string`

The path to the OpenAPI spec file, defaults to docs/open-api/spec.json.

***

### favIconFile?

> `optional` **favIconFile**: `string`

The path to the favicon, defaults to static/favicon.png.

***

### extendEnvVars()?

> `optional` **extendEnvVars**: (`envVars`) => `Promise`\<`void`\>

Method to extend the engine environment variables with any additional custom configuration.

#### Parameters

##### envVars

[`INodeEnvironmentVariables`](INodeEnvironmentVariables.md)

#### Returns

`Promise`\<`void`\>

***

### extendConfig()?

> `optional` **extendConfig**: (`envVars`, `config`) => `Promise`\<`void`\>

Method to extend the engine configuration with any additional custom configuration.

#### Parameters

##### envVars

[`INodeEnvironmentVariables`](INodeEnvironmentVariables.md)

##### config

[`INodeEngineConfig`](INodeEngineConfig.md)

#### Returns

`Promise`\<`void`\>

***

### extendEngine()?

> `optional` **extendEngine**: (`engine`) => `Promise`\<`void`\>

Method to extend the engine with any additional options.

#### Parameters

##### engine

`IEngineCore`

#### Returns

`Promise`\<`void`\>

***

### extendEngineServer()?

> `optional` **extendEngineServer**: (`engineServer`) => `Promise`\<`void`\>

Method to extend the engine server with any additional options.

#### Parameters

##### engineServer

`IEngineServer`

#### Returns

`Promise`\<`void`\>

***

### stateStorage?

> `optional` **stateStorage**: `IEngineStateStorage`\<`IEngineState`\>

The state storage to use for the engine.
If not provided, a default file-based state storage will be used.

***

### disableProcessExitOnFailure?

> `optional` **disableProcessExitOnFailure**: `boolean`

Disables process.exit calls on fatal errors and throws instead.
