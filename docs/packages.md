# Overview

This is the overview of the packages.

## Tools

- [nameof-transformer](packages/nameof-transformer/overview) - A TypeScript transformer which converts types and properties to their actual name for use at runtime.
- [nameof](packages/nameof/overview) - Provides the definitions for the methods which are processed by the nameof-transformer.

## Framework

- [core](packages/core/overview) - Helper methods/classes for data type checking/validation/guarding/error handling.
- [entity](packages/entity/overview) - Helpers for defining and working with entities.
- [crypto](packages/crypto/overview) - Contains helper methods and classes which implement cryptographic functions.
- [services](packages/services/overview) - Contains definitions and helpers for services.
- [schema](packages/schema/overview) - Contains definitions and helpers for schemas.
- [image](packages/image/overview) - Contains classes for processing images.
- [qr](packages/qr/overview) - Contains classes for generating QR codes.
- [web](packages/web/overview) - Contains classes for use with web operations.

## Standards

- [standards-w3c-did](packages/standards-w3c-did/overview) - Models which define the structure of W3C DID Standard.

## API

- [api-models](packages/api-models/overview) - Contains models and classes for use with APIs.

## Entity Storage

- [entity-storage-models](packages/entity-storage-models/overview) - Models which define the structure of the entity storage contracts and connectors.
- [entity-storage-connector-memory](packages/entity-storage-connector-memory/overview) - Entity Storage connector implementation using in-memory storage.
- [entity-storage-connector-file](packages/entity-storage-connector-file/overview) - Entity Storage connector implementation using file storage.

## Logging

- [logging-models](packages/logging-models/overview) - Models which define the structure of the logging contracts and connectors.
- [logging-connector-console](packages/logging-connector-console/overview) - Logging connector implementation using the console.
- [logging-connector-entity-storage](packages/logging-connector-entity-storage/overview) - Logging connector implementation using entity storage.
- [logging-service](packages/logging-service/overview) - Logging contract implementation and REST endpoint definitions.
- [logging-rest-client](packages/logging-rest-client/overview) - Logging contract implementation which can connect to REST endpoints.

## Vault

- [vault-models](packages/vault-models/overview) - Models which define the structure of the vault contracts and connectors.
- [vault-connector-entity-storage](packages/vault-connector-entity-storage/overview) - Vault connector implementation using entity storage.

## Wallet

- [wallet-models](packages/wallet-models/overview) - Models which define the structure of the wallet contracts and connectors.
- [wallet-connector-entity-storage](packages/wallet-connector-entity-storage/overview) - Wallet connector implementation using entity storage.
- [wallet-connector-iota](packages/wallet-connector-iota/overview) - Wallet connector implementation using IOTA.

## Identity

- [identity-models](packages/identity-models/overview) - Models which define the structure of the contracts and connectors.
- [identity-connector-entity-storage](packages/identity-connector-entity-storage/overview) - Identity connector implementation using entity storage.
- [identity-connector-iota](packages/identity-connector-iota/overview) - Identity connector implementation using IOTA.
- [identity-service](packages/identity-service/overview) - Implementation of the Identity service.
