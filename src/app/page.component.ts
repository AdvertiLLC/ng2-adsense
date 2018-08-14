import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Uses global values
 */
@Component({
  selector: 'ng2-page-1',
  template: `
  <p class="text-center">
    <strong>Current View: {{ title }}</strong>
  </p>
  <ng-avrtix></ng-avrtix>
  <ng-avrtix></ng-avrtix>
  `,
})
export class PageComponent {
  title = 'Page 1';
}

/**
 * Uses local ad values
 */
@Component({
  selector: 'ng2-page-2',
  template: `
  <p class="text-center">
    <strong>Current View: {{ title }}</strong>
  </p>
  <ng2-avrtix
    [network]="'mynetwork'"
    [site]="1"
    [placement]="1"
    [width]="728" [height]="90"
    [host]="'mynetwork.avrtiz.com'">
  </ng2-avrtix>
  <ng2-avrtix
    [display]="'inline-block'"
    [width]="728" [height]="90"
    [host]="'mynetwork.avrtiz.com'">
  </ng2-avrtix>
  `,
})
export class OtherPageComponent extends PageComponent {
  title = 'Page 2';
}

/**
 * Refreshes ads on params changes
 */
@Component({
  selector: 'ng2-page-3',
  template: `
  <p class="text-center">
    <strong>Current View: {{ title }}</strong>
  </p>
  <ng2-avrtix *ngIf="!loading"></ng2-avrtix>
  <ng2-avrtix *ngIf="!loading"></ng2-avrtix>
  `,
})
export class ReloadPageComponent implements OnInit {
  title = 'Page 3';
  loading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = `Page ${params['id']}`;
      this.loading = true;
      setTimeout(() => (this.loading = false), 200);
    });
  }
}
