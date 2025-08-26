# Interface: IMySqlEntityStorageConnectorConstructorOptions

The options for the MySql entity storage connector constructor.

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

> **config**: [`IMySqlEntityStorageConnectorConfig`](IMySqlEntityStorageConnectorConfig.md)

The configuration for the connector.
