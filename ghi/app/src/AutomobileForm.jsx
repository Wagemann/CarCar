import React, { Component } from 'react';

class AutomobileForm extends Component {
    constructor(props){
        super(props);
        this.state={
            vin: '',
            color: '',
            year: '',
            model: [],
            manufacturers: [],

        };
        this.handleVinChange=this.handleVinChange.bind(this);
        this.handleColorChange=this.handleColorChange.bind(this);
        this.handleYearChange=this.handleYearChange.bind(this);
        this.handleModelChange=this.handleModelChange.bind(this);
        this.handleManufacturerChange=this.handleManufacturerChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const url = "http://localhost:8100/api/manufacturers/"
        const url2 = "http://localhost:8100/api/models/"
        const response = await fetch(url)
        const response2 = await fetch(url2)
        if (response.ok && response2.ok){
            const data = await response.json()
            const data2 = await response2.json()
            this.setState({manufacturers: data.manufacturers},
                {models: data2.models})
        }

    }
    handleVinChange(event){
        const value = event.target.value;
        this.setState({vin:value})
    }
    handleColorChange(event){
        const value = event.target.value;
        this.setState({color:value})
    }
    handleYearChange(event){
        const value = event.target.value;
        this.setState({year:value})
    }

    handleModelChange(event){
        const value = event.target.value;
        this.setState({model_id:value})
    }
   
    handleManufacturerChange(event){
        const value = event.target.value;
        this.setState({manufacturer_id:value})
    }


    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}
        delete data.manufacturers
        delete data.models

        const automobileUrl = "http://localhost:8100/api/models/automobiles";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok){
            const newAutomobile = await response.json();
            const cleared = {
                vin: '',
                color: '',
                year: '',
                }
            this.setState(cleared)
        } 
    }
    render(){
        return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input placeholder="Vin" type="text" className="form-control" id="vin" name="vin" value={this.state.vin} onChange={this.handleVinChange} />
                <label htmlFor="vin">Vin number</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Color" type="text" className="form-control" id="color" name="color" value={this.state.color} onChange={this.handleColorChange} />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Year" type="text" className="form-control" id="year" name="year" value={this.state.year} onChange={this.handleYearChange} />
                <label htmlFor="year">Year</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleModelChange} value={this.state.model} name="model_id" required id="model" className="form-select">
                  <option value="">Model</option>
                  {this.state.models.map(model => {
                    return <option key={model.href} value={model.id}>{model.name}</option>
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleManufacturerChange} value={this.state.manufacturer} name="manufacturer_id" required id="manufacturers" className="form-select">
                  <option value="">Manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                  })}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
export default AutomobileForm;