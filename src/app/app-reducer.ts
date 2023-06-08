import {ActionReducerMap} from '@ngrx/store';
import { MusicState, musicReducer } from './store/music.reducers';
import { ThemeState, themeReducer } from './store/theme.reducers';



export interface AppState{
    music:MusicState;
    themeApp:ThemeState;
}

export const appReducers:ActionReducerMap<AppState>={
    music:musicReducer,
    themeApp:themeReducer
}