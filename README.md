
# Project
This project will return the quantity of stocks remaining after transaction

## Language
* Backend - Typescript
* Frontend - NodeJS

## Server
This is the express server where it contains REST APIs for getting the data.

### How to Run?
* Navigate to server dir --> cd server
* Install required dependencies --> npm install
* Run the express server --> npm run start

Note : Make sure that 3002 port is free else change the port

### REST APIs
* GET http://localhost:3002/stock?sku=CLQ274fff846/07/46
   * This will fetch the quantiy of after transaction
   * response => 

* GET http://localhost:3002/getAllStocks
  * This will return all the initial stocks present in stock.json
  
### How to test?
* Use npm test -- -w for Unit test
* To test the APIs use Postman
* Or else use the client as given below

## Client
This UI is built using reactjs where it list out all the stocks available.
Click on the Stock sku to get the stocks after transaction

### How to Run?
* Navigate to client directory --> cd client
* Install all the dependencies --> npm install
* Run the Dev server --> npm run start
* Make sure backend server is already running to fecth the data
