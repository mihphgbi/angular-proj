import {Routes} from "@angular/router";
import {NotfoundComponent} from "./common/components/notfound/notfound.component";
import {AuthLayoutComponent} from './common/components/auth-layout/auth-layout.component';


export const routes: Routes = [
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
      // {
      //   path: "register",
      //   loadChildren: () => import("./common/components/login/login.component").then(m => m.LoginComponent),
      //   data: {}
      // },
    ]
  },
  {path: "**", component: NotfoundComponent},

];
