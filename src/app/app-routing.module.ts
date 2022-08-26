import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {DataprivacyComponent} from './dataprivacy/dataprivacy.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'index', redirectTo : '/home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dataprivacy', component: DataprivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
