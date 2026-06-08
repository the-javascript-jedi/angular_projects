ng new ngrx-playground --routing --style=scss
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools

STEP 1: Generate the Products module (the right way)
ng g module products --routing
ng g component products/products

STEP 2: Add Store folder inside Products
Manually create this folder (CLI doesn’t do this well):

===============================
for angular 19 standalone
Step 1
ng g component products/products --standalone

Step 2
Create NgRx store files manually

git commit --date="2025-12-06 2:30:00 +0530" -m "added api call for game platforms"
