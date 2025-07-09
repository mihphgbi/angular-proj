import {Routes} from "@angular/router";
import {NotfoundComponent} from "./common/components/notfound/notfound.component";
import {AuthLayoutComponent} from './common/components/auth/layout/auth-layout.component';
import {RegisterModule} from './modules/register/register.module';
import {LandingPageComponent} from './modules/landing-page/landing-page.component';
import {LayoutComponent} from './common/components/layout/layout.component';


export const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/landing-page/landing-page.module").then(m => m.LandingPageModule),
      }
    ]
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: "login",
        loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule),
        data: {}
      },
      {
        path: "register",
        loadChildren: () => import("./modules/register/register.module").then(m => m.RegisterModule),
        data: {}
      },
    ]
  },
  {path: "**", component: NotfoundComponent},

];
