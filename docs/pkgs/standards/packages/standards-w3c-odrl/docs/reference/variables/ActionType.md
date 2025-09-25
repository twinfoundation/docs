# Variable: ActionType

> `const` **ActionType**: `object`

The types for ODRL Actions.
Simple action types (for direct string usage)

## Type Declaration

### Use

> `readonly` **Use**: `"use"` = `"use"`

The act of using an asset, covering any general usage where ownership does not change.
This is the parent term for most permissions and prohibitions.

### Transfer

> `readonly` **Transfer**: `"transfer"` = `"transfer"`

The act of transferring the ownership of an asset in perpetuity to a third party.

### Aggregate

> `readonly` **Aggregate**: `"aggregate"` = `"aggregate"`

The act of using an asset (or parts of it) as part of a composite collection.

### Annotate

> `readonly` **Annotate**: `"annotate"` = `"annotate"`

The act of adding explanatory notations/commentaries to the asset.

### Anonymize

> `readonly` **Anonymize**: `"anonymize"` = `"anonymize"`

The act of anonymising all or parts of the asset, for example, to remove identifying particulars.

### Archive

> `readonly` **Archive**: `"archive"` = `"archive"`

The act of persistently storing the asset in a non-transient form.

### ConcurrentUse

> `readonly` **ConcurrentUse**: `"concurrentUse"` = `"concurrentUse"`

The act of multiple concurrent use of the asset.

### Commercialize

> `readonly` **Commercialize**: `"commercialize"` = `"commercialize"`

The act of using the asset in a business environment where it may be traded for profit.

### Copy

> `readonly` **Copy**: `"copy"` = `"copy"`

The act of making an exact reproduction of the asset. Also identified as `reproduce`.

### Derive

> `readonly` **Derive**: `"derive"` = `"derive"`

The act of creating a new derivative asset from the original and editing or modifying it.

### Digitize

> `readonly` **Digitize**: `"digitize"` = `"digitize"`

The act of producing a digital copy of an asset from its analogue form.

### Display

> `readonly` **Display**: `"display"` = `"display"`

The act of making a transient visible rendering of the asset, such as displaying an image on a screen.
Also identified as `present` in earlier versions.

### Distribute

> `readonly` **Distribute**: `"distribute"` = `"distribute"`

The act of publicly distributing, displaying, or performing the asset.

### Execute

> `readonly` **Execute**: `"execute"` = `"execute"`

The act of executing the asset, such as running a program or application.

### Extract

> `readonly` **Extract**: `"extract"` = `"extract"`

The act of extracting (replicating) unchanged parts of the asset for reuse.

### ExtractChar

> `readonly` **ExtractChar**: `"extractChar"` = `"extractChar"`

The act of extracting unchanged character(s) from the asset.

### ExtractWord

> `readonly` **ExtractWord**: `"extractWord"` = `"extractWord"`

The act of extracting unchanged word(s) from the asset.

### ExtractPage

> `readonly` **ExtractPage**: `"extractPage"` = `"extractPage"`

The act of extracting unchanged page(s) from the asset.

### Index

> `readonly` **Index**: `"index"` = `"index"`

The act of recording the asset in an index, for example, a search engine database.

### Install

> `readonly` **Install**: `"install"` = `"install"`

The act of loading the asset onto a storage device ready for operation.

### License

> `readonly` **License**: `"license"` = `"license"`

The act of granting the use of the asset to third parties. Also identified as `sublicense` in earlier versions.

### Lease

> `readonly` **Lease**: `"lease"` = `"lease"`

The act of making the asset available to a third-party for a fixed period with exchange of value.

### Lend

> `readonly` **Lend**: `"lend"` = `"lend"`

The act of making the asset available to a third-party for a fixed period without exchange of value.

### Modify

> `readonly` **Modify**: `"modify"` = `"modify"`

The act of updating existing content of the asset without creating a new one.

### Move

> `readonly` **Move**: `"move"` = `"move"`

The act of moving the asset from one digital location to another and deleting the original.

### Play

> `readonly` **Play**: `"play"` = `"play"`

The act of rendering the asset into audio and/or video form.

### Preview

> `readonly` **Preview**: `"preview"` = `"preview"`

The act of providing a short preview of the asset.

### Print

> `readonly` **Print**: `"print"` = `"print"`

The act of rendering the asset onto paper or hard copy form.

### Read

> `readonly` **Read**: `"read"` = `"read"`

The act of obtaining data from the asset, such as a database record.

### SecondaryUse

> `readonly` **SecondaryUse**: `"secondaryUse"` = `"secondaryUse"`

The act of using the asset for a purpose other than its intended purpose.

### Share

> `readonly` **Share**: `"share"` = `"share"`

The act of non-commercial reproduction and distribution of the asset to third-parties.

### AdhocShare

> `readonly` **AdhocShare**: `"adhocShare"` = `"adhocShare"`

The act of sharing the asset to parties in close proximity to the owner.

### ShareAlike

> `readonly` **ShareAlike**: `"shareAlike"` = `"shareAlike"`

The act of distributing any derivative asset under the same terms as the original.

### TextToSpeech

> `readonly` **TextToSpeech**: `"textToSpeech"` = `"textToSpeech"`

The act of a system reading the text of the asset out loud.

### Translate

> `readonly` **Translate**: `"translate"` = `"translate"`

The act of translating the asset's original language into another, creating a new derivative asset.

### Transform

> `readonly` **Transform**: `"transform"` = `"transform"`

The act of transforming the asset into a different digital format.

### Uninstall

> `readonly` **Uninstall**: `"uninstall"` = `"uninstall"`

The act of unloading the asset from a storage device, making it no longer accessible.

### Watermark

> `readonly` **Watermark**: `"watermark"` = `"watermark"`

The act of applying a watermark to the asset.

### Write

> `readonly` **Write**: `"write"` = `"write"`

The act of writing to or modifying the asset.

### Append

> `readonly` **Append**: `"append"` = `"append"`

The act of adding to the end of an asset, for example, a database record.
Also identified as `appendTo`.

### Give

> `readonly` **Give**: `"give"` = `"give"`

The act of giving away the asset in perpetuity without exchange of value, requiring the original to be deleted.

### Sell

> `readonly` **Sell**: `"sell"` = `"sell"`

The act of trading the asset in exchange for compensation, requiring the original to be deleted.

### AcceptTracking

> `readonly` **AcceptTracking**: `"acceptTracking"` = `"acceptTracking"`

The act of accepting that the use of the asset may be tracked by a specified party.

### AttachPolicy

> `readonly` **AttachPolicy**: `"attachPolicy"` = `"attachPolicy"`

The act of keeping a policy notice attached to the asset.

### AttachSource

> `readonly` **AttachSource**: `"attachSource"` = `"attachSource"`

The act of attaching the source of the asset and its derivatives.

### Attribute

> `readonly` **Attribute**: `"attribute"` = `"attribute"`

The act of attributing the asset to a specified party.

### Compensate

> `readonly` **Compensate**: `"compensate"` = `"compensate"`

The act of compensating a specified party by some amount for use of the asset.

### Delete

> `readonly` **Delete**: `"delete"` = `"delete"`

The act of permanently removing all copies of the asset.

### EnsureExclusivity

> `readonly` **EnsureExclusivity**: `"ensureExclusivity"` = `"ensureExclusivity"`

The act of requiring the assigner to ensure a permission is exclusive to the assignee.

### Include

> `readonly` **Include**: `"include"` = `"include"`

The act of including other related assets to fulfil the function.

### Inform

> `readonly` **Inform**: `"inform"` = `"inform"`

The act of informing a party that an action has been performed on the asset.

### NextPolicy

> `readonly` **NextPolicy**: `"nextPolicy"` = `"nextPolicy"`

The act of specifying a policy for third-party use of the asset.

### ObtainConsent

> `readonly` **ObtainConsent**: `"obtainConsent"` = `"obtainConsent"`

The act of requiring explicit consent from a party to perform an action.

### Pay

> `readonly` **Pay**: `"pay"` = `"pay"`

The act of paying a financial amount to a party for use of the asset.

### ReviewPolicy

> `readonly` **ReviewPolicy**: `"reviewPolicy"` = `"reviewPolicy"`

The act of performing a manual review of the terms associated with the asset.
