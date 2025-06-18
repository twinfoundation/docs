# Interface: IBlobStorageServiceConstructorOptions

Options for the Blob Storage Service constructor.

## Properties

### entryEntityStorageType?

> `optional` **entryEntityStorageType**: `string`

The type of the storage connector for the metadata.

#### Default

```ts
blob-storage-entry
```

***

### vaultConnectorType?

> `optional` **vaultConnectorType**: `string`

The type of the vault connector for encryption.

***

### config?

> `optional` **config**: [`IBlobStorageServiceConfig`](IBlobStorageServiceConfig.md)

The configuration for the service.
