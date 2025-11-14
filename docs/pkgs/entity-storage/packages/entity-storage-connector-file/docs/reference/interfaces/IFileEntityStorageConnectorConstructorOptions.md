# Interface: IFileEntityStorageConnectorConstructorOptions

Options for the File Entity Storage Connector constructor.

## Properties

### entitySchema

> **entitySchema**: `string`

The name of the entity schema.

***

### partitionContextIds?

> `optional` **partitionContextIds**: `string`[]

The keys to use from the context ids to create partitions.

***

### config

> **config**: [`IFileEntityStorageConnectorConfig`](IFileEntityStorageConnectorConfig.md)

The configuration for the connector.
