# Interface: ISynchronisedEntityStorageConnectorConstructorOptions

Options for the Synchronised Entity Storage Connector constructor.

## Properties

### entitySchema

> **entitySchema**: `string`

The name of the entity schema.

***

### entityStorageConnectorType

> **entityStorageConnectorType**: `string`

The entity storage connector type to use for actual data.

***

### eventBusComponentType?

> `optional` **eventBusComponentType**: `string`

The event bus component type.

#### Default

```ts
event-bus
```

***

### config?

> `optional` **config**: [`ISynchronisedEntityStorageConnectorConfig`](ISynchronisedEntityStorageConnectorConfig.md)

The configuration for the connector.
