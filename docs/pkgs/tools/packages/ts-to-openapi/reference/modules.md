# @gtsc/ts-to-openapi

## Classes

- [CLI](classes/CLI.md)

## Interfaces

- [IInputPath](interfaces/IInputPath.md)
- [IInputResult](interfaces/IInputResult.md)
- [IOpenApi](interfaces/IOpenApi.md)
- [IOpenApiExample](interfaces/IOpenApiExample.md)
- [IOpenApiHeader](interfaces/IOpenApiHeader.md)
- [IOpenApiPathMethod](interfaces/IOpenApiPathMethod.md)
- [IOpenApiResponse](interfaces/IOpenApiResponse.md)
- [IOpenApiSecurityScheme](interfaces/IOpenApiSecurityScheme.md)
- [IPackageJson](interfaces/IPackageJson.md)
- [ITsToOpenApiConfig](interfaces/ITsToOpenApiConfig.md)

## Variables

### HTTP\_STATUS\_CODE\_MAP

• `Const` **HTTP\_STATUS\_CODE\_MAP**: `Object`

#### Index signature

▪ [id: `string`]: \{ `code`: `HttpStatusCodes` ; `example?`: `unknown` ; `responseType`: `string`  }

## Functions

### createGenerator

▸ **createGenerator**(`config`): `SchemaGenerator`

Override for the default schema generator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Config` | The configuration for the schema generator. |

#### Returns

`SchemaGenerator`

The schema generator.

___

### createProgram

▸ **createProgram**(`config`): `ts.Program`

Override for the default schema generator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `CompletedConfig` | The configuration for the schema generator. |

#### Returns

`ts.Program`

The program.

**`Throws`**

When no root names are found.

___

### getHttpExampleFromType

▸ **getHttpExampleFromType**(`errorCodeType`): `unknown`

Get the HTTP example from the error code type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCodeType` | `string` | The error code type. |

#### Returns

`unknown`

The example.

___

### getHttpStatusCodeFromType

▸ **getHttpStatusCodeFromType**(`errorCodeType`): `HttpStatusCodes`

Get the HTTP status code from the error code type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCodeType` | `string` | The error code type. |

#### Returns

`HttpStatusCodes`

The HTTP status code.
