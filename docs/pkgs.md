# Overview

This is the overview of the packages.

## Tools

- [@gtsc/nameof-transformer](pkgs/tools/packages/nameof-transformer/overview) - A TypeScript transformer which converts types and properties to their actual name for use at runtime
- [@gtsc/nameof](pkgs/tools/packages/nameof/overview) - Provides the definitions for the methods which are processed by the nameof-transformer
- [@gtsc/merge-locales](pkgs/tools/packages/merge-locales/overview) - Tool to merge locale files from all dependencies
- [@gtsc/ts-to-openapi](pkgs/tools/packages/ts-to-openapi/overview) - Tool to convert TypeScript REST route definitions to OpenAPI Specifications

## Framework

- [@gtsc/core](pkgs/framework/packages/core/overview) - Helper methods/classes for data type checking/validation/guarding/error handling
- [@gtsc/entity](pkgs/framework/packages/entity/overview) - Helpers for defining and working with entities
- [@gtsc/crypto](pkgs/framework/packages/crypto/overview) - Contains helper methods and classes which implement cryptographic functions
- [@gtsc/image](pkgs/framework/packages/image/overview) - Classes for image manipulation
- [@gtsc/qr](pkgs/framework/packages/qr/overview) - Package for creating QR codes
- [@gtsc/services](pkgs/framework/packages/services/overview) - Package for base service types
- [@gtsc/schema](pkgs/framework/packages/schema/overview) - Definitions and helpers for using with schemas
- [@gtsc/web](pkgs/framework/packages/web/overview) - Contains classes for use with web operations
- [@gtsc/cli-core](pkgs/framework/packages/cli-core/overview) - Core classes for building a CLI
- [@gtsc/crypto-cli](pkgs/framework/packages/crypto-cli/overview) - A command line interface for interacting with the crypto tools

## Standards

- [@gtsc/standards-w3c-did](pkgs/standards/packages/standards-w3c-did/overview) - Models which define the structure of W3C DID Standard

## API

- [@gtsc/api-models](pkgs/api/packages/api-models/overview) - Contains models and classes for use with APIs
- [@gtsc/api-core](pkgs/api/packages/api-core/overview) - Core classes for use with APIs
- [@gtsc/api-server-fastify](pkgs/api/packages/api-server-fastify/overview) - Use Fastify as the core web server for APIs

## Entity Storage

- [@gtsc/entity-storage-models](pkgs/entity-storage/packages/entity-storage-models/overview) - Models which define the structure of the entity storage contracts and connectors
- [@gtsc/entity-storage-connector-memory](pkgs/entity-storage/packages/entity-storage-connector-memory/overview) - Entity Storage connector implementation using in-memory storage
- [@gtsc/entity-storage-connector-file](pkgs/entity-storage/packages/entity-storage-connector-file/overview) - Entity Storage connector implementation using file storage

## Blob Storage

- [@gtsc/blob-storage-models](pkgs/blob-storage/packages/blob-storage-models/overview) - Models which define the structure of the blob storage contracts and connectors
- [@gtsc/blob-storage-connector-memory](pkgs/blob-storage/packages/blob-storage-connector-memory/overview) - Blob Storage connector implementation using in-memory storage
- [@gtsc/blob-storage-connector-file](pkgs/blob-storage/packages/blob-storage-connector-file/overview) - Blob Storage connector implementation using file storage
- [@gtsc/blob-storage-connector-ipfs](pkgs/blob-storage/packages/blob-storage-connector-ipfs/overview) - Blob Storage connector implementation using IPFS
- [@gtsc/blob-storage-service](pkgs/blob-storage/packages/blob-storage-service/overview) - Blob storage contract implementation and REST endpoint definitions
- [@gtsc/blob-storage-rest-client](pkgs/blob-storage/packages/blob-storage-rest-client/overview) - Blob storage implementation which can connect to REST endpoints

## Logging

- [@gtsc/logging-models](pkgs/logging/packages/logging-models/overview) - Models which define the structure of the logging connectors and services
- [@gtsc/logging-connector-console](pkgs/logging/packages/logging-connector-console/overview) - Logging connector implementation using the console
- [@gtsc/logging-connector-entity-storage](pkgs/logging/packages/logging-connector-entity-storage/overview) - Logging connector implementation using entity storage
- [@gtsc/logging-service](pkgs/logging/packages/logging-service/overview) - Logging contract implementation and REST endpoint definitions
- [@gtsc/logging-rest-client](pkgs/logging/packages/logging-rest-client/overview) - Logging contract implementation which can connect to REST endpoints

## Vault

- [@gtsc/vault-models](pkgs/vault/packages/vault-models/overview) - Models which define the structure of the vault contracts and connectors
- [@gtsc/vault-connector-entity-storage](pkgs/vault/packages/vault-connector-entity-storage/overview) - Vault connector implementation using entity storage

## Wallet

- [@gtsc/wallet-models](pkgs/wallet/packages/wallet-models/overview) - Models which define the structure of the wallet contracts and connectors
- [@gtsc/wallet-connector-entity-storage](pkgs/wallet/packages/wallet-connector-entity-storage/overview) - Wallet connector implementation using entity storage
- [@gtsc/wallet-connector-iota](pkgs/wallet/packages/wallet-connector-iota/overview) - Wallet connector implementation using IOTA
- [@gtsc/wallet-cli](pkgs/wallet/packages/wallet-cli/overview) - A command line interface for interacting with the wallet APIs

## Identity

- [@gtsc/identity-models](pkgs/identity/packages/identity-models/overview) - Models which define the structure of the contracts and connectors
- [@gtsc/identity-connector-entity-storage](pkgs/identity/packages/identity-connector-entity-storage/overview) - Identity connector implementation using entity storage
- [@gtsc/identity-connector-iota](pkgs/identity/packages/identity-connector-iota/overview) - Identity connector implementation using IOTA
- [@gtsc/identity-service](pkgs/identity/packages/identity-service/overview) - Identity contract implementation and REST endpoint definitions
- [@gtsc/identity-rest-client](pkgs/identity/packages/identity-rest-client/overview) - Identity contract implementation which can connect to REST endpoints
- [@gtsc/identity-cli](pkgs/identity/packages/identity-cli/overview) - A command line interface for interacting with the identity connectors

## NFT

- [@gtsc/nft-models](pkgs/nft/packages/nft-models/overview) - Contains models and classes for use with NFTs
- [@gtsc/nft-connector-iota](pkgs/nft/packages/nft-connector-iota/overview) - Implementation of the NFT connector using IOTA
- [@gtsc/nft-connector-entity-storage](pkgs/nft/packages/nft-connector-entity-storage/overview) - Implementation of the NFT connector using entity storage
- [@gtsc/nft-cli](pkgs/nft/packages/nft-cli/overview) - A command line interface for interacting with the nft connectors

## Attestation

- [@gtsc/attestation-models](pkgs/attestation/packages/attestation-models/overview) - Models which define the structure of the attestation connectors and services
- [@gtsc/attestation-connector-entity-storage](pkgs/attestation/packages/attestation-connector-entity-storage/overview) - Attestation connector implementation using entity storage
- [@gtsc/attestation-connector-iota](pkgs/attestation/packages/attestation-connector-iota/overview) - Attestation connector implementation using IOTA
- [@gtsc/attestation-connector-open-attestation](pkgs/attestation/packages/attestation-connector-open-attestation/overview) - Attestation connector implementation using OpenAttestation
- [@gtsc/attestation-service](pkgs/attestation/packages/attestation-service/overview) - Attestation contract implementation and REST endpoint definitions
- [@gtsc/attestation-rest-client](pkgs/attestation/packages/attestation-rest-client/overview) - Attestation contract implementation which can connect to REST endpoints
- [@gtsc/attestation-cli](pkgs/attestation/packages/attestation-cli/overview) - A command line interface for interacting with the attestation connectors

## Applications

- [@gtsc/api-server](pkgs/apps/apps/api-server/overview) - Serve APIs using the specified configuration
