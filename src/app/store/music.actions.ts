import { createAction, props } from "@ngrx/store";
import { Album, Artist } from "../interfaces";

export const setMusic = createAction('[MUSIC] Set music', props<{ song: string, singer: string, image: string, audio: string ,artist:Artist,album:Album }>());
