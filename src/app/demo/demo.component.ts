import { Component } from '@angular/core';
import { PROJECTS, UNITY_GAMES } from '../models/constants';
import { ActivatedRoute } from '@angular/router';
import { UnityGameInfo } from '../models/unity-game-info';
import { UnityEmbeddedComponent } from '../unity/unity-embedded/unity-embedded.component';
import { ProjectOverview } from '../models/project-overview';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  id = '';
  unityGameInfo : UnityGameInfo | undefined;
  projects = PROJECTS;
  isGame = false;
  project : ProjectOverview | undefined;
  

  constructor(activatedRoute: ActivatedRoute){
    let id = activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.id = id;
      this.unityGameInfo = UNITY_GAMES.find(u => u.id === this.id);
      this.project = PROJECTS.find(p => p.id === this.id);
      console.log(this.unityGameInfo);
      this.isGame = this.unityGameInfo !== undefined;
    } 
    if(!this.isGame) {
      console.log("No game found with id: " + id);
      //Show the other kind of demo page
    }

  }


}
