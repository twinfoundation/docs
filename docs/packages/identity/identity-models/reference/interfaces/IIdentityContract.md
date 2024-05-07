# Interface: IIdentityContract

Interface describing a contract which provides identity operations.

## Hierarchy

- `IService`

  ↳ **`IIdentityContract`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.bootstrap

___

### identityCreate

▸ **identityCreate**(`requestContext`, `role`, `properties?`): `Promise`\<\{ `identity`: `string`  }\>

Create a new identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | [`IdentityRole`](../enums/IdentityRole.md) | The role for the identity. |
| `properties?` | `IProperty`[] | The profile properties. |

#### Returns

`Promise`\<\{ `identity`: `string`  }\>

The created identity details.

___

### itemGet

▸ **itemGet**(`requestContext`, `identity`, `propertyNames?`): `Promise`\<\{ `properties?`: `IProperty`[] ; `role`: [`IdentityRole`](../enums/IdentityRole.md)  }\>

Get an item by identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity of the item to get. |
| `propertyNames?` | `string`[] | The properties to get for the item, defaults to all. |

#### Returns

`Promise`\<\{ `properties?`: `IProperty`[] ; `role`: [`IdentityRole`](../enums/IdentityRole.md)  }\>

The items properties.

___

### itemUpdate

▸ **itemUpdate**(`requestContext`, `identity`, `properties`): `Promise`\<`void`\>

Update an item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to update. |
| `properties` | `IProperty`[] | Properties for the profile, set a properties value to undefined to remove it. |

#### Returns

`Promise`\<`void`\>

Nothing.

___

### list

▸ **list**(`requestContext`, `role`, `propertyNames?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Get a list of the requested types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `role` | [`IdentityRole`](../enums/IdentityRole.md) | The role type to lookup. |
| `propertyNames?` | `string`[] | The properties to get for the identities, default to all if undefined. |
| `cursor?` | `string` | The cursor for paged requests. |
| `pageSize?` | `number` | The maximum number of items in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `identities`: \{ `identity`: `string` ; `properties?`: `IProperty`[]  }[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

The list of items and cursor for paging.

___

### signData

▸ **signData**(`requestContext`, `identity`, `bytes`, `verificationMethod`): `Promise`\<\{ `signatureType`: `string` ; `signatureValue`: `string`  }\>

Sign arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to create the signature for. |
| `bytes` | `Uint8Array` | The data bytes to sign. |
| `verificationMethod` | `string` | The verification method to use. |

#### Returns

`Promise`\<\{ `signatureType`: `string` ; `signatureValue`: `string`  }\>

The signature type and value.

___

### start

▸ **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.start

___

### stop

▸ **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

IService.stop

___

### verifiableCredential

▸ **verifiableCredential**\<`T`\>(`requestContext`, `verifiableCredentialId`): `Promise`\<`IDidVerifiableCredential`\<`T`\>\>

Gets a verifiable credential.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `verifiableCredentialId` | `string` | The id of the verifiable credential. |

#### Returns

`Promise`\<`IDidVerifiableCredential`\<`T`\>\>

The verifiable credential if successful.

___

### verifiableCredentialApplications

▸ **verifiableCredentialApplications**(`requestContext`, `identity`, `identityIsIssuer?`, `state?`, `cursor?`): `Promise`\<\{ `applications`: [`IIdentityVerifiableCredentialApplication`](IIdentityVerifiableCredentialApplication.md)[] ; `cursor?`: `string`  }\>

Gets all the verifiable credential applications for an identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to get the verifiable credential applications for. |
| `identityIsIssuer?` | `boolean` | The identity is the issuer not the subject. |
| `state?` | [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md) | The state of the verifiable application credentials to get. |
| `cursor?` | `string` | The cursor for paged requests. |

#### Returns

`Promise`\<\{ `applications`: [`IIdentityVerifiableCredentialApplication`](IIdentityVerifiableCredentialApplication.md)[] ; `cursor?`: `string`  }\>

The verifiable credential applications details.

___

### verifiableCredentialCheck

▸ **verifiableCredentialCheck**\<`T`\>(`requestContext`, `verifiableCredential`): `Promise`\<`IDidVerifiableCredential`\<`T`\>\>

Checks a verifiable credential.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `verifiableCredential` | `IDidVerifiableCredential`\<`T`\> | The verifiable credential details to check. |

#### Returns

`Promise`\<`IDidVerifiableCredential`\<`T`\>\>

The verifiable credential check details.

___

### verifiableCredentialCreate

▸ **verifiableCredentialCreate**(`requestContext`, `issuer`, `subject`, `verifiableCredentialType`, `claims?`): `Promise`\<`string`\>

Create a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `issuer` | `string` | The entity they want to create the verifiable credential with. |
| `subject` | `string` | The identity that is the subject of the verifiable credential. |
| `verifiableCredentialType` | `string` | The type of verifiable credential to perform. |
| `claims?` | `IProperty`[] | The completed claims providing information to create the verifiable credential. |

#### Returns

`Promise`\<`string`\>

The id of the verification credential generated, may not be immediately valid.

___

### verifiableCredentialRequirementsGet

▸ **verifiableCredentialRequirementsGet**(`requestContext`, `identity`, `verifiableCredentialType`): `Promise`\<\{ `matchDomains?`: `string` ; `requiredClaims?`: [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[]  }\>

Get the requirements for a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to get the requirements for. |
| `verifiableCredentialType` | `string` | The type of verifiable credential to get the requirements. |

#### Returns

`Promise`\<\{ `matchDomains?`: `string` ; `requiredClaims?`: [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[]  }\>

The requirements for creating the verifiable credential.

___

### verifiableCredentialRequirementsSet

▸ **verifiableCredentialRequirementsSet**(`requestContext`, `identity`, `verifiableCredentialType`, `requiredClaims?`): `Promise`\<`void`\>

Set the requirements for a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity the to store the requirements for. |
| `verifiableCredentialType` | `string` | The type of verifiable credential requirements being stored. |
| `requiredClaims?` | [`IIdentityClaimRequirement`](IIdentityClaimRequirement.md)[] | The claims needed to create the verifiable credential. |

#### Returns

`Promise`\<`void`\>

Nothing.

___

### verifiableCredentialUpdate

▸ **verifiableCredentialUpdate**(`requestContext`, `verifiableCredentialId`, `state`, `rejectedCode?`): `Promise`\<[`IIdentityVerifiableCredentialApplication`](IIdentityVerifiableCredentialApplication.md)\>

Update a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `verifiableCredentialId` | `string` | The verifiable credential to update. |
| `state` | [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md) | The state to update to. |
| `rejectedCode?` | `string` | The code for any rejections. |

#### Returns

`Promise`\<[`IIdentityVerifiableCredentialApplication`](IIdentityVerifiableCredentialApplication.md)\>

The updated application.

___

### verifyData

▸ **verifyData**(`requestContext`, `identity`, `bytes`, `verificationMethod`, `signatureType`, `signatureValue`): `Promise`\<`boolean`\>

Verify arbitrary data with the specified verification method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to verify the signature for. |
| `bytes` | `Uint8Array` | The data bytes to sign. |
| `verificationMethod` | `string` | The verification method to use. |
| `signatureType` | `string` | The type of the signature for the proof. |
| `signatureValue` | `string` | The value of the signature for the proof. |

#### Returns

`Promise`\<`boolean`\>

True if the signature is valid.
