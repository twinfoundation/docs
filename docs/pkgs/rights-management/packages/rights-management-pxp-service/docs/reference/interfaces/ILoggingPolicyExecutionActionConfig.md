# Interface: ILoggingPolicyExecutionActionConfig

Options for the Logging Policy Execution Action Component.

## Properties

### stages?

> `optional` **stages**: `PolicyDecisionStage`[]

The policy decision stages to log, if undefined defaults to all.

***

### includeData?

> `optional` **includeData**: `boolean`

Whether to include the data in the log.

#### Default

```ts
false
```

***

### includePolicies?

> `optional` **includePolicies**: `boolean`

Whether to include the policies in the log.

#### Default

```ts
false
```

***

### includeDecisions?

> `optional` **includeDecisions**: `boolean`

Whether to include the decisions in the log.

#### Default

```ts
false
```
