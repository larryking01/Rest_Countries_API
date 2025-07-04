import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setTheme, toggleTheme } from './theme.actions';
import { map, tap, withLatestFrom } from 'rxjs';
import { ThemeMode } from '../../models/themeInterface';
import { selectTheme } from './theme.selectors';
import { Store } from '@ngrx/store';


@Injectable()
export class ThemeEffects {
    private actions$ = inject(Actions)
    private store = inject(Store)

    loadInitialTheme$ = createEffect(() => 
        this.actions$.pipe(
            ofType('@ngrx/effects/init'),
            tap(() => {
                const storedTheme = localStorage.getItem('theme');
                const theme = storedTheme === ThemeMode.dark ? ThemeMode.dark : ThemeMode.light;
                this.store.dispatch( setTheme({ theme }))
            })
        ),
        { dispatch: false }
    );



    persistTheme$ = createEffect(() => 
        this.actions$.pipe(
            ofType( setTheme, toggleTheme ),
            withLatestFrom( this.store.select( selectTheme )),
            tap(([__, theme]) => {
                localStorage.setItem('theme', theme)
            })
        ),
        { dispatch: false }
    )


}