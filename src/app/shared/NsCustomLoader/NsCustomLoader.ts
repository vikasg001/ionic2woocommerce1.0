import {Component, ElementRef, OnDestroy, OnInit, Renderer} from "@angular/core";
import {AppShared} from "../app.shared";
import {BLOCK_ALL, BlockerDelegate, Config, GestureController} from "ionic-angular";
/**
 * Created by nsingh on 5/23/2017.
 */
@Component({
  selector: 'ns-custom-loader',
  template: `
    <div class="ns-custom-loader" *ngIf="show">
      <ion-backdrop [hidden]="!show"></ion-backdrop>
      <div class="loading-wrapper">
        <div class="loading-spinner" *ngIf="spinner!=='hide'">
          <ion-spinner [name]="spinner"></ion-spinner>
        </div>
        <div *ngIf="content" [innerHTML]="content" class="loading-content"></div>
      </div>
    </div>`,
})
export class NsCustomLoader implements OnInit, OnDestroy {
  public show: boolean;
  public spinner: string;
  public content: string;
  private gestureBlocker: BlockerDelegate;

  /**
   * @description class constructor dependency injection
   * @param appShared
   * @param config
   * @param gestureCtrl
   * @param elementRef
   * @param renderer
   */
  constructor(private appShared: AppShared, private config: Config, private gestureCtrl: GestureController, private elementRef: ElementRef, renderer: Renderer) {
    renderer.setElementClass(elementRef.nativeElement, `loading-${config.get('mode')}`, true);
    this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
  }

  ngOnInit(): void {
    this.appShared.nsCustomLoadingSubject().subscribe((loadingOptions: NsCustomLoaderOptions) => {
      if (loadingOptions.show === true) {
        //show loading here
        this.spinner = loadingOptions.spinner;
        this.content = loadingOptions.content;
        this.show = true;
        this.gestureBlocker.block();
      } else {
        //hide loading here
        this.show = false;
        this.gestureBlocker.unblock();
      }
    }, (error) => {
      console.error(error);
    })
  }

  ngOnDestroy(): void {
    this.gestureBlocker.destroy();
  }

}
export interface NsCustomLoaderOptions {
  content?: string,
  spinner?: string,
  show: boolean
}
