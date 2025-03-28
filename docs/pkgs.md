# Overview

This is the overview of the packages.

## Engine

- [@twin.org/engine-models](pkgs/engine/packages/engine-models/index.md) - Models which define the structure of the engine.
- [@twin.org/engine-core](pkgs/engine/packages/engine-core/index.md) - Engine core.
- [@twin.org/engine-types](pkgs/engine/packages/engine-types/index.md) - Types to use in an engine.
- [@twin.org/engine-server-types](pkgs/engine/packages/engine-server-types/index.md) - Server types to use in an engine server.
- [@twin.org/engine](pkgs/engine/packages/engine/index.md) - Engine implementation.
- [@twin.org/engine-server](pkgs/engine/packages/engine-server/index.md) - Engine implementation for a server.

## Tools

- [@twin.org/nameof-transformer](pkgs/tools/packages/nameof-transformer/index.md) - A TypeScript transformer which converts types and properties to their actual name for use at runtime
- [@twin.org/nameof-vitest-plugin](pkgs/tools/packages/nameof-vitest-plugin/index.md) - A Vitest plugin which perform the nameof transformation
- [@twin.org/nameof](pkgs/tools/packages/nameof/index.md) - Provides the definitions for the methods which are processed by the nameof-transformer

## Framework

- [@twin.org/core](pkgs/framework/packages/core/index.md) - Helper methods/classes for data type checking/validation/guarding/error handling
- [@twin.org/entity](pkgs/framework/packages/entity/index.md) - Helpers for defining and working with entities
- [@twin.org/crypto](pkgs/framework/packages/crypto/index.md) - Contains helper methods and classes which implement cryptographic functions
- [@twin.org/image](pkgs/framework/packages/image/index.md) - Classes for image manipulation
- [@twin.org/qr](pkgs/framework/packages/qr/index.md) - Package for creating QR codes
- [@twin.org/web](pkgs/framework/packages/web/index.md) - Contains classes for use with web operations
- [@twin.org/modules](pkgs/framework/packages/modules/index.md) - Helper classes for loading and executing from modules
- [@twin.org/cli-core](pkgs/framework/packages/cli-core/index.md) - Core classes for building a CLI

## Standards

- [@twin.org/standards-w3c-did](pkgs/standards/packages/standards-w3c-did/index.md) - Models which define the structure of W3C DID Standard
- [@twin.org/standards-w3c-vcard](pkgs/standards/packages/standards-w3c-vcard/index.md) - Models which define the structure of W3C VCard Standard
- [@twin.org/standards-dublin-core](pkgs/standards/packages/standards-dublin-core/index.md) - Models which define the structure of Dublin Core Standard
- [@twin.org/standards-w3c-odrl](pkgs/standards/packages/standards-w3c-odrl/index.md) - Models which define the structure of W3C ODRL Standard
- [@twin.org/standards-schema-org](pkgs/standards/packages/standards-schema-org/index.md) - Models which define the structure of schema.org Standard
- [@twin.org/standards-gs1](pkgs/standards/packages/standards-gs1/index.md) - Models which define the structure of GS1 Standard
- [@twin.org/standards-unece](pkgs/standards/packages/standards-unece/index.md) - Models which define the structure of UN/CEFACT Standard
- [@twin.org/standards-vda](pkgs/standards/packages/standards-vda/index.md) - Models which define the structure of VDA JAIF Standard
- [@twin.org/standards-gaia-x](pkgs/standards/packages/standards-gaia-x/index.md) - Models which define the structure of Gaia-x

## Data

- [@twin.org/data-core](pkgs/data/packages/data-core/index.md) - Definitions and helpers for using with data and schemas
- [@twin.org/data-json-ld](pkgs/data/packages/data-json-ld/index.md) - Models which define the structure of JSON LD
- [@twin.org/data-framework](pkgs/data/packages/data-framework/index.md) - Models which define the structure of framework types

## API

- [@twin.org/api-models](pkgs/api/packages/api-models/index.md) - Contains models and classes for use with APIs
- [@twin.org/api-core](pkgs/api/packages/api-core/index.md) - Core classes for use with APIs
- [@twin.org/api-processors](pkgs/api/packages/api-processors/index.md) - Route processors for use with API servers
- [@twin.org/api-server-fastify](pkgs/api/packages/api-server-fastify/index.md) - Use Fastify as the core web server for APIs
- [@twin.org/api-service](pkgs/api/packages/api-service/index.md) - Information contract implementation and REST endpoint definitions
- [@twin.org/api-rest-client](pkgs/api/packages/api-rest-client/index.md) - Information contract implementation which can connect to REST endpoints
- [@twin.org/api-auth-entity-storage-models](pkgs/api/packages/api-auth-entity-storage-models/index.md) - Models which define the structure of the Auth Entity Storage contracts.
- [@twin.org/api-auth-entity-storage-service](pkgs/api/packages/api-auth-entity-storage-service/index.md) - Auth Entity Storage contract implementation and REST endpoint definitions
- [@twin.org/api-auth-entity-storage-rest-client](pkgs/api/packages/api-auth-entity-storage-rest-client/index.md) - Perform REST authentication using entity storage.

## Entity Storage

- [@twin.org/entity-storage-models](pkgs/entity-storage/packages/entity-storage-models/index.md) - Models which define the structure of the entity storage contracts and connectors
- [@twin.org/entity-storage-connector-memory](pkgs/entity-storage/packages/entity-storage-connector-memory/index.md) - Entity Storage connector implementation using in-memory storage
- [@twin.org/entity-storage-service](pkgs/entity-storage/packages/entity-storage-service/index.md) - Entity Storage contract implementation and REST endpoint definitions
- [@twin.org/entity-storage-rest-client](pkgs/entity-storage/packages/entity-storage-rest-client/index.md) - Entity Storage contract implementation which can connect to REST endpoints
- [@twin.org/entity-storage-connector-file](pkgs/entity-storage/packages/entity-storage-connector-file/index.md) - Entity Storage connector implementation using file storage
- [@twin.org/entity-storage-connector-scylladb](pkgs/entity-storage/packages/entity-storage-connector-scylladb/index.md) - Entity Storage connector implementation using ScyllaDB
- [@twin.org/entity-storage-connector-dynamodb](pkgs/entity-storage/packages/entity-storage-connector-dynamodb/index.md) - Entity Storage connector implementation using DynamoDb storage
- [@twin.org/entity-storage-connector-gcp-firestore](pkgs/entity-storage/packages/entity-storage-connector-gcp-firestore/index.md) - Entity Storage connector implementation using GCP Firestore storage
- [@twin.org/entity-storage-connector-mysql](pkgs/entity-storage/packages/entity-storage-connector-mysql/index.md) - Entity Storage connector implementation using MySQL storage
- [@twin.org/entity-storage-connector-mongodb](pkgs/entity-storage/packages/entity-storage-connector-mongodb/index.md) - Entity Storage connector implementation using MongoDb storage
- [@twin.org/entity-storage-connector-postgresql](pkgs/entity-storage/packages/entity-storage-connector-postgresql/index.md) - Entity Storage connector implementation using PostgreSql storage
- [@twin.org/entity-storage-connector-cosmosdb](pkgs/entity-storage/packages/entity-storage-connector-cosmosdb/index.md) - Entity Storage connector implementation using CosmosDB storage

## Blob Storage

- [@twin.org/blob-storage-models](pkgs/blob-storage/packages/blob-storage-models/index.md) - Models which define the structure of the blob storage contracts and connectors
- [@twin.org/blob-storage-connector-memory](pkgs/blob-storage/packages/blob-storage-connector-memory/index.md) - Blob Storage connector implementation using in-memory storage
- [@twin.org/blob-storage-service](pkgs/blob-storage/packages/blob-storage-service/index.md) - Blob storage contract implementation and REST endpoint definitions
- [@twin.org/blob-storage-rest-client](pkgs/blob-storage/packages/blob-storage-rest-client/index.md) - Blob storage implementation which can connect to REST endpoints
- [@twin.org/blob-storage-connector-file](pkgs/blob-storage/packages/blob-storage-connector-file/index.md) - Blob Storage connector implementation using file storage
- [@twin.org/blob-storage-connector-ipfs](pkgs/blob-storage/packages/blob-storage-connector-ipfs/index.md) - Blob Storage connector implementation using IPFS
- [@twin.org/blob-storage-connector-aws-s3](pkgs/blob-storage/packages/blob-storage-connector-aws-s3/index.md) - Blob Storage connector implementation using AWS S3
- [@twin.org/blob-storage-connector-azure](pkgs/blob-storage/packages/blob-storage-connector-azure/index.md) - Blob Storage connector implementation using Azure
- [@twin.org/blob-storage-connector-gcp](pkgs/blob-storage/packages/blob-storage-connector-gcp/index.md) - Blob Storage connector implementation using Google Cloud Storage

## Logging

- [@twin.org/logging-models](pkgs/logging/packages/logging-models/index.md) - Models which define the structure of the logging connectors and services
- [@twin.org/logging-connector-console](pkgs/logging/packages/logging-connector-console/index.md) - Logging connector implementation using the console
- [@twin.org/logging-connector-entity-storage](pkgs/logging/packages/logging-connector-entity-storage/index.md) - Logging connector implementation using entity storage
- [@twin.org/logging-service](pkgs/logging/packages/logging-service/index.md) - Logging contract implementation and REST endpoint definitions
- [@twin.org/logging-rest-client](pkgs/logging/packages/logging-rest-client/index.md) - Logging contract implementation which can connect to REST endpoints

## Telemetry

- [@twin.org/telemetry-models](pkgs/telemetry/packages/telemetry-models/index.md) - Models which define the structure of the telemetry connectors and services
- [@twin.org/telemetry-connector-entity-storage](pkgs/telemetry/packages/telemetry-connector-entity-storage/index.md) - Telemetry connector implementation using entity storage
- [@twin.org/telemetry-service](pkgs/telemetry/packages/telemetry-service/index.md) - Telemetry contract implementation and REST endpoint definitions
- [@twin.org/telemetry-rest-client](pkgs/telemetry/packages/telemetry-rest-client/index.md) - Telemetry contract implementation which can connect to REST endpoints

## Background Tasks

- [@twin.org/background-task-models](pkgs/background-task/packages/background-task-models/index.md) - Models which define the structure of the background task contracts and connectors
- [@twin.org/background-task-connector-entity-storage](pkgs/background-task/packages/background-task-connector-entity-storage/index.md) - Background task connector implementation using entity storage

## Event Bus

- [@twin.org/event-bus-models](pkgs/event-bus/packages/event-bus-models/index.md) - Models which define the structure of the event bus contracts and connectors
- [@twin.org/event-bus-connector-local](pkgs/event-bus/packages/event-bus-connector-local/index.md) - Event bus connector implementation local communication
- [@twin.org/event-bus-service](pkgs/event-bus/packages/event-bus-service/index.md) - Event bus service implementation using web sockets
- [@twin.org/event-bus-socket-client](pkgs/event-bus/packages/event-bus-socket-client/index.md) - Event bus component implementation which can connect to socket endpoints

## Vault

- [@twin.org/vault-models](pkgs/vault/packages/vault-models/index.md) - Models which define the structure of the vault contracts and connectors
- [@twin.org/vault-connector-entity-storage](pkgs/vault/packages/vault-connector-entity-storage/index.md) - Vault connector implementation using entity storage
- [@twin.org/vault-connector-hashicorp](pkgs/vault/packages/vault-connector-hashicorp/index.md) - Vault connector implementation using Hashicorp storage

## Distributed Ledger

- [@twin.org/dlt-iota](pkgs/dlt/packages/dlt-iota/index.md) - DLT helpers for use with IOTA
- [@twin.org/dlt-iota-stardust](pkgs/dlt/packages/dlt-iota-stardust/index.md) - DLT helpers for use with IOTA Stardust

## Wallet

- [@twin.org/wallet-models](pkgs/wallet/packages/wallet-models/index.md) - Models which define the structure of the wallet contracts and connectors
- [@twin.org/wallet-connector-entity-storage](pkgs/wallet/packages/wallet-connector-entity-storage/index.md) - Wallet connector implementation using entity storage
- [@twin.org/wallet-connector-iota](pkgs/wallet/packages/wallet-connector-iota/index.md) - Wallet connector implementation using IOTA
- [@twin.org/wallet-connector-iota-stardust](pkgs/wallet/packages/wallet-connector-iota-stardust/index.md) - Wallet connector implementation using IOTA Stardust

## Identity

- [@twin.org/identity-models](pkgs/identity/packages/identity-models/index.md) - Models which define the structure of the contracts and connectors
- [@twin.org/identity-connector-entity-storage](pkgs/identity/packages/identity-connector-entity-storage/index.md) - Identity connector implementation using entity storage
- [@twin.org/identity-service](pkgs/identity/packages/identity-service/index.md) - Identity contract implementation and REST endpoint definitions
- [@twin.org/identity-rest-client](pkgs/identity/packages/identity-rest-client/index.md) - Identity contract implementation which can connect to REST endpoints
- [@twin.org/identity-connector-iota](pkgs/identity/packages/identity-connector-iota/index.md) - Identity connector implementation using IOTA
- [@twin.org/identity-connector-iota-stardust](pkgs/identity/packages/identity-connector-iota-stardust/index.md) - Identity connector implementation using IOTA Stardust
- [@twin.org/identity-connector-universal](pkgs/identity/packages/identity-connector-universal/index.md) - Identity connector implementation using universal resolver

## NFT

- [@twin.org/nft-models](pkgs/nft/packages/nft-models/index.md) - Contains models and classes for use with NFTs
- [@twin.org/nft-connector-iota](pkgs/nft/packages/nft-connector-iota/index.md) - Implementation of the NFT connector using Iota
- [@twin.org/nft-connector-iota-stardust](pkgs/nft/packages/nft-connector-iota-stardust/index.md) - Implementation of the NFT connector using IOTA Stardust
- [@twin.org/nft-connector-entity-storage](pkgs/nft/packages/nft-connector-entity-storage/index.md) - Implementation of the NFT connector using entity storage
- [@twin.org/nft-service](pkgs/nft/packages/nft-service/index.md) - NFT contract implementation and REST endpoint definitions
- [@twin.org/nft-rest-client](pkgs/nft/packages/nft-rest-client/index.md) - NFT contract implementation which can connect to REST endpoints

## Verifiable Storage

- [@twin.org/verifiable-storage-models](pkgs/immutable-storage/packages/verifiable-storage-models/index.md) - Contains models and classes for use with verifiable storage
- [@twin.org/verifiable-storage-connector-entity-storage](pkgs/immutable-storage/packages/verifiable-storage-connector-entity-storage/index.md) - Implementation of the Verifiable Storage connector using entity storage
- [@twin.org/verifiable-storage-connector-iota](pkgs/immutable-storage/packages/verifiable-storage-connector-iota/index.md) - Implementation of the Verifiable Storage connector using IOTA
- [@twin.org/verifiable-storage-connector-iota-stardust](pkgs/immutable-storage/packages/verifiable-storage-connector-iota-stardust/index.md) - Implementation of the Verifiable Storage connector using IOTA Stardust
- [@twin.org/verifiable-storage-service](pkgs/immutable-storage/packages/verifiable-storage-service/index.md) - Verifiable Storage contract implementation and REST endpoint definitions
- [@twin.org/verifiable-storage-rest-client](pkgs/immutable-storage/packages/verifiable-storage-rest-client/index.md) - Verifiable Storage contract implementation which can connect to REST endpoints

## Immutable Proof

- [@twin.org/immutable-proof-models](pkgs/immutable-proof/packages/immutable-proof-models/index.md) - Models which define the structure of the immutable proof connectors and services
- [@twin.org/immutable-proof-task](pkgs/immutable-proof/packages/immutable-proof-task/index.md) - Background task for generating the proof
- [@twin.org/immutable-proof-service](pkgs/immutable-proof/packages/immutable-proof-service/index.md) - Immutable proof contract implementation and REST endpoint definitions
- [@twin.org/immutable-proof-rest-client](pkgs/immutable-proof/packages/immutable-proof-rest-client/index.md) - Immutable Proof contract implementation which can connect to REST endpoints

## Attestation

- [@twin.org/attestation-models](pkgs/attestation/packages/attestation-models/index.md) - Models which define the structure of the attestation connectors and services
- [@twin.org/attestation-connector-nft](pkgs/attestation/packages/attestation-connector-nft/index.md) - Attestation connector implementation using NFTs
- [@twin.org/attestation-connector-open-attestation](pkgs/attestation/packages/attestation-connector-open-attestation/index.md) - Attestation connector implementation using OpenAttestation
- [@twin.org/attestation-service](pkgs/attestation/packages/attestation-service/index.md) - Attestation contract implementation and REST endpoint definitions
- [@twin.org/attestation-rest-client](pkgs/attestation/packages/attestation-rest-client/index.md) - Attestation contract implementation which can connect to REST endpoints

## Auditable Item Graph

- [@twin.org/auditable-item-graph-models](pkgs/auditable-item-graph/packages/auditable-item-graph-models/index.md) - Models which define the structure of the auditable item graph connectors and services
- [@twin.org/auditable-item-graph-service](pkgs/auditable-item-graph/packages/auditable-item-graph-service/index.md) - Auditable Item Graph contract implementation and REST endpoint definitions
- [@twin.org/auditable-item-graph-rest-client](pkgs/auditable-item-graph/packages/auditable-item-graph-rest-client/index.md) - Auditable Item Graph contract implementation which can connect to REST endpoints

## Auditable Item Stream

- [@twin.org/auditable-item-stream-models](pkgs/auditable-item-stream/packages/auditable-item-stream-models/index.md) - Models which define the structure of the auditable item stream connectors and services
- [@twin.org/auditable-item-stream-service](pkgs/auditable-item-stream/packages/auditable-item-stream-service/index.md) - Auditable Item Stream contract implementation and REST endpoint definitions
- [@twin.org/auditable-item-stream-rest-client](pkgs/auditable-item-stream/packages/auditable-item-stream-rest-client/index.md) - Auditable Item Stream contract implementation which can connect to REST endpoints

## Data Processing

- [@twin.org/data-processing-models](pkgs/data-processing/packages/data-processing-models/index.md) - Models which define the structure of data processing packages
- [@twin.org/data-processing-converters](pkgs/data-processing/packages/data-processing-converters/index.md) - Data converter connector implementations
- [@twin.org/data-processing-extractors](pkgs/data-processing/packages/data-processing-extractors/index.md) - Data extractor connector implementations
- [@twin.org/data-processing-service](pkgs/data-processing/packages/data-processing-service/index.md) - Data extractor connector implementations
- [@twin.org/data-processing-rest-client](pkgs/data-processing/packages/data-processing-rest-client/index.md) - Data processing contract implementation which can connect to REST endpoints

## Document Management

- [@twin.org/document-management-models](pkgs/document-management/packages/document-management-models/index.md) - Models which define the structure of the document management connectors and services
- [@twin.org/document-management-service](pkgs/document-management/packages/document-management-service/index.md) - Document management contract implementation and REST endpoint definitions
- [@twin.org/document-management-rest-client](pkgs/document-management/packages/document-management-rest-client/index.md) - Document management contract implementation which can connect to REST endpoints

## UI

- [@twin.org/ui-tailwind](pkgs/ui/packages/ui-tailwind/index.md) - UI package for tailwind
- [@twin.org/ui-components-react](pkgs/ui/packages/ui-components-react/index.md) - UI components for react
- [@twin.org/ui-components-svelte](pkgs/ui/packages/ui-components-svelte/index.md) - UI components for svelte
