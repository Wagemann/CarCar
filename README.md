# CarCar

Team:

* Nick Wagemann - Sales
* Teresa Tan - Service

## Startup
Run the following commands in your terminal after you have cloned the project.

1) docker volume create beta-data (this will build a new volumne that the containers can consume and store data in)

2) docker compose build (this will build images as per your docker-compose.yml file)

3) docker compose up (this will start or restart all services defined in the docker-compose.yml)

4) Enjoy and give us both an A++


## Design
https://excalidraw.com/#room=0f44eaab5c08dac4624c,2vOC4MVxqogn7K-tuU1SWg

## Service microservice

### **Back-End**
**Technician**
- Create model: name, employee id
- Create encoder: name, employee_id, id
- Create view to create and list a technician: GET, POST
- Create url path to show list of technicians

**Service Appointment**
- Create model: car, vin, customer, appt_date_time, completed, technician, reason, is_vip
- Create encoder: customer, appt_date_time, technician, reason, is_vip
    - technician and car encoders
    - get extra data function for vin
- Create view to create and list appt: GET, POST
- Create view to delete and update specific appt: PUT, DELETE
- Create url path to show list of appts
- Create url path to show specific appt

**Service History**
- Create view to list service history: GET
- Create url path to show list of specific car

### Paired Front-End (Inventory)
**Manufacturer**
- Create manufacturer list: name
- Create function to load in index.js
- Import and create route in app.js
- Add link to manufacturer on home navbar
- Create manufacturer form: name
- Import and create route in app.js

**Vehicle Models**
- Create vehicle models list: name, manufacturer, picture
- Create function to load in index.js
- Import and create route in app.js
- Add link to vehicle models on home navbar
- Create vehicle model form: name, picture url, choose a manufacturer drop-down
- Import and create route in app.js

**Automobiles**
- Create automobile list: vin, color, year, model, manufacturer
- Create function to load in index.js
- Import and create route in app.js
- Add link to automobiles on home navbar
- Create add-an-automobile-to-inventory form: color, year, vin, choose a model drop-down
- Import and create route in app.js

**Navigation







## Sales microservice - Nick Wagemann 

The Sales Microservice has four models. One the automobile value object that polls data from Automobile in the inventory models and lets me gain access to the vin number from inventory to use in the sales microservice. The employee model is used to create an employee and the customer model is used to create a customer. The Record Model is reliant upon the other three models to generate records that will have each of them listed within.

I created views that give the ability to get list, view details of specific items, update particular items, delete specific items, and post new items for the employee, customer, and record model.


