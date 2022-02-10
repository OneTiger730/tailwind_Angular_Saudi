import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'pmo-rightbar',
  styles: [
    `
      mwlResizable {
        box-sizing: border-box; // required for the enableGhostResize option to work
      }
    `,
  ],
  styleUrls: ['./rightbar.component.less'],
  templateUrl: './rightbar.component.html',
})
export class RightbarComponent {
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
