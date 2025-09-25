# Interface: IPolicyEnforcementPointServiceConstructorOptions

Options for the Policy Enforcement Point Component.

## Properties

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The logging component for logging policy enforcement.

#### Default

```ts
logging
```

***

### policyDecisionPointComponentType?

> `optional` **policyDecisionPointComponentType**: `string`

The type of the policy decision point component.

#### Default

```ts
policy-decision-point
```

***

### config?

> `optional` **config**: [`IPolicyEnforcementPointServiceConfig`](IPolicyEnforcementPointServiceConfig.md)

The configuration for the Policy Enforcement Point Service.
