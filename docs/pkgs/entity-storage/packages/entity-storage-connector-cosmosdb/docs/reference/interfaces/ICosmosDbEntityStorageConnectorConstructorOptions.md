# Interface: ICosmosDbEntityStorageConnectorConstructorOptions

The options for the cosmos db entity storage connector constructor.

## Properties

### entitySchema

> **entitySchema**: `string`

The schema for the entity.

***

### loggingConnectorType?

> `optional` **loggingConnectorType**: `string`

The type of logging connector to use.

#### Default

```ts
logging
```

***

### config

> **config**: [`ICosmosDbEntityStorageConnectorConfig`](ICosmosDbEntityStorageConnectorConfig.md)

The configuration for the connector.
