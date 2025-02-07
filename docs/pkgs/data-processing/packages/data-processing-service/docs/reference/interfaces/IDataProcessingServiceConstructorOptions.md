# Interface: IDataProcessingServiceConstructorOptions

The options for the data processing service constructor.

## Properties

### extractionRuleGroupStorageConnectorType?

> `optional` **extractionRuleGroupStorageConnectorType**: `string`

The type of the entity storage connector to use for extraction rule groups.

#### Default

```ts
extraction-rule-group
```

***

### defaultExtractorType?

> `optional` **defaultExtractorType**: `string`

The default extractor type to use, if not provided uses the first in the factory.
