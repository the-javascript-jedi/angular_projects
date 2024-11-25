import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { PopularTagService } from "src/app/auth/services/popularTag.service"
import { popularTagsAction } from "./action"
import { catchError, map, of, switchMap } from "rxjs"
import { PopularTagType } from "../types/popularTag.type"

export const getPopularTagsEffect = createEffect(
  // inject services to make api calls
  (actions$ = inject(Actions), popularTagsService = inject(PopularTagService)) => {
    return actions$.pipe(
      // check the action name
      ofType(popularTagsAction.getPopularTags),
      switchMap(() => {
        // use service and make api calls
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagsAction.getPopularTagsSuccess({popularTags})
          }),
          // no backend errors so we dont need to pass anything
          catchError(() => {
            return of(popularTagsAction.getPopularTagsFailure())
          })
        )
      })
    )
  },
  {functional: true}
)