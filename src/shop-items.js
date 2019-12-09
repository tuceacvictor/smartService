'use strict';

class ShopItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        };
    }

    componentDidMount = () => {
        fetch('./js/shop/phones.json', {
        }).then((res) => res.json())
            .then((data) => {
                this.setState({phones: data})
            })
    };

    render() {
        const {phones} = this.state;
        return (
            phones.map((phone, index) => {
                return (
                    <div key={index} className="shop-item">
                        <div className="shop-item__info">
                            <div className="shop-item__name">
                                <h1>{phone.label}</h1>
                            </div>
                            <div className="shop-item-description">
                                <h5>{phone.description}</h5>
                            </div>
                            <div className="shop-item__price">
                                <p>{phone.price}</p>
                            </div>
                        </div>
                        <div className="shop-item__images">
                            <div className="shop-item__image">
                                <img src={phone.imageUrl} className="img-fluid" width="450"
                                     alt="iphone 11 smart service"/>
                            </div>
                        </div>
                    </div>
                )
            })
        )

    }
}

const domContainer = document.querySelector('#shop-items');
ReactDOM.render(<ShopItems/>, domContainer);
