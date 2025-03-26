# Variable: UriActionTypes

> `const` **UriActionTypes**: `object`

The types for ODRL Actions.
URI action types (for use with rdf:value/@id)

## Type declaration

### OdrlUse

> `readonly` **OdrlUse**: `"odrl:use"` = `"odrl:use"`

To use the Asset - actions that involve general usage by parties.

### OdrlTransfer

> `readonly` **OdrlTransfer**: `"odrl:transfer"` = `"odrl:transfer"`

To transfer the ownership to third parties.

### OdrlAcceptTracking

> `readonly` **OdrlAcceptTracking**: `"odrl:acceptTracking"` = `"odrl:acceptTracking"`

To accept that the use of the Asset may be tracked.

### OdrlAggregate

> `readonly` **OdrlAggregate**: `"odrl:aggregate"` = `"odrl:aggregate"`

To use the Asset or parts of it as part of a composite collection.

### OdrlAnnotate

> `readonly` **OdrlAnnotate**: `"odrl:annotate"` = `"odrl:annotate"`

To add explanatory notations/commentaries to the Asset without modifying the Asset in any other way.

### OdrlAnonymize

> `readonly` **OdrlAnonymize**: `"odrl:anonymize"` = `"odrl:anonymize"`

To anonymize all or parts of the Asset.

### OdrlArchive

> `readonly` **OdrlArchive**: `"odrl:archive"` = `"odrl:archive"`

To store the Asset (in a non-transient form).

### OdrlAttribute

> `readonly` **OdrlAttribute**: `"odrl:attribute"` = `"odrl:attribute"`

To attribute the use of the Asset.

### OdrlAttribution

> `readonly` **OdrlAttribution**: `"odrl:attribution"` = `"odrl:attribution"`

Credit be given to copyright holder and/or author.

### OdrlCommercialUse

> `readonly` **OdrlCommercialUse**: `"odrl:commercialUse"` = `"odrl:commercialUse"`

Exercising rights for commercial purposes.

### OdrlCompensate

> `readonly` **OdrlCompensate**: `"odrl:compensate"` = `"odrl:compensate"`

To compensate by transfer of some amount of value for using or selling the Asset.

### OdrlConcurrentUse

> `readonly` **OdrlConcurrentUse**: `"odrl:concurrentUse"` = `"odrl:concurrentUse"`

To create multiple copies of the Asset that are being concurrently used.

### OdrlDelete

> `readonly` **OdrlDelete**: `"odrl:delete"` = `"odrl:delete"`

To permanently remove all copies of the Asset after it has been used.

### OdrlDerive

> `readonly` **OdrlDerive**: `"odrl:derive"` = `"odrl:derive"`

To create a new derivative Asset from this Asset and to edit or modify the derivative.

### OdrlDerivativeWorks

> `readonly` **OdrlDerivativeWorks**: `"odrl:derivativeWorks"` = `"odrl:derivativeWorks"`

Distribution of derivative works.

### OdrlDigitize

> `readonly` **OdrlDigitize**: `"odrl:digitize"` = `"odrl:digitize"`

To produce a digital copy of (or otherwise digitize) the Asset from its analogue form.

### OdrlDisplay

> `readonly` **OdrlDisplay**: `"odrl:display"` = `"odrl:display"`

To create a static and transient rendition of an Asset.

### OdrlDistribute

> `readonly` **OdrlDistribute**: `"odrl:distribute"` = `"odrl:distribute"`

To supply the Asset to third-parties.

### OdrlDistribution

> `readonly` **OdrlDistribution**: `"odrl:distribution"` = `"odrl:distribution"`

Distribution, public display, and publicly performance.

### OdrlEnsureExclusivity

> `readonly` **OdrlEnsureExclusivity**: `"odrl:ensureExclusivity"` = `"odrl:ensureExclusivity"`

To ensure that the Rule on the Asset is exclusive.

### OdrlExecute

> `readonly` **OdrlExecute**: `"odrl:execute"` = `"odrl:execute"`

To run the computer program Asset.

### OdrlExtract

> `readonly` **OdrlExtract**: `"odrl:extract"` = `"odrl:extract"`

To extract parts of the Asset and to use it as a new Asset.

### OdrlGive

> `readonly` **OdrlGive**: `"odrl:give"` = `"odrl:give"`

To transfer the ownership without compensation and while deleting the original asset.

### OdrlGrantUse

> `readonly` **OdrlGrantUse**: `"odrl:grantUse"` = `"odrl:grantUse"`

To grant the use of the Asset to third parties.

### OdrlInclude

> `readonly` **OdrlInclude**: `"odrl:include"` = `"odrl:include"`

To include other related assets in the Asset.

### OdrlIndex

> `readonly` **OdrlIndex**: `"odrl:index"` = `"odrl:index"`

To record the Asset in an index.

### OdrlInform

> `readonly` **OdrlInform**: `"odrl:inform"` = `"odrl:inform"`

To inform that an action has been performed on or in relation to the Asset.

### OdrlInstall

> `readonly` **OdrlInstall**: `"odrl:install"` = `"odrl:install"`

To load the computer program Asset onto a storage device.

### OdrlModify

> `readonly` **OdrlModify**: `"odrl:modify"` = `"odrl:modify"`

To change existing content of the Asset without creating a new asset.

### OdrlMove

> `readonly` **OdrlMove**: `"odrl:move"` = `"odrl:move"`

To move the Asset from one digital location to another including deleting the original copy.

### OdrlNextPolicy

> `readonly` **OdrlNextPolicy**: `"odrl:nextPolicy"` = `"odrl:nextPolicy"`

To grant the specified Policy to a third party for their use of the Asset.

### OdrlNotice

> `readonly` **OdrlNotice**: `"odrl:notice"` = `"odrl:notice"`

Copyright and license notices be kept intact.

### OdrlObtainConsent

> `readonly` **OdrlObtainConsent**: `"odrl:obtainConsent"` = `"odrl:obtainConsent"`

To obtain verifiable consent to perform the requested action.

### OdrlPlay

> `readonly` **OdrlPlay**: `"odrl:play"` = `"odrl:play"`

To create a sequential and transient rendition of an Asset.

### OdrlPresent

> `readonly` **OdrlPresent**: `"odrl:present"` = `"odrl:present"`

To publicly perform the Asset.

### OdrlPrint

> `readonly` **OdrlPrint**: `"odrl:print"` = `"odrl:print"`

To create a tangible and permanent rendition of an Asset.

### OdrlRead

> `readonly` **OdrlRead**: `"odrl:read"` = `"odrl:read"`

To obtain data from the Asset.

### OdrlReproduce

> `readonly` **OdrlReproduce**: `"odrl:reproduce"` = `"odrl:reproduce"`

To make duplicate copies of the Asset in any material form.

### OdrlReproduction

> `readonly` **OdrlReproduction**: `"odrl:reproduction"` = `"odrl:reproduction"`

Making multiple copies.

### OdrlReviewPolicy

> `readonly` **OdrlReviewPolicy**: `"odrl:reviewPolicy"` = `"odrl:reviewPolicy"`

To review the Policy applicable to the Asset.

### OdrlSell

> `readonly` **OdrlSell**: `"odrl:sell"` = `"odrl:sell"`

To transfer the ownership with compensation and while deleting the original asset.

### OdrlShareAlike

> `readonly` **OdrlShareAlike**: `"odrl:shareAlike"` = `"odrl:shareAlike"`

Derivative works be licensed under the same terms or compatible terms.

### OdrlSharing

> `readonly` **OdrlSharing**: `"odrl:sharing"` = `"odrl:sharing"`

Permits commercial derivatives, but only non-commercial distribution.

### OdrlSourceCode

> `readonly` **OdrlSourceCode**: `"odrl:sourceCode"` = `"odrl:sourceCode"`

Source code must be provided when exercising some rights.

### OdrlStream

> `readonly` **OdrlStream**: `"odrl:stream"` = `"odrl:stream"`

To deliver the Asset in real-time.

### OdrlSynchronize

> `readonly` **OdrlSynchronize**: `"odrl:synchronize"` = `"odrl:synchronize"`

To use the Asset in timed relations with media elements of another Asset.

### OdrlTextToSpeech

> `readonly` **OdrlTextToSpeech**: `"odrl:textToSpeech"` = `"odrl:textToSpeech"`

To have a text Asset read out loud.

### OdrlTransform

> `readonly` **OdrlTransform**: `"odrl:transform"` = `"odrl:transform"`

To convert the Asset into a different format.

### OdrlTranslate

> `readonly` **OdrlTranslate**: `"odrl:translate"` = `"odrl:translate"`

To translate the Asset into another natural language.

### OdrlUninstall

> `readonly` **OdrlUninstall**: `"odrl:uninstall"` = `"odrl:uninstall"`

To unload and delete the computer program Asset.

### OdrlWatermark

> `readonly` **OdrlWatermark**: `"odrl:watermark"` = `"odrl:watermark"`

To apply a watermark to the Asset.
