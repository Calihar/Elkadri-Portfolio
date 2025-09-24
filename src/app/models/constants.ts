import { ProjectOverview } from "./project-overview";
import { UnityGameInfo } from "./unity-game-info";

export const PROJECTS : ProjectOverview[] = [
    {
      id: '1',
      title: 'Simple Fitness',
      shortDescription: 'From plan to first set—in seconds. ' +
        'An offline-first Android workout tracker that gets you lifting faster, keeps your history tidy, and looks good doing it.',
      highlights: ["Build plans fast: Create unlimited plans—from a 5-day heavy split to a “One-Off” for spontaneous gym days", "Start instantly: Go from naming a plan to logging sets in just a few taps",
        "Track what matters: Reps, weight, duration, distance—per set, per session, with full history.", "Notes anywhere: Add quick notes on an exercise or a specific set to capture cues, aches, PRs, or form tips",
        "Exercise library included: Comes preloaded with common movements; add your own anytime", "Private by default: Blazing-fast local storage using Room/SQLite—no connection required",
        "Sign-in & reset: Firebase Auth with password reset built-in"
      ],
      thumbnailUrl: 'simple-fitness-active-view.png',
      demo: false,
      features: [
        {id: 0, name: 'Easy Plan Builder', description: 'Spin up splits or one-off sessions in seconds—no endless setup screens.', icon: ''},
        {id: 1, name: 'Instant Start', description: 'Go from plan name to first set with minimal taps—perfect for in-gym edits.', icon: ''},
        {id: 2, name: 'Flexible Tracking', description: 'Weight × reps, time, distance—track the metric that fits the movement.', icon: ''},
        {id: 3, name: 'Contextual Notes', description: 'Attach notes to an exercise or a specific set so insights don’t get lost.', icon: 'vigor-check-resttimer-view.png'},
        {id: 4, name: 'Built-In Library', description: 'Start with a solid exercise set and extend it with your own.', icon: ''},
        {id: 5, name: 'Offline & Fast (Room/SQLite)', description: 'Your data lives on-device for speed and privacy.', icon: ''},
        {id: 6, name: 'Auth & Recovery', description: 'Firebase sign-in with password reset for peace of mind.', icon: ''},
      ],
      documentations: [
        {step: 1, title: 'Goal of this Project:', description: ["Rebuild my original workout app from the ground up—pairing clean UX with robust offline data—and fix the QoL issues that made the old version feel slow and glitchy."], imageUrl: ''},
        {step: 2, title: 'What I Built:', description: ["Offline-first architecture with Room (SQLite) storing plans → sessions → exercises → sets.", "Firebase Authentication with secure sign-in and password reset.", "A faster plan-to-workout flow that prioritizes time-to-first-set."], imageUrl: ''},
        {step: 3, title: 'What I Learned:', description: ["Practical color theory and palette development (inspired by Adobe Color)—landed on a calm blues/greys theme for focus.", "Better Android/Kotlin UI patterns and components to match the app’s “fast & clean” feel."], imageUrl: ''},
        {step: 4, title: 'Roadmap:', description: ["Ship iOS and cross-device sync via Firebase once data models are finalized.","Finish timers and polish analytics (progress and volume trends)."], imageUrl: ''},
        {step: 5, title: 'How to Use it:', description: ["Create a plan → Create a Session → Add Exercises → tap Start Session → log sets/add notes → finish active session → review progress.", "(Play Store listing coming soon.)"], imageUrl: ''},
      ]
    },
    {
      id: '2',
      title: 'Vigor Check',
      shortDescription: 'The original predecessor to Simple Fitness. ' +
					'My first time experience creating an app of my own volition with JetBrains Language Kotlin',
      thumbnailUrl: 'vigor-check-active-view.png',
      demo: false,
      documentations: [
        {step: 1, title: 'Goal of this Project:', description: ["The goal of this project is and has always been to stop paying $50 a year on my old workout app.","I remember one day thinking to myself after the app I used to use had an update I did not like pushed to it, that I could make it better suited to my needs without all of the extra stuff that was slowing down the app and making my life harder.","So thus began the process of creating this app."], imageUrl: ''},
        {step: 2, title: 'What I accomplished with the Project:', description: [""], imageUrl: ''},
        {step: 3, title: 'What I Learned from the Project:', description: [""], imageUrl: ''},
        {step: 4, title: 'Future Updates I Would Like to Make to the Project:', description: [""], imageUrl: ''},
        {step: 5, title: 'How You Can Use the App:', description: [""], imageUrl: ''},
      ]
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