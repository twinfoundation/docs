# Class: SynchronisedStorageClient

Client for performing synchronised storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `ISynchronisedStorageComponent`

## Constructors

### Constructor

> **new SynchronisedStorageClient**(`config`): `SynchronisedStorageClient`

Create a new instance of SynchronisedStorageClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`SynchronisedStorageClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `SynchronisedStorageClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`ISynchronisedStorageComponent.CLASS_NAME`

## Methods

### getDecryptionKey()

> **getDecryptionKey**(`actionRequest`): `Promise`\<`string`\>

Get the decryption key for the synchronised storage.
This is used to decrypt the data stored in the synchronised storage.

#### Parameters

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`string`\>

The decryption key.

#### Implementation of

`ISynchronisedStorageComponent.getDecryptionKey`

***

### syncChangeSet()

> **syncChangeSet**(`syncChangeSet`, `actionRequest`): `Promise`\<`void`\>

Synchronise a set of changes from an untrusted node, assumes this is a trusted node.

#### Parameters

##### syncChangeSet

`ISyncChangeSet`

The change set to synchronise.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ISynchronisedStorageComponent.syncChangeSet`
