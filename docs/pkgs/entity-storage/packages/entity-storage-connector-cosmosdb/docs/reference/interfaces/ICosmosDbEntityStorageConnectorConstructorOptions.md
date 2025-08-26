# Interface: ICosmosDbEntityStorageConnectorConstructorOptions

The options for the cosmos db entity storage connector constructor.

## Properties

### entitySchema

> **entitySchema**: `string`

The schema for the entity.

***

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The type of logging component to use.

#### Default

```ts
logging
```

***

### config

> **config**: [`ICosmosDbEntityStorageConnectorConfig`](ICosmosDbEntityStorageConnectorConfig.md)

The configuration for the connector.
