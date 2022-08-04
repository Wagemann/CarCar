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







## Sales microservice
Explain your models and integration with the inventory
microservice, here.
