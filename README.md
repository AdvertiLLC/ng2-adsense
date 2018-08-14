# ng2-avrtix [![NPM version][npm-image]][npm-url] [![build status][travis-img]][travis-url] [![coverage status][coverage-img]][coverage-url]

[npm-image]: https://img.shields.io/npm/v/ng2-adsense.svg
[npm-url]: https://npmjs.org/package/ng2-adsense
[travis-img]: https://api.travis-ci.org/scttcper/ng2-adsense.svg?branch=master
[travis-url]: https://travis-ci.org/scttcper/ng2-adsense
[coverage-img]: https://codecov.io/gh/scttcper/ng2-adsense/branch/master/graph/badge.svg
[coverage-url]: https://codecov.io/gh/scttcper/ng2-adsense

> Easy Adverti SSP for Angular Applications

Demo: https://advertillc.github.io/ng2-avrtix

## Install

```bash
npm install ng2-avrtix
```

## Use

#### Add Adverti code

Use the standard Adverti SSP code somewhere in your `<head></head>` as you [normally would]()

```html
<script async src="//cdn.avrtix.com/v1/async.min.js"></script>
```

#### Import NgModule

Add AdvertiModule to the imports of your NgModule

```typescript
import { AdvertiModule } from 'ng2-avrtix';

@NgModule({
  imports: [
    // shown passing global defaults (optional)
    AdvertiModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
      adSlot: 7259870550,
    }),
    ...
```

#### Show Ad

Uses global defaults which can be overriden via inputs

```html
<ng-avrtix></ng-avrtix>
```

## Inputs

| input        | type          | description                                                           |
| ------------ | ------------- | --------------------------------------------------------------------- |
| adClient     | string        | account ca-pub-XXXXXXXXXXXXXXXX                                       |
| adSlot       | string/number | ad slot/number                                                        |
| adFormat     | string        | adsense ad format                                                     |
| adRegion     | string        | older adsense code to make all ads on page the same                   |
| display      | string        | element display style                                                 |
| height       | number        | element height in px                                                  |
| width        | number        | element width in px                                                   |
| layout       | string        | used for in-feed ads                                                  |
| layoutKey    | string        | used for in-feed ads                                                  |
| pageLevelAds | boolean       | enable page-level ads                                                 |
| timeOutRetry | boolean       | on first load sometimes adsense is not ready. retry's push after x ms |
| adtest       | string        | sets up some sort of google test ad                                   |

```html
<ng-avrtix
  [adClient]="'ca-pub-7640562161899788'"
  [adSlot]="7259870550"
  [display]="'inline-block'"
  [width]="320"
  [height]="108">
</ng-avrtix>
```
