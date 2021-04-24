import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl:'./form-search.component.html',
  styles: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  //empezar a buscar el personaje despues de los 3 caracteres
  onSearch(value: string) {

    console.log(value);
    
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
