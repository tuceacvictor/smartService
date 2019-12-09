'use strict';

class Prices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    readFile = (file) => {
        fetch(file, {
            headers: {
                contentType: "application/vnd.ms-excel; charset=utf-8",
            },
        }).then(response =>
            response.arrayBuffer())
          .then(resp => console.log(resp))
        // .then(response => response.arrayBuffer())
        // .then(ab => {
        //   // do stuff with `ArrayBuffer` representation of file
        // })
        // .catch(err => console.log(err));
    };

    componentDidMount() {
        let data = '';
        this.readFile('./js/receipts.xls');
        let workbook = XLSX.read(data, {
            type: "binary"
        });
        console.log(workbook)
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
ReactDOM.render(<Prices/>, domContainer);
