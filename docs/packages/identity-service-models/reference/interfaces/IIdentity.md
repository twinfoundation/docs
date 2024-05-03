# Interface: IIdentity

Interface describing a service which provides identity operations.

## Hierarchy

- `IService`

  ↳ **`IIdentity`**

## Methods

### bootstrap

▸ **bootstrap**(`requestContext`): `Promise`\<`ILogEntry`[]\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for bootstrapping. |

#### Returns

`Promise`\<`ILogEntry`[]\>

The response of the bootstrapping as log entries.

#### Inherited from

IService.bootstrap

___

### identityCreate

▸ **identityCreate**(`requestContext`, `properties?`): `Promise`\<\{ `identity`: `string` ; `privateKey`: `string` ; `publicKey`: `string` ; `recoveryPhrase`: `string`  }\>

Create a new identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `properties?` | `IProperty`[] | The profile properties. |

#### Returns

`Promise`\<\{ `identity`: `string` ; `privateKey`: `string` ; `publicKey`: `string` ; `recoveryPhrase`: `string`  }\>

The created identity details.

___

### identityUpdate

▸ **identityUpdate**(`requestContext`, `identity`, `properties?`): `Promise`\<`void`\>

Update an identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to update. |
| `properties?` | `IProperty`[] | The profile properties. |

#### Returns

`Promise`\<`void`\>

Nothing.

___

### organization

▸ **organization**(`requestContext`, `organizationIdentity`): `Promise`\<\{ `name`: `string`  }\>

Get an organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `organizationIdentity` | `string` | The identity of the organization. |

#### Returns

`Promise`\<\{ `name`: `string`  }\>

The organization details.

___

### organizationUsers

▸ **organizationUsers**(`requestContext`, `identity`, `cursor?`): `Promise`\<\{ `nextPageCursor?`: `string` ; `users`: \{ `email`: `string` ; `name`: `string`  }[]  }\>

Get a list of all the users in an organisation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity the to store the requirements for. |
| `cursor?` | `string` | The cursor for paged requests. |

#### Returns

`Promise`\<\{ `nextPageCursor?`: `string` ; `users`: \{ `email`: `string` ; `name`: `string`  }[]  }\>

The list of organization users and cursor for paging.

___

### organizations

▸ **organizations**(`requestContext`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `organizations`: \{ `identity`: `string` ; `name`: `string`  }[] ; `pageSize?`: `number`  }\>

Get a list of all the organizations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `cursor?` | `string` | The cursor for paged requests. |
| `pageSize?` | `number` | The maximum number of items in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `organizations`: \{ `identity`: `string` ; `name`: `string`  }[] ; `pageSize?`: `number`  }\>

The list of organizations and cursor for paging.

___

### profileGet

▸ **profileGet**(`requestContext`, `identity`, `secondaryIndex?`): `Promise`\<[`IProfile`](IProfile.md)\>

Get the profile for an identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to update. |
| `secondaryIndex?` | `string` | Secondary index of the search parameter. |

#### Returns

`Promise`\<[`IProfile`](IProfile.md)\>

The profile properties for the identity.

___

### profileSet

▸ **profileSet**(`requestContext`, `identity`, `emailAddress`, `image?`, `properties?`): `Promise`\<`void`\>

Set the profile for an identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity to update. |
| `emailAddress` | `string` | The email address for the identity. |
| `image?` | `Uint8Array` | The identity image data. |
| `properties?` | `IProperty`[] | Properties for the profile. |

#### Returns

`Promise`\<`void`\>

Nothing.

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

▸ **verifiableCredentialCheck**\<`T`\>(`requestContext`, `verifiableCredential`): `Promise`\<`IDidCredentialVerification`\>

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

`Promise`\<`IDidCredentialVerification`\>

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

▸ **verifiableCredentialRequirementsSet**(`requestContext`, `identity`, `verifiableCredentialType`, `matchDomains?`, `requiredClaims?`): `Promise`\<`void`\>

Set the requirements for a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `identity` | `string` | The identity the to store the requirements for. |
| `verifiableCredentialType` | `string` | The type of verifiable credential requirements being stored. |
| `matchDomains?` | `string` | Verifiable credential applicants must match the users email domain. |
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
