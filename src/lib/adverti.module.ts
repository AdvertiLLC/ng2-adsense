import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AdvertiConfig, ADVERTI_TOKEN } from './adverti-config';
import { AdvertiComponent } from './adverti.component';

@NgModule({
  imports: [CommonModule],
  exports: [AdvertiComponent],
  declarations: [AdvertiComponent],
})
export class AdvertiModule {
  static forRoot(config: Partial<AdvertiConfig> = {}): ModuleWithProviders {
    return {
      ngModule: AdvertiModule,
      providers: [{ provide: ADVERTI_TOKEN, useValue: config }],
    };
  }
}
