import {Routes} from "@angular/router"
import { AnimationComponent } from "./animation/animation.component";
import { LoginComponent } from "./login/login.component";
import { RoleGuard } from "./srvices/auth.service";

export const AppRoutes:Routes = [

    {path: "animation", component: AnimationComponent, canActivate: [RoleGuard]},
    {path: "login", component: LoginComponent},
    {path: '', redirectTo: "login", pathMatch: "full"},
    {path: '**', component: LoginComponent}
]