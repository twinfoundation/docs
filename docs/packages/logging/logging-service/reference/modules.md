# @gtsc/logging-service

## Classes

- [LoggingService](classes/LoggingService.md)

## Variables

### tags

• `Const` **tags**: `ITag`[]

The tag to associate with the routes.

## Functions

### generateRestRoutes

▸ **generateRestRoutes**(`baseRouteName`, `factoryServiceName`): `IRestRoute`[]

The REST routes for logging.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseRouteName` | `string` | Prefix to prepend to the paths. |
| `factoryServiceName` | `string` | The name of the service to use in the routes store in the ServiceFactory. |

#### Returns

`IRestRoute`[]

The generated routes.

___

### loggingCreate

▸ **loggingCreate**(`requestContext`, `factoryServiceName`, `request`, `body?`): `Promise`\<`ICreatedResponse`\>

Create a new log entry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `factoryServiceName` | `string` | The name of the service to use in the routes. |
| `request` | `ILoggingCreateRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.

___

### loggingList

▸ **loggingList**(`requestContext`, `factoryServiceName`, `request`, `body?`): `Promise`\<`ILoggingListResponse`\>

Get a list of the logging entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The request context for the API. |
| `factoryServiceName` | `string` | The name of the service to use in the routes. |
| `request` | `ILoggingListRequest` | The request. |
| `body?` | `unknown` | The body if required for pure content. |

#### Returns

`Promise`\<`ILoggingListResponse`\>

The response object with additional http response properties.
