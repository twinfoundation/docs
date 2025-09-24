# Interface: IEngineModuleConfig

Configuration for an engine module.

## Properties

### id

> **id**: `string`

The unique identifier for the module.

***

### moduleName

> **moduleName**: `string`

The module that implements the additional component.

***

### className

> **className**: `string`

The class name of the additional component.

***

### dependencies?

> `optional` **dependencies**: `object`[]

Additional dependencies required by the component.

#### propertyName

> **propertyName**: `string`

#### componentName

> **componentName**: `string`

#### features?

> `optional` **features**: `string`[]

#### isOptional?

> `optional` **isOptional**: `boolean`

***

### config?

> `optional` **config**: `unknown`

Additional configuration for the component.
