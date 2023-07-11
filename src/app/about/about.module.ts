import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: AboutComponent }
        ]
    }
]
@NgModule({

    declarations: [AboutComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})

export class AboutModule { }