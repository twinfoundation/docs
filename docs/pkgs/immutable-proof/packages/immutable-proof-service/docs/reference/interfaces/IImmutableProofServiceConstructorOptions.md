# Interface: IImmutableProofServiceConstructorOptions

Options for the immutable proof service constructor.

## Properties

### immutableProofEntityStorageType?

> `optional` **immutableProofEntityStorageType**: `string`

The entity storage for proofs.

#### Default

```ts
immutable-proof
```

***

### verifiableStorageType?

> `optional` **verifiableStorageType**: `string`

The verifiable storage.

#### Default

```ts
verifiable-storage
```

***

### identityConnectorType?

> `optional` **identityConnectorType**: `string`

The identity connector type.

#### Default

```ts
identity
```

***

### backgroundTaskConnectorType?

> `optional` **backgroundTaskConnectorType**: `string`

The background task connector type.

#### Default

```ts
background-task
```

***

### eventBusComponentType?

> `optional` **eventBusComponentType**: `string`

The event bus component type, defaults to no event bus.

***

### config?

> `optional` **config**: [`IImmutableProofServiceConfig`](IImmutableProofServiceConfig.md)

The configuration for the connector.
