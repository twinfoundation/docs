# Class: EngineTypeHelper

Helper methods for engine config types.

## Constructors

### Constructor

> **new EngineTypeHelper**(): `EngineTypeHelper`

#### Returns

`EngineTypeHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### getConfigOfType()

> `static` **getConfigOfType**\<`T`\>(`engineConfig`, `component`, `type`): `undefined` \| `IEngineCoreTypeConfig`\<`T`\>

Get the config for the specified component and type.

#### Type Parameters

##### T

`T` *extends* `IEngineCoreTypeBaseConfig`\<`unknown`\>

#### Parameters

##### engineConfig

[`IEngineConfig`](../interfaces/IEngineConfig.md)

The engine configuration.

##### component

`string`

The component name.

##### type

`string`

The type name.

#### Returns

`undefined` \| `IEngineCoreTypeConfig`\<`T`\>

The config for the specified component and type or undefined if it does not exist.
