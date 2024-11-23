import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {isDevMode} from '@angular/core'
import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'
import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {AppComponent} from './app/app.component'
import {appRoutes} from './app/app.routes'
import {authFeatureKey, authReducer} from './app/auth/store/reducers'
import * as authEffects from './app/auth/store/effects'
import * as feedEffects from './app/shared/components/feed/store/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store'
import { authInterceptor } from './app/auth/services/authInterceptor'
import { feedFeatureKey, feedReducer } from './app/shared/components/feed/store/reducer'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideRouterStore(),
    provideStore({
      router:routerReducer
    }),
    // auth - state
    provideState(authFeatureKey, authReducer),
    // feed - state
    provideState(feedFeatureKey, feedReducer),
    // add effects
    provideEffects(authEffects,feedEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
