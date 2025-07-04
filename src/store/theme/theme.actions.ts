import { createAction, props } from '@ngrx/store';
import { ThemeMode } from '../../models/themeInterface';


export const toggleTheme = createAction('[Theme] Toggle Theme')

export const setTheme = createAction('[Theme] Set Theme', props<{ theme: ThemeMode }>())