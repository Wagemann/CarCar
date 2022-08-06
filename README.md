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


## Design
https://excalidraw.com/#room=0f44eaab5c08dac4624c,2vOC4MVxqogn7K-tuU1SWg

## Service microservice

I created 3 models: Service Appointment, Technician, and the Automobile Value Object model that polls data from the Automobile model within Inventory which gives me access to the unique vin number to use within the Service microservice. The technician and service appointment models can create its own respective objects. The service appointment model has a foreign key to the technician model as it needs some of its data

I created views to create, view, and list technicians; create, list, update, and delete appointments; and a view to list service history from a specific vin



## Sales microservice - Nick Wagemann 

The Sales Microservice has four models. One the automobile value object that polls data from Automobile in the inventory models and lets me gain access to the vin number from inventory to use in the sales microservice. The employee model is used to create an employee and the customer model is used to create a customer. The Record Model is reliant upon the other three models to generate records that will have each of them listed within.

I created views that give the ability to get list, view details of specific items, update particular items, delete specific items, and post new items for the employee, customer, and record model.


