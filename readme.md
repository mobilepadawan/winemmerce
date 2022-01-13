# winemmerce

This is a simple Ecommerce website to sell wines. It's entirely built on Vanilla JavaScript.

## wines.json

The file **wines.json** works as a sort of database with information about the wine labels. You can find information about the type of grape, category, time to maseration, name of label and a description about the flavor in mouth.

## images (folder)

This folder contains the images about every bottle, referenced on the _imagen_ property in every object of the JSON file. The extension used in images is .webp.

# How to use it

1. Download the Project and initialize it with NODE JS.
2. You will available a couple of endpoints to query. Their names are: /categoria/:id - /all - /varietal/:id - /

# Examples

## /all
Calling the ```/all``` endpoint you will get the complete information about the wines available.

```js
http://localhost:PORT/all 
/* You will get the complete list of wines. */
```

## /categoria/:id

You can check into the ** wines.js ** file the different categories available, calling the endpoint **categoria** and passing on it the category you are looking for. IE: ```/categoria/Blanco``` and you will get all the white wine labels, using ```/categoria/Tinto```, you'll get the Red wine labels, etcetera.

```js
http://localhost:PORT/categoria/Blanco
/* You will get the complete list of white wines. */
```

## /varietal/:id

You can call the endpoint ```/varietal``` passing a parameter to get the kind of grape you want: _Chardonnay_, _Malbec_, _Cabernet_, _Torrontes_, etcetera.
You don't need to specify a combined name for the varietal. IE: if you pass the _Cabernet_ parameter and the list of wines will include both of them: _cabernet sauvignon_ and _cabernet franc_. If you want only _Cabernet Franc_, specify just 'Franc' in the parameter or use the complete name _Cabernet Franc_ including it as a parameter of the JavaScript ```encodeURIComponent()``` method.

```js
http://localhost:PORT/varietal/Malbec 
/* You will get the complete list of Malbec grape wines. */

const param = encodeURIComponent('Cabernet Franc')
http://localhost:PORT/varietal/:param 
/* You will get the complete URL encoded to find a combined name on the wines database */
```


## Bubbles

The bubble wines are saved under the categoria _Espumantes_. In adition to they're grouped by the type of grape. You will get in the complete list of its category.

### More endpoints

If you are looking for a fine tuning of its API, you can suggest another type of endpoints you are looking for for your project and I will add it ASAP. OR, better yet, you can modify this project creating all the options you are considering on.
