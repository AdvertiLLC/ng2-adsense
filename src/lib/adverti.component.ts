import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { AdvertiConfig, ADVERTI_TOKEN } from './adverti-config';

@Component({
  selector: 'ng2-avrtix,ng-avrtix',
  template: `
  <ins #ins class="avrtix"
    [ngStyle]="{'display': display, 'width.px': width, 'height.px': height }"
    [id]="adRegion">
  </ins>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertiComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() network: string;
  @Input() site: string | number;
  @Input() placement: string | number;
  @Input() host: string;
  @Input() adRegion: string;
  /** ins element display style */
  @Input() display: string;
  /** ins element height in px */
  @Input() width: number;
  /** ins element width in px */
  @Input() height: number;
  /** on first load sometimes avrtix is not ready */
  @Input() timeOutRetry: number;
  @ViewChild('ins') ins: any;

  constructor(
    @Inject(ADVERTI_TOKEN) private config: AdvertiConfig,
  ) {}

  ngOnInit() {
    const config = this.config;
    function use<T>(source: T, defaultValue: T): T {
      return config && source !== undefined ? source : defaultValue;
    }
    this.network = use(this.network, config.network);
    this.site = use(this.site, config.site);
    this.placement = use(this.placement, config.placement);
    this.host = use(this.host, config.host || 'ssp.avrtix.com');
    this.display = use(this.display, config.display || 'block');
    this.width = use(this.width, config.width);
    this.height = use(this.height, config.height);
    this.timeOutRetry = use(this.timeOutRetry, config.timeOutRetry || 200);
    this.adRegion = 'avrtix-' + Math.floor(Math.random() * 10000) + 1 + '-' + this.placement;
  }
  ngOnDestroy() {
    const iframe = this.ins.nativeElement.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.src = 'about:blank';
      iframe.remove();
    }
  }

  /**
   * attempts to push the ad twice. Usually if one doesn't work the other
   * will depeding on if the browser has the avrtix code cached and
   * if its the first page to be loaded
   */
  ngAfterViewInit() {
    const res = this.push();
    if (res instanceof TypeError) {
      setTimeout(() => this.push(), this.timeOutRetry);
    }
  }

  push() {
    const p: any = {};
    p.tag = this.adRegion;
    p.network = this.network;
    p.site = this.site;
    p.placement = this.placement;
    p.size = this.width + 'x' + this.height;
    p.host = this.host;
    try {
      window['avrtixLoad'](p);
      return true;
    } catch (e) {
      return e;
    }
  }
}

