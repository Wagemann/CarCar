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

### Front-End

**Technician**
- Create list to show technicians: name, employee #
- Create function to load in index.js
- Import and create route in app.js
- Create form to enter a technician: name and employee #
- Import and create route in app.js
- Create separate links to access the form and list

**Service Appointment**
- Create list to show: vin, customer, date & time of appt, assigned technician’s name, reason for service
    - Create button for each appointment to cancel the appt or show service appt has been finished
    - Show that automobile was purchased from the dealership so that concierge can give VIP treatment
- Create function to load in index.js
- Import and create route in app.js
- Create form to allow service concierge to enter: vin, customer, date & time of appt, assigned technician, and reason for the service appt
- Import and create route in app.js
- Create links to get to access the form and list

**Service History**
- Create page allowing someone to type in the VIN
- On form submission, fetch all service appts for the car w the VIN
- Show list of appts for a specific VIN: customer, date & time of appt, assigned technician, reason for service
- Create separate search bar function to filter through VINs, import function into Service History List
- Create link that shows service history for a specific VIN

**Inventory Integration**

- Need to show if an automobile came from existing inventory

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

**Navigation**
- Create link to each list and create form on home page






## Sales microservice - Nick Wagemann 

The Sales Microservice has four models. One the automobile value object that polls data from Automobile in the inventory models and lets me gain access to the vin number from inventory to use in the sales microservice. The employee model is used to create an employee and the customer model is used to create a customer. The Record Model is reliant upon the other three models to generate records that will have each of them listed within.

I created views that give the ability to get list, view details of specific items, update particular items, delete specific items, and post new items for the employee, customer, and record model.


