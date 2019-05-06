/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Input,
  Injectable,
  Inject,
  ElementRef,
  OnInit
} from '@angular/core';

import Swiper from 'swiper/dist/js/swiper';

@Injectable()
@Component({
  selector: 'o-carousel-container',
  styles: [`
    .icon-Pause {
        content: "\eabc";
    }
    .icon-Play {
        content: "\eac9";
    }`
  ],
  template:
  `<div class="swiper-container">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div *ngIf="this.pauseButton" class="btn-group" role="group" aria-label="Carousel toggle controls">
      <button type="button" (click)="this.changeState()" id="changeState" class="btn btn-outline-dark btn-sm" [ngClass] = "!this.pause ? 'icon-Pause':'icon-Play'" [attr.aria-label]="!this.pause ? 'set Pause':'set Play'"></button>
    </div>
  </div>`
})
export class OCarouselContainerComponent implements OnInit {
  @Input()
  public pager: any;

  @Input()
  public options: any;

  @Input()
  public pauseButton: boolean;

  public swiper: any;

  public showPager: boolean;
  private pause: boolean;

  constructor( @Inject(ElementRef) private elementRef: ElementRef) {
  }

  public ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;

    setTimeout(() => {
      this.swiper = new Swiper(nativeElement.children[0], this.options);
    });
    this.pause = false;
  }

  public changeState() {
    if (!this.pause) {
        this.swiper.autoplay.stop();
        this.pause = !this.pause;
    } else {
        this.swiper.autoplay.start();
        this.pause = !this.pause;
    }
  }

  public update() {
    setTimeout(() => {
      this.swiper.update();
    });
  }
}
