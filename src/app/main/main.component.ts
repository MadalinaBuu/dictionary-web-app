import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../core/services/dictionary.service';
import { CommonModule } from '@angular/common';
import { Phonetic, WordData } from '../WordData.model';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  word: string = '';
  isEmpty: boolean = false;
  wordFound: string = '';
  definition: any;
  showError: boolean = false;
  audioUrl: string = '';
  phonetic: string = '';
  meanings: any;

  wordData: WordData | undefined;
  @ViewChild('wordInputDOM', { static: false }) wordInputDOMRef!: ElementRef;
  isDarkMode = false;

  constructor(private dictionaryService: DictionaryService, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.darkMode$.subscribe(value => {
      this.isDarkMode = value;
    });
  }

  ngAfterViewInit() {
    this.themeService.setWordInputRef(this.wordInputDOMRef);
  }

  checkEmptyField() {
    this.isEmpty = !this.word.trim();
  }

  searchWord() {
    this.checkEmptyField();
    if (this.isEmpty) {
      return;
    }
    this.dictionaryService.getDefinition(this.word).subscribe(
      (response) => {
        this.definition = response;
        this.showError = false;

        this.wordData = response[0];//TODO: make carousel for many solutions
      },
      (error) => {
        this.showError = true;
      }
    );
  }

  getFirstAudioPhonetic(): Phonetic | undefined {
    return this.wordData?.phonetics.find(p => p.audio?.trim() !== '');
  }

  playAudio(audioPlayer: HTMLAudioElement) {
    audioPlayer.play();
  }
}
