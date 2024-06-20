import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServizioService } from 'src/app/services/servizio.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  currentPageName: string = '';
  private subscriptions: Subscription = new Subscription();
  isLoggedIn: boolean = false;

  constructor(
    private svc: ServizioService,
    private cdr: ChangeDetectorRef,
    private authSvc: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}


  ngOnInit(): void { 
    this.subscriptions.add(
      this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
          this.subscriptions.add(
            this.svc.currentPageName$.subscribe((pageName) => {
              this.currentPageName = pageName;
              this.cdr.detectChanges();
            })
          );
        } else {
          this.currentPageName = '';
        }
      })
    );
    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  }

  /*private checkLoginStatus(){
    //debugger
    const accessData = localStorage.getItem('accessData');
    if(accessData){
      this.isLoggedIn = true;
      this.subscriptions.add(
        this.svc.currentPageName$.subscribe(pageName => {
          this.currentPageName = pageName;
          this.cdr.detectChanges();
        })
      )
    } else {
      //this.currentPageName = '';
      this.isLoggedIn = false;
    }
  }*/

