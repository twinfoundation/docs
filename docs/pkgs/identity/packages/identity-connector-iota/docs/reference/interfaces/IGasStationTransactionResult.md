# Interface: IGasStationTransactionResult

Interface describing the structure of gas station transaction results.
Gas station transactions return a different structure than regular TransactionOutput.

## Properties

### effects?

> `optional` **effects**: `object`

Transaction effects from gas station transaction result (top-level).

#### created?

> `optional` **created**: [`IGasStationCreatedObject`](IGasStationCreatedObject.md)[]

Objects created by the transaction.
