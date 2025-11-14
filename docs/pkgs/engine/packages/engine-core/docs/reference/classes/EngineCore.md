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

### LOGGING\_COMPONENT\_TYPE\_NAME

> `readonly` `static` **LOGGING\_COMPONENT\_TYPE\_NAME**: `string` = `"engine-logging-service"`

Name for the engine logger component, used for direct console logging.

***

### LOGGING\_CONNECTOR\_TYPE\_NAME

> `readonly` `static` **LOGGING\_CONNECTOR\_TYPE\_NAME**: `string` = `"engine-logging-connector"`

Name for the engine logger connector, used for direct console logging.

***

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

***

### \_context

> `protected` **\_context**: `IEngineCoreContext`\<`C`, `S`\>

The core context.

***

### \_contextIdKeys

> `protected` `readonly` **\_contextIdKeys**: `string`[]

The context ID keys.

***

### \_contextIds?

> `protected` `optional` **\_contextIds**: `IContextIds`

The context IDs.

## Methods

### addTypeInitialiser()

> **addTypeInitialiser**(`type`, `module`, `method`): `void`

Add a type initialiser.

#### Parameters

##### type

`string`

The type to add the initialiser for.

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

### getTypeConfig()

> **getTypeConfig**(`type`): `undefined` \| `IEngineCoreTypeConfig`[]

Get the type config for a specific type.

#### Parameters

##### type

`string`

The type to get the config for.

#### Returns

`undefined` \| `IEngineCoreTypeConfig`[]

The type config or undefined if not found.

#### Implementation of

`IEngineCore.getTypeConfig`

***

### addContextIdKey()

> **addContextIdKey**(`key`): `void`

Add a context ID key to the engine.

#### Parameters

##### key

`string`

The context ID key.

#### Returns

`void`

#### Implementation of

`IEngineCore.addContextIdKey`

***

### getContextIdKeys()

> **getContextIdKeys**(): `string`[]

Get the context ID keys for the engine.

#### Returns

`string`[]

The context IDs keys.

#### Implementation of

`IEngineCore.getContextIdKeys`

***

### addContextId()

> **addContextId**(`key`, `value`): `void`

Add a context ID to the engine.

#### Parameters

##### key

`string`

The context ID key.

##### value

`string`

The context ID value.

#### Returns

`void`

#### Implementation of

`IEngineCore.addContextId`

***

### getContextIds()

> **getContextIds**(): `undefined` \| `IContextIds`

Get the context IDs for the engine.

#### Returns

`undefined` \| `IContextIds`

The context IDs or undefined if none are set.

#### Implementation of

`IEngineCore.getContextIds`

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

### isStarted()

> **isStarted**(): `boolean`

Is the engine started.

#### Returns

`boolean`

True if the engine is started.

#### Implementation of

`IEngineCore.isStarted`

***

### isPrimary()

> **isPrimary**(): `boolean`

Is this the primary engine instance.

#### Returns

`boolean`

True if the engine is the primary instance.

#### Implementation of

`IEngineCore.isPrimary`

***

### isClone()

> **isClone**(): `boolean`

Is this engine instance a clone.

#### Returns

`boolean`

True if the engine instance is a clone.

#### Implementation of

`IEngineCore.isClone`

***

### logInfo()

> **logInfo**(`message`): `Promise`\<`void`\>

Log info.

#### Parameters

##### message

`string`

The message to log.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IEngineCore.logInfo`

***

### logError()

> **logError**(`error`): `Promise`\<`void`\>

Log error.

#### Parameters

##### error

`IError`

The error to log.

#### Returns

`Promise`\<`void`\>

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
