// src/app/components/vague-timeline/vague-timeline.component.ts
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { TimelineStory } from '../../models/timeline-story';

type Orientation = 'vertical' | 'horizontal';

@Component({
  selector: 'app-vague-timeline',
  standalone: false,
  templateUrl: './vague-timeline.component.html',
  styleUrls: ['./vague-timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VagueTimelineComponent {
  /** Ordered list of stories — order here defines the “timeline” */
  @Input({ required: true }) stories: TimelineStory[] = [];

  /** Vertical (default) or horizontal layout */
  @Input() orientation: Orientation = 'vertical';

  /** Compact density (smaller paddings, fonts) */
  @Input() compact = false;

  /** Alternate sides (vertical only) for zig-zag layout */
  @Input() alternate = true;

  /** Show numeric step badges 1..N */
  @Input() showSteps = true;

  /** Optional “Era” or section label every N items (no dates) */
  @Input() groupEvery = 0; // 0 = no grouping

  // derived signals for template convenience
  stepOf = (index: number) => index + 1;
  isLeft = (index: number) => this.alternate && index % 2 === 0;

  // a11y: roving tabindex for keyboard navigation
  activeIndex = signal<number>(0);

  onKeydown(evt: KeyboardEvent, idx: number) {
    if (this.orientation === 'horizontal') {
      if (evt.key === 'ArrowRight') { this.activeIndex.set(Math.min(idx + 1, this.stories.length - 1)); evt.preventDefault(); }
      if (evt.key === 'ArrowLeft')  { this.activeIndex.set(Math.max(idx - 1, 0)); evt.preventDefault(); }
    } else {
      if (evt.key === 'ArrowDown') { this.activeIndex.set(Math.min(idx + 1, this.stories.length - 1)); evt.preventDefault(); }
      if (evt.key === 'ArrowUp')   { this.activeIndex.set(Math.max(idx - 1, 0)); evt.preventDefault(); }
    }
  }
}

