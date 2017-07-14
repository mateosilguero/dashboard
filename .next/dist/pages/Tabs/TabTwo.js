'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _folder = require('material-ui/svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _insertDriveFile = require('material-ui/svg-icons/editor/insert-drive-file');

var _insertDriveFile2 = _interopRequireDefault(_insertDriveFile);

var _GridList = require('material-ui/GridList');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _gridStyled = require('grid-styled');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _superagent = require('superagent');

var superagent = _interopRequireWildcard(_superagent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabTwo.js';

var Red = '#d5393a';
var user;

var TabTwo = function (_Component) {
  (0, _inherits3.default)(TabTwo, _Component);

  function TabTwo(props, context) {
    (0, _classCallCheck3.default)(this, TabTwo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabTwo.__proto__ || (0, _getPrototypeOf2.default)(TabTwo)).call(this, props, context));

    _this.handleUploadFile = function (event) {};

    _this.state = {
      shadow: 3,
      user: user || { name: "", cuil: '', direccion: "", telefono: 0 }
    };
    return _this;
  }

  (0, _createClass3.default)(TabTwo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      user = JSON.parse(localStorage.getItem('current'));
      this.setState({ user: user });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { padding: 16, color: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_Paper2.default, { zDepth: 0, style: { backgroundColor: '#aaa' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h1', { style: styles.headline, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Documentaci\xF3n'), _react2.default.createElement(_TextField2.default, {
        type: 'file',
        name: 'file',
        onChange: this.handleUploadFile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(_Paper2.default, { zDepth: 0, style: { backgroundColor: '#aaa' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('h2', { style: styles.headline, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_folder2.default, { style: { color: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), ' RR.HH.')), _react2.default.createElement(_gridStyled.Flex, { wrap: true, align: 'center', style: styles.flex, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday feb.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday feb.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, ml: 'auto', width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, ml: 'auto', width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_Paper2.default, { zDepth: 0, style: { backgroundColor: '#aaa' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('h2', { style: styles.headline, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_folder2.default, { style: { color: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), ' Legales')), _react2.default.createElement(_gridStyled.Flex, { wrap: true, align: 'center', style: styles.flex, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday feb.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday feb.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, ml: 'auto', width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })))), _react2.default.createElement(_gridStyled.Box, { p: 2, ml: 'auto', width: [1, 1 / 2, 1 / 3, 1 / 5], __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_Card.Card, { zDepth: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement(_insertDriveFile2.default, { style: { height: 64, paddingTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: 'F931', subtitle: '01-2017', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_FlatButton2.default, { label: 'Abrir', target: '_blank', href: './static/docs/RRHH/Formulario 931 Faraday ene.pdf', __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }))))));
    }
  }]);

  return TabTwo;
}(_react.Component);

var styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    color: '#fff'
  },
  flex: {
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 20
  }
};

exports.default = TabTwo;