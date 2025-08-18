# Interface: ISynchronisedStorageServiceConstructorOptions

Options for the Synchronised Storage Service constructor.

## Properties

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The logging component.

***

### eventBusComponentType?

> `optional` **eventBusComponentType**: `string`

The event bus component type.

***

### vaultConnectorType?

> `optional` **vaultConnectorType**: `string`

The vault connector type.

***

### syncSnapshotStorageConnectorType?

> `optional` **syncSnapshotStorageConnectorType**: `string`

The entity storage connector type to use for sync snapshots.

#### Default

```ts
sync-snapshot-entry
```

***

### blobStorageConnectorType?

> `optional` **blobStorageConnectorType**: `string`

The blob storage connector used for remote sync state.

#### Default

```ts
blob-storage
```

***

### verifiableStorageConnectorType?

> `optional` **verifiableStorageConnectorType**: `string`

The verifiable storage connector type to use for decentralised state.

#### Default

```ts
verifiable-storage
```

***

### identityConnectorType?

> `optional` **identityConnectorType**: `string`

The identity connector.

#### Default

```ts
identity
```

***

### taskSchedulerComponentType?

> `optional` **taskSchedulerComponentType**: `string`

The task scheduler component.

#### Default

```ts
task-scheduler
```

***

### trustedSynchronisedStorageComponentType?

> `optional` **trustedSynchronisedStorageComponentType**: `string`

The synchronised entity storage component type to use if this node is not trusted.
If this is set, this node uses it as the trusted node to store changesets.

***

### config

> **config**: [`ISynchronisedStorageServiceConfig`](ISynchronisedStorageServiceConfig.md)

The configuration for the connector.
