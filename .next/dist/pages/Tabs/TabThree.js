'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _gridStyled = require('grid-styled');

var _superagent = require('superagent');

var superagent = _interopRequireWildcard(_superagent);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabThree.js';


var Red = '#d5393a';
var user;

var TabThree = function (_Component) {
  (0, _inherits3.default)(TabThree, _Component);

  function TabThree(props, context) {
    (0, _classCallCheck3.default)(this, TabThree);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabThree.__proto__ || (0, _getPrototypeOf2.default)(TabThree)).call(this, props, context));

    _this.state = {
      shadow: 3,
      edit: false,
      user: user || { name: "", cuil: '', direccion: "", telefono: 0 }
    };
    return _this;
  }

  (0, _createClass3.default)(TabThree, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      user = JSON.parse(localStorage.getItem('current'));
      this.setState({ user: user });
      // superagent.get(`http://faraday:8000/api/users/${_id}`)
      //   .then(res => {
      //     localStorage.setItem('current' , JSON.stringify(JSON.parse(res.text)))                    
      //   })
      //   .catch(error => console.error(error.stack))
      var _name = user.name;
      //var _name = 'asd';
      superagent.get('http://faraday:8000/api/users/byname/' + _name).then(function (res) {
        localStorage.setItem('current', (0, _stringify2.default)(JSON.parse(res.text)));
      }).catch(function (error) {
        var sUser = JSON.parse(localStorage.getItem('current'));
        var user = {
          name: sUser.name,
          email: sUser.email,
          cuil: '',
          direccion: "",
          telefono: 0,
          profilePicture: sUser.imageUrl
        };
        superagent.post('http://faraday:8000/api/users', user).then(function (res) {
          //console.log(res);                     
        }).catch(function (error) {
          return console.error(error.stack);
        });
        console.error(error.stack);
      });
      user = JSON.parse(localStorage.getItem('current'));
      this.setState({ user: user });
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user) {
      superagent.put('http://faraday:8000/api/users/' + user._id, user).then(function (res) {
        //console.log(res);                     
      }).catch(function (error) {
        return console.error(error.stack);
      });
      this.setState({ edit: !this.state.edit });
      //console.log(user);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      if (!this.state.edit) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement(_Card.CardTitle, { title: this.state.user.telefono, subtitle: 'Telefono', subtitleColor: Red, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), _react2.default.createElement(_Card.CardTitle, { title: this.state.user.direccion, subtitle: 'Direcci\xF3n', subtitleColor: Red, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), _react2.default.createElement(_Card.CardTitle, { title: this.state.user.cuil || 0, subtitle: 'Cuil', subtitleColor: Red, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), _react2.default.createElement(_RaisedButton2.default, { style: styles.button, primary: 'true', label: 'ACTUALIZAR', onClick: function onClick() {
            return _this2.setState({ edit: !_this2.state.edit });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }));
      } else {
        return _react2.default.createElement('div', { style: { marginLeft: 16 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Telefono',
          defaultValue: this.state.user.telefono,
          type: 'number',
          style: { webkitAppearance: 'none' },
          onChange: function onChange(e) {
            return _this2.state.user.telefono = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }), _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Direcci\xF3n',
          defaultValue: this.state.user.direccion,
          multiLine: true,
          rows: 1,
          rowsMax: 4,
          onChange: function onChange(e) {
            return _this2.state.user.direccion = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Cuil',
          defaultValue: this.state.user.cuil,
          type: 'number',
          onChange: function onChange(e) {
            return _this2.state.user.cuil = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }), _react2.default.createElement(_RaisedButton2.default, { style: styles.button, secondary: 'true', label: 'GUARDAR', onClick: function onClick() {
            return _this2.updateUser(_this2.state.user);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { height: '80vh', padding: 16, color: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_gridStyled.Flex, { wrap: true, align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1, 1 / 4], __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1, 2 / 4], __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: this.state.shadow, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_Card.CardTitle, { title: 'Datos Personales', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement(_Card.CardText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_Card.CardTitle, { titleColor: Red, title: this.state.user.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement(_Card.CardTitle, { title: this.state.user.email, subtitle: 'Email', subtitleColor: Red, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), this.show()))), _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1, 1 / 4], __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      })));
    }
  }]);

  return TabThree;
}(_react.Component);

var styles = {
  button: {
    marginTop: 16
  }
};

exports.default = TabThree;