import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, PreloadingStrategy } from '@angular/router'
import { CustomPreloadingService } from './custom-preloading.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { CheckRoleGuardGuard } from './check-role-guard.guard';

const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      data: { 'preload': true }
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'pipes',
      loadChildren: () => import('./pipes/pipes.module').then(m => m.PipeModule)
    },
    {
      path: 'cascade',
      canActivate: [CheckRoleGuardGuard],
      loadChildren: () => import('./forms/cascade-dropdowns.module').then(m => m.CascadeDropdownsModule)
    },
    {
      path: 'rx',
      loadChildren: () => import('./rx/rx.module').then(x => x.RxModule)
    },
    {
      path: 'notfound', component: PageNotFoundComponent
    }
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      // { preloadingStrategy: NoPreloading }
      // { preloadingStrategy: PreloadAllModules }
      { preloadingStrategy: CustomPreloadingService }
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
