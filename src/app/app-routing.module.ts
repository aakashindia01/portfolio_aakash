import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { ServiceComponent } from './common/components/service/service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'blog', component: BlogComponent, data: { message: 'Hello, World!' } },
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
