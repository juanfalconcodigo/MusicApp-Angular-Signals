import { Action, createReducer, on } from "@ngrx/store";
import { Song } from '../interfaces/song';
import { setResults } from "./results.actions";

export interface ResultState {
    results: Song[]
}

const initialState: ResultState = {
    results: []
}
const _resultsReducer = createReducer(initialState,
    on(setResults, (state, { results }) => {
        return { results };
    })
);

export const resultsReducer = (state: ResultState | undefined, action: Action) => {
    return _resultsReducer(state, action);
}