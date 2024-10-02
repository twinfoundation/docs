# Overview

This is the overview of the packages.

## Tools

- [@twin.org/nameof-transformer](pkgs/tools/packages/nameof-transformer/index.md) - A TypeScript transformer which converts types and properties to their actual name for use at runtime
- [@twin.org/nameof](pkgs/tools/packages/nameof/index.md) - Provides the definitions for the methods which are processed by the nameof-transformer
- [@twin.org/merge-locales](pkgs/tools/packages/merge-locales/index.md) - Tool to merge locale files from all dependencies
- [@twin.org/ts-to-openapi](pkgs/tools/packages/ts-to-openapi/index.md) - Tool to convert TypeScript REST route definitions to OpenAPI Specifications
- [@twin.org/ts-to-schema](pkgs/tools/packages/ts-to-schema/index.md) - Tool to convert TypeScript definitions to JSON schemas

## Framework

- [@twin.org/core](pkgs/framework/packages/core/index.md) - Helper methods/classes for data type checking/validation/guarding/error handling
- [@twin.org/entity](pkgs/framework/packages/entity/index.md) - Helpers for defining and working with entities
- [@twin.org/crypto](pkgs/framework/packages/crypto/index.md) - Contains helper methods and classes which implement cryptographic functions
- [@twin.org/image](pkgs/framework/packages/image/index.md) - Classes for image manipulation
- [@twin.org/qr](pkgs/framework/packages/qr/index.md) - Package for creating QR codes
- [@twin.org/web](pkgs/framework/packages/web/index.md) - Contains classes for use with web operations
- [@twin.org/cli-core](pkgs/framework/packages/cli-core/index.md) - Core classes for building a CLI

## Standards

- [@twin.org/standards-w3c-did](pkgs/standards/packages/standards-w3c-did/index.md) - Models which define the structure of W3C DID Standard

## Data

- [@twin.org/data-core](pkgs/data/packages/data-core/index.md) - Definitions and helpers for using with data and schemas
- [@twin.org/data-json-ld](pkgs/data/packages/data-json-ld/index.md) - Models which define the structure of JSON LD
- [@twin.org/data-framework](pkgs/data/packages/data-framework/index.md) - Models which define the structure of framework types
- [@twin.org/data-schema-org](pkgs/data/packages/data-schema-org/index.md) - Models which define the structure of schema.org Standard
- [@twin.org/data-gs1](pkgs/data/packages/data-gs1/index.md) - Models which define the structure of GS1 Standard
- [@twin.org/data-unece](pkgs/data/packages/data-unece/index.md) - Models which define the structure of UN/CEFACT Standard
- [@twin.org/data-vda](pkgs/data/packages/data-vda/index.md) - Models which define the structure of VDA JAIF Standard

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
- [@twin.org/entity-storage-connector-file](pkgs/entity-storage/packages/entity-storage-connector-file/index.md) - Entity Storage connector implementation using file storage
- [@twin.org/entity-storage-connector-scylladb](pkgs/entity-storage/packages/entity-storage-connector-scylladb/index.md) - Entity Storage connector implementation using ScyllaDB
- [@twin.org/entity-storage-connector-dynamodb](pkgs/entity-storage/packages/entity-storage-connector-dynamodb/index.md) - Entity Storage connector implementation using DynamoDb storage

## Blob Storage

- [@twin.org/blob-storage-models](pkgs/blob-storage/packages/blob-storage-models/index.md) - Models which define the structure of the blob storage contracts and connectors
- [@twin.org/blob-storage-connector-memory](pkgs/blob-storage/packages/blob-storage-connector-memory/index.md) - Blob Storage connector implementation using in-memory storage
- [@twin.org/blob-storage-connector-file](pkgs/blob-storage/packages/blob-storage-connector-file/index.md) - Blob Storage connector implementation using file storage
- [@twin.org/blob-storage-connector-ipfs](pkgs/blob-storage/packages/blob-storage-connector-ipfs/index.md) - Blob Storage connector implementation using IPFS
- [@twin.org/blob-storage-service](pkgs/blob-storage/packages/blob-storage-service/index.md) - Blob storage contract implementation and REST endpoint definitions
- [@twin.org/blob-storage-rest-client](pkgs/blob-storage/packages/blob-storage-rest-client/index.md) - Blob storage implementation which can connect to REST endpoints

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

## Vault

- [@twin.org/vault-models](pkgs/vault/packages/vault-models/index.md) - Models which define the structure of the vault contracts and connectors
- [@twin.org/vault-connector-entity-storage](pkgs/vault/packages/vault-connector-entity-storage/index.md) - Vault connector implementation using entity storage

## Distributed Ledger

- [@twin.org/dlt-iota](pkgs/dlt/packages/dlt-iota/index.md) - DLT helpers for use with IOTA

## Wallet

- [@twin.org/wallet-models](pkgs/wallet/packages/wallet-models/index.md) - Models which define the structure of the wallet contracts and connectors
- [@twin.org/wallet-connector-entity-storage](pkgs/wallet/packages/wallet-connector-entity-storage/index.md) - Wallet connector implementation using entity storage
- [@twin.org/wallet-connector-iota](pkgs/wallet/packages/wallet-connector-iota/index.md) - Wallet connector implementation using IOTA

## Immutable Storage

- [@twin.org/immutable-storage-models](pkgs/immutable-storage/packages/immutable-storage-models/index.md) - Contains models and classes for use with immutable storage
- [@twin.org/immutable-storage-connector-iota](pkgs/immutable-storage/packages/immutable-storage-connector-iota/index.md) - Implementation of the Immutable Storage connector using IOTA
- [@twin.org/immutable-storage-connector-entity-storage](pkgs/immutable-storage/packages/immutable-storage-connector-entity-storage/index.md) - Implementation of the Immutable Storage connector using entity storage

## Identity

- [@twin.org/identity-models](pkgs/identity/packages/identity-models/index.md) - Models which define the structure of the contracts and connectors
- [@twin.org/identity-connector-entity-storage](pkgs/identity/packages/identity-connector-entity-storage/index.md) - Identity connector implementation using entity storage
- [@twin.org/identity-service](pkgs/identity/packages/identity-service/index.md) - Identity contract implementation and REST endpoint definitions
- [@twin.org/identity-rest-client](pkgs/identity/packages/identity-rest-client/index.md) - Identity contract implementation which can connect to REST endpoints
- [@twin.org/identity-connector-iota](pkgs/identity/packages/identity-connector-iota/index.md) - Identity connector implementation using IOTA

## NFT

- [@twin.org/nft-models](pkgs/nft/packages/nft-models/index.md) - Contains models and classes for use with NFTs
- [@twin.org/nft-connector-iota](pkgs/nft/packages/nft-connector-iota/index.md) - Implementation of the NFT connector using IOTA
- [@twin.org/nft-connector-entity-storage](pkgs/nft/packages/nft-connector-entity-storage/index.md) - Implementation of the NFT connector using entity storage
- [@twin.org/nft-service](pkgs/nft/packages/nft-service/index.md) - NFT contract implementation and REST endpoint definitions
- [@twin.org/nft-rest-client](pkgs/nft/packages/nft-rest-client/index.md) - NFT contract implementation which can connect to REST endpoints

## Attestation

- [@twin.org/attestation-models](pkgs/attestation/packages/attestation-models/index.md) - Models which define the structure of the attestation connectors and services
- [@twin.org/attestation-connector-entity-storage](pkgs/attestation/packages/attestation-connector-entity-storage/index.md) - Attestation connector implementation using entity storage
- [@twin.org/attestation-connector-iota](pkgs/attestation/packages/attestation-connector-iota/index.md) - Attestation connector implementation using IOTA
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

## UI

- [@twin.org/ui-components-svelte](pkgs/ui/packages/ui-components-svelte/index.md) - UI component for svelte
