import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
} from '@angular/material'
import { CommonModule } from "@angular/common";


const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: HomeComponent }
        ]
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    bootstrap: []
})

export class HomeModule { }