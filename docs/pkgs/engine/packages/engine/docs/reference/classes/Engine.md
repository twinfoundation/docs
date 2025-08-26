# Class: Engine\<C, S\>

The engine with built in types.

## Extends

- `EngineCore`\<`C`, `S`\>

## Type Parameters

### C

`C` *extends* `IEngineConfig` = `IEngineConfig`

### S

`S` *extends* `IEngineState` = `IEngineState`

## Constructors

### Constructor

> **new Engine**\<`C`, `S`\>(`options?`): `Engine`\<`C`, `S`\>

Create a new instance of Engine.

#### Parameters

##### options?

`IEngineCoreOptions`\<`C`, `S`\>

The options for the engine.

#### Returns

`Engine`\<`C`, `S`\>

#### Overrides

`EngineCore<C, S>.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

***

### LOGGER\_TYPE\_NAME

> `readonly` `static` **LOGGER\_TYPE\_NAME**: `string`

Name for the engine logger.

#### Inherited from

`EngineCore.LOGGER_TYPE_NAME`

***

### \_context

> `protected` **\_context**: `IEngineCoreContext`\<`C`, `S`\>

The core context.

#### Inherited from

`EngineCore._context`

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

#### Inherited from

`EngineCore.addTypeInitialiser`

***

### start()

> **start**(): `Promise`\<`boolean`\>

Start the engine core.

#### Returns

`Promise`\<`boolean`\>

True if the start was successful.

#### Inherited from

`EngineCore.start`

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stop the engine core.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`EngineCore.stop`

***

### isStarted()

> **isStarted**(): `boolean`

Is the engine started.

#### Returns

`boolean`

True if the engine is started.

#### Inherited from

`EngineCore.isStarted`

***

### isPrimary()

> **isPrimary**(): `boolean`

Is this the primary engine instance.

#### Returns

`boolean`

True if the engine is the primary instance.

#### Inherited from

`EngineCore.isPrimary`

***

### isClone()

> **isClone**(): `boolean`

Is this engine instance a clone.

#### Returns

`boolean`

True if the engine instance is a clone.

#### Inherited from

`EngineCore.isClone`

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

#### Inherited from

`EngineCore.logInfo`

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

#### Inherited from

`EngineCore.logError`

***

### getConfig()

> **getConfig**(): `C`

Get the config for the engine.

#### Returns

`C`

The config for the engine.

#### Inherited from

`EngineCore.getConfig`

***

### getState()

> **getState**(): `S`

Get the state of the engine.

#### Returns

`S`

The state of the engine.

#### Inherited from

`EngineCore.getState`

***

### getRegisteredInstances()

> **getRegisteredInstances**(): `object`

Get all the registered instances.

#### Returns

`object`

The registered instances.

#### Inherited from

`EngineCore.getRegisteredInstances`

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

#### Inherited from

`EngineCore.getRegisteredInstanceType`

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

#### Inherited from

`EngineCore.getRegisteredInstanceTypeOptional`

***

### getCloneData()

> **getCloneData**(): `IEngineCoreClone`\<`C`, `S`\>

Get the data required to create a clone of the engine.

#### Returns

`IEngineCoreClone`\<`C`, `S`\>

The clone data.

#### Inherited from

`EngineCore.getCloneData`

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

#### Inherited from

`EngineCore.populateClone`
