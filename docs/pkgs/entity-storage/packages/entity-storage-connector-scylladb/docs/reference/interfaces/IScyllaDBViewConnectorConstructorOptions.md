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

### partitionContextIds?

> `optional` **partitionContextIds**: `string`[]

The keys to use from the context ids to create partitions.

***

### viewSchema

> **viewSchema**: `string`

The name of the view schema.

***

### config

> **config**: [`IScyllaDBViewConfig`](IScyllaDBViewConfig.md)

The configuration for the connector.
