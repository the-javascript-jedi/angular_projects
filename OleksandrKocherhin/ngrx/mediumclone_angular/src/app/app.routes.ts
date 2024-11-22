import {Route} from '@angular/router'
export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.registerRoutes),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.loginRoutes),
  },
   {
    path: '',
        loadChildren:()=>{
          return import("src/app/globalFeed/globalFeed.routes").then((m)=>m.routes) 
        }
    }
]
