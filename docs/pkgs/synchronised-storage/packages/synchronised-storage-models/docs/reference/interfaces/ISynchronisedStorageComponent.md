# Interface: ISynchronisedStorageComponent

Class for performing synchronised storage operations.

## Extends

- `IComponent`

## Methods

### getDecryptionKey()

> **getDecryptionKey**(`nodeIdentity`, `proof`): `Promise`\<`string`\>

Get the decryption key for the synchronised storage.
This is used to decrypt the data stored in the synchronised storage.

#### Parameters

##### nodeIdentity

`string`

The identity of the node requesting the decryption key.

##### proof

`IProof`

The proof of the request so we know the request is from the specified node.

#### Returns

`Promise`\<`string`\>

The decryption key.

***

### syncChangeSet()

> **syncChangeSet**(`syncChangeSet`): `Promise`\<`void`\>

Synchronise a set of changes from an untrusted node, assumes this is a trusted node.

#### Parameters

##### syncChangeSet

[`ISyncChangeSet`](ISyncChangeSet.md)

The change set to synchronise.

#### Returns

`Promise`\<`void`\>

Nothing.
