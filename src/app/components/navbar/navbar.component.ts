import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ServizioService } from 'src/app/services/servizio.service';
import { AuthService } from 'src/app/auth/auth.service';

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

  isNavbar:boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private svc: ServizioService,
    private authSvc: AuthService
  ) {}

  ngOnInit(): void {
    this.svc.currentPageName$.subscribe(pageName => {
      this.currentPageName = pageName;
      this.cdr.detectChanges();
    })
      this.authSvc.isLoggedIn$.subscribe(isLoggedIn => {
        this.isNavbar = isLoggedIn;
        this.cdr.detectChanges();
      })
  }

  ngAfterViewInit():void{
      this.changeAreaExpanded();
      this.cdr.detectChanges();
  }

  changeAreaExpanded():void{
      if(window.innerWidth >= 576){
        this.isMobileSize = true;
        this.buttonClass = 'navbar-toggler d-none';
        this.divClass = 'navbar-collapse collapse-show';
      }else{
        this.isMobileSize = false;
        this.buttonClass = 'navbar-toggler-collapsed';
        this.divClass = 'navbar-collapse collapse';
      }
    }

    currentPage(page:string):void{
      this.svc.currentPage(page);
    }
  }
