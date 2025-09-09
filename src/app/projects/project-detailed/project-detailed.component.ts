import { Component } from '@angular/core';
import { PROJECTS } from '../../models/constants';
import { ProjectOverview } from '../../models/project-overview';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detailed',
  standalone: false,
  templateUrl: './project-detailed.component.html',
  styleUrl: './project-detailed.component.css'
})
export class ProjectDetailedComponent {

  id = '';
  project: ProjectOverview | undefined;
  constructor(activatedRoute : ActivatedRoute){
    let id = activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.id = id;
      this.project = PROJECTS.find(p => p.id === this.id);
    } 
    
  }


}
