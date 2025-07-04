import { ThemeMode } from "../../models/themeInterface";

export interface ThemeState {
    theme: ThemeMode
}


export const initialThemeState: ThemeState = {
    theme: ThemeMode.light
}