'use strict';
class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }



  componentDidMount() {
   
  }


  render() {

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Iphone 11</th>
            <th scope="row">59000</th>
          </tr>
          <tr>
            <th scope="row">Iphone 11</th>
            <th scope="row">59000</th>
          </tr>
          <tr>
            <th scope="row">Iphone 11</th>
            <th scope="row">59000</th>
          </tr>
          <tr>
            <th scope="row">Iphone 11</th>
            <th scope="row">59000</th>
          </tr>
        </tbody>
      </table>

    )

  }
}

const domContainer = document.querySelector('#samsung-prices-table');
ReactDOM.render(<Prices />, domContainer);
