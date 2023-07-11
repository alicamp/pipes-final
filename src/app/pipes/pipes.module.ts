import { NgModule } from "@angular/core";
import { PipesComponent } from "./pipes.component";
import { ShortenPipe } from "../shorten.pipe";
import { FilterPipe } from "../filter.pipe";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes, Router } from "@angular/router";

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: PipesComponent }
        ]
    }
]
@NgModule({
    declarations: [
        ShortenPipe,
        FilterPipe,
        PipesComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class PipeModule { }

