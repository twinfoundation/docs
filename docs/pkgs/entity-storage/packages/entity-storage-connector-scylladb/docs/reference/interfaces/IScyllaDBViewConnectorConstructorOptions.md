# Interface: IScyllaDBViewConnectorConstructorOptions

Options for the ScyllaDB View Connector constructor.

## Properties

### loggingConnectorType?

> `optional` **loggingConnectorType**: `string`

The type of logging connector to use, defaults to no logging.

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
