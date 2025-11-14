# Interface: ICredential

A credential with subject.

## Extends

- `IDidVerifiableCredentialV2`

## Extended by

- [`IDataResourceCredential`](IDataResourceCredential.md)
- [`IDataSpaceConnectorCredential`](IDataSpaceConnectorCredential.md)
- [`IComplianceCredential`](IComplianceCredential.md)
- [`IParticipantCredential`](IParticipantCredential.md)
- [`IServiceOfferingCredential`](IServiceOfferingCredential.md)

## Properties

### id

> **id**: `string`

The Id of the credential, it is mandatory.

#### Overrides

`IDidVerifiableCredentialV2.id`

***

### issuer

> **issuer**: `string`

The issuer of the credential, it is mandatory.

#### Overrides

`IDidVerifiableCredentialV2.issuer`

***

### credentialSubject

> **credentialSubject**: `IJsonLdNodeObject` & `object` \| `IJsonLdNodeObject`[] & `object`

Credential subject must always include id and type

#### Overrides

`IDidVerifiableCredentialV2.credentialSubject`
