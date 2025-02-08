import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './component/landing-page/dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { SelectbusPageComponent } from './component/selectbus-page/selectbus-page.component';
import { HeaderComponent } from './component/selectbus-page/header/header.component';
import { RightComponent } from './component/selectbus-page/right/right.component';
import { LeftComponent } from './component/selectbus-page/left/left.component';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SortingBarComponent } from './component/selectbus-page/right/sorting-bar/sorting-bar.component';
import { BusBoxComponent } from './component/selectbus-page/right/bus-box/bus-box.component';
import { BottomTabComponent } from './component/selectbus-page/right/bus-book/bottom-tab/bottom-tab.component';
import { ViewSeatsComponent } from './component/selectbus-page/right/view-seats/view-seats.component';
import { BusBookingFormComponent } from './component/selectbus-page/right/bus-booking-form/bus-booking-form.component';
import { FormDrawerComponent } from './component/selectbus-page/right/form-drawer/form-drawer.component';
import { SmallSeatsComponent } from './component/selectbus-page/right/small-seats/small-seats.component';
import { HttpClientModule } from '@angular/common/http'; 
import {MatDividerModule} from '@angular/material/divider';
import { PaymentPageComponent } from './component/payment-page/payment-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { MyTripComponent } from './component/profile-page/my-trip/my-trip.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    DialogComponent,
    SelectbusPageComponent,
    HeaderComponent,
    RightComponent,
    LeftComponent,
    SortingBarComponent,
    BusBoxComponent,
    BottomTabComponent,
    ViewSeatsComponent,
    BusBookingFormComponent,
    FormDrawerComponent,
    SmallSeatsComponent,
    PaymentPageComponent,
    ProfilePageComponent,
    MyTripComponent,
    
  ],
  imports: [
    HttpClientModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
