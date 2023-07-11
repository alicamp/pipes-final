import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxComponent } from './rx.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './sub-child/sub-child.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: RxComponent
      }
    ]
  }
]

@NgModule({
  declarations: [RxComponent, ParentComponent, ChildComponent, SubChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxModule { }
