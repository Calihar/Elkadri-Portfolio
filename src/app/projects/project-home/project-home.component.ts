import { Component } from '@angular/core';
import { ProjectOverview } from '../../models/project-overview';
import { PROJECTS } from '../../models/constants'

@Component({
  selector: 'app-project-home',
  standalone: false,
  templateUrl: './project-home.component.html',
  styleUrl: './project-home.component.css'
})
export class ProjectHomeComponent {

  projects : ProjectOverview[] = PROJECTS;

}
