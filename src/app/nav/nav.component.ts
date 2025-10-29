import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  selectedFont: string = 'Sans Serif';
  isActive: boolean = false;
  isDarkMode = false;

  constructor(private renderer: Renderer2,
    private themeService: ThemeService
  ) { }

  selectFont(fontName: string, fontFamily: string): void {
    this.selectedFont = fontName;
    this.renderer.setStyle(document.body, 'font-family', fontFamily);
  }

  toggleStyle(event: any) {
    const input = event.target as HTMLInputElement;
    this.isDarkMode = input.checked;
    this.themeService.setDarkMode(this.isDarkMode);

    if (this.isDarkMode) {
      document.body.classList.add('night-mode');
      document.documentElement.classList.add('night-mode'); // html
    } else {
      document.body.classList.remove('night-mode');
      document.documentElement.classList.remove('night-mode');
    }
  }
}
