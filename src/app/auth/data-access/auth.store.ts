import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
;

export interface AuthState {
    token: string;
 }

 export function createInitialState(): AuthState {
    return {
      token: '',
    };
  }

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'auth' , resettable: true})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}