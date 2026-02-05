import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

type ThemeName = 'winter' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'theme';
  readonly theme = signal<ThemeName>('winter');

  constructor() {
    const storedTheme = this.getStoredTheme();
    if (storedTheme) {
      this.theme.set(storedTheme);
    }
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.persistTheme(currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update((current: ThemeName) => (current === 'winter' ? 'dark' : 'winter'));
  }

  private applyTheme(theme: ThemeName): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private getStoredTheme(): ThemeName | null {
    const storage = this.document.defaultView?.localStorage;
    const value = storage?.getItem(this.storageKey);

    if (value === 'winter' || value === 'dark') {
      return value;
    }

    return null;
  }

  private persistTheme(theme: ThemeName): void {
    const storage = this.document.defaultView?.localStorage;
    storage?.setItem(this.storageKey, theme);
  }
}
