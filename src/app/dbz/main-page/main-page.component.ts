import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Nuevo',
    poder: 100
  }

  constructor(private dbzService: dbzService) {
    
  }
}