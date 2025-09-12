import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectHomeComponent } from './projects/project-home/project-home.component';
import { VagueTimelineComponent } from './timeline/vague-timeline/vague-timeline.component';
import { PortfolioHistoryComponent } from './timeline/portfolio-history/portfolio-history.component';
import { ProjectDetailedComponent } from './projects/project-detailed/project-detailed.component';
import { UnityEmbeddedComponent } from './unity/unity-embedded/unity-embedded.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    ProjectHomeComponent,
    VagueTimelineComponent,
    PortfolioHistoryComponent,
    ProjectDetailedComponent,
    UnityEmbeddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
