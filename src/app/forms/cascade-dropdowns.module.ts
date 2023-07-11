import { NgModule } from "@angular/core";
import { CascadeDropdownsComponent } from "./cascade-dropdowns.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewformComponent } from './newform/newform.component'

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: CascadeDropdownsComponent },
      { path: 'form', component: NewformComponent }
    ]
  }
];

@NgModule({
  declarations: [CascadeDropdownsComponent, NewformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})

export class CascadeDropdownsModule { }