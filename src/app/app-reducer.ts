import {ActionReducerMap} from '@ngrx/store';
import { MusicState, musicReducer } from './store/music.reducers';
import { ThemeState, themeReducer } from './store/theme.reducers';
import { ResultState, resultsReducer } from './store/results.reducer';



export interface AppState{
    music:MusicState;
    themeApp:ThemeState;
    songs:ResultState
}

export const appReducers:ActionReducerMap<AppState>={
    music:musicReducer,
    themeApp:themeReducer,
    songs:resultsReducer
}