import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona'

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  public persona= new Persona("Marisol","Garcia",18,"femenino")
  constructor() { }

  ngOnInit(): void {
  }

}
