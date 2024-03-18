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
      this.getNavbarColor();
}

  constructor(){}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getNavbarColor();
  }

  getNavbarColor(){
    const navbar = document.querySelector('.navbar');
    if(navbar){
      const NavbarColor = window.getComputedStyle(navbar).backgroundColor;
      if(NavbarColor== 'rgba(196, 4, 4, 0.98)'){
        this.color= true;
      }else{
        this.color=false;
      }
    }
  }

}
