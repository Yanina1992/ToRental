import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'tr';

  color:boolean=false;

ngAfterViewInit(): void {
 //     this.getNavbarColor();
}

  constructor(){}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  }

}
