# @gtsc/attestation-service

## Classes

- [AttestationService](classes/AttestationService.md)

## Variables

### tags

• `Const` **tags**: `ITag`[]

The tag to associate with the routes.

## Functions

### attestationSign

▸ **attestationSign**(`requestContext`, `factoryServiceName`, `request`, `body?`): `Promise`\<`IAttestationSignResponse`\>

Sign the data and return the proof.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `factoryServiceName` | `string` | The name of the service to use in the routes. |
| `request` | `IAttestationSignRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`IAttestationSignResponse`\>

The response object with additional http response properties.

___

### attestationVerify

▸ **attestationVerify**(`requestContext`, `factoryServiceName`, `request`, `body?`): `Promise`\<`IAttestationVerifyResponse`\>

Verify the data and proof.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `factoryServiceName` | `string` | The name of the service to use in the routes. |
| `request` | `IAttestationVerifyRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`IAttestationVerifyResponse`\>

The response object with additional http response properties.

___

### generateRestRoutes

▸ **generateRestRoutes**(`baseRouteName`, `factoryServiceName`): `IRestRoute`[]

The REST routes for attestation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseRouteName` | `string` | Prefix to prepend to the paths. |
| `factoryServiceName` | `string` | The name of the service to use in the routes store in the ServiceFactory. |

#### Returns

`IRestRoute`[]

The generated routes.
