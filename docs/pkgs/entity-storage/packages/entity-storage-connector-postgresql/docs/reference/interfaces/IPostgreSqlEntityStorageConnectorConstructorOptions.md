# Interface: IPostgreSqlEntityStorageConnectorConstructorOptions

The options for the PostgreSql entity storage connector constructor.

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

> **config**: [`IPostgreSqlEntityStorageConnectorConfig`](IPostgreSqlEntityStorageConnectorConfig.md)

The configuration for the connector.
