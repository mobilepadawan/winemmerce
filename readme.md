# winemmerce

This is a simple Ecommerce website to sell wines. It's entirely built on Vanilla JavaScript.

## wines.json

The file __wines.json__ works as a sort of database with information about the wine labels. You can find information about the type of grape, category, time to maseration, name of label and a description about the flavor in mouth.

# HTTP Methods

I just include ```GET``` method. ```POST```, ```PUT```, ```DELETE``` and ```PATCH``` are not necessary here. This is just a mockup for fill a sample. 
In the near future I'm thinking to add an option to POST new wines, writing a JSON file included in this project, using the JavaScript ```FileServer object()```.

## images (folder)

This folder contains the images about every bottle, referenced on the _imagen_ property in every object of the JSON file. The extension used in images is .webp. I am not serving images with the results of query. You can think the correct way to obtain it according to the results page. Maybe in the future I can pass the absolute URL to the image, but not for now.

# How to use it

1. Download the Project and initialize it with NODE JS.
2. You will available a couple of endpoints to query. Their names are:
   * ```/categoria/:name``` 
   * ```/all```
   * ```/varietal/:name```

# Examples

## /all
Calling the ```/all``` endpoint you will get the complete information about the wines available.

```js
GET http://localhost:PORT/all 
/* You will get the complete list of wines. */
```

## categoria/:name

You can check into the ** wines.js ** file the different categories available, calling the endpoint **categoria** and passing on it the category you are looking for. IE: ```/categoria/Blanco``` and you will get all the white wine labels. Also using ```/categoria/Tinto``` you'll get the Red wine labels, etcetera.

```js
GET http://localhost:PORT/categoria/Blanco
/* You will get the complete list of white wines. */
```

## varietal/:name

You can call the endpoint ```/varietal``` passing a parameter to get the kind of grape you want: _Chardonnay_, _Malbec_, _Cabernet_, _Torrontes_, etcetera.
You don't need to specify a combined name for the varietal. IE: if you pass the _Cabernet_ parameter and the list of wines will include both of them: _cabernet sauvignon_ and _cabernet franc_. If you want only _Cabernet Franc_, specify just 'Franc' in the parameter or use the complete name _Cabernet Franc_ including it as a parameter of the JavaScript ```encodeURIComponent()``` method.

```js
GET http://localhost:PORT/varietal/Malbec 
/* You will get the complete list of Malbec grape wines. */

const param = encodeURIComponent('Cabernet Franc')
GET http://localhost:PORT/varietal/:param 
/* You will get the complete URL encoded to find a combined name on the wines database */
```


## Bubbles

The bubble wines are saved under the categoria _Espumantes_. In adition to they're grouped by the type of grape. You will get in the complete list of its category.

# Testing the endpoints

If you are using **Visual Studio Code** as your primary code editor, you can integrate on it the Thunder Client Extension. It works the same way of POSTMAN and many other options for testing purposes. Check out the following image where you'll find how to use [Thunder Client](https://www.thunderclient.com) easily:

![Testing the endpoint](https://github.com/mobilepadawan/winemmerce/blob/master/images/thunder_client_sample.gif)

### More endpoints

If you are looking for a fine tuning of its API, you can suggest another type of endpoints you are looking for for your project and I will add it ASAP.
Or better, you can modify this project creating all the options to find, you are considering on.
