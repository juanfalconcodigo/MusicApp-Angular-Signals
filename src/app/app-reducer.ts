import {ActionReducerMap} from '@ngrx/store';
import { MusicState, musicReducer } from './store/music.reducers';



export interface AppState{
    music:MusicState;
}

export const appReducers:ActionReducerMap<AppState>={
    music:musicReducer
}