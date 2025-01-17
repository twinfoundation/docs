# Interface: IAuditableItemStreamServiceConstructorOptions

Options for the auditable item stream service constructor.

## Properties

### immutableProofComponentType?

> `optional` **immutableProofComponentType**: `string`

The immutable proof component type.

#### Default

```ts
immutable-proof
```

***

### streamEntityStorageType?

> `optional` **streamEntityStorageType**: `string`

The entity storage for stream.

#### Default

```ts
auditable-item-stream
```

***

### streamEntryEntityStorageType?

> `optional` **streamEntryEntityStorageType**: `string`

The entity storage for stream entries.

#### Default

```ts
auditable-item-stream-entry
```

***

### eventBusComponentType?

> `optional` **eventBusComponentType**: `string`

The event bus component type, defaults to no event bus.

***

### config?

> `optional` **config**: [`IAuditableItemStreamServiceConfig`](IAuditableItemStreamServiceConfig.md)

The configuration for the connector.
