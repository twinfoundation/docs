# Synchronised Storage Service Architecture

## Overview

The Synchronised Storage Service implements a distributed, eventually-consistent data replication system built on a decentralised architecture. The system provides conflict-free, cryptographically-verifiable synchronisation of entity storage mutations across a network of heterogeneous nodes through a combination of trusted node coordination and decentralised storage protocols.

## Core Architecture

### System Components

#### 1. Entity Storage Layer

- **Purpose**: Persistent data layer storing application entities
- **Interface**: CRUD operations with change event emission via event bus
- **Implementation**: Pluggable storage connectors (Memory, File System, Database)
- **Change Detection**: Mutation observers capture CREATE, UPDATE, DELETE operations
- **Event Emission**: Publishes change notifications to event bus for downstream processing

#### 2. Change Capture Subsystem

- **Event Bus Integration**: Subscribes to entity storage change events via decoupled event bus architecture
- **Change Sets**: Immutable collections of related entity mutations aggregated from event notifications
- **Serialisation**: Compressed binary format with cryptographic signatures
- **Metadata**: Timestamps, node identity, operation vectors
- **Batching**: Configurable aggregation windows for performance optimisation

#### 3. Cryptographic Verification Layer

- **Digital Signatures**: DID Proofs on change set payloads
- **Identity Management**: DID-based node authentication
- **Proof Chains**: Verifiable computation proofs for data integrity
- **Encryption**: RSA-2048 encryption for sensitive payload data with SPKI keys available to regular nodes, and PKCS and SPKI on the trusted nodes

#### 5. Event Bus Architecture

- **Decoupled Communication**: Asynchronous message passing between entity storage and change capture systems
- **Topic-Based Routing**: Structured message topics for different operation types (create, update, delete)
- **Pluggable Connectors**: Support for various event bus implementations (Local, Redis, AMQP, Kafka)
- **Message Serialisation**: JSON-based message payloads with type-safe schemas

#### 6. Network Topology

```text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Regular Node  │    │   Regular Node  │    │   Regular Node  │
│                 │    │                 │    │                 │
└────────┬────────┘    └────────┬────────┘    └────────┬────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
   ┌──────────▼──────────┐              ┌────────▼────────────┐
   │   Trusted Node A    │              │   Trusted Node B    │
   │ • Change Validation │              │ • Change Validation │
   │ • Load Distribution │              │ • Load Distribution │
   │ • State Consensus   │◄────────────►│ • State Consensus   │
   └──────────┬──────────┘              └─────────┬───────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                    ┌───────────▼────────────┐
                    │  Verifiable Storage    │
                    │   • On-chain Pointers  │
                    │   • Access Control     │
                    └───────────┬────────────┘
                                │
                    ┌───────────▼────────────┐
                    │ Decentralised Storage  │
                    │   • IPFS/Content Hash  │
                    │   • Immutable Blobs    │
                    └────────────────────────┘
```

## Node Types & Responsibilities

### Regular Nodes

- **Local Change Monitoring**: Capture entity storage mutations via event bus
- **Change Set Generation**: Aggregate mutations into signed, compressed payloads
- **Trusted Node Communication**: Submit change sets for global replication
- **Sync State Polling**: Periodically query verifiable storage for remote updates
- **Conflict Resolution**: Apply three-way merge algorithms for concurrent modifications
- **Resource Constraints**: Minimal storage and computational requirements

### Trusted Nodes

- **Multi-Node Architecture**: Multiple trusted nodes operate in parallel to distribute processing load and provide high availability
- **Change Validation**: Verify cryptographic signatures and node permissions across the cluster
- **Change Set Consolidation**: Periodic compaction of changes to create complete data sets
- **Decentralised Storage Interface**: Upload/download operations to e.g. IPFS
- **Verifiable Storage Updates**: Atomic updates to on-chain state pointers with consensus agreement

## Data Flow Architecture

### 1. Local Change Detection

```typescript
EntityStorage → ChangeCapture → LocalSnapshot → EventBus
```

### 2. Change Set Propagation

```typescript
RegularNode → [Sign] → ChangeSet → TrustedNode → [Verify] → GlobalState
```

### 3. Global State Persistence

```typescript
TrustedNode → [Encrypt & Compress] → DecentralisedStorage → [StateRoot] → VerifiableStorage
```

### 4. Remote Synchronisation

```typescript
AnyNode → [Poll] → VerifiableStorage → [Fetch] → DecentralisedStorage → [Decrypt & Decompress] → LocalState
```

## Synchronisation Algorithms

### Apply Sync State Logic

The `applySyncState` method in `LocalSyncStateHelper` implements the core synchronisation algorithm that reconciles remote sync state with local state. This algorithm handles both full and incremental synchronisation scenarios:

#### Algorithm Overview

**Input Processing:**

- Retrieves existing local snapshots and remote sync state snapshots
- Sorts both collections by creation date (newest to oldest) for temporal ordering
- Extracts epoch information for gap detection analysis

**Epoch Gap Detection:**

If the node has not been running for a while or has failed communications it might start to miss data, so we use gap detection to determine if we need to use a full consolidation snapshot.

```typescript
const newestExistingEpoch = existingSnapshots[0]?.epoch ?? 0;
const oldestSyncStateEpoch = syncStateSnapshots[syncStateSnapshots.length - 1]?.epoch ?? 0;
const hasEpochGap = newestExistingEpoch + 1 < oldestSyncStateEpoch;
```

**Synchronisation Strategy Decision:**

1. **Full Synchronisation Trigger:**
   - No existing consolidated snapshots locally, OR
   - Detected epoch gap between local and remote state

2. **Incremental Synchronisation Trigger:**
   - Existing consolidated snapshots present AND
   - No epoch gaps detected

#### Full Synchronisation Process

When full sync is required:

1. **Consolidation Search:** Locates the most recent consolidated snapshot in remote state
2. **Entity Storage Reset:** Clears all remote entities from local storage to ensure clean state, but retains all local entries maintained by this node
3. **Progressive Application:** Processes snapshots from the consolidation point forward to the newest, ensuring newer changes override older ones
4. **Change Set Processing:** Applies all change sets from the consolidation and subsequent modifications

#### Incremental Synchronisation Process

When incremental sync is sufficient:

1. **Snapshot Mapping:** Creates lookup map of existing local snapshots for efficient comparison
2. **Change Detection:** Categorises remote snapshots into:
   - **New Snapshots:** Not present locally
   - **Modified Snapshots:** Present but with different `dateModified`
   - **Unchanged Snapshots:** Identical local and remote versions

3. **Processing Optimisation:** Stops processing when encountering an unchanged snapshot (temporal consistency guarantee)

4. **Change Set Application:**
   - Processes modified snapshots to apply incremental changes
   - Processes new snapshots in chronological order (oldest to newest)
   - Removes unreferenced local snapshots for storage clean-up

#### Key Design Principles

- **Temporal Consistency:** Changes are applied in chronological order to maintain causality
- **Conflict Resolution:** Newer changes automatically override older ones within the same entity
- **Storage Efficiency:** Only processes changed or new snapshots, avoiding redundant operations
- **Data Integrity:** Maintains referential integrity by cleaning up orphaned snapshot references
- **Gap Recovery:** Automatically triggers full synchronisation when data continuity is compromised

#### Error Handling & Edge Cases

- **Missing Consolidations:** Logs warning when full sync is needed but no consolidated snapshot is available
- **Empty Remote State:** Handles scenarios where remote sync state contains no snapshots
- **Epoch Inconsistencies:** Automatically recovers from epoch gaps through full synchronisation
- **Processing Interruption:** Uses `completedProcessing` flag to optimise incremental sync execution

This algorithm ensures eventually consistent data replication across distributed nodes while minimising network traffic and computational overhead through intelligent synchronisation strategy selection.

## Data Structures

### Sync Pointer Store

Stored in verifiable storage, for each storage type contains a storage id of the location for sync states.

```json
{
  "syncPointers": {
    "my-type-1": "blob:ipfs:0x11...1111",
    "my-type-2": "blob:ipfs:0x22...2222"
  }
}
```

### Sync State

Stored in decentralised storage, contains all of the snapshots for a specific storage key

```json
{
    "storageKey": "my-type-1",
    "snapshots": [
        {
            "id": "0xaaa...aaa",
            ...
        },
        {
            "id": "0xbbb...bbb",
            ...
        }
    ]
}
```

### Sync Snapshot

Contains a list of all the storage ids for the change sets which make up the snapshot

```json
{
    "id": "0xaaa...aaa",
    "dateCreated": "2025-05-29T01:00:00.000Z",
    "dateModified": "2025-05-29T01:00:00.000Z",
    "isConsolidated": false, // Determines if this contains a complete data set
    "epoch": 123, // A counter that is incremented for each snapshot
    "changeSetStorageIds": [
        "blob:ipfs:0x111...1111",
        "blob:ipfs:0x111...1112"
        ...
    ]
}
```

### Sync Change Set

Contains a set of changes to be made to the entity storage, the proof is generated by the node identity which guarantees the validity of the data from the node

```json
{
    "id": "0xaaa...aaa",
    "storageKey": "my-type-1",
    "dateCreated": "2025-05-29T01:00:00.000Z",
    "dateModified": "2025-05-29T01:00:00.000Z",
    "changes": [
        ...
    ],
    "nodeIdentity": "did:iota:0xccc.cccccc",
    "proof": {
        // Cryptographic proof signed by the node identity
    }
}
```

### Sync Change

Contains a mutation for an entry in entity storage, either a `set` of `delete`. The `id` and `nodeIdentity` are omitted from the entity and stored at a higher level in the data structures to shrink the data set size.

```json
{
  "operation": "set",
  "id": "my-item-1",
  "entity": {
    "foo": true,
    "bar": 123
  }
}
```
