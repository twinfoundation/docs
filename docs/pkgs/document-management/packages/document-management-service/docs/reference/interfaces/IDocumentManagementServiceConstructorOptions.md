# Interface: IDocumentManagementServiceConstructorOptions

Options for the document management Service constructor.

## Properties

### auditableItemGraphComponentType?

> `optional` **auditableItemGraphComponentType**: `string`

The type of the auditable item graph component.

#### Default

```ts
auditable-item-graph
```

***

### blobStorageComponentType?

> `optional` **blobStorageComponentType**: `string`

The type of the blob storage component.

#### Default

```ts
blob-storage
```

***

### attestationComponentType?

> `optional` **attestationComponentType**: `string`

The type of the attestation component.

#### Default

```ts
attestation
```

***

### dataProcessingComponentType?

> `optional` **dataProcessingComponentType**: `string`

The type of the data processing component.

#### Default

```ts
data-processing
```

***

### config?

> `optional` **config**: [`IDocumentManagementServiceConfig`](IDocumentManagementServiceConfig.md)

The configuration for the service.
