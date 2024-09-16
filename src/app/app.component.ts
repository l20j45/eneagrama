import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./Components/navbar/navbar.component";
import {CuestionarioComponent} from "./preguntas/cuestionario/cuestionario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'eneagrama';

  ngOnInit(): void {
    initFlowbite();
  }

}
