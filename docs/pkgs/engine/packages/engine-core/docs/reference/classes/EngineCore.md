# Class: EngineCore\<C, S\>

Core for the engine.

## Type Parameters

### C

`C` *extends* `IEngineCoreConfig` = `IEngineCoreConfig`

### S

`S` *extends* `IEngineState` = `IEngineState`

## Implements

- `IEngineCore`\<`C`, `S`\>

## Constructors

### Constructor

> **new EngineCore**\<`C`, `S`\>(`options?`): `EngineCore`\<`C`, `S`\>

Create a new instance of EngineCore.

#### Parameters

##### options?

[`IEngineCoreOptions`](../interfaces/IEngineCoreOptions.md)\<`C`, `S`\>

The options for the engine.

#### Returns

`EngineCore`\<`C`, `S`\>

## Properties

### LOGGER\_TYPE\_NAME

> `readonly` `static` **LOGGER\_TYPE\_NAME**: `string` = `"engine"`

Name for the engine logger.

***

### \_context

> `protected` **\_context**: `IEngineCoreContext`\<`C`, `S`\>

The core context.

## Methods

### addTypeInitialiser()

> **addTypeInitialiser**(`type`, `typeConfig`, `module`, `method`): `void`

Add a type initialiser.

#### Parameters

##### type

`string`

The type to add the initialiser for.

##### typeConfig

The type config.

`undefined` | `IEngineCoreTypeConfig`[]

##### module

`string`

The name of the module which contains the initialiser method.

##### method

`string`

The name of the method to call.

#### Returns

`void`

#### Implementation of

`IEngineCore.addTypeInitialiser`

***

### start()

> **start**(): `Promise`\<`boolean`\>

Start the engine core.

#### Returns

`Promise`\<`boolean`\>

True if the start was successful.

#### Implementation of

`IEngineCore.start`

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stop the engine core.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IEngineCore.stop`

***

### logInfo()

> **logInfo**(`message`): `void`

Log info.

#### Parameters

##### message

`string`

The message to log.

#### Returns

`void`

#### Implementation of

`IEngineCore.logInfo`

***

### logError()

> **logError**(`error`): `void`

Log error.

#### Parameters

##### error

`IError`

The error to log.

#### Returns

`void`

#### Implementation of

`IEngineCore.logError`

***

### getConfig()

> **getConfig**(): `C`

Get the config for the engine.

#### Returns

`C`

The config for the engine.

#### Implementation of

`IEngineCore.getConfig`

***

### getState()

> **getState**(): `S`

Get the state of the engine.

#### Returns

`S`

The state of the engine.

#### Implementation of

`IEngineCore.getState`

***

### getRegisteredInstances()

> **getRegisteredInstances**(): `object`

Get all the registered instances.

#### Returns

`object`

The registered instances.

#### Implementation of

`IEngineCore.getRegisteredInstances`

***

### getRegisteredInstanceType()

> **getRegisteredInstanceType**(`componentConnectorType`, `features?`): `string`

Get the registered instance type for the component/connector.

#### Parameters

##### componentConnectorType

`string`

The type of the component/connector.

##### features?

`string`[]

The requested features of the component, if not specified the default entry will be retrieved.

#### Returns

`string`

The instance type matching the criteria if one is registered.

#### Throws

If a matching instance was not found.

#### Implementation of

`IEngineCore.getRegisteredInstanceType`

***

### getRegisteredInstanceTypeOptional()

> **getRegisteredInstanceTypeOptional**(`componentConnectorType`, `features?`): `undefined` \| `string`

Get the registered instance type for the component/connector if it exists.

#### Parameters

##### componentConnectorType

`string`

The type of the component/connector.

##### features?

`string`[]

The requested features of the component, if not specified the default entry will be retrieved.

#### Returns

`undefined` \| `string`

The instance type matching the criteria if one is registered.

#### Implementation of

`IEngineCore.getRegisteredInstanceTypeOptional`

***

### getCloneData()

> **getCloneData**(): `IEngineCoreClone`\<`C`, `S`\>

Get the data required to create a clone of the engine.

#### Returns

`IEngineCoreClone`\<`C`, `S`\>

The clone data.

#### Implementation of

`IEngineCore.getCloneData`

***

### populateClone()

> **populateClone**(`cloneData`, `silent?`): `void`

Populate the engine from the clone data.

#### Parameters

##### cloneData

`IEngineCoreClone`\<`C`, `S`\>

The clone data to populate from.

##### silent?

`boolean`

Should the clone be silent.

#### Returns

`void`

#### Implementation of

`IEngineCore.populateClone`
