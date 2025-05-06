import {Routes} from "@angular/router";
import {NotfoundComponent} from "./common/components/notfound/notfound.component";
import {LoginComponent} from "./common/components/login/login.component";


export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "**", component: NotfoundComponent},

];
