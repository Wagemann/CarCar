# CarCar

Team:

* Nick Wagemann - Sales
* Teresa Tan - Service

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






## Sales microservice
Explain your models and integration with the inventory
microservice, here.
