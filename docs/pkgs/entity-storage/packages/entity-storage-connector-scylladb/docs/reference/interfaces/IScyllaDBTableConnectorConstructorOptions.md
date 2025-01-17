# Interface: IScyllaDBTableConnectorConstructorOptions

Options for the ScyllaDB Table Connector constructor.

## Properties

### loggingConnectorType?

> `optional` **loggingConnectorType**: `string`

The type of logging connector to use, defaults to no logging.

***

### entitySchema

> **entitySchema**: `string`

The name of the entity schema.

***

### config

> **config**: [`IScyllaDBTableConfig`](IScyllaDBTableConfig.md)

The configuration for the connector.
