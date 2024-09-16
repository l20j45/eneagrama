import {computed, Injectable, signal} from '@angular/core';
import {SupabaseClient} from "@supabase/supabase-js";
import {SupabaseService} from "../../shared/supabase/supabase.service";
import {Pregunta, PreguntaState} from "../../shared/model/models";
import {FormControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  supaBaseClient: SupabaseClient;

  constructor(private supaBaseService: SupabaseService) {
    this.supaBaseClient = supaBaseService.getClient();

  }

  private state = signal<PreguntaState>({
    pregunta: undefined,
    loading: false,
    error: false
  });

  // selectors
  preguntasSignalComputed = computed(() => this.state().pregunta);
  loadingSignalComputed = computed(() => this.state().loading);
  errorSignalComputed = computed(() => this.state().error);

  async getUserQuestion(setQuestion:string) {
    try {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: true,
      }));


      const data = await this.supaBaseClient
        .from('preguntas')
        .select()
        .eq('setPreguntas', setQuestion)
        .returns<Pregunta[]>();

      if (data.status == 200) {

        this.state.update((stateUpdate) => ({
          ...stateUpdate,
          pregunta: data.data,
        }));


      }
    } catch (error) {

      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        error: true,
      }));

    } finally {

      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: false,
      }));

    }
  }

  async insertNote(Data: {
    setDePreguntas: string;
    respuesta1: string;
    respuesta2: string;
    respuesta3: string;
    respuesta4: string;
    respuesta5: string;
    respuesta6: string;
    respuesta7: string;
    respuesta8: string;
    respuesta9: string;
    respuesta10: string;

  }) {
    console.log(Data);
    // const {data: {session}} = await this.authService.session();
    try {
      const response = await this.supaBaseClient.from('respuestasUsuarioEneagrama').insert({
        created_at: new Date(),
        setDePreguntas: Data.setDePreguntas,
        respuesta1: Data.respuesta1,
        respuesta2: Data.respuesta2,
        respuesta3: Data.respuesta3,
        respuesta4: Data.respuesta4,
        respuesta5: Data.respuesta5,
        respuesta6: Data.respuesta6,
        respuesta7: Data.respuesta7,
        respuesta8: Data.respuesta8,
        respuesta9: Data.respuesta9,
        respuesta10: Data.respuesta10,
        idUsuario: '5cc19f1f-d16e-4151-8cf3-1ba4c25de359'
      });
      return this.responseTemplate(response)
    } catch (error) {
      console.error('Unexpected error:', error);
      return {success: false, error};
    }
  }


  responseTemplate(response: any) {
    if (response.error) {
      return {success: false, error: response.error};
    } else {
      return {success: true, data: response.data};
    }
  }
}
