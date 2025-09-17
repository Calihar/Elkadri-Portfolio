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
      demo: false,
      features: [
        {id: 0, name: 'Workout Creation', description: 'Easily create workouts with a simple and intuitive interface.', icon: ''},
        {id: 1, name: 'Exercise Library', description: 'Choose from a library of over 100 exercises with detailed instructions and images.', icon: ''},
        {id: 2, name: 'Progress Tracking', description: 'Track your progress over time with graphs and statistics.', icon: ''},
        {id: 3, name: 'Rest Timer', description: 'Built-in rest timer to keep you on track during your workouts.', icon: 'vigor-check-resttimer-view.png'},
        {id: 4, name: 'Customizable Settings', description: 'Customize the app to fit your needs with various settings and options.', icon: ''}
      ],
      documentations: [
        {step: 1, title: 'Setting Up Your Development Environment', description: ["Setting up your environment is easy!", "And here is why", "Do you get it yet?"], imageUrl: ''},
        {step: 2, title: 'Creating a New Angular Project', description: [], imageUrl: 'doc-new-angular-project.png'},
        {step: 3, title: 'Building the User Interface', description: [], imageUrl: 'doc-ui-building.png'},]
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
      demo: true,
      features: [
        {id: 0, name: 'Simple Controls', description: 'Use arrow keys or WASD to move your character and avoid obstacles.', icon: ''},
        {id: 1, name: 'Endless Gameplay', description: 'The game continues until you hit an obstacle, allowing for endless fun and competition.', icon: ''},
        {id: 2, name: 'Score Tracking', description: 'Keep track of your high score and try to beat it each time you play.', icon: ''},
        {id: 3, name: 'Colorful Graphics', description: 'Enjoy vibrant and colorful graphics that make the game visually appealing.', icon: ''},
        {id: 4, name: 'Simple Sound Effects', description: 'Experience simple yet effective sound effects that enhance the gameplay experience.', icon: ''}
      ]

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
    githubUrl: 'https://github.com/Calihar/SimpleDriving',
    folderName: 'ObstacleAvoider',
    width: 828,
    height: 1792
  },
]