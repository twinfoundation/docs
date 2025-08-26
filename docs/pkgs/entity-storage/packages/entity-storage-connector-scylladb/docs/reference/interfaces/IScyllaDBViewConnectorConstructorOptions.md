# Interface: IScyllaDBViewConnectorConstructorOptions

Options for the ScyllaDB View Connector constructor.

## Properties

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The type of logging component to use, defaults to no logging.

***

### entitySchema

> **entitySchema**: `string`

The name of the entity schema.

***

### viewSchema

> **viewSchema**: `string`

The name of the view schema.

***

### config

> **config**: [`IScyllaDBViewConfig`](IScyllaDBViewConfig.md)

The configuration for the connector.
