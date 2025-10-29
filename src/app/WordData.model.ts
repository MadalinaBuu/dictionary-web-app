// Define the interface for Phonetic
export interface Phonetic {
    text: string;
    audio: string; // optional property
  }
  
  // Define the interface for Meaning
  export interface Meaning {
    partOfSpeech: string;
    definitions: Array<{ definition: string, example: string }>;
    synonyms: string[];
    antonyms: string[];
  }
  
  // Define the interface for License
  export interface License {
    name: string;
    url: string;
  }
  
  // Define the class
  export class WordData {
    license: License;
    meanings: Meaning[];
    phonetic: string;
    phonetics: Phonetic[];
    sourceUrls: string[];
    word: string;
  
    constructor(
      license: License,
      meanings: Meaning[],
      phonetic: string,
      phonetics: Phonetic[],
      sourceUrls: string[],
      word: string
    ) {
      this.license = license;
      this.meanings = meanings;
      this.phonetic = phonetic;
      this.phonetics = phonetics;
      this.sourceUrls = sourceUrls;
      this.word = word;
    }
  }
  