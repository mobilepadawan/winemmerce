# winemmerce

This is a simple Ecommerce website to sold wines. It's entirely build on Vanilla JavaScript.

## wines.json
The file **wines.json**, it has a sort of database with information about the wine labels. You can find information about the type of grape, category, time to maseration, name of label and a description about the flavor in mouth.

## images (folder)
This folder contains the images about every bottle, referencing on every object of the JSON file. The extension used in images is .webp.

# How to use it
1. Download the Project and initialize it with NODE JS.
2. You will available a couple of endpoints to query. Their names are: /categoria/:id - /all - /varietal/:id - /

## /categoria/:id

You can check in the ** wines.js ** file the different categories available. For example you can call /categoria/Blanco and you will get all the white wine labels. Using /categoria/Tinto, you'll get the Red wine labels, etcetera.

## /varietal/:id

You can call the endpoint /varietal passing a parameter to get the kind of grape you want: Chardonnay, Malbec, Cabernet, Torrontes, etcetera.
You don't need to specify a combined name for the varietal. IE: if you pass the Cabernet parameter and the list of wines have cabernet sauvignon and cabernet franc, you will get both of them. If you want only Franc, specify just 'Franc' in the parameter.
