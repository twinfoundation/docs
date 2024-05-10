# Overview

This is the overview of the packages.

## Tools

- [@gtsc/nameof-transformer](pkgs/tools/packages/nameof-transformer/overview) - A TypeScript transformer which converts types and properties to their actual name for use at runtime
- [@gtsc/nameof](pkgs/tools/packages/nameof/overview) - Provides the definitions for the methods which are processed by the nameof-transformer
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

## Standards

- [@gtsc/standards-w3c-did](pkgs/standards/packages/standards-w3c-did/overview) - Models which define the structure of W3C DID Standard

## API

- [@gtsc/api-models](pkgs/api/packages/api-models/overview) - Contains models and classes for use with APIs

## Entity Storage

- [@gtsc/entity-storage-models](pkgs/entity-storage/packages/entity-storage-models/overview) - Models which define the structure of the entity storage contracts and connectors
- [@gtsc/entity-storage-connector-memory](pkgs/entity-storage/packages/entity-storage-connector-memory/overview) - Entity Storage connector implementation using in-memory storage
- [@gtsc/entity-storage-connector-file](pkgs/entity-storage/packages/entity-storage-connector-file/overview) - Entity Storage connector implementation using file storage

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

## Identity

- [@gtsc/identity-models](pkgs/identity/packages/identity-models/overview) - Models which define the structure of the contracts and connectors
- [@gtsc/identity-connector-entity-storage](pkgs/identity/packages/identity-connector-entity-storage/overview) - Identity connector implementation using entity storage
- [@gtsc/identity-connector-iota](pkgs/identity/packages/identity-connector-iota/overview) - Identity connector implementation using IOTA
- [@gtsc/identity-service](pkgs/identity/packages/identity-service/overview) - Identity contract implementation and REST endpoint definitions
- [@gtsc/identity-rest-client](pkgs/identity/packages/identity-rest-client/overview) - Identity contract implementation which can connect to REST endpoints
