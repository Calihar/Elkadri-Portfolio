// src/app/models/timeline-story.model.ts
export interface TimelineStory {
  id?: string;
  title: string;
  summary?: string;
  bullets?: string[];
  mediaUrl?: string;       // image/video thumbnail (optional)
  linkUrl?: string;        // “Learn more” / GitHub / Case study
  badges?: string[];       // e.g., ['Angular', 'Kotlin', 'AWS']
  icon?: string;           // any emoji or icon class name you like
}
