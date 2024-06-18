import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  /*isNavbar: boolean = false;
  cdr: any;
  ----------------------------
  authSvc: any;
  
  title = 'tr';

  color:boolean=false;

ngAfterViewInit(): void {
 //     this.getNavbarColor();
}

  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  }
--------------------------
  constructor(private authSvc:AuthService){}

  ngAfterViewInit(){
    this.authSvc.isLoggedIn$.subscribe(isLoggedIn => {
    this.isNavbar = isLoggedIn;
    this.cdr.detectChanges();
    console.log(this.isNavbar);
    
  })
  }*/
  
}
