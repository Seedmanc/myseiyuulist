import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class BusService {
  toggleChart: boolean = false;

  constructor() { }
}
