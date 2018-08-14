import { async, TestBed } from '@angular/core/testing';

import { AdvertiModule } from '../lib/public_api';

import {
  OtherPageComponent,
  PageComponent,
} from './page.component';

describe('PageComponent', () => {
  const options = {
    network: 'mynetwork',
    site: 1,
    placement: 1,
    width: 728,
    height: 90,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdvertiModule.forRoot(options)],
      declarations: [PageComponent],
    });
    TestBed.compileComponents();
  });

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(PageComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  it(
    `should have as title 'Page 1'`,
    async(() => {
      const fixture = TestBed.createComponent(PageComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Page 1');
    }),
  );

  it(
    'should render ng avrtix',
    async(() => {
      const fixture = TestBed.createComponent(PageComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const ad = compiled.querySelector('ins');
      expect(ad.className).toEqual('avrtix');
    }),
  );
});

describe('OtherPageComponent', () => {
  const options = {
    network: 'mynetwork',
    site: 1,
    placement: 1,
    width: 728,
    height: 90,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdvertiModule.forRoot(options)],
      declarations: [OtherPageComponent],
    });
    TestBed.compileComponents();
  });

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(OtherPageComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  it(
    `should have as title 'Page 2'`,
    async(() => {
      const fixture = TestBed.createComponent(OtherPageComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Page 2');
    }),
  );

  it(
    'should render ng avrtix',
    async(() => {
      const fixture = TestBed.createComponent(OtherPageComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const ad = compiled.querySelector('ins');
      expect(ad.className).toEqual('avrtix');
    }),
  );
});
