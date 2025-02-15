'use client'

import * as React from 'react';
import { STORAGE_KEY } from '../constants';

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps extends React.PropsWithChildren{
    defaultTheme?: Theme,
    storageKey?:string
}


type ThemeProviderState = {
    theme: Theme,
    setTheme:(theme:Theme)=>void
};

const initialState:ThemeProviderState = {
    theme: 'system',
    setTheme:()=>null
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children, defaultTheme = 'system', storageKey=STORAGE_KEY, ...props })=>{
     const [theme, setTheme] = React.useState<Theme>(defaultTheme);

     React.useEffect(()=>{
        if(window) setTheme(()=>window.localStorage ? window.localStorage.getItem(storageKey) as Theme : defaultTheme);
        const root = window.document.documentElement;
        if(root){
            root.classList.remove('light', 'dark');
            if(theme == 'system'){
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                root.classList.add(systemTheme);
                return;
            }
            root.classList.add(theme);
        }
     },[theme]);

     const value = {
        theme,
        setTheme:(theme:Theme)=>{
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
     };

     return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
     )
};

export const useTheme = ()=>{
     const context = React.useContext(ThemeProviderContext);
     if(context===undefined) throw new Error("Couldn't find the context for the Theme");
     return context;
}