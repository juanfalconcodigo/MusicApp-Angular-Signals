import { Action, createReducer, on } from '@ngrx/store';
import { setMusic } from './music.actions';
import { Album, Artist } from '../interfaces';

export interface MusicState {
    song: string;
    singer: string;
    image: string;
    audio: string;
    artist: Artist | null;
    album: Album | null;
}

const initialState: MusicState = {
    singer: "",
    song: "",
    image: "",
    audio: "",
    artist: null,
    album: null
}

export const _musicReducer = createReducer(
    initialState,
    on(setMusic, (state, { singer, song, image, audio, artist, album }) => {
        return {
            ...state,
            singer,
            song,
            image,
            audio,
            artist,
            album
        }
    })
);

export function musicReducer(state: MusicState | undefined, action: Action) {
    return _musicReducer(state, action);
}

