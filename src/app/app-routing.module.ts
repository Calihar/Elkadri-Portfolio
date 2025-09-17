import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectHomeComponent } from './projects/project-home/project-home.component';
import { PortfolioHistoryComponent } from './timeline/portfolio-history/portfolio-history.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailedComponent } from './projects/project-detailed/project-detailed.component';
import { UnityEmbeddedComponent } from './unity/unity-embedded/unity-embedded.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"projects", component: ProjectHomeComponent},
  {path:"about", component: PortfolioHistoryComponent},
  {path:"contact", component: ContactComponent},
  {path:"project/:id", component: ProjectDetailedComponent},
  {path:"demo/:id", component: UnityEmbeddedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
