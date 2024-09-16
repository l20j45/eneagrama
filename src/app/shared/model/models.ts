import {FormControl} from "@angular/forms";

export interface Pregunta {
  id: string;
  created_at: string;
  setPreguntas: string | null;
  pregunta: string;
  respuesta1: string;
  respuesta2: string;
  idPregunta: string;
}

export interface PreguntaState {
  pregunta: any;
  loading: boolean;
  error: boolean;
}

// export interface preguntasForm {
//   create_at: FormControl<string | null>;
//   setDePreguntas: FormControl<string | null>;
//   respuesta1: FormControl<string | null>;
//   respuesta2: FormControl<string | null>;
//   respuesta3: FormControl<string | null>;
//   respuesta4: FormControl<string | null>;
//   respuesta5: FormControl<string | null>;
//   respuesta6: FormControl<string | null>;
//   respuesta7: FormControl<string | null>;
//   respuesta8: FormControl<string | null>;
//   respuesta9: FormControl<string | null>;
//   respuesta10: FormControl<string | null>;
//   idUsuario: FormControl<string | null>;
// }
