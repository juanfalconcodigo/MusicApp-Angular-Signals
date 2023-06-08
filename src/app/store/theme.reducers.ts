import { Action, createReducer, on } from "@ngrx/store";
import { setTheme } from "./theme.action";
import { TYPE_THEME } from "../interfaces";

export interface ThemeState {
    theme: TYPE_THEME
}
const initialState: ThemeState = {
    theme: 'primary'
}
const _themeReducer = createReducer(initialState,
    on(setTheme, (state, { theme }) => {
        return {
            theme
        }
    })
);

export const themeReducer = (state: ThemeState | undefined, action: Action) => {
    return _themeReducer(state, action)
}