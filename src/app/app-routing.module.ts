import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'blog', component: BlogComponent,  },
   { path: 'post/:id', component: PostComponent },
   { path: 'createpost', component: CreatepostComponent },
   { path: '',   redirectTo: '/blog', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
