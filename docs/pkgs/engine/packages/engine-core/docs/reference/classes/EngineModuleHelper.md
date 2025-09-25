# Class: EngineModuleHelper

Helper class for engine modules.

## Constructors

### Constructor

> **new EngineModuleHelper**(): `EngineModuleHelper`

#### Returns

`EngineModuleHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### loadComponent()

> `static` **loadComponent**\<`T`\>(`engineCore`, `engineModuleConfig`): `Promise`\<`T`\>

Loads an engine component and constructs it with the relevant dependencies and configuration.

#### Type Parameters

##### T

`T`

#### Parameters

##### engineCore

`IEngineCore`

The engine core.

##### engineModuleConfig

`IEngineModuleConfig`

The configuration for the module.

#### Returns

`Promise`\<`T`\>

The instantiated component.
