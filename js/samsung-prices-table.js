'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prices = function (_React$Component) {
    _inherits(Prices, _React$Component);

    function Prices(props) {
        _classCallCheck(this, Prices);

        var _this = _possibleConstructorReturn(this, (Prices.__proto__ || Object.getPrototypeOf(Prices)).call(this, props));

        _this.readFile = function (file) {
            fetch(file, {
                headers: {
                    contentType: "application/vnd.ms-excel; charset=utf-8"
                }
            }).then(function (response) {
                return response.arrayBuffer();
            }).then(function (resp) {
                return console.log(resp);
            });
            // .then(response => response.arrayBuffer())
            // .then(ab => {
            //   // do stuff with `ArrayBuffer` representation of file
            // })
            // .catch(err => console.log(err));
        };

        _this.state = {};
        return _this;
    }

    _createClass(Prices, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = '';
            this.readFile('./js/receipts.xls');
            var workbook = XLSX.read(data, {
                type: "binary"
            });
            console.log(workbook);
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'table',
                { className: 'table' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'col' },
                            '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'col' },
                            '\u0426\u0435\u043D\u0430'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            'Iphone 11'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            '59000'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            'Iphone 11'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            '59000'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            'Iphone 11'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            '59000'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            'Iphone 11'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'row' },
                            '59000'
                        )
                    )
                )
            );
        }
    }]);

    return Prices;
}(React.Component);

var domContainer = document.querySelector('#samsung-prices-table');
ReactDOM.render(React.createElement(Prices, null), domContainer);