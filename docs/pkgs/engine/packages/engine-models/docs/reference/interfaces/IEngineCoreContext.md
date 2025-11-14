# Interface: IEngineCoreContext\<C, S\>

The context for the engine core.

## Type Parameters

### C

`C` *extends* [`IEngineCoreConfig`](IEngineCoreConfig.md) = [`IEngineCoreConfig`](IEngineCoreConfig.md)

### S

`S` *extends* [`IEngineState`](IEngineState.md) = [`IEngineState`](IEngineState.md)

## Properties

### config

> **config**: `C`

The engine core config.

***

### state

> **state**: `S`

The engine core state.

***

### stateDirty

> **stateDirty**: `boolean`

The state dirty flag, which flags that the state needs saving.

***

### registeredInstances

> **registeredInstances**: `object`

The registered instances to use when components don't have custom types.
The default entry will be the first in the list.

#### Index Signature

\[`name`: `string`\]: `object`[]

***

### componentInstances

> **componentInstances**: `object`[]

The components.

#### instanceType

> **instanceType**: `string`

#### component

> **component**: `IComponent`

#### initialised

> **initialised**: `boolean`
