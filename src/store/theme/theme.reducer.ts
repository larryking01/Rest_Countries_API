import { createReducer, on } from "@ngrx/store";
import * as ThemeActions from './theme.actions'
import { initialThemeState } from "./theme.state";
import { ThemeMode } from "../../models/themeInterface";



export const themeReducer = createReducer(
    initialThemeState,
    on( ThemeActions.setTheme, ( state, { theme }) => ({
        ...state,
        theme
    })),
    on( ThemeActions.toggleTheme, ( state ) => ({
        ...state,
        theme: state.theme === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
    }))


)



