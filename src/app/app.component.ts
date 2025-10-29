import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { MainComponent } from "./main/main.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MainComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-web-app';
  isActive: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe(isDarkMode => {
      const wordInputRef = this.themeService.getWordInputRef();
      if (isDarkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        const button = document.getElementById('dropdownMenuButton');
        if (button)
           button.style.color = 'white';
        if (wordInputRef)
          wordInputRef.nativeElement.style.backgroundColor = '#1F1F1F';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        const button = document.getElementById('dropdownMenuButton');
        if (button)
           button.style.color = 'black';
        if (wordInputRef)
          wordInputRef.nativeElement.style.backgroundColor = '#F4F4F4';
      }
    });
  }
}
