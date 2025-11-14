# Interface: IEngineCore\<C, S\>

Interface describing the engine core methods.

## Type Parameters

### C

`C` *extends* [`IEngineCoreConfig`](IEngineCoreConfig.md) = [`IEngineCoreConfig`](IEngineCoreConfig.md)

### S

`S` *extends* [`IEngineState`](IEngineState.md) = [`IEngineState`](IEngineState.md)

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

***

### getTypeConfig()

> **getTypeConfig**(`type`): `undefined` \| [`IEngineCoreTypeConfig`](../type-aliases/IEngineCoreTypeConfig.md)[]

Get the type config for a specific type.

#### Parameters

##### type

`string`

The type to get the config for.

#### Returns

`undefined` \| [`IEngineCoreTypeConfig`](../type-aliases/IEngineCoreTypeConfig.md)[]

The type config or undefined if not found.

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

***

### getContextIdKeys()

> **getContextIdKeys**(): `string`[]

Get the context ID keys for the engine.

#### Returns

`string`[]

The context IDs keys.

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

***

### getContextIds()

> **getContextIds**(): `undefined` \| `IContextIds`

Get the context IDs for the engine.

#### Returns

`undefined` \| `IContextIds`

The context IDs or undefined if none are set.

***

### start()

> **start**(): `Promise`\<`boolean`\>

Start the engine core.

#### Returns

`Promise`\<`boolean`\>

True if the start was successful.

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stop the engine core.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### isStarted()

> **isStarted**(): `boolean`

Is the engine started.

#### Returns

`boolean`

True if the engine is started.

***

### isPrimary()

> **isPrimary**(): `boolean`

Is this the primary engine instance.

#### Returns

`boolean`

True if the engine is the primary instance.

***

### isClone()

> **isClone**(): `boolean`

Is this engine instance a clone.

#### Returns

`boolean`

True if the engine instance is a clone.

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

***

### getConfig()

> **getConfig**(): `C`

Get the config for the engine.

#### Returns

`C`

The config for the engine.

***

### getState()

> **getState**(): `S`

Get the state of the engine.

#### Returns

`S`

The state of the engine.

***

### getRegisteredInstances()

> **getRegisteredInstances**(): `object`

Get all the registered instances.

#### Returns

`object`

The registered instances.

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

***

### getRegisteredInstanceTypeOptional()

> **getRegisteredInstanceTypeOptional**(`componentConnectorType`, `features?`): `undefined` \| `string`

Get the registered instance type for the component/connector.

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

***

### getCloneData()

> **getCloneData**(): [`IEngineCoreClone`](IEngineCoreClone.md)\<`C`, `S`\>

Get the data required to create a clone of the engine.

#### Returns

[`IEngineCoreClone`](IEngineCoreClone.md)\<`C`, `S`\>

The clone data.

***

### populateClone()

> **populateClone**(`cloneData`, `silent?`): `void`

Populate the engine from the clone data.

#### Parameters

##### cloneData

[`IEngineCoreClone`](IEngineCoreClone.md)\<`C`, `S`\>

The clone data to populate from.

##### silent?

`boolean`

Should the clone be silent.

#### Returns

`void`
