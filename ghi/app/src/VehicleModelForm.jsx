import React, { Component } from 'react';

class VehicleModelForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            picture_url: '',
            manufacturers: [],

        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePictureChange=this.handlePictureChange.bind(this);
        this.handleManufacturerChange=this.handleManufacturerChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const url = "http://localhost:8100/api/manufacturers/"
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            this.setState({manufacturers: data.manufacturers})

        }

    }
    handleNameChange(event){
        const value = event.target.value;
        this.setState({name:value})
    }
    handlePictureChange(event){
        const value = event.target.value;
        this.setState({picture_url:value})
    }
    handleManufacturerChange(event){
        const value = event.target.value;
        this.setState({manufacturer:value})
    }
   

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}
        console.log("DATA!!!!!!!", data)
        delete data.manufacturers

        const vehicleModelUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(vehicleModelUrl, fetchConfig)
        if (response.ok){
            const newModel = await response.json()
            // console.log("!!!!!!!!", newModel)
            const cleared = {
                name: '',
                picture_url: '',
                }
            this.setState(cleared)
        } 
    }
    render(){
        return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new model</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input placeholder="Name" type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Picture" type="text" className="form-control" id="picture" name="picture" value={this.state.picture} onChange={this.handlePictureChange} />
                <label htmlFor="picture">Picture</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleManufacturerChange} value={this.state.manufacturer} name="manufacturers" required id="manufacturers" className="form-select">
                  <option value="">Manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return <option key={manufacturer.href} value={manufacturer.href}>{manufacturer.name}</option>
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
export default VehicleModelForm;