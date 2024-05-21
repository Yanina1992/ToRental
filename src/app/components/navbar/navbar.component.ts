import { Component, HostListener, ChangeDetectorRef, OnInit } from '@angular/core';
import { ServizioService } from 'src/app/services/servizio.service';
//import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMobileSize: boolean = false;
  buttonClass: string = '';
  divClass: string = '';
  currentPageName:string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private svc: ServizioService
  ) {}

  ngOnInit(): void {
    this.svc.currentPageName$.subscribe(pageName => {
      this.currentPageName = pageName;
      this.cdr.detectChanges();
    })
  }

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

    currentPage(page:string){
      this.svc.currentPage(page);
    }
  }
