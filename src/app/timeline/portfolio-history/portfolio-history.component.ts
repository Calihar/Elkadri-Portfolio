// src/app/pages/portfolio/portfolio.component.ts
import { Component } from '@angular/core';
import { TimelineStory } from '../../models/timeline-story';

@Component({
  selector: 'app-portfolio-history',
  standalone: false,
  templateUrl: './portfolio-history.component.html',
  styleUrl: './portfolio-history.component.css',
})
export class PortfolioHistoryComponent {
  stories: TimelineStory[] = [ //TODO: Fill in the blanks
    {
      title: 'Childhood Exposure to Code',
      summary: 'My Uncle introduced me to Unity and C# around age 10, sparking my interest in programming. '
      + 'This experience changed the way I viewed software.',
      bullets: ['Used Unity for the first time', 
        'First time seeing real \'code\'', 
        'Utilizing Pseudo-code'],
      badges: ['Play', 'UI', 'C#'],
      icon: '🐥',
    },
    {
      title: '3rd Shift Coding Lessons',
      summary: 'As a post undergrad worker at a psych ward, I used night shifts to learn Unreal Engine\'s Blueprints.',
      bullets: ['Made my first game', 'Late night Youtube Game Dev Holes', 'Pseudo-code to blueprint code'],
      badges: ['Code Blueprints', 'Game Dev', 'Unreal Engine'],
      icon: '🌓',
    },
    {
      title: 'Learning C# on my own',
      summary: '',
      bullets: ['', '', ''],
      badges: ['', '', ''],
      icon: '📚',
    },
    {
      title: 'Revature - Coding Boot Camp',
      summary: '',
      bullets: ['Passing the Bootcamp as a scrum master', '', ''],
      badges: ['', '', ''],
      icon: '🪖',
    },
    {
      title: 'Landing a job at JP Morgan and Chase',
      summary: '',
      bullets: ['', '', ''],
      badges: ['', '', ''],
      icon: '👨🏻‍💻',
    },
    {
      title: 'Working on small passion projects',
      summary: '',
      bullets: ['', '', ''],
      badges: ['', '', ''],
      icon: '❤️‍🔥',
    },
    {
      title: 'Getting promoted to Software Engineer 2',
      summary: '',
      bullets: ['', '', ''],
      badges: ['', '', ''],
      icon: '2️⃣',
    },
    {
      title: 'First real build',
      summary: 'Shipped a small Kotlin fitness app prototype and a matching Angular UI.',
      bullets: ['Workout tracker', 'Dynamic metrics', 'Local DB + Sync'],
      badges: ['Angular', 'Kotlin', 'Room/Firebase'],
      mediaUrl: 'blue_pro_pic.png',
      linkUrl: 'https://github.com/yourname/fitness-app',
      icon: '🏋️',
    },
  ];
}
