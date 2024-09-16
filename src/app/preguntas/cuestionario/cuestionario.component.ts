import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PreguntasService} from "../services/preguntas.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.scss'
})
export class CuestionarioComponent implements OnInit {


  formularioPreguntas: any;

  setQuestion='';


  constructor(private formBuilder: FormBuilder, protected preguntasService: PreguntasService, private route: ActivatedRoute) {
    this.formularioPreguntas = this.formBuilder.group({
      pregunta1: new FormControl(null, Validators.required),
      pregunta2: new FormControl(null, Validators.required),
      pregunta3: new FormControl(null, Validators.required),
      pregunta4: new FormControl(null, Validators.required),
      pregunta5: new FormControl(null, Validators.required),
      pregunta6: new FormControl(null, Validators.required),
      pregunta7: new FormControl(null, Validators.required),
      pregunta8: new FormControl(null, Validators.required),
      pregunta9: new FormControl(null, Validators.required),
      pregunta10: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.setQuestion = "set"+params['id'];

    })
    this.preguntasService.getUserQuestion(this.setQuestion);
  };

  async submit() {

    if (this.formularioPreguntas.invalid) {
      alert("Completa todas las preguntas");
      return;
    }
    const result = await this.preguntasService.insertNote({
      setDePreguntas: 'set1',
      respuesta1: this.formularioPreguntas.value.pregunta1,
      respuesta2: this.formularioPreguntas.value.pregunta2,
      respuesta3: this.formularioPreguntas.value.pregunta3,
      respuesta4: this.formularioPreguntas.value.pregunta4,
      respuesta5: this.formularioPreguntas.value.pregunta5,
      respuesta6: this.formularioPreguntas.value.pregunta6,
      respuesta7: this.formularioPreguntas.value.pregunta7,
      respuesta8: this.formularioPreguntas.value.pregunta8,
      respuesta9: this.formularioPreguntas.value.pregunta9,
      respuesta10: this.formularioPreguntas.value.pregunta10
    })
    console.log(result);

    // const result =

  }


  ordernarIds() {
    return this.preguntasService.preguntasSignalComputed().sort((a: any, b: any) => a.id - b.id);
  }
}
