# Class: LocatorHelper

Helper methods for Locator.

## Constructors

### Constructor

> **new LocatorHelper**(): `LocatorHelper`

#### Returns

`LocatorHelper`

## Methods

### toString()

> `static` **toString**(`locator`): `string`

Converts to a readable string.

#### Parameters

##### locator

[`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The policy locator.

#### Returns

`string`

The details of the locator as a string.

***

### matches()

> `static` **matches**(`locator1`, `locator2`): `boolean`

Compares locators to see if they match.

#### Parameters

##### locator1

[`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The first policy locator.

##### locator2

[`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The second policy locator.

#### Returns

`boolean`

True if the locators match, false otherwise.

***

### findMatchingLocator()

> `static` **findMatchingLocator**(`locators`, `targetLocator`): `undefined` \| [`IPolicyLocator`](../interfaces/IPolicyLocator.md)

Finds a matching locator from a list of locators.

#### Parameters

##### locators

The list of policy locators.

`undefined` | [`IPolicyLocator`](../interfaces/IPolicyLocator.md)[]

##### targetLocator

[`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The target policy locator to find.

#### Returns

`undefined` \| [`IPolicyLocator`](../interfaces/IPolicyLocator.md)

The matching locator if found, undefined otherwise.
