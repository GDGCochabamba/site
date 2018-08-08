# Guia de contribución

## ¿Por qué no encuentro los archivos environment.ts?
Por ahora, tratamos de no incluir información sensible dentro del proyecto, como las API keys y es en este archivo donde colocaremos esa información.

Recuerda que para dev y prod se usan dos archivos distintos: `environment.ts` y `environment.prod.ts`. 

Aqui te dejamos el codigo base para ellos:
```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false // this will be true when u need it for production
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
```

## ¿Como hacer un commit?
Lo unico que se pide por ahora es que se haga en ingles y en presente simple, algunos ejemplos:
```
Add new icon
Create another module
Update copy
```

## ¿Por qué los commits en ingles y esto esta en español? 😱
Existen muchas reglas variadas pero el usar commits es dejar parte de tu trabajo y nosotros incentivamos mucho el uso de ingles a nivel profesional, sin embargo, este tipo de archivo al igual que el `README.md` es para comunicarnos y lo preferimos hacerlo por ahora en español.

## 😒 Aquí falta información y mas cosas
Es probable, pero lo iremos actualizando lo mas seguido que podamos 

