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
  stories: TimelineStory[] = [
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
      summary: 'I began a new job that paid more but gave me less flexibility but I wanted to continue learning to code. So I would stay after work and close myself off in an office and spend 1.5 hours doing udemy courses.',
      bullets: ['I began to learn syntax for concepts like: for, if, and OOP outside of blueprints', 'I wrote my first C# program', 'I chose C# because I thought at that time that I wanted to go into the game industry vocationally and got a certificate in Unity C#'],
      badges: ['Hello World', 'Udemy Mosh Hamedani', 'C#', 'Unity'],
      icon: '📚',
    },
    {
      title: 'Revature - Coding Boot Camp',
      summary: 'I was tired. I would spend an hour commuting, 8 hours working, and then 1.5 hours learning to code at work. I found that I was not sleeping well or taking care of myself as a single man. I decided I wanted to get paid while learning to code instead of doing it when I should have been resting. I found a contracting company called Revature that promised to do just that for 10 weeks and then put me with a client.',
      bullets: ['Passing the Bootcamp as a "scrum master", which was essentially just lead dev with two others', 'Learning how git actually works and learning to work with others which all of my side endeavors lacked', 'I learned all the basics of Java, SQL, and was taught how to use Angular as a Full Stack Developer'],
      badges: ['Full Stack Developer', 'Java', 'Angular', 'SQL', 'Git'],
      icon: '🪖',
    },
    {
      title: 'Landing a job at JP Morgan and Chase',
      summary: 'The Contracting Company Revature, set me up with my first client in Chicago: J.P. Morgan Chase & Co. I was a little intimidated but after only one year into my contract JP Morgan bought out my contract after offering me a full time position.',
      bullets: ['I learned a lot more of the business of web development and how to work in an Agile setting', 'I also learned the importance of Business Analysis and have been doing my fair share of BA work and refinement since I started'],
      badges: ['Product Backlog Refinement', 'A Coder\'s First Job', 'Moving to the big city!'],
      icon: '🌃',
    },
    {
      title: 'Working on small passion projects',
      summary: 'After years of working at Chase in the city I learned something about myself. I still code outside of work and am to this day always working on a new side project. I find that I always want to be creating and writing new code.',
      bullets: ['I decided to learning Kotlin to make phone apps that were not games but handy tools that could improve my life without the ill side effect of ads!', 'Began looking more into Angular to start making websites especially with my AWS certificate.'],
      badges: ['Unity Certificate', 'Kotlin Training', 'AWS Developer Certificate', 'Angular - Tour of Heroes'],
      icon: '❤️‍🔥',
    },
    {
      title: 'Getting promoted to Software Engineer 2',
      summary: 'One year after starting at JP Morgan Chase I was promoted to Software Engineer 2. This was a big milestone for me as I had only been coding for about 3 years at this point and was still learning a lot. I was given the position over others that had been working there a long time and had lots more experience than me. I believe that this was due to my continued learning outside of work and my passion for coding.',
      bullets: ['Promotion to Software Engineer 2 felt like a larger milestone than getting hired as the Revature -> Bought Contract was quite high but only a very select few stand out and are promoted to SE 2.', 'I am now often tasked with creating and maintaining more microservices as side projects on top of my regular work as a full stack dev.', 'I am also often asked to help with code reviews and mentoring new hires.'],
      badges: ['Proudly Promoted', 'SEP/New Hire Trainer', 'Software Engineer 2'],
      icon: '2️⃣',
    },
    {
      title: 'First real build',
      summary: 'Shipped a small Kotlin fitness app prototype and a matching Angular UI.',
      bullets: ['Workout tracker', 'Dynamic metrics', 'Local DB + Sync'],
      badges: ['Angular', 'Kotlin', 'Room/Firebase'],
      mediaUrl: 'simple-fitness-active-view.png',
      //linkUrl: '',
      icon: '🏋️',
    },
  ];
}
