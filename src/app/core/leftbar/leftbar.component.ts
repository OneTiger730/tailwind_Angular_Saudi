import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'pmo-leftbar',
  styles: [
    `
  //     .rectangle {
  //       position: relative;
  //       display: flex;
  //       align-items: center;
  //       // justify-content: center;
  //       width: 100%;
  //       height: 150px;
  //       background-color: #fd4140;
  //       border: solid 1px #121621;
  //       color: #121621;
  //       // margin: auto;
  //     }
      mwlResizable {
        box-sizing: border-box; // required for the enableGhostResize option to work
      }
  //     .resize-handle-top,
  //     .resize-handle-bottom {
  //       position: absolute;
  //       height: 5px;
  //       cursor: row-resize;
  //       width: 100%;
  //     }
    `,
  ],
  styleUrls: ['./leftbar.component.less'],
  templateUrl: './leftbar.component.html',
})
export class LeftbarComponent {
  public style: object = {};
  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    this.style = {
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
    //   height: `${event.right.height}px`
    };
  }
}

// // now use within your apps module
// import { NgModule } from '@angular/core';
// import { ResizableModule } from 'angular-resizable-element';

// @NgModule({
//   declarations: [MyComponent],
//   imports: [ResizableModule],
//   bootstrap: [MyComponent],
// })
// class MyModule {}
