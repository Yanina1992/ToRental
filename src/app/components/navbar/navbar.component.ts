import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMobileSize: boolean = false;
  buttonClass: string = '';
  divClass: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit():void{
      this.changeAreaExpanded();
      this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
     this.changeAreaExpanded(); 
     this.cdr.detectChanges();
  }

  changeAreaExpanded(){
      if(window.innerWidth >= 576){
        this.isMobileSize = true;
        this.buttonClass = 'navbar-toggler d-none';
        this.divClass = 'navbar-collapse collapse-show';
      }else{
        this.buttonClass = 'navbar-toggler-collapsed';
        this.divClass = 'navbar-collapse collapse';
      }
    }
  }
