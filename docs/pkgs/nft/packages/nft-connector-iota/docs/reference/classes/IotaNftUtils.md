# Class: IotaNftUtils

Utility functions for the iota nfts.

## Constructors

### Constructor

> **new IotaNftUtils**(): `IotaNftUtils`

#### Returns

`IotaNftUtils`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### nftIdToObjectId()

> `static` **nftIdToObjectId**(`nftIdUrn`): `string`

Convert an NFT id to an object id.

#### Parameters

##### nftIdUrn

`string`

The NFT id to convert in urn format.

#### Returns

`string`

The object id.

#### Throws

GeneralError if the NFT id is invalid.

***

### nftIdToPackageId()

> `static` **nftIdToPackageId**(`nftIdUrn`): `string`

Convert an NFT id to a package id.

#### Parameters

##### nftIdUrn

`string`

The NFT id to convert in urn format.

#### Returns

`string`

The package id.

#### Throws

GeneralError if the NFT id is invalid.
