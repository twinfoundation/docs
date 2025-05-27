# Interface: IVerifiableStorageGetRequest

Get the verifiable storage item.

## Properties

### pathParams

> **pathParams**: `object`

The data to be requested.

#### id

> **id**: `string`

The id of the verifiable storage item to resolve.

***

### body?

> `optional` **body**: `object`

The body optional param.

#### includeData?

> `optional` **includeData**: `boolean`

The flag to include the data.

##### Default

```ts
true
```

#### includeAllowList?

> `optional` **includeAllowList**: `boolean`

The flag to include the allow list.

##### Default

```ts
true
```
