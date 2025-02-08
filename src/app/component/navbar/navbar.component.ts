import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

declare var google: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('transformMenu', [
      state('open', style({ transform: 'scale(1)' })),
      state('closed', style({ transform: 'scale(0)' })),
      transition('open <=> closed', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isloggedIn: boolean = false;
  isGoogleAPILoaded: boolean = false;

  constructor(private router: Router,
    private customerservice:CustomerService,
  ) {}

  ngOnInit(): void {
    this.isloggedIn = !!sessionStorage.getItem('Loggedinuser');
    google.accounts.id.initialize({
          client_id:"727308854358-s12f005ot8315lkam2mf67qk2ootmvc7.apps.googleusercontent.com",
          callback:(response:any)=>{this.handlelogin(response);
      
          }
        })
  }

  private decodetoken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
  handlelogin(response:any){
      const payload=this.decodetoken(response.credential)
      console.log(payload)
      this.customerservice.addcustomermongo(payload).subscribe({
        next:(response)=>{
          console.log('POST success',response);
          sessionStorage.setItem("Loggedinuser",JSON.stringify(response))
        },
        error:(error)=>{
          console.error('Posr request failed',error)
        }
      })
    }

  ngAfterViewInit(): void {
    // Check if the Google API is loaded
    const checkGoogleAPILoad = () => {
      if (typeof google !== 'undefined' && google.accounts) {
        this.isGoogleAPILoaded = true;
        this.rendergooglebutton();
      } else {
        console.error('Google API script not loaded');
      }
    };
  
    // Wait for the script to load
    const scriptCheckInterval = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        clearInterval(scriptCheckInterval); // Stop checking once loaded
        checkGoogleAPILoad();
      }
    }, 100); // Check every 100ms
  }
  

  private rendergooglebutton(): void {
    const googlebtn = document.getElementById('google-btn');
    if (googlebtn && google.accounts) {
      google.accounts.id.renderButton(googlebtn, {
        theme: 'outline',
        size: 'medium',
        shape: 'pill',
        width: 150,
      });
    } else {
      console.error('Google button element or accounts API not found');
    }
  }

  

  handlelogout(): void {
    google?.accounts?.id?.disableAutoSelect();
    sessionStorage.removeItem('Loggedinuser');
    this.isloggedIn = false;
    this.router.navigate(['/login']);
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
// import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';

// declare var google:any;
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css',
//   animations: [
//     trigger('transformMenu', [
//       state('open', style({ transform: 'scale(1)' })),
//       state('closed', style({ transform: 's cale(0)' })),
//       transition('open <=> closed', [animate('200ms ease-in-out')]),
//     ]),
//   ],
// })
// export class NavbarComponent implements OnInit{
// constructor(private router:Router){}
// isloggedIn:boolean=false
// ngOnInit(): void {
//   if(sessionStorage.getItem("Loggedinuser")){
//     this.isloggedIn=true
//   }else{
//     this.isloggedIn=false
//   }


//   // google.accounts.id.initialize({
//   //   client_id:"727308854358-s12f005ot8315lkam2mf67qk2ootmvc7.apps.googleusercontent.com",
//   //   callback:(response:any)=>{this.handlelogin(response);

//   //   }
//   // })
// }
// // ngAfterViewInit():void{
// //   this.rendergooglebutton();
// // }
// // private rendergooglebutton():void{
// //   const googlebtn=document.getElementById('google-btn');
// //   if(googlebtn){
// //     google.accounts.id.renderButton(googlebtn,{
// //       theme:'outline',
// //       size:'medium',
// //       shape:'pill',
// //       width:150,
// //     })
// //   }
// // }

// private decodetoken(token:String){
//   return JSON.parse(atob(token.split(".")[1]))
// }
// // handlelogin(response:any){
// //   const payload=this.decodetoken(response.credential)
// //   // console.log(payload)
// //   this.customerservice.addcustomermongo(payload).subscribe({
// //     next:(response)=>{
// //       console.log('POST success',response);
// //       sessionStorage.setItem("Loggedinuser",JSON.stringify(response))
// //     },
// //     error:(error)=>{
// //       console.error('Posr request failed',error)
// //     }
// //   })
// // }
// handlelogout(){
//   google.accounts.id.disableAutoSelect();
//   sessionStorage.removeItem('Loggedinuser');
//   window.location.reload()
// }
// navigate(route:string){
//   this.router.navigate([route])
// }

// ngAfterViewInit(): void {
//   if (typeof google !== 'undefined' && google.accounts) {
//     this.rendergooglebutton();
//   } else {
//     console.error('Google API script not loaded');
//   }
// }

// private rendergooglebutton(): void {
//   const googlebtn = document.getElementById('google-btn');
//   if (googlebtn && google.accounts) {
//     google.accounts.id.renderButton(googlebtn, {
//       theme: 'outline',
//       size: 'medium',
//       shape: 'pill',
//       width: 150,
//     });
//   } else {
//     console.error('Google button element or accounts API not found');
//   }
// }


// }
