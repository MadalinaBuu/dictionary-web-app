import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private darkModeEnabled = new BehaviorSubject<boolean>(false);
    private wordInputRef!: ElementRef;

  setWordInputRef(ref: ElementRef) {
    this.wordInputRef = ref;
  }

  getWordInputRef(): ElementRef {

    return this.wordInputRef;
  }
    darkMode$ = this.darkModeEnabled.asObservable();
  
    setDarkMode(isEnabled: boolean) {
      this.darkModeEnabled.next(isEnabled);
    }
}
