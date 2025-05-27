# Interface: IVerifiableStorageCreateRequest

Store the data and return the verifiable storage item id.

## Properties

### body

> **body**: `object`

The data to be stored.

#### data

> **data**: `string`

The data for the verifiable storage item, this is a string serialized as base64.

#### allowList?

> `optional` **allowList**: `string`[]

The list of identities that are allowed to modify the item.

#### maxAllowListSize?

> `optional` **maxAllowListSize**: `number`

The maximum size of the allow list.

##### Default

```ts
100
```

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the verifiable storage item, defaults to component configured namespace.
