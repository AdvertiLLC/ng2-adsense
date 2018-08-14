# ng2-avrtix [![NPM version][npm-image]][npm-url] [![build status][travis-img]][travis-url] [![coverage status][coverage-img]][coverage-url]

[npm-image]: https://img.shields.io/npm/v/ng2-avrtix.svg
[npm-url]: https://npmjs.org/package/ng2-avrtix
[travis-img]: https://travis-ci.org/AdvertiLLC/ng2-avrtix.svg?branch=master
[travis-url]: https://travis-ci.org/AdvertiLLC/ng2-avrtix
[coverage-img]: https://codecov.io/gh/AdvertiLLC/ng2-avrtix/branch/master/graph/badge.svg
[coverage-url]: https://codecov.io/gh/AdvertiLLC/ng2-avrtix

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
      network: 'mynetwork',
      site: 1,
      placement: 1,
      width: 728,
      height: 90,
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
| network      | string        | the network string-id, if whitelabel                                  |
| site         | string/number | the site id                                                           |
| placement    | string/number | the placement id                                                      |
| display      | string        | element display style                                                 |
| height       | number        | element height in px                                                  |
| width        | number        | element width in px                                                   |
| host         | string        | Custom whitelabel host (DO NOT CHANGE UNLESS CONFIGURED CORRECTLY)    |
| timeOutRetry | number        | on first load sometimes avrtix is not ready. retry's push after x ms  |

```html
<ng-avrtix
  [network]="'mynetwork'"
  [site]="1"
  [placement]="1"
  [width]="728" [height]="90"
  [host]="'mynetwork.avrtiz.com'">
</ng-avrtix>
```

## Notes on custom host (Whitelabel clients)

To set the host configuration, you have to configure your subdomain/domain CNAME records and optionally the SSL configuration. Doing this will allow you mask Adverti's domains using your own domains. You can read more about it in this [Help Center article](http://help.adverti.io/whitelabel-ad-tech/integration/use-a-custom-domain-for-ad-serving).
