import { Component } from '@angular/core';
import { PROJECTS, UNITY_GAMES } from '../../models/constants';
import { ProjectOverview } from '../../models/project-overview';
import { ActivatedRoute } from '@angular/router';
import { UnityGameInfo } from '../../models/unity-game-info';

@Component({
  selector: 'app-project-detailed',
  standalone: false,
  templateUrl: './project-detailed.component.html',
  styleUrl: './project-detailed.component.css'
})
export class ProjectDetailedComponent {

  id = '';
  project: ProjectOverview | undefined;
  unityGameInfo : UnityGameInfo | undefined;
  pairs : number = 0;
  constructor(activatedRoute : ActivatedRoute){
    let id = activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.id = id;
      this.project = PROJECTS.find(p => p.id === this.id);
      this.unityGameInfo = UNITY_GAMES.find(g => g.id === this.id);
      this.pairs = Math.ceil((this.project?.features?.length ?? 0) / 2);
    } 
    
  }


}
