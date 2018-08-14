import { async, TestBed } from '@angular/core/testing';

import { AdvertiComponent } from './adverti.component';
import { AdvertiModule } from './adverti.module';

describe('AdvertiComponent', () => {
  const options = {
    network: 'mynetwork',
    site: 1,
    placement: 1,
    width: 728,
    height: 90,
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
  }));
});
