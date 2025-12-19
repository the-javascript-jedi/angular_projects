nvm list
nvm use 16.20.2
npx @angular/cli@12 new ngrx-sandbox-module

ng add @ngrx/store@12
ng add @ngrx/effects@12
ng add @ngrx/store-devtools@12

ng g module products --routing
ng g component products/products

src/app/products/
├── products.module.ts
├── products-routing.module.ts
├── products.component.ts
└── store/
