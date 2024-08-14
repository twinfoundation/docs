# Interface: IBlobStorageServiceConfig

Configuration for the blob storage service.

## Properties

### vaultKeyId?

> `optional` **vaultKeyId**: `string`

The name of the vault key to use for encryption if the service has a vault connector configured.

#### Default

```ts
blob-storage.
```

***

### defaultNamespace?

> `optional` **defaultNamespace**: `string`

The namespace of the default storage connector to use.
Defaults to the first entry in the factory if not provided.
