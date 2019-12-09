'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopItems = function (_React$Component) {
    _inherits(ShopItems, _React$Component);

    function ShopItems(props) {
        _classCallCheck(this, ShopItems);

        var _this = _possibleConstructorReturn(this, (ShopItems.__proto__ || Object.getPrototypeOf(ShopItems)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ShopItems, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "shop-item" },
                React.createElement(
                    "div",
                    { className: "shop-item__info" },
                    React.createElement(
                        "div",
                        { className: "shop-item__name" },
                        React.createElement(
                            "h1",
                            null,
                            "IPhone 11 Pro"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "shop-item-description" },
                        React.createElement(
                            "h5",
                            null,
                            "\u0442\u0435\u043C\u043D\u043E-\u0437\u0435\u043B\u0435\u043D\u044B\u0439/\u0437\u043E\u043B\u043E\u0442\u043E\u0439/\u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u044B\u0439/\xAB\u0441\u0435\u0440\u044B\u0439 \u043A\u043E\u0441\u043C\u043E\u0441\xBB"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "shop-item__price" },
                        React.createElement(
                            "p",
                            null,
                            "iPhone 11 Pro 64GB (\u0441 1 sim) \u2014 76 000 \u20BD"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "shop-item__images" },
                    React.createElement(
                        "div",
                        { className: "shop-item__image" },
                        React.createElement("img", { src: "./images/shop/iphone11.jpg", className: "img-fluid", width: "450",
                            alt: "iphone 11 smart service" })
                    )
                )
            );
        }
    }]);

    return ShopItems;
}(React.Component);

var domContainer = document.querySelector('#samsung-prices-table');
ReactDOM.render(React.createElement(ShopItems, null), domContainer);