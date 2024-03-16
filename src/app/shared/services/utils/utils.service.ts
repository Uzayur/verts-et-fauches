import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  compareStrings(firstString: string, secondString: string): boolean {
    const newFirstString = firstString
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();

    const newSecondString = secondString
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();

    return newFirstString.includes(newSecondString);
  }
}
