import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectHomeComponent } from './projects/project-home/project-home.component';
import { PortfolioHistoryComponent } from './timeline/portfolio-history/portfolio-history.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailedComponent } from './projects/project-detailed/project-detailed.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"projects", component: ProjectHomeComponent},
  {path:"about", component: PortfolioHistoryComponent},
  {path:"contact", component: ContactComponent},
  {path:"project/:id", component: ProjectDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
