# Class: IotaVerifiableStorageUtils

Utility functions for the iota verifiable storage.

## Constructors

### Constructor

> **new IotaVerifiableStorageUtils**(): `IotaVerifiableStorageUtils`

#### Returns

`IotaVerifiableStorageUtils`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### verifiableStorageIdToObjectId()

> `static` **verifiableStorageIdToObjectId**(`verifiableStorageIdUrn`): `string`

Convert a verifiable storage id to an object id.

#### Parameters

##### verifiableStorageIdUrn

`string`

The verifiable storage id to convert in urn format.

#### Returns

`string`

The object id.

#### Throws

GeneralError if the verifiable storage id is invalid.

***

### verifiableStorageIdToPackageId()

> `static` **verifiableStorageIdToPackageId**(`verifiableStorageIdUrn`): `string`

Convert a verifiable storage id to a package id.

#### Parameters

##### verifiableStorageIdUrn

`string`

The verifiable storage id to convert in urn format.

#### Returns

`string`

The package id.

#### Throws

GeneralError if the verifiable storage id is invalid.
