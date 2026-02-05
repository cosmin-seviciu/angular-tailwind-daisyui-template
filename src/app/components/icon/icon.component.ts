import { Component, input } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

type IconName = 'moon' | 'sun';
const ICONS = { moon: Moon, sun: Sun } as const;

@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly label = input<string | null>(null);
  readonly icon = (): (typeof ICONS)[IconName] => ICONS[this.name()];
}
