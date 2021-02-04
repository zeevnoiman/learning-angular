import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Recipe} from '../recipes-list/Recipe';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private messageSource = new BehaviorSubject<Recipe>({
    name: '',
    description: '',
    imagePath: ''
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Recipe) {
    this.messageSource.next(message)
  }

}
