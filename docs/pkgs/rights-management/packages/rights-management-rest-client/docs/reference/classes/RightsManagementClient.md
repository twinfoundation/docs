# Class: RightsManagementClient

Client for performing Rights Management through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IRightsManagementComponent`

## Constructors

### Constructor

> **new RightsManagementClient**(`config`): `RightsManagementClient`

Create a new instance of RightsManagementClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`RightsManagementClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IRightsManagementComponent.CLASS_NAME`

## Methods

### papCreate()

> **papCreate**(`policy`): `Promise`\<`string`\>

PAP: Create a new policy with auto-generated UID.

#### Parameters

##### policy

`Omit`\<`IOdrlPolicy`, `"uid"`\>

The policy to create (uid will be auto-generated).

#### Returns

`Promise`\<`string`\>

The UID of the created policy.

#### Implementation of

`IRightsManagementComponent.papCreate`

***

### papUpdate()

> **papUpdate**(`policy`): `Promise`\<`void`\>

PAP: Update an existing policy.

#### Parameters

##### policy

`IOdrlPolicy`

The policy to update (must include uid).

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IRightsManagementComponent.papUpdate`

***

### papRetrieve()

> **papRetrieve**(`policyId`): `Promise`\<`IOdrlPolicy`\>

PAP: Retrieve a policy.

#### Parameters

##### policyId

`string`

The id of the policy to retrieve.

#### Returns

`Promise`\<`IOdrlPolicy`\>

The policy.

#### Implementation of

`IRightsManagementComponent.papRetrieve`

***

### papRemove()

> **papRemove**(`policyId`): `Promise`\<`void`\>

PAP: Remove a policy.

#### Parameters

##### policyId

`string`

The id of the policy to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IRightsManagementComponent.papRemove`

***

### papQuery()

> **papQuery**(`conditions?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string`; `policies`: `IOdrlPolicy`[]; \}\>

PAP: Query the policies using the specified conditions.

#### Parameters

##### conditions?

`EntityCondition`\<`IOdrlPolicy`\>

The conditions to use for the query.

##### cursor?

`string`

The cursor to use for pagination.

##### pageSize?

`number`

The number of results to return per page.

#### Returns

`Promise`\<\{ `cursor?`: `string`; `policies`: `IOdrlPolicy`[]; \}\>

Cursor for next page of results and the policies matching the query.

#### Implementation of

`IRightsManagementComponent.papQuery`
