import { async, TestBed } from '@angular/core/testing';

import { AdvertiComponent } from './adverti.component';
import { AdvertiModule } from './adverti.module';

describe('AdvertiComponent', () => {
  const options = {
    adClient: 'ca-pub-7640562161899788',
    adSlot: 2930227358,
    layout: 'z1',
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdvertiModule.forRoot(options)],
    }).compileComponents();
  }));

  it('should render ng avrtix', async(() => {
    const fixture = TestBed.createComponent(AdvertiComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const ad = compiled.querySelector('ins');
    expect(ad.className).toEqual('avrtix');
    expect(ad.getAttribute('data-ad-slot')).toEqual(String(options.adSlot));
    expect(ad.getAttribute('data-ad-client')).toEqual(options.adClient);
    expect(ad.getAttribute('data-layout')).toEqual('z1');
    expect(ad.getAttribute('data-layout-key')).toEqual(null);
    expect(ad.getAttribute('height')).toEqual(null);
    expect(ad.getAttribute('width')).toEqual(null);
  }));
});
