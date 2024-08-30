# Interface: IAuditableItemGraphServiceConfig

Configuration for the auditable item graph service.

## Properties

### vaultKeyId?

> `optional` **vaultKeyId**: `string`

The key to use for the graph.

#### Default

```ts
auditable-item-graph
```

***

### enableIntegrityCheck?

> `optional` **enableIntegrityCheck**: `boolean`

Enable immutable integrity checking by storing the changes encrypted in immutable storage.
This will incur additional costs and should only be enabled if you require immutable integrity checking.

#### Default

```ts
false
```

***

### assertionMethodId?

> `optional` **assertionMethodId**: `string`

The assertion method id to use for the graph.

#### Default

```ts
auditable-item-graph
```
