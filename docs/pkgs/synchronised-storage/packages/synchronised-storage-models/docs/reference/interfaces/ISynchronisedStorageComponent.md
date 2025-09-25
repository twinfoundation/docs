# Interface: ISynchronisedStorageComponent

Class for performing synchronised storage operations.

## Extends

- `IComponent`

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

***

### syncChangeSet()

> **syncChangeSet**(`syncChangeSet`, `actionRequest`): `Promise`\<`void`\>

Synchronise a set of changes from an untrusted node, assumes this is a trusted node.

#### Parameters

##### syncChangeSet

[`ISyncChangeSet`](ISyncChangeSet.md)

The change set to synchronise.

##### actionRequest

`IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.

#### Returns

`Promise`\<`void`\>

Nothing.
