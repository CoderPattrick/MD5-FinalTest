import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./book/list/list.component";
import {CreateComponent} from "./book/create/create.component";
import {EditComponent} from "./book/edit/edit.component";

const routes: Routes = [
  {
    path:"books",
    component:ListComponent
  },{
    path:"books/create",
    component:CreateComponent
  },{
    path:"books/edit/:id",
    component:EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
