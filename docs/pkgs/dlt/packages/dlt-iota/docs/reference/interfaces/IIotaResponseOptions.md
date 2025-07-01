# Interface: IIotaResponseOptions

Configuration for IOTA.

## Extends

- `IotaTransactionBlockResponseOptions`

## Properties

### waitForConfirmation?

> `optional` **waitForConfirmation**: `boolean`

Wait for confirmation of the transaction.

#### Default

```ts
true
```

***

### dryRunLabel?

> `optional` **dryRunLabel**: `string`

Dry run the transaction with this label, if not set no dry run will occur.
