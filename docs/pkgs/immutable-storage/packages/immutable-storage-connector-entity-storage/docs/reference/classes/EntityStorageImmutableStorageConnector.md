# Class: EntityStorageImmutableStorageConnector

Class for performing immutable storage operations on entity storage.

## Implements

- `IImmutableStorageConnector`

## Constructors

### new EntityStorageImmutableStorageConnector()

> **new EntityStorageImmutableStorageConnector**(`options`?): [`EntityStorageImmutableStorageConnector`](EntityStorageImmutableStorageConnector.md)

Create a new instance of EntityStorageImmutableStorageConnector.

#### Parameters

• **options?**

The dependencies for the class.

• **options.immutableStorageEntityStorageType?**: `string`

The entity storage for immutable storage items, defaults to "immutable-item".

#### Returns

[`EntityStorageImmutableStorageConnector`](EntityStorageImmutableStorageConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the immutable storage connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IImmutableStorageConnector.CLASS_NAME`

## Methods

### store()

> **store**(`controller`, `data`): `Promise`\<`object`\>

Store an item in immutable storage.

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **data**: `Uint8Array`

The data to store.

#### Returns

`Promise`\<`object`\>

The id of the stored immutable item in urn format.

##### id

> **id**: `string`

##### receipt

> **receipt**: `IJsonLdNodeObject`

#### Implementation of

`IImmutableStorageConnector.store`

***

### get()

> **get**(`id`, `options`?): `Promise`\<`object`\>

Get an immutable item.

#### Parameters

• **id**: `string`

The id of the item to get.

• **options?**

Additional options for getting the item.

• **options.includeData?**: `boolean`

Should the data be included in the response, defaults to true.

#### Returns

`Promise`\<`object`\>

The data for the item and the receipt.

##### data?

> `optional` **data**: `Uint8Array`

##### receipt

> **receipt**: `IJsonLdNodeObject`

#### Implementation of

`IImmutableStorageConnector.get`

***

### remove()

> **remove**(`controller`, `id`): `Promise`\<`void`\>

Remove the item from immutable storage.

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **id**: `string`

The id of the immutable item to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IImmutableStorageConnector.remove`
