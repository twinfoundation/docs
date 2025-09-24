# Interface: IPolicyNegotiationAdminPointServiceConstructorOptions

Options for the Policy Negotiation Admin Point Component.

## Properties

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

The logging component for logging policy negotiation.

#### Default

```ts
logging
```

***

### taskSchedulerComponentType?

> `optional` **taskSchedulerComponentType**: `string`

The task scheduler component for scheduling background tasks.

#### Default

```ts
task-scheduler
```

***

### policyNegotiationEntityStorageType?

> `optional` **policyNegotiationEntityStorageType**: `string`

The entity storage component for storing policy negotiation.

#### Default

```ts
policy-negotiation
```

***

### policyInformationPointComponentType?

> `optional` **policyInformationPointComponentType**: `string`

The type of the policy information point component.

#### Default

```ts
policy-information-point
```

***

### config?

> `optional` **config**: [`IPolicyNegotiationAdminPointServiceConfig`](IPolicyNegotiationAdminPointServiceConfig.md)

Configuration options for the policy negotiation point service.
