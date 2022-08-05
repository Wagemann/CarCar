import React from 'react';

class ServiceHistoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
          };
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        const historyId = data.vin

        const historyUrl = `http://localhost:8080/api/service_history/${historyId}`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(historyUrl, fetchConfig);
        if (response.ok) {
            const getVin= await response.json();
            console.log(getVin);

            const cleared = {
                vin: '',
            };
              this.setState(cleared);
            }
        }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Enter VIN</h1>
              <form onSubmit={this.handleSubmit} id="input-vin-form">
                <div className="form-floating mb-3">
                  <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                  <label htmlFor="vin">Vin</label>
                </div>
                <button className="btn btn-primary">Search</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default ServiceHistoryForm;