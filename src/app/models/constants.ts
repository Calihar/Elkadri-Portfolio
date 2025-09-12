import { ProjectOverview } from "./project-overview";
import { UnityGameInfo } from "./unity-game-info";

export const PROJECTS : ProjectOverview[] = [
    {
      id: '1',
      title: 'Simple Fitness',
      shortDescription: 'An application that was self designed to replace the fitness apps on the market.' + 
      ' Simple, intuitive, and made by an experienced weight lifter.' + 
      ' I wanted to create something that was free to use and could do all the features of the most popular workout apps.',
      thumbnailUrl: 'simple-fitness-active-view.png',
      demo: false
    },
    {
      id: '2',
      title: 'Vigor Check',
      shortDescription: 'The original predecessor to Simple Fitness. ' +
					'My first time experience creating an app of my own volition with JetBrains Language Kotlin',
      thumbnailUrl: 'vigor-check-active-view.png',
      demo: false
    },
    {
      id: '3',
      title: 'Simple Obstacle Avoider (Unity WebGL)',
      shortDescription: 'A simple game where you avoid obstacles and try to get the highest score possible!' +
      ' Made with Unity and C#.',
      thumbnailUrl: 'obstacle-avoider-view.png',
      demo: true

    },
    {
      id: '4',
      title: 'This Portfolio!',
      shortDescription: 'Find the documentation for this AWS hosted Angular project!',
      thumbnailUrl: 'elkadri-token.png',
      demo: false
    },

  ];


export const UNITY_GAMES : UnityGameInfo[] = [
  {
    id: '3',
    title: 'Obstacle Avoider',
    shortDescription: 'A simple game where you avoid obstacles and try to get the highest score possible!',
    githubUrl: '',
    folderName: 'ObstacleAvoider',
    width: 828,
    height: 1792
  },
]