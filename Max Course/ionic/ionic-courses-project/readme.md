node version - v20.18.0

ionic serve

ionic generate page auth

ionic generate service places/places

ionic generate service auth/auth

<!-- guard creation -->

ionic generate

> guard
> auth/auth

<!-- modal -->

ionic generate component bookings/create-book

Ion classes for grid - css
ion-align-items-center ion-justify-content-center
size-sm="8"
offset-sm="2"

Ionic uses breakpoints similar to Bootstrap:

Default (size): Extra small screens (phones, <576px)
sm: Small screens (576px and up)
md: Medium screens (768px and up)
lg: Large screens (992px and up)
xl: Extra large screens (1200px and up)

<ion-content>
  <ion-grid class="ion-no-padding">
    <ion-row class="ion-align-items-center ion-justify-content-center">
      <ion-col size="10" size-sm="4" size-md="2" offset-sm="2" offset-md="">Row 1 Col 1</ion-col>
      <ion-col size="2" size-sm="4" size-md="3">
        <ion-card>
          <ion-card-content>
            <h1>The column</h1>
            <p>Row 1 Col 2</p>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>

// test commit
