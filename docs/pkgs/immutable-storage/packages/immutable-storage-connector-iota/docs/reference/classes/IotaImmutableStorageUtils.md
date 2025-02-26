# Class: IotaImmutableStorageUtils

Utility functions for the iota immutable storage.

## Constructors

### new IotaImmutableStorageUtils()

> **new IotaImmutableStorageUtils**(): [`IotaImmutableStorageUtils`](IotaImmutableStorageUtils.md)

#### Returns

[`IotaImmutableStorageUtils`](IotaImmutableStorageUtils.md)

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### immutableStorageIdToObjectId()

> `static` **immutableStorageIdToObjectId**(`immutableStorageIdUrn`): `string`

Convert an immutable storage id to an object id.

#### Parameters

##### immutableStorageIdUrn

`string`

The immutable storage id to convert in urn format.

#### Returns

`string`

The object id.

#### Throws

GeneralError if the immutable storage id is invalid.

***

### immutableStorageIdToPackageId()

> `static` **immutableStorageIdToPackageId**(`immutableStorageIdUrn`): `string`

Convert an immutable storage id to a package id.

#### Parameters

##### immutableStorageIdUrn

`string`

The immutable storage id to convert in urn format.

#### Returns

`string`

The package id.

#### Throws

GeneralError if the immutable storage id is invalid.
