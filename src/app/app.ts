import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IconComponent } from '@components/icon/icon.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly themeService = inject(ThemeService);
}
