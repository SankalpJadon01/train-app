import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouteComponent } from './route/route.component';
import { StartComponent } from './start/start.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {path: "add",component:AddComponent},
  {path: "list",component:ListComponent},
  {path:"route",component:RouteComponent},
  {path:"start",component:StartComponent},
  {path:"type",component:TypeComponent},
  {path:"**",redirectTo:"/list",pathMatch:"full"},
  {path:"",redirectTo:"/add",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
