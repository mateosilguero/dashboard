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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _GridList = require('material-ui/GridList');

var _List = require('material-ui/List');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _noteAdd = require('material-ui/svg-icons/action/note-add');

var _noteAdd2 = _interopRequireDefault(_noteAdd);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Tabs = require('material-ui/Tabs');

var _Tabs2 = require('./Tabs');

var _colors = require('material-ui/styles/colors');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _powerSettingsNew = require('material-ui/svg-icons/action/power-settings-new');

var _powerSettingsNew2 = _interopRequireDefault(_powerSettingsNew);

var _gridStyled = require('grid-styled');

var _Card = require('material-ui/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\main.js?entry',
    _this = undefined;

var Ip = require('./Ip.js');

var Red = '#d5393a';
var ip = Ip + ':3000';
var name;
var logState;
var tasks = [];
var muiTheme = (0, _getMuiTheme2.default)({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    accent1Color: _colors.deepOrange500
  }
});
var actions = [_react2.default.createElement(_FlatButton2.default, {
  label: 'CERRAR',
  primary: true,
  onTouchTap: function onTouchTap() {
    return _this.setState({ todo: false });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  }
})];

var HomePage = function (_Component) {
  (0, _inherits3.default)(HomePage, _Component);

  function HomePage(props, context) {
    (0, _classCallCheck3.default)(this, HomePage);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this, props, context));

    _this2.state = {
      field: '',
      open: false,
      todo: false,
      undo: false,
      value: 'a'

      // connect to WS server and listen event
    };

    _this2.handleMessage = function (message) {
      _this2.setState(function (state) {
        return { messages: state.messages.concat(message) };
      });
    };

    _this2.handleChange = function (event) {
      _this2.setState({ field: event.target.value });
    };

    _this2.handleTabs = function (value) {
      _this2.setState({
        value: value
      });
    };

    _this2.handleSubmit = function (event) {
      event.preventDefault();

      // create message object
      var message = {
        id: new Date().getTime(),
        value: _this2.state.field

        // send object to WS server
      };_this2.socket.emit('message', message);

      // add it to state and clean current input value
      _this2.setState(function (state) {
        return {
          field: '',
          messages: state.messages.concat(message)
        };
      });
    };

    _this2.newTask = _this2.newTask.bind(_this2);
    _this2.logout = _this2.logout.bind(_this2);
    return _this2;
  }

  // init state with the prefetched messages


  (0, _createClass3.default)(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      logState = localStorage.getItem('logState') || false;
      if (!logState) {
        _index2.default.push('/index');
      }
      tasks = JSON.parse(localStorage.getItem('tasks')) || ["No hay pendientes."];
      this.setState({ logged: logState });
      var logUser = JSON.parse(localStorage.getItem('user')) || {};
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('logState');
      this.setState({ user: '' });
      this.setState({ logged: false });
      logState = localStorage.getItem('logState') || false;
      _index2.default.push('/index');
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('message', this.handleMessage);
      this.socket.close();
    }

    // add messages from server to the state

  }, {
    key: 'handleDrawer',
    value: function handleDrawer() {
      this.setState({ dopen: !this.state.dopen });
    }

    // send messages to server and add them to the state

  }, {
    key: 'newTask',
    value: function newTask() {
      tasks.push("Nueva tarea");
      this.setState({ todo: false });
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', (0, _stringify2.default)(tasks));
      tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ todo: true });
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(i) {
      var taskUndo = tasks;
      localStorage.removeItem('taskUndo');
      localStorage.setItem('taskUndo', (0, _stringify2.default)(taskUndo));
      tasks.splice(i, 1);
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', (0, _stringify2.default)(tasks));
      tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ todo: false, undo: true });
    }
  }, {
    key: 'modifyTask',
    value: function modifyTask(e) {
      var i = parseInt(e.target.name);
      tasks[i] = e.target.value;
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', (0, _stringify2.default)(tasks));
    }
  }, {
    key: 'undoDelete',
    value: function undoDelete() {
      tasks = JSON.parse(localStorage.getItem('taskUndo'));
      this.setState({ undo: false, todo: true });
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', (0, _stringify2.default)(tasks));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement('main', { style: { margin: -8, backgroundColor: '#aaa' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, 'Faraday'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, '\n              body { \n                background: #aaa;\n                font-family: \'Roboto\';\n                color: #fff;\n              }\n            ')), _react2.default.createElement(_AppBar2.default, {
        title: 'Faraday S.A.I.C. y F.   (30-50386583-8)',
        style: { backgroundColor: Red },
        iconElementLeft: _react2.default.createElement(_Badge2.default, {
          badgeContent: tasks.length,
          primary: true,
          onClick: function onClick() {
            return _this3.setState({ open: !_this3.state.open });
          },
          badgeStyle: { backgroundColor: '#FF9125', marginRight: 5 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, _react2.default.createElement(_menu2.default, { style: { color: 'white', marginTop: -10 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        })),
        iconElementRight: _react2.default.createElement(_FlatButton2.default, {
          label: 'Cerrar Sesi\xF3n',
          secondary: true,
          onClick: this.logout,
          icon: _react2.default.createElement(_powerSettingsNew2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), _react2.default.createElement(_Tabs.Tabs, { value: this.state.value, inkBarStyle: { backgroundColor: '#000' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement(_Tabs.Tab, { onClick: function onClick() {
          return _this3.setState({ value: 'a' });
        }, label: 'Cartelera', value: 'a', style: styles.tab, __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(_Tabs2.TabOne, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      })), _react2.default.createElement(_Tabs.Tab, { onClick: function onClick() {
          return _this3.setState({ value: 'b' });
        }, label: 'Documentos', value: 'b', style: styles.tab, __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement(_Tabs2.TabTwo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      })), _react2.default.createElement(_Tabs.Tab, { onClick: function onClick() {
          return _this3.setState({ value: 'c' });
        }, label: 'Datos Personales', value: 'c', style: styles.tab, __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement(_Tabs2.TabThree, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }))), _react2.default.createElement(_Drawer2.default, { docked: false, open: this.state.open, onRequestChange: function onRequestChange(open) {
          return _this3.setState({ open: open });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Faraday',
        style: { backgroundColor: Red, marginBottom: 16 },
        iconElementLeft: _react2.default.createElement(_IconButton2.default, {
          primary: true,
          onClick: function onClick() {
            return _this3.setState({ open: !_this3.state.open });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }, _react2.default.createElement(_close2.default, { style: { color: 'white', marginTop: -10 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.setState({ todo: true, open: !_this3.state.open });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, 'Pendientes ( ', tasks.length, ' )'), _react2.default.createElement(_MenuItem2.default, { onClick: function onClick() {
          return _this3.setState({ open: !_this3.state.open });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, 'Menu Item 2')), _react2.default.createElement(_Dialog2.default, {
        title: _react2.default.createElement(_GridList.GridList, { cols: 3, cellHeight: 36, __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, _react2.default.createElement(_GridList.GridTile, { cols: 2.5, __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, 'Pendientes ( ', tasks.length, ' )'), _react2.default.createElement(_GridList.GridTile, { cols: 0.5, __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          }
        }, _react2.default.createElement(_IconButton2.default, {
          style: { marginTop: -15, height: 48, width: 48 },
          iconStyle: { height: 32, width: 32 },
          onClick: this.newTask, __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          }
        }, _react2.default.createElement(_noteAdd2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        })))),
        actions: [_react2.default.createElement(_FlatButton2.default, { label: 'CERRAR',
          primary: true,
          onClick: function onClick() {
            return _this3.setState({ todo: !_this3.state.todo });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        })],
        modal: false,
        open: this.state.todo,
        onRequestClose: function onRequestClose() {
          return _this3.setState({ todo: !_this3.state.todo });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, _react2.default.createElement(_List.List, { style: { height: 500, overflowY: 'auto' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, tasks.map(function (task, index) {
        return _react2.default.createElement(_List.ListItem, {
          rightIcon: _react2.default.createElement(_IconButton2.default, { style: { marginTop: 15, paddingRight: 5 }, onClick: function onClick() {
              return _this3.deleteTask(index);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            }
          }, _react2.default.createElement(_delete2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            }
          })),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          }
        }, _react2.default.createElement(_TextField2.default, {
          name: index.toString(),
          id: 'text-field-default',
          style: { minWidth: '90%' },
          defaultValue: task,
          multiLine: true,
          onChange: _this3.modifyTask, __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }));
      }))), _react2.default.createElement(_Snackbar2.default, {
        open: this.state.undo,
        message: 'Tarea eliminada.',
        action: 'DESHACER',
        autoHideDuration: 5000,
        onClick: function onClick() {
          return _this3.undoDelete();
        },
        onRequestClose: function onRequestClose() {
          return _this3.setState({ undo: false });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      })));
    }
  }]);

  return HomePage;
}(_react.Component);

HomePage.defaultProps = {};

var styles = {
  tab: {
    backgroundColor: Red,
    zDepth: 3
  },
  body: {
    background: '#aaa',
    fontFamily: 'Roboto',
    color: '#fff'
  }
};

exports.default = HomePage;