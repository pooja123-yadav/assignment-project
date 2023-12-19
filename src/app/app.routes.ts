import { Routes } from '@angular/router';

// Import your components
import { LoginComponent } from './auth/login/login.component'
import { SignupComponent } from './auth/signup/signup.component'
import { UserProfileComponent } from './home/user-profile/user-profile.component';
import { CompanyDetailsComponent } from './home/company-details/company-details.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if the path is empty
    { path: 'home', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'company-details', component: CompanyDetailsComponent }
];
