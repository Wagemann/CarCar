# CarCar

Team:

* Nick Wagemann - Sales
* Teresa Tan - Service

## Startup
Run the following commands in your terminal after you have cloned the project from the main branch

1) docker volume create beta-data (this will build a new volumne that the containers can consume and store data in)

2) docker compose build (this will build images as per your docker-compose.yml file)

3) docker compose up (this will start or restart all services defined in the docker-compose.yml)

4) Enjoy and give us both an A++ 🙂

5) Open browser to http://localhost:3000 to view the home page.


## Design
We started the project by working together in Excalidraw and planning out our site and models by drawing them out and labeling them before we even opened up our code editor. Which helped give us a good reference throughout the project to look to on how everything would interact with each other and how the site would look.

https://excalidraw.com/#room=0f44eaab5c08dac4624c,2vOC4MVxqogn7K-tuU1SWg

## Service microservice

I created 3 models: Service Appointment, Technician, and the Automobile Value Object model that polls data from the Automobile model within Inventory which gives me access to the unique vin number to use within the Service microservice. The technician and service appointment models can create its own respective objects. The service appointment model has a foreign key to the technician model as it needs some of its data

I created views to create, view, and list technicians; create, list, update, and delete appointments; and a view to list service history from a specific vin



## Sales microservice - Nick Wagemann 

The Sales Microservice has four models.

One the automobile value object that polls data from Automobile in the inventory models and lets me gain access to the vin number from inventory to use in the sales microservice.
 
The employee model is used to create an employee and the customer model is used to create a customer. 

The Record Model is reliant upon the other three models to generate records that will have each of them listed within.

I created views that give the ability to get list, view details of specific items, update particular items, delete specific items, and post new items for the employee, customer, and record model.

These views helped provide the information to fetch necessary information for the react microservice on the front end.

You can use all that functionality in Insomnia and some of the necessary lists and view features on the browser.

Insomnia requests:
For Sales Microservice 

Records
List Records: http://localhost:8090/api/record/
Detail Records: http://localhost:8090/api/record/(id number)/
Update Records: http://localhost:8090/api/record/(id number)/
Delete Records: http://localhost:8090/api/record/(id number)/
Create Records: http://localhost:8090/api/record/
for create need to use this format for json Data
example:
{
	"price": 115000.99,
	"employee_id": 1,
	"customer_id": 4,
	"automobile": 5
}

Employee
List Employee: http://localhost:8090/api/customer/
Detail Employee: http://localhost:8090/api/employee/(id number)/
Update Employee: http://localhost:8090/api/employee/(id number)/
Delete Employee: http://localhost:8090/api/employee/(id number)/
Create Employee: http://localhost:8090/api/employee/
for create need to use this format for json Data
example:
{
	"employee_name": "Robert Wagemann",
	"employee_id": 2
}

Customer 
List Employee: http://localhost:8090/api/customer/
Detail Employee: http://localhost:8090/api/customer/(id number)/
Update Employee: http://localhost:8090/api/customer/(id number)/
Delete Employee: http://localhost:8090/api/customer/(id number)/
Create Employee: http://localhost:8090/api/customer/
for create need to use this format for json Data
example:
{
	"customer_name": "Ace Wagemann",
	"address": "1011 4th street West Babylon, Ny 11704",
	"phone_number": "16318840777"
}



