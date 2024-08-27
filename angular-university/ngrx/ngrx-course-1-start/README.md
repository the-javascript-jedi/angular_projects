<!-- /////////////////////////////// -->
<!-- ns installation changes -->
<!-- tried in winu house on seelan marriage -- not working -->

nvm use 18.19.1
npm install -g @angular/cli@latest
npm install ts-node --legacy-peer-deps

<!-- tried below steps back home 27-August-2024 -->

//uninstall existing old angular version
npm uninstall -g @angular/cli
npm cache clean --force
npm install -g @angular/cli@18.0.0

//changed the package.json of below packages to 18.0.0
and deleted package-lock.json
"@ngrx/data": "18.0.0",
"@ngrx/effects": "18.0.0",
"@ngrx/entity": "18.0.0",
"@ngrx/router-store": "18.0.0",
"@ngrx/store": "18.0.0",
"@ngrx/store-devtools": "18.0.0",

<!-- to run code -->

npm run server
npm run start
