# Interface: IStaticContextIdProcessorConfig

Configuration for the static id processor.

## Properties

### key

> **key**: `string`

The fixed identity key for request context.

***

### value

> **value**: `string`

The fixed identity value for request context.

***

### authOnly?

> `optional` **authOnly**: `boolean`

Only add the identity if the request is authenticated.
