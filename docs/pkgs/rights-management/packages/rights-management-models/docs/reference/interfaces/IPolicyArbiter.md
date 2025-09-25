# Interface: IPolicyArbiter

Interface describing a Policy Arbiter.

## Methods

### supportedPolicies()

> **supportedPolicies**(): [`IPolicyLocator`](IPolicyLocator.md)[]

The policies supported by this arbiter.

#### Returns

[`IPolicyLocator`](IPolicyLocator.md)[]

The supported policies, if empty can be used for all.

***

### decide()

> **decide**\<`D`\>(`locator`, `information?`, `policies?`, `data?`): `Promise`\<[`IPolicyDecision`](IPolicyDecision.md)[]\>

Makes decisions regarding policy access to data.

#### Type Parameters

##### D

`D` = `unknown`

#### Parameters

##### locator

[`IPolicyLocator`](IPolicyLocator.md)

The locator to find relevant policies.

##### information?

[`IPolicyInformation`](IPolicyInformation.md)

Information provided by the requester to determine if a policy can be created.

##### policies?

`IOdrlPolicy`[]

The policies that apply to the data.

##### data?

`D`

The data to make a decision on.

#### Returns

`Promise`\<[`IPolicyDecision`](IPolicyDecision.md)[]\>

The decisions about access to the data.
