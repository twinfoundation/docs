# Interface: IAuditableItemGraphServiceConstructorOptions

Options for the constructor of the auditable item graph service.

## Properties

### immutableProofComponentType?

> `optional` **immutableProofComponentType**: `string`

The immutable proof component type.

#### Default

```ts
immutable-proof
```

***

### vertexEntityStorageType?

> `optional` **vertexEntityStorageType**: `string`

The entity storage for vertices.

#### Default

```ts
auditable-item-graph-vertex
```

***

### changesetEntityStorageType?

> `optional` **changesetEntityStorageType**: `string`

The entity storage for changesets.

#### Default

```ts
auditable-item-graph-changeset
```

***

### eventBusComponentType?

> `optional` **eventBusComponentType**: `string`

The event bus component type, defaults to no event bus.

***

### config?

> `optional` **config**: [`IAuditableItemGraphServiceConfig`](IAuditableItemGraphServiceConfig.md)

The configuration for the service.
