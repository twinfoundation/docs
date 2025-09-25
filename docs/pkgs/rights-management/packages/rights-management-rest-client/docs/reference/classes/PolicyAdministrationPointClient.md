# Class: PolicyAdministrationPointClient

Client for performing Rights Management Policy Administration through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IPolicyAdministrationPointComponent`

## Constructors

### Constructor

> **new PolicyAdministrationPointClient**(`config`): `PolicyAdministrationPointClient`

Create a new instance of PolicyAdministrationPointClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`PolicyAdministrationPointClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IPolicyAdministrationPointComponent.CLASS_NAME`

## Methods

### create()

> **create**(`policy`): `Promise`\<`string`\>

Create a new policy with auto-generated UID.

#### Parameters

##### policy

`Omit`\<`IOdrlPolicy`, `"uid"`\> & `object`

The policy to create (uid will be auto-generated).

#### Returns

`Promise`\<`string`\>

The UID of the created policy.

#### Implementation of

`IPolicyAdministrationPointComponent.create`

***

### update()

> **update**(`policy`): `Promise`\<`void`\>

Update an existing policy.

#### Parameters

##### policy

`IOdrlPolicy`

The policy to update (must include uid).

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyAdministrationPointComponent.update`

***

### get()

> **get**(`policyId`): `Promise`\<`IOdrlPolicy`\>

Get a policy.

#### Parameters

##### policyId

`string`

The id of the policy to get.

#### Returns

`Promise`\<`IOdrlPolicy`\>

The policy.

#### Implementation of

`IPolicyAdministrationPointComponent.get`

***

### remove()

> **remove**(`policyId`): `Promise`\<`void`\>

Remove a policy.

#### Parameters

##### policyId

`string`

The id of the policy to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IPolicyAdministrationPointComponent.remove`

***

### query()

> **query**(`conditions?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string`; `policies`: `IOdrlPolicy`[]; \}\>

Query the policies using the specified conditions.

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

`IPolicyAdministrationPointComponent.query`
