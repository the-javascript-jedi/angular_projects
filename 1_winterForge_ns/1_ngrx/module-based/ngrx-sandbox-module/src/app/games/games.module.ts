import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GamesComponent } from './games/games.component';
import { GamesRoutingModule } from './games-routing.module';
import { gamesReducer } from './store/games.reducer';
import { GamesEffects } from './store/game.effects';
import { GamesService } from './games.service';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,

    StoreModule.forFeature('gamesData', gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
  ],
  providers: [GamesService],
})
export class GamesModule {}
