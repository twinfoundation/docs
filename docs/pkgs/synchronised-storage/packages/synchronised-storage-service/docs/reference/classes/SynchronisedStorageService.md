# Class: SynchronisedStorageService

Class for performing synchronised storage operations.

## Implements

- `ISynchronisedStorageComponent`

## Constructors

### Constructor

> **new SynchronisedStorageService**(`options`): `SynchronisedStorageService`

Create a new instance of SynchronisedStorageService.

#### Parameters

##### options

[`ISynchronisedStorageServiceConstructorOptions`](../interfaces/ISynchronisedStorageServiceConstructorOptions.md)

The options for the service.

#### Returns

`SynchronisedStorageService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ISynchronisedStorageComponent.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingComponentType`): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

##### nodeIdentity

`string`

The identity of the node starting the component.

##### nodeLoggingComponentType

The node logging component type.

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ISynchronisedStorageComponent.start`

***

### stop()

> **stop**(`nodeIdentity`, `nodeLoggingComponentType`): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

##### nodeIdentity

`string`

The identity of the node stopping the component.

##### nodeLoggingComponentType

The node logging component type.

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ISynchronisedStorageComponent.stop`

***

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
