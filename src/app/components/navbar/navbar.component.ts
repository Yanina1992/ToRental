import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMobileSize: boolean = false;
  buttonClass: string = '';
  divClass: string = '';

  ngAfterViewInit():void{
    this.changeAreaExpanded();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.changeAreaExpanded();
  }

  changeAreaExpanded(){
    const button = document.getElementById('toggle-btn');
    const toggleDiv = document.getElementById('navbarNavAltMarkup');

    if(button){
      if(window.innerWidth >= 576){
        button.setAttribute('aria-expanded', 'true');
        this.isMobileSize = true;
        this.buttonClass = 'navbar-toggler d-none';
        this.divClass = 'navbar-collapse collapse-show';
      }else{
        this.buttonClass = 'navbar-toggler-collapsed';
        this.divClass = 'navbar-collapse collapse';
      }
    }
  }
}
