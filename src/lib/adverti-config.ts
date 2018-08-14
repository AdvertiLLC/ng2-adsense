import { InjectionToken } from '@angular/core';

/**
 * Set optional global default values
 */
export interface AdvertiConfig {
  /** the network string-id, if whitelabel **/
  network: string;

  /** the site id **/
  site: string | number;

  /** the placement id **/
  placement: string | number;

  /** Size of the placement **/
  width: number;
  height: number;

  /** ins element display style */
  display: string;

  /** Custom whitelabel host (DO NOT CHANGE UNLESS CONFIGURED CORRECTLY) **/
  /** Learn more at: http://help.adverti.io/whitelabel-ad-tech/integration/use-a-custom-domain-for-ad-serving **/
  host: string;

  /** wait time if avrtix is not ready on first load **/
  timeOutRetry: number;
}

export const ADVERTI_TOKEN = new InjectionToken<AdvertiConfig>(
  'AdvertiConfig',
);
