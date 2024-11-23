import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FeedService } from "../services/feed.service";
import { feedActions } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";

export const getFeedEffect = createEffect(
  // inject services to make api calls
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      // check the action name
      ofType(feedActions.getFeed),
      switchMap(({url}) => {
        // use service and make api calls
        return feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return feedActions.getFeedSuccess({feed})
          }),
          // no backend errors so we dont need to pass anything
          catchError(() => {
            return of(feedActions.getFeedFailure())
          })
        )
      })
    )
  },
  {functional: true}
)