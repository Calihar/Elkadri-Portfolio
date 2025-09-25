import { ProjectOverview } from "./project-overview";
import { UnityGameInfo } from "./unity-game-info";

export const PROJECTS : ProjectOverview[] = [
    {
      id: '1',
      title: 'Simple Fitness',
      shortDescription: 'From plan to first set—in seconds. ' +
        'An offline-first Android workout tracker that gets you lifting faster, keeps your history tidy, and looks good doing it.',
      thumbnailUrl: 'simple-fitness-active-view.png',
      demo: false,
      features: [
        {id: 0, name: 'Easy Plan Builder', description: 'Spin up splits or one-off sessions in seconds—no endless setup screens.', icon: ''},
        {id: 1, name: 'Instant Start', description: 'Go from plan name to first set with minimal taps—perfect for in-gym edits.', icon: ''},
        {id: 2, name: 'Flexible Tracking', description: 'Weight × reps, time, distance—track the metric that fits the movement.', icon: ''},
        {id: 3, name: 'Contextual Notes', description: 'Attach notes to an exercise or a specific set so insights don’t get lost.', icon: ''},
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
      features : 
      [
        {id: 0, name: 'Create Exercises', description: 'Log weight × reps or time/distance for each exercise; new sessions start with fresh sets and tracked metrics.', icon: ''},
        {id: 1, name: 'Reusable Sessions', description: 'Pick exercises, save as templates, and iterate as you refine your perfect workout flow.', icon: ''},
        {id: 2, name: 'Organized Plans', description: 'Group sessions into plans (e.g., a 5-day split or a collection of one-offs).', icon: ''},
        {id: 3, name: 'Cloud-First Data', description: 'All records live in Firebase; the app keeps a small local cache and fetches the latest snapshot on connect.', icon: ''},
        {id: 4, name: 'Past Sessions History', description: 'Browse every session you’ve completed—securely stored in the cloud.', icon: ''},
        {id: 5, name: 'Instant Restore on New Phone', description: 'Sign in with Email or Google (Firebase Auth + password reset) and your data repopulates automatically.', icon: ''},
        {id: 6, name: 'Offline Sync', description: 'Use the app without a connection; changes queue locally and sync to Firebase when you’re back online.', icon: ''},
        {id: 7, name: 'Rest Timer (with Sound)', description: 'A cancellable rest timer you can auto-start between sets—or disable at workout end.', icon: 'vigor-check-resttimer-view.png'},

      ],
      documentations: [
        {step: 1, title: 'Goal of this Project:', description: ["Paid fitness trackers were charging $50+/yr while slowing me down with clunky flows.", "I set out to build my own—my first Android app in Kotlin—with speed, reliability, and ownership of my data."], imageUrl: ''},
        {step: 2, title: 'What I accomplished with the Project:', description: ["An Android app backed by Firebase (Auth + Cloud DB) with a straightforward UI for full CRUD on exercises, sessions, and plans, plus offline queuing and automatic sync."], imageUrl: ''},
        {step: 3, title: 'What I Learned from the Project:', description: ["UX is more than “fill out this form.” Thoughtful color choices, button placement, and trimming fields to the essentials dramatically improves flow. I also leveled up on Android activity/lifecycle management."], imageUrl: ''},
        {step: 4, title: 'Future Updates I Would Like to Make to the Project:', description: ["This product is sunset (end-to-end works, but the forms were heavy and the palette… not it). Its lessons directly informed my newer, faster, better-looking rebuild."], imageUrl: ''},
        {step: 5, title: 'How You Can Use the App:', description: ["Not currently distributed, but the code is public on GitHub (link at the top of the page)."], imageUrl: ''},
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
        {id: 0, name: 'Physics-Based Car Model', description: 'Wheel colliders, suspension, and traction simulate real weight transfer—collisions send the car flying like you’d expect.', icon: ''},
        {id: 1, name: 'Randomly Seeded Runs', description: 'Procedural obstacle layouts with a fresh seed each play—no two attempts feel the same.', icon: ''},
        {id: 2, name: 'Statically Seeded Runs', description: 'Fixed seeds for repeatable layouts—perfect for practicing lines and comparing times fairly.', icon: ''},
        {id: 3, name: 'Unified Input System', description: 'One setup for touch, gamepad, WASD, and arrow keys. All inputs trigger the same car actions, so controls feel consistent everywhere.', icon: ''},
        {id: 4, name: 'Ads Integration (Restart Flow)', description: 'Built-in ad flow that lets you restart without penalizing your time; disabled in the WebGL demo but fully implemented for native builds.', icon: ''},
        {id: 5, name: 'Modes: Endless & Time Trial', description: 'Endless ramps up spawn pressure over distance; Time Trial focuses on clean laps and tight turn-in with real physics.', icon: ''},
      ],
      documentations: 
      [
        {step: 1, title: 'Goal', description: ["Expand a simple tutorial prototype (a non-physics collider looping a track) into a proper physics-driven car game where risky lines and obstacle threading decide how far—and how fast—you can go."], imageUrl: ''},
        {step: 2, title: 'What I Built', description: ["A Unity project with real car physics (wheel colliders + gravity), procedural obstacle spawning for endless runs, and time-trial laps that handle distinctly from endless mode.", "A WebGL demo is available; native builds include the ad-based restart flow."], imageUrl: ''},
        {step: 3, title: 'What I Learned', description: ["Endless-road generation, tuning car physics for feel (grip, torque, braking), and lots of hands-on debugging to align the handling between modes without losing personality."], imageUrl: ''},
        {step: 4, title: 'Roadmap', description: ["Sunset as a learning project. It proved out my Unity fundamentals and rapid iteration—skills I’ve carried into newer prototypes."], imageUrl: ''},
        {step: 5, title: 'How to Use It', description: ["Hit \"Try the Demo\" at the top of the page and see how far you can make it."], imageUrl: ''},

      ],

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