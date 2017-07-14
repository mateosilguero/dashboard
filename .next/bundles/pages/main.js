
          window.__NEXT_REGISTER_PAGE('/main', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var Ip = '192.168.1.116';
module.exports = Ip;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Ip.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Ip.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Ip")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(561);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(409);

var _head2 = _interopRequireDefault(_head);

var _reactTapEventPlugin = __webpack_require__(772);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(733);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(640);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _lightBaseTheme = __webpack_require__(639);

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _AppBar = __webpack_require__(680);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _RaisedButton = __webpack_require__(634);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Drawer = __webpack_require__(693);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(704);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _menu = __webpack_require__(641);

var _menu2 = _interopRequireDefault(_menu);

var _close = __webpack_require__(749);

var _close2 = _interopRequireDefault(_close);

var _Badge = __webpack_require__(683);

var _Badge2 = _interopRequireDefault(_Badge);

var _TextField = __webpack_require__(619);

var _TextField2 = _interopRequireDefault(_TextField);

var _Dialog = __webpack_require__(630);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _GridList = __webpack_require__(617);

var _List = __webpack_require__(633);

var _IconButton = __webpack_require__(610);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _noteAdd = __webpack_require__(739);

var _noteAdd2 = _interopRequireDefault(_noteAdd);

var _delete = __webpack_require__(737);

var _delete2 = _interopRequireDefault(_delete);

var _FlatButton = __webpack_require__(603);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Snackbar = __webpack_require__(713);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Tabs = __webpack_require__(720);

var _Tabs2 = __webpack_require__(765);

var _colors = __webpack_require__(611);

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

var _powerSettingsNew = __webpack_require__(740);

var _powerSettingsNew2 = _interopRequireDefault(_powerSettingsNew);

var _gridStyled = __webpack_require__(607);

var _Card = __webpack_require__(609);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\main.js?entry',
    _this = undefined;

var Ip = __webpack_require__(577);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\main.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\main.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/main")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(233);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(630);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Card = __webpack_require__(609);

var _GridList = __webpack_require__(617);

var _cake = __webpack_require__(752);

var _cake2 = _interopRequireDefault(_cake);

var _phone = __webpack_require__(743);

var _phone2 = _interopRequireDefault(_phone);

var _FlatButton = __webpack_require__(603);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _List = __webpack_require__(633);

var _info = __webpack_require__(738);

var _info2 = _interopRequireDefault(_info);

var _Divider = __webpack_require__(631);

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = __webpack_require__(628);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _business = __webpack_require__(742);

var _business2 = _interopRequireDefault(_business);

var _person = __webpack_require__(753);

var _person2 = _interopRequireDefault(_person);

var _Subheader = __webpack_require__(635);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _receipt = __webpack_require__(741);

var _receipt2 = _interopRequireDefault(_receipt);

var _gridStyled = __webpack_require__(607);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabOne.js';


var Red = '#d5393a';
var d = new Date();
var Month = d.getMonth();
var happybd = false;
var cumpleañero = [];
var i = 0;

var styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

var TabOne = function (_Component) {
  (0, _inherits3.default)(TabOne, _Component);

  function TabOne(props, context) {
    (0, _classCallCheck3.default)(this, TabOne);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabOne.__proto__ || (0, _getPrototypeOf2.default)(TabOne)).call(this, props, context));

    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.filterList = _this.filterList.bind(_this);
    _this.renderCump = _this.renderCump.bind(_this);
    _this.state = {
      open: false,
      shadow: 3,
      user: {}
    };
    return _this;
  }

  (0, _createClass3.default)(TabOne, [{
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (happybd) {
        this.setState({ open: true });
      }
      this.setState({ user: JSON.parse(localStorage.getItem('user')) || {} });
    }
  }, {
    key: 'filterList',
    value: function filterList(emp) {
      var m = parseInt(empleados[emp].idMonth);
      var mt = parseInt(Month);
      //var mt = 8
      var d = empleados[emp].nacimiento;
      var dt = parseInt(d[0] + d[1]);
      var dd = new Date();
      var date = dd.getUTCDate();
      //var date = 22
      var name = empleados[emp].nombre;
      if (m === mt) {
        if (dt === date) {
          cumpleañero.push(name);
          name = '';
          happybd = true;
          i = i + 1;
        }
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement(_List.ListItem, {
          leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_person2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }), backgroundColor: Red, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }),
          primaryText: empleados[emp].fecha + " - " + empleados[emp].nombre,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }), _react2.default.createElement(_Divider2.default, { inset: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }));
      }
    }
  }, {
    key: 'renderCump',
    value: function renderCump(emp) {
      if (emp < cumpleañero.length / 2) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react2.default.createElement(_List.ListItem, {
          primaryText: _react2.default.createElement('h3', { style: { color: Red }, __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }, cumpleañero[emp]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }), _react2.default.createElement(_Divider2.default, { inset: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'CERRAR',
        primary: true,
        onClick: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })];

      return _react2.default.createElement('div', { style: { padding: 16, fontFamily: 'Roboto' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_gridStyled.Grid, { width: [1, 1 / 2], mb: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1], __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_Card.Card, {
        zDepth: this.state.shadow,
        style: { marginRight: 8, marginBottom: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_Card.CardTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('h2', { style: { height: 29, color: Red }, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_cake2.default, { style: { height: 30, width: 30, marginBottom: -5, color: Red }, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), ' Cumplea\xF1os')), _react2.default.createElement(_Card.CardText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_List.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, (0, _keys2.default)(empleados).map(this.filterList), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }))))), _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1], __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_Card.Card, {
        zDepth: this.state.shadow,
        style: { marginRight: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_Card.CardTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('h2', { style: { height: 29, color: '#2196f3' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_phone2.default, { style: { height: 30, width: 30, marginBottom: -10, color: '#2196f3' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), ' Tel\xE9fonos \xDAtiles')), _react2.default.createElement(_Card.CardText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_List.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_business2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }),
        rightIcon: _react2.default.createElement(_info2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }),
        primaryText: '4719-6315',
        secondaryText: 'Faraday | Quito 2618, Beccar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement(_Divider2.default, { inset: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_business2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }),
        rightIcon: _react2.default.createElement(_info2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }),
        primaryText: '4511-8157',
        secondaryText: 'Transnoa | Av. Santa Fe 846 P\xBA4, CABA',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement(_Divider2.default, { inset: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_business2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            }
          }), __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }),
        rightIcon: _react2.default.createElement(_info2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }),
        primaryText: '4322-7771',
        secondaryText: 'Montelectro | Carlos Pellegrini 1135 P\xBA4, CABA',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })))))), _react2.default.createElement(_gridStyled.Grid, { width: [1, 1 / 2], __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_gridStyled.Box, { p: 0, width: [1], __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(_Card.Card, {
        zDepth: this.state.shadow, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(_Card.CardMedia, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement('img', { src: './static/assets/encabezado.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      })), _react2.default.createElement(_Card.CardTitle, { title: _react2.default.createElement('h3', { style: { fontWeight: 500 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, 'Hola ', this.state.user.givenName, ', estas son las novedades:'), __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement(_Card.CardText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement(_List.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_List.ListItem, {
        primaryText: 'Noticia 1',
        secondaryText: _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, _react2.default.createElement('span', { style: { color: '#444' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, 'Brunch this weekend?'), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }), 'I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'),
        secondaryTextLines: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), _react2.default.createElement(_List.ListItem, {
        primaryText: 'Noticia 2',
        secondaryText: _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, _react2.default.createElement('span', { style: { color: '#444' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, 'Brunch this weekend?'), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }), 'I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'),
        secondaryTextLines: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })))))), _react2.default.createElement(_Dialog2.default, {
        open: this.state.open,
        title: 'FELIZ CUMPLEA\xD1OS !',
        style: { alignText: 'center' },
        actions: actions,
        onRequestClose: this.handleRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement(_List.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, (0, _keys2.default)(cumpleañero).map(this.renderCump))));
    }
  }]);

  return TabOne;
}(_react.Component);

var empleados = [{ legajo: " 313 ", nombre: "  RICARDO  VERA ", fechaIng: "  09/11/2010  ", nacimiento: "02/05/85", fecha: "  02/05 ", mes: " mayo  ", idMonth: " 4 " }, { legajo: " 389 ", nombre: "  MARCELA  CASURRIAGA ", fechaIng: "  22/07/2013  ", nacimiento: "03/05/70", fecha: "  03/05 ", mes: " mayo  ", idMonth: " 4 " }, { legajo: " 385 ", nombre: "  CAROLINA  LOIS  ", fechaIng: "  22/07/2013  ", nacimiento: "03/06/74", fecha: "  03/06 ", mes: " junio ", idMonth: " 5 " }, { legajo: " 379 ", nombre: "  KARINA  ALLASINO  ", fechaIng: "  22/07/2013  ", nacimiento: "03/07/71", fecha: "  03/07 ", mes: " julio ", idMonth: " 6 " }, { legajo: " 309 ", nombre: "  YESICA  TITERA  ", fechaIng: "  01/07/2010  ", nacimiento: "05/08/83", fecha: "  05/08 ", mes: " agosto  ", idMonth: " 7 " }, { legajo: " 375 ", nombre: "  JAVIER  FERRARI ", fechaIng: "  22/07/2013  ", nacimiento: "06/01/77", fecha: "  06/01 ", mes: " enero ", idMonth: " 0 " }, { legajo: " 435 ", nombre: "  DANIEL  BOKHDJALIAN ", fechaIng: "  01/03/2017  ", nacimiento: "08/11/59", fecha: "  08/11 ", mes: " noviembre ", idMonth: " 10  " }, { legajo: " 113 ", nombre: "  JOSE  CAMPISI ", fechaIng: "  10/02/2003  ", nacimiento: "12/04/52", fecha: "  12/04 ", mes: " abril ", idMonth: " 3 " }, { legajo: " 85  ", nombre: "  MIGUEL  CANILLAS  ", fechaIng: "  01/01/1999  ", nacimiento: "12/11/62", fecha: "  12/11 ", mes: " noviembre ", idMonth: " 10  " }, { legajo: " 378 ", nombre: "  RODOLFO  POLIAK ", fechaIng: "  22/07/2013  ", nacimiento: "13/11/73", fecha: "  13/11 ", mes: " noviembre ", idMonth: " 10  " }, { legajo: " 304 ", nombre: "  FLORENCIA  LAFROSCIA  ", fechaIng: "  22/03/2010  ", nacimiento: "14/03/87", fecha: "  14/03 ", mes: " marzo ", idMonth: " 2 " }, { legajo: " 80  ", nombre: "  ANA MARIA JUAREZ  ", fechaIng: "  13/11/2013  ", nacimiento: "15/06/80", fecha: "  15/06 ", mes: " junio ", idMonth: " 5 " }, { legajo: " 80  ", nombre: "  MIRIAM MEDINA  ", fechaIng: "  13/11/2013  ", nacimiento: "15/06/80", fecha: "  15/06 ", mes: " junio ", idMonth: " 5 " }, { legajo: " 417 ", nombre: "  FRANCO  LOPEZ ", fechaIng: "  20/04/2015  ", nacimiento: "20/01/96", fecha: "  20/01 ", mes: " enero ", idMonth: " 0 " }, { legajo: "  ", nombre: "  GABRIEL BERNADZKI ", fechaIng: "   ", nacimiento: "20/02/1957", fecha: "  20/02 ", mes: " febrero ", idMonth: " 1 " }, { legajo: "   ", nombre: "  YANINA GOMEZ MURINGA  ", fechaIng: "    ", nacimiento: "22/09/81", fecha: "  22/09 ", mes: " septiembre  ", idMonth: " 8 " }, { legajo: " 408 ", nombre: "  MATEO  SILGUERO ", fechaIng: "  01/04/2014  ", nacimiento: "22/11/95", fecha: "  22/11 ", mes: " noviembre ", idMonth: " 10  " }, { legajo: " 377 ", nombre: "  PABLO  ANDRADE  ", fechaIng: "  22/07/2013  ", nacimiento: "22/11/75", fecha: "  22/11 ", mes: " noviembre ", idMonth: " 10  " }, { legajo: " 413 ", nombre: "  MARIA EUGENIA SOSA  ", fechaIng: "  14/05/2014  ", nacimiento: "23/04/78", fecha: "  23/04 ", mes: " abril ", idMonth: " 3 " }, { legajo: " 392 ", nombre: "  JULIETA  MARTINA  ", fechaIng: "  22/07/2013  ", nacimiento: "23/10/85", fecha: "  23/10 ", mes: " octubre ", idMonth: " 9 " }, { legajo: " 437 ", nombre: "  JACQUELINE  ESCEMI  ", fechaIng: "  06/03/2017  ", nacimiento: "26/05/89", fecha: "  26/05 ", mes: " mayo  ", idMonth: " 4 " }, { legajo: " 399 ", nombre: "  ALEJANDRA  CALISAYA ", fechaIng: "  03/10/2013  ", nacimiento: "27/03/73", fecha: "  27/03 ", mes: " marzo ", idMonth: " 2 " }, { legajo: " 261 ", nombre: "  GISELA  MARIOTTI  ", fechaIng: "  03/12/2007  ", nacimiento: "27/04/81", fecha: "  27/04 ", mes: " abril ", idMonth: " 3 " }, { legajo: "   ", nombre: "  MIGUEL RODRIGUEZ RECCHIA  ", fechaIng: "    ", nacimiento: "29/09/57", fecha: "  29/09 ", mes: " septiembre  ", idMonth: " 8 " }, { legajo: " 239 ", nombre: "  ALEXANDER  FINSTERBUSCH ", fechaIng: "  09/04/2007  ", nacimiento: "31/07/72", fecha: "  31/07 ", mes: " julio ", idMonth: " 6 " }, { legajo: " 441 ", nombre: "  MIGUEL  MARZELLA  ", fechaIng: "  20/03/2017  ", nacimiento: "31/12/64", fecha: "  31/12 ", mes: " diciembre ", idMonth: " 11  " }];

exports.default = TabOne;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabOne.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabOne.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Tabs\\TabOne")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(561);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(609);

var _FlatButton = __webpack_require__(603);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(619);

var _TextField2 = _interopRequireDefault(_TextField);

var _gridStyled = __webpack_require__(607);

var _superagent = __webpack_require__(646);

var superagent = _interopRequireWildcard(_superagent);

var _RaisedButton = __webpack_require__(634);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabThree.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabThree.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Tabs\\TabThree")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(609);

var _folder = __webpack_require__(745);

var _folder2 = _interopRequireDefault(_folder);

var _insertDriveFile = __webpack_require__(744);

var _insertDriveFile2 = _interopRequireDefault(_insertDriveFile);

var _GridList = __webpack_require__(617);

var _FlatButton = __webpack_require__(603);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = __webpack_require__(596);

var _Paper2 = _interopRequireDefault(_Paper);

var _gridStyled = __webpack_require__(607);

var _Divider = __webpack_require__(631);

var _Divider2 = _interopRequireDefault(_Divider);

var _TextField = __webpack_require__(619);

var _TextField2 = _interopRequireDefault(_TextField);

var _superagent = __webpack_require__(646);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabTwo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\TabTwo.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Tabs\\TabTwo")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabThree = exports.TabTwo = exports.TabOne = undefined;

var _TabOne = __webpack_require__(762);

var _TabOne2 = _interopRequireDefault(_TabOne);

var _TabTwo = __webpack_require__(764);

var _TabTwo2 = _interopRequireDefault(_TabTwo);

var _TabThree = __webpack_require__(763);

var _TabThree2 = _interopRequireDefault(_TabThree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TabOne = _TabOne2.default;
exports.TabTwo = _TabTwo2.default;
exports.TabThree = _TabThree2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\m.silguero\\Desktop\\Remoto\\Node apps\\Next\\pages\\Tabs\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Tabs\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(647);


/***/ })

},[795]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXG1haW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JcC5qcz84MTRmYjM3Iiwid2VicGFjazovLy8uL3BhZ2VzL21haW4uanM/ODE0ZmIzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9UYWJzL1RhYk9uZS5qcz84MTRmYjM3Iiwid2VicGFjazovLy8uL3BhZ2VzL1RhYnMvVGFiVGhyZWUuanM/ODE0ZmIzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9UYWJzL1RhYlR3by5qcz84MTRmYjM3Iiwid2VicGFjazovLy8uL3BhZ2VzL1RhYnMvaW5kZXguanM/ODE0ZmIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXAgPSAnMTkyLjE2OC4xLjExNidcclxubW9kdWxlLmV4cG9ydHMgPSBJcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0lwLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XHJcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xyXG5pbXBvcnQgbGlnaHRCYXNlVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2Jhc2VUaGVtZXMvbGlnaHRCYXNlVGhlbWUnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tZW51JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ21hdGVyaWFsLXVpL0JhZGdlJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcbmltcG9ydCB7R3JpZExpc3QsIEdyaWRUaWxlfSBmcm9tICdtYXRlcmlhbC11aS9HcmlkTGlzdCc7XHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEFkZCBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL25vdGUtYWRkJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL2RlbGV0ZSc7XHJcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnbWF0ZXJpYWwtdWkvU25hY2tiYXInO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSAnbWF0ZXJpYWwtdWkvVGFicyc7XHJcbmltcG9ydCB7VGFiT25lLCBUYWJUd28sIFRhYlRocmVlfSBmcm9tICcuL1RhYnMnO1xyXG5pbXBvcnQge2RlZXBPcmFuZ2U1MDB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgT2ZmIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vcG93ZXItc2V0dGluZ3MtbmV3J1xyXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICdncmlkLXN0eWxlZCdcclxuaW1wb3J0IHtDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkVGl0bGUsIENhcmRUZXh0fSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJztcclxudmFyIElwID0gcmVxdWlyZSgnLi9JcC5qcycpXHJcblxyXG5jb25zdCBSZWQgPSAnI2Q1MzkzYSc7XHJcbmNvbnN0IGlwID0gSXAgKyAnOjMwMDAnO1xyXG52YXIgbmFtZTtcclxudmFyIGxvZ1N0YXRlO1xyXG52YXIgdGFza3MgPSBbXTtcclxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XHJcbiAgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZicsXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlNTAwLFxyXG4gIH0sXHJcbn0pO1xyXG5jb25zdCBhY3Rpb25zID0gW1xyXG4gIDxGbGF0QnV0dG9uXHJcbiAgICBsYWJlbD1cIkNFUlJBUlwiXHJcbiAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgb25Ub3VjaFRhcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dG9kbzogZmFsc2V9KX1cclxuICAvPixcclxuXVxyXG5cclxuXHJcbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHsgIFxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgdGhpcy5uZXdUYXNrID0gdGhpcy5uZXdUYXNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHN0YXRlIHdpdGggdGhlIHByZWZldGNoZWQgbWVzc2FnZXNcclxuICBzdGF0ZSA9IHtcclxuICAgIGZpZWxkOiAnJywgICAgXHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIHRvZG86IGZhbHNlLFxyXG4gICAgdW5kbzogZmFsc2UsXHJcbiAgICB2YWx1ZTogJ2EnICAgXHJcbiAgfVxyXG5cclxuICAvLyBjb25uZWN0IHRvIFdTIHNlcnZlciBhbmQgbGlzdGVuIGV2ZW50XHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgbG9nU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nU3RhdGUnKSB8fCBmYWxzZTtcclxuICAgIGlmKCFsb2dTdGF0ZSkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL2luZGV4Jyk7XHJcbiAgICB9XHJcbiAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtcIk5vIGhheSBwZW5kaWVudGVzLlwiXTsgXHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWQ6IGxvZ1N0YXRlfSlcclxuICAgIHZhciBsb2dVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB8fCB7fSAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dTdGF0ZScpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogJyd9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZDogZmFsc2V9KTtcclxuICAgIGxvZ1N0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ1N0YXRlJykgfHwgZmFsc2U7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2luZGV4Jyk7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZSBzb2NrZXQgY29ubmVjdGlvblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHRoaXMuc29ja2V0Lm9mZignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcclxuICAgIHRoaXMuc29ja2V0LmNsb3NlKClcclxuICB9XHJcblxyXG4gIC8vIGFkZCBtZXNzYWdlcyBmcm9tIHNlcnZlciB0byB0aGUgc3RhdGVcclxuICBoYW5kbGVNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLmNvbmNhdChtZXNzYWdlKSB9KSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWVsZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtkb3BlbjogIXRoaXMuc3RhdGUuZG9wZW59KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVRhYnMgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBzZW5kIG1lc3NhZ2VzIHRvIHNlcnZlciBhbmQgYWRkIHRoZW0gdG8gdGhlIHN0YXRlXHJcbiAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIC8vIGNyZWF0ZSBtZXNzYWdlIG9iamVjdFxyXG4gICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgaWQ6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXHJcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmZpZWxkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VuZCBvYmplY3QgdG8gV1Mgc2VydmVyXHJcbiAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSlcclxuXHJcbiAgICAvLyBhZGQgaXQgdG8gc3RhdGUgYW5kIGNsZWFuIGN1cnJlbnQgaW5wdXQgdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgZmllbGQ6ICcnLFxyXG4gICAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMuY29uY2F0KG1lc3NhZ2UpXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIG5ld1Rhc2soKXsgICAgXHJcbiAgICB0YXNrcy5wdXNoKFwiTnVldmEgdGFyZWFcIik7ICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9kbzogZmFsc2V9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrcycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTsgICAgICAgIFxyXG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RvZG86IHRydWV9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRhc2soaSl7XHJcbiAgICB2YXIgdGFza1VuZG8gPSB0YXNrcztcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrVW5kbycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tVbmRvJywgSlNPTi5zdHJpbmdpZnkodGFza1VuZG8pKTsgICAgXHJcbiAgICB0YXNrcy5zcGxpY2UoaSwgMSk7ICAgICAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrcycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt0b2RvOiBmYWxzZSwgdW5kbzogdHJ1ZX0pOyAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIG1vZGlmeVRhc2soZSl7XHJcbiAgICB2YXIgaSA9IHBhcnNlSW50KGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgdGFza3NbaV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrcycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTsgICAgXHJcbiAgfVxyXG5cclxuICB1bmRvRGVsZXRlKCkgeyAgICBcclxuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza1VuZG8nKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt1bmRvOiBmYWxzZSwgdG9kbzogdHJ1ZX0pOyAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rhc2tzJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoICAgICAgICBcclxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cclxuICAgICAgICA8bWFpbiBzdHlsZT17e21hcmdpbjogLTgsIGJhY2tncm91bmRDb2xvcjogJyNhYWEnfX0+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkZhcmFkYXk8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICBib2R5IHsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPiBcclxuICAgICAgICAgIDwvSGVhZD4gICAgICAgICAgXHJcbiAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRmFyYWRheSBTLkEuSS5DLiB5IEYuICAgKDMwLTUwMzg2NTgzLTgpXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFJlZH19XHJcbiAgICAgICAgICAgIGljb25FbGVtZW50TGVmdD17XHJcbiAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICBiYWRnZUNvbnRlbnQ9e3Rhc2tzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZS5vcGVufSl9XHJcbiAgICAgICAgICAgICAgICBiYWRnZVN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0ZGOTEyNScsIG1hcmdpblJpZ2h0OiA1fX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgbWFyZ2luVG9wOiAtMTB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWNvbkVsZW1lbnRSaWdodD17XHJcbiAgICAgICAgICAgICAgPEZsYXRCdXR0b25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VycmFyIFNlc2nDs25cIlxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dvdXR9XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8T2ZmLz59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz4gICAgICAgICAgXHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gaW5rQmFyU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ319PlxyXG4gICAgICAgICAgICA8VGFiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiAnYSd9KX0gbGFiZWw9XCJDYXJ0ZWxlcmFcIiB2YWx1ZT1cImFcIiBzdHlsZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgPFRhYk9uZSAvPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICA8VGFiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiAnYid9KX0gbGFiZWw9XCJEb2N1bWVudG9zXCIgdmFsdWU9XCJiXCIgc3R5bGU9e3N0eWxlcy50YWJ9PlxyXG4gICAgICAgICAgICAgIDxUYWJUd28gLz5cclxuICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDxUYWIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ICdjJ30pfSBsYWJlbD1cIkRhdG9zIFBlcnNvbmFsZXNcIiB2YWx1ZT1cImNcIiBzdHlsZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICAgICAgPFRhYlRocmVlIC8+XHJcbiAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPERyYXdlciBkb2NrZWQ9e2ZhbHNlfSBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IG9uUmVxdWVzdENoYW5nZT17KG9wZW4pID0+IHRoaXMuc2V0U3RhdGUoe29wZW59KX0+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJGYXJhZGF5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogUmVkLCBtYXJnaW5Cb3R0b206IDE2fX1cclxuICAgICAgICAgICAgICBpY29uRWxlbWVudExlZnQ9e1xyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGUub3Blbn0pfSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBtYXJnaW5Ub3A6IC0xMH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3RvZG86IHRydWUsIG9wZW46ICF0aGlzLnN0YXRlLm9wZW59KX0+UGVuZGllbnRlcyAoIHt0YXNrcy5sZW5ndGh9ICk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGUub3Blbn0pfT5NZW51IEl0ZW0gMjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgIDxHcmlkTGlzdCBjb2xzPXszfSBjZWxsSGVpZ2h0PXszNn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFRpbGUgY29scz17Mi41fT5cclxuICAgICAgICAgICAgICAgICAgUGVuZGllbnRlcyAoIHt0YXNrcy5sZW5ndGh9IClcclxuICAgICAgICAgICAgICAgIDwvR3JpZFRpbGU+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFRpbGUgY29scz17MC41fT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogLTE1LCBoZWlnaHQ6IDQ4LCB3aWR0aDogNDh9fVxyXG4gICAgICAgICAgICAgICAgICAgIGljb25TdHlsZT17e2hlaWdodDogMzIsIHdpZHRoOiAzMn19IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3VGFza30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRUaWxlPlxyXG4gICAgICAgICAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJDRVJSQVJcIiBcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dG9kbzogIXRoaXMuc3RhdGUudG9kb30pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIG1vZGFsPXtmYWxzZX1cclxuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS50b2RvfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dG9kbzogIXRoaXMuc3RhdGUudG9kb30pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdCBzdHlsZT17e2hlaWdodDogNTAwLCBvdmVyZmxvd1k6ICdhdXRvJ319PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmlnaHRJY29uPXtcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e21hcmdpblRvcDogMTUsIHBhZGRpbmdSaWdodDogNX19IG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlVGFzayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2luZGV4LnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGV4dC1maWVsZC1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbldpZHRoOiAnOTAlJ319IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFza31cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aUxpbmU9e3RydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1vZGlmeVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS51bmRvfVxyXG4gICAgICAgICAgICBtZXNzYWdlPVwiVGFyZWEgZWxpbWluYWRhLlwiXHJcbiAgICAgICAgICAgIGFjdGlvbj1cIkRFU0hBQ0VSXCJcclxuICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NTAwMH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy51bmRvRGVsZXRlKCl9XHJcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt1bmRvOiBmYWxzZX0pfVxyXG4gICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+ICAgICBcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0YWI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogUmVkLFxyXG4gICAgekRlcHRoOiAzXHJcbiAgfSxcclxuICBib2R5OiB7IFxyXG4gICAgYmFja2dyb3VuZDogJyNhYWEnLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbWFpbi5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcbmltcG9ydCB7Q2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XHJcbmltcG9ydCB7R3JpZExpc3QsIEdyaWRUaWxlfSBmcm9tICdtYXRlcmlhbC11aS9HcmlkTGlzdCc7XHJcbmltcG9ydCBDYWtlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9zb2NpYWwvY2FrZSc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvY29tbXVuaWNhdGlvbi9waG9uZSdcclxuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xyXG5pbXBvcnQgQWN0aW9uSW5mbyBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL2luZm8nO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXInO1xyXG5pbXBvcnQgQ29tcGFueSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvY29tbXVuaWNhdGlvbi9idXNpbmVzcyc7XHJcbmltcG9ydCBQZXJzb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL3NvY2lhbC9wZXJzb24nO1xyXG5pbXBvcnQgU3ViaGVhZGVyIGZyb20gJ21hdGVyaWFsLXVpL1N1YmhlYWRlcic7XHJcbmltcG9ydCBOZXdzIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vcmVjZWlwdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ2dyaWQtc3R5bGVkJ1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnZ3JpZC1zdHlsZWQnXHJcblxyXG5jb25zdCBSZWQgPSAnI2Q1MzkzYSc7XHJcbnZhciBkID0gbmV3IERhdGUoKTtcclxudmFyIE1vbnRoID0gZC5nZXRNb250aCgpO1xyXG52YXIgaGFwcHliZCA9IGZhbHNlO1xyXG52YXIgY3VtcGxlYcOxZXJvID0gW107XHJcbnZhciBpID0gMDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkbGluZToge1xyXG4gICAgZm9udFNpemU6IDI0LFxyXG4gICAgcGFkZGluZ1RvcDogMTYsXHJcbiAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gIH0sXHJcbiAgc2xpZGU6IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jbGFzcyBUYWJPbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZpbHRlckxpc3QgPSB0aGlzLmZpbHRlckxpc3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyQ3VtcCA9IHRoaXMucmVuZGVyQ3VtcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgIHNoYWRvdzogMyxcclxuICAgICAgdXNlcjoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UoKSB7ICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZihoYXBweWJkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkgfHwge319KTsgICAgXHJcbiAgfSAgXHJcblxyXG4gIGZpbHRlckxpc3QoZW1wKSB7XHJcbiAgICB2YXIgbSA9IHBhcnNlSW50KGVtcGxlYWRvc1tlbXBdLmlkTW9udGgpXHJcbiAgICB2YXIgbXQgPSBwYXJzZUludChNb250aClcclxuICAgIC8vdmFyIG10ID0gOFxyXG4gICAgdmFyIGQgPSBlbXBsZWFkb3NbZW1wXS5uYWNpbWllbnRvXHJcbiAgICB2YXIgZHQgPSBwYXJzZUludChkWzBdICsgZFsxXSlcclxuICAgIHZhciBkZCA9IG5ldyBEYXRlKClcclxuICAgIHZhciBkYXRlID0gZGQuZ2V0VVRDRGF0ZSgpXHJcbiAgICAvL3ZhciBkYXRlID0gMjJcclxuICAgIHZhciBuYW1lID0gZW1wbGVhZG9zW2VtcF0ubm9tYnJlICAgIFxyXG4gICAgaWYgKG0gPT09IG10KSB7XHJcbiAgICAgIGlmIChkdCA9PT0gZGF0ZSkge1xyXG4gICAgICAgIGN1bXBsZWHDsWVyby5wdXNoKG5hbWUpO1xyXG4gICAgICAgIG5hbWUgPSAnJzsgICAgICAgICAgICAgIFxyXG4gICAgICAgIGhhcHB5YmQgPSB0cnVlO1xyXG4gICAgICAgIGkgPSBpICsgMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGxlZnRBdmF0YXI9ezxBdmF0YXIgaWNvbj17PFBlcnNvbi8+fSBiYWNrZ3JvdW5kQ29sb3I9e1JlZH0gLz59XHJcbiAgICAgICAgICAgIHByaW1hcnlUZXh0PXtlbXBsZWFkb3NbZW1wXS5mZWNoYSArIFwiIC0gXCIgKyBlbXBsZWFkb3NbZW1wXS5ub21icmV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPERpdmlkZXIgaW5zZXQ9e3RydWV9IC8+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgKSAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ3VtcChlbXApIHtcclxuICAgIGlmIChlbXAgPCBjdW1wbGVhw7Flcm8ubGVuZ3RoLzIpIHsgICAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICBwcmltYXJ5VGV4dD17PGgzIHN0eWxlPXt7Y29sb3I6IFJlZH19PntjdW1wbGVhw7Flcm9bZW1wXX08L2gzPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RGl2aWRlciBpbnNldD17dHJ1ZX0gLz5cclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICApIFxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gW1xyXG4gICAgICA8RmxhdEJ1dHRvblxyXG4gICAgICAgIGxhYmVsPVwiQ0VSUkFSXCJcclxuICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxyXG4gICAgICAvPixcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTYsIGZvbnRGYW1pbHk6ICdSb2JvdG8nfX0+XHJcbiAgICAgICAgPEdyaWQgd2lkdGg9e1sxLCAxLzJdfSBtYj17MTZ9PlxyXG4gICAgICAgIDxCb3ggcD17MH0gd2lkdGg9e1sxXX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgekRlcHRoPXt0aGlzLnN0YXRlLnNoYWRvd31cclxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiA4LCBtYXJnaW5Cb3R0b206IDh9fT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7aGVpZ2h0OiAyOSwgY29sb3I6IFJlZCB9fT48Q2FrZSBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgbWFyZ2luQm90dG9tOiAtNSwgY29sb3I6IFJlZCB9fSAvPiBDdW1wbGVhw7FvczwvaDI+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhlbXBsZWFkb3MpLm1hcCh0aGlzLmZpbHRlckxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggcD17MH0gd2lkdGg9e1sxXX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgekRlcHRoPXt0aGlzLnN0YXRlLnNoYWRvd31cclxuICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiA4fX0+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2hlaWdodDogMjksIGNvbG9yOiAnIzIxOTZmMyd9fT48UGhvbmUgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIG1hcmdpbkJvdHRvbTogLTEwLCBjb2xvcjogJyMyMTk2ZjMnfX0gLz4gVGVsw6lmb25vcyDDmnRpbGVzPC9oMj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdEF2YXRhcj17PEF2YXRhciBpY29uPXs8Q29tcGFueSAvPn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRJY29uPXs8QWN0aW9uSW5mbyAvPn1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dD1cIjQ3MTktNjMxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dD1cIkZhcmFkYXkgfCBRdWl0byAyNjE4LCBCZWNjYXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBpbnNldD17dHJ1ZX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRBdmF0YXI9ezxBdmF0YXIgaWNvbj17PENvbXBhbnkgLz59IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0SWNvbj17PEFjdGlvbkluZm8gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9XCI0NTExLTgxNTdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRleHQ9XCJUcmFuc25vYSB8IEF2LiBTYW50YSBGZSA4NDYgUMK6NCwgQ0FCQVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGluc2V0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsZWZ0QXZhdGFyPXs8QXZhdGFyIGljb249ezxDb21wYW55IC8+fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICByaWdodEljb249ezxBY3Rpb25JbmZvIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiNDMyMi03NzcxXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUZXh0PVwiTW9udGVsZWN0cm8gfCBDYXJsb3MgUGVsbGVncmluaSAxMTM1IFDCujQsIENBQkFcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIHdpZHRoPXtbMSwgMS8yXX0+XHJcbiAgICAgICAgICA8Qm94IHA9ezB9IHdpZHRoPXtbMV19PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHpEZXB0aD17dGhpcy5zdGF0ZS5zaGFkb3d9PlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2Fzc2V0cy9lbmNhYmV6YWRvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT17PGgzIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwfX0+SG9sYSB7dGhpcy5zdGF0ZS51c2VyLmdpdmVuTmFtZX0sIGVzdGFzIHNvbiBsYXMgbm92ZWRhZGVzOjwvaDM+fS8+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiTm90aWNpYSAxXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAnIzQ0NCd9fT5CcnVuY2ggdGhpcyB3ZWVrZW5kPzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSZhcG9zO2xsIGJlIGluIHlvdXIgbmVpZ2hib3Job29kIGRvaW5nIGVycmFuZHMgdGhpcyB3ZWVrZW5kLiBEbyB5b3Ugd2FudCB0byBncmFiIGJydW5jaD9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dExpbmVzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PVwiTm90aWNpYSAyXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAnIzQ0NCd9fT5CcnVuY2ggdGhpcyB3ZWVrZW5kPzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSZhcG9zO2xsIGJlIGluIHlvdXIgbmVpZ2hib3Job29kIGRvaW5nIGVycmFuZHMgdGhpcyB3ZWVrZW5kLiBEbyB5b3Ugd2FudCB0byBncmFiIGJydW5jaD9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dExpbmVzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICB0aXRsZT1cIkZFTElaIENVTVBMRUHDkU9TICFcIlxyXG4gICAgICAgICAgc3R5bGU9e3thbGlnblRleHQ6ICdjZW50ZXInfX1cclxuICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjdW1wbGVhw7Flcm8pLm1hcCh0aGlzLnJlbmRlckN1bXApfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGVtcGxlYWRvcz1bXHJcbntsZWdham86XCIgMzEzIFwiLG5vbWJyZTpcIiAgUklDQVJETyAgVkVSQSBcIixmZWNoYUluZzpcIiAgMDkvMTEvMjAxMCAgXCIsbmFjaW1pZW50bzogXCIwMi8wNS84NVwiICAsZmVjaGE6XCIgIDAyLzA1IFwiLG1lczpcIiBtYXlvICBcIixpZE1vbnRoOlwiIDQgXCJ9LFxyXG57bGVnYWpvOlwiIDM4OSBcIixub21icmU6XCIgIE1BUkNFTEEgIENBU1VSUklBR0EgXCIsZmVjaGFJbmc6XCIgIDIyLzA3LzIwMTMgIFwiLG5hY2ltaWVudG86IFwiMDMvMDUvNzBcIiAgLGZlY2hhOlwiICAwMy8wNSBcIixtZXM6XCIgbWF5byAgXCIsaWRNb250aDpcIiA0IFwifSxcclxue2xlZ2FqbzpcIiAzODUgXCIsbm9tYnJlOlwiICBDQVJPTElOQSAgTE9JUyAgXCIsZmVjaGFJbmc6XCIgIDIyLzA3LzIwMTMgIFwiLG5hY2ltaWVudG86IFwiMDMvMDYvNzRcIiAgLGZlY2hhOlwiICAwMy8wNiBcIixtZXM6XCIganVuaW8gXCIsaWRNb250aDpcIiA1IFwifSxcclxue2xlZ2FqbzpcIiAzNzkgXCIsbm9tYnJlOlwiICBLQVJJTkEgIEFMTEFTSU5PICBcIixmZWNoYUluZzpcIiAgMjIvMDcvMjAxMyAgXCIsbmFjaW1pZW50bzogXCIwMy8wNy83MVwiICAsZmVjaGE6XCIgIDAzLzA3IFwiLG1lczpcIiBqdWxpbyBcIixpZE1vbnRoOlwiIDYgXCJ9LFxyXG57bGVnYWpvOlwiIDMwOSBcIixub21icmU6XCIgIFlFU0lDQSAgVElURVJBICBcIixmZWNoYUluZzpcIiAgMDEvMDcvMjAxMCAgXCIsbmFjaW1pZW50bzogXCIwNS8wOC84M1wiICAsZmVjaGE6XCIgIDA1LzA4IFwiLG1lczpcIiBhZ29zdG8gIFwiLGlkTW9udGg6XCIgNyBcIn0sXHJcbntsZWdham86XCIgMzc1IFwiLG5vbWJyZTpcIiAgSkFWSUVSICBGRVJSQVJJIFwiLGZlY2hhSW5nOlwiICAyMi8wNy8yMDEzICBcIixuYWNpbWllbnRvOiBcIjA2LzAxLzc3XCIgICxmZWNoYTpcIiAgMDYvMDEgXCIsbWVzOlwiIGVuZXJvIFwiLGlkTW9udGg6XCIgMCBcIn0sXHJcbntsZWdham86XCIgNDM1IFwiLG5vbWJyZTpcIiAgREFOSUVMICBCT0tIREpBTElBTiBcIixmZWNoYUluZzpcIiAgMDEvMDMvMjAxNyAgXCIsbmFjaW1pZW50bzogXCIwOC8xMS81OVwiICAsZmVjaGE6XCIgIDA4LzExIFwiLG1lczpcIiBub3ZpZW1icmUgXCIsaWRNb250aDpcIiAxMCAgXCJ9LFxyXG57bGVnYWpvOlwiIDExMyBcIixub21icmU6XCIgIEpPU0UgIENBTVBJU0kgXCIsZmVjaGFJbmc6XCIgIDEwLzAyLzIwMDMgIFwiLG5hY2ltaWVudG86IFwiMTIvMDQvNTJcIiAgLGZlY2hhOlwiICAxMi8wNCBcIixtZXM6XCIgYWJyaWwgXCIsaWRNb250aDpcIiAzIFwifSxcclxue2xlZ2FqbzpcIiA4NSAgXCIsbm9tYnJlOlwiICBNSUdVRUwgIENBTklMTEFTICBcIixmZWNoYUluZzpcIiAgMDEvMDEvMTk5OSAgXCIsbmFjaW1pZW50bzogXCIxMi8xMS82MlwiICAsZmVjaGE6XCIgIDEyLzExIFwiLG1lczpcIiBub3ZpZW1icmUgXCIsaWRNb250aDpcIiAxMCAgXCJ9LFxyXG57bGVnYWpvOlwiIDM3OCBcIixub21icmU6XCIgIFJPRE9MRk8gIFBPTElBSyBcIixmZWNoYUluZzpcIiAgMjIvMDcvMjAxMyAgXCIsbmFjaW1pZW50bzogXCIxMy8xMS83M1wiICAsZmVjaGE6XCIgIDEzLzExIFwiLG1lczpcIiBub3ZpZW1icmUgXCIsaWRNb250aDpcIiAxMCAgXCJ9LFxyXG57bGVnYWpvOlwiIDMwNCBcIixub21icmU6XCIgIEZMT1JFTkNJQSAgTEFGUk9TQ0lBICBcIixmZWNoYUluZzpcIiAgMjIvMDMvMjAxMCAgXCIsbmFjaW1pZW50bzogXCIxNC8wMy84N1wiICAsZmVjaGE6XCIgIDE0LzAzIFwiLG1lczpcIiBtYXJ6byBcIixpZE1vbnRoOlwiIDIgXCJ9LFxyXG57bGVnYWpvOlwiIDgwICBcIixub21icmU6XCIgIEFOQSBNQVJJQSBKVUFSRVogIFwiLGZlY2hhSW5nOlwiICAxMy8xMS8yMDEzICBcIixuYWNpbWllbnRvOiBcIjE1LzA2LzgwXCIgICxmZWNoYTpcIiAgMTUvMDYgXCIsbWVzOlwiIGp1bmlvIFwiLGlkTW9udGg6XCIgNSBcIn0sXHJcbntsZWdham86XCIgODAgIFwiLG5vbWJyZTpcIiAgTUlSSUFNIE1FRElOQSAgXCIsZmVjaGFJbmc6XCIgIDEzLzExLzIwMTMgIFwiLG5hY2ltaWVudG86IFwiMTUvMDYvODBcIiAgLGZlY2hhOlwiICAxNS8wNiBcIixtZXM6XCIganVuaW8gXCIsaWRNb250aDpcIiA1IFwifSxcclxue2xlZ2FqbzpcIiA0MTcgXCIsbm9tYnJlOlwiICBGUkFOQ08gIExPUEVaIFwiLGZlY2hhSW5nOlwiICAyMC8wNC8yMDE1ICBcIixuYWNpbWllbnRvOiBcIjIwLzAxLzk2XCIgICxmZWNoYTpcIiAgMjAvMDEgXCIsbWVzOlwiIGVuZXJvIFwiLGlkTW9udGg6XCIgMCBcIn0sXHJcbntsZWdham86XCIgIFwiLG5vbWJyZTpcIiAgR0FCUklFTCBCRVJOQURaS0kgXCIsZmVjaGFJbmc6XCIgICBcIixuYWNpbWllbnRvOiBcIjIwLzAyLzE5NTdcIiAgLGZlY2hhOlwiICAyMC8wMiBcIixtZXM6XCIgZmVicmVybyBcIixpZE1vbnRoOlwiIDEgXCJ9LFxyXG57bGVnYWpvOlwiICAgXCIsbm9tYnJlOlwiICBZQU5JTkEgR09NRVogTVVSSU5HQSAgXCIsZmVjaGFJbmc6XCIgICAgXCIsbmFjaW1pZW50bzogXCIyMi8wOS84MVwiICAsZmVjaGE6XCIgIDIyLzA5IFwiLG1lczpcIiBzZXB0aWVtYnJlICBcIixpZE1vbnRoOlwiIDggXCJ9LFxyXG57bGVnYWpvOlwiIDQwOCBcIixub21icmU6XCIgIE1BVEVPICBTSUxHVUVSTyBcIixmZWNoYUluZzpcIiAgMDEvMDQvMjAxNCAgXCIsbmFjaW1pZW50bzogXCIyMi8xMS85NVwiICAsZmVjaGE6XCIgIDIyLzExIFwiLG1lczpcIiBub3ZpZW1icmUgXCIsaWRNb250aDpcIiAxMCAgXCJ9LFxyXG57bGVnYWpvOlwiIDM3NyBcIixub21icmU6XCIgIFBBQkxPICBBTkRSQURFICBcIixmZWNoYUluZzpcIiAgMjIvMDcvMjAxMyAgXCIsbmFjaW1pZW50bzogXCIyMi8xMS83NVwiICAsZmVjaGE6XCIgIDIyLzExIFwiLG1lczpcIiBub3ZpZW1icmUgXCIsaWRNb250aDpcIiAxMCAgXCJ9LFxyXG57bGVnYWpvOlwiIDQxMyBcIixub21icmU6XCIgIE1BUklBIEVVR0VOSUEgU09TQSAgXCIsZmVjaGFJbmc6XCIgIDE0LzA1LzIwMTQgIFwiLG5hY2ltaWVudG86IFwiMjMvMDQvNzhcIiAgLGZlY2hhOlwiICAyMy8wNCBcIixtZXM6XCIgYWJyaWwgXCIsaWRNb250aDpcIiAzIFwifSxcclxue2xlZ2FqbzpcIiAzOTIgXCIsbm9tYnJlOlwiICBKVUxJRVRBICBNQVJUSU5BICBcIixmZWNoYUluZzpcIiAgMjIvMDcvMjAxMyAgXCIsbmFjaW1pZW50bzogXCIyMy8xMC84NVwiICAsZmVjaGE6XCIgIDIzLzEwIFwiLG1lczpcIiBvY3R1YnJlIFwiLGlkTW9udGg6XCIgOSBcIn0sXHJcbntsZWdham86XCIgNDM3IFwiLG5vbWJyZTpcIiAgSkFDUVVFTElORSAgRVNDRU1JICBcIixmZWNoYUluZzpcIiAgMDYvMDMvMjAxNyAgXCIsbmFjaW1pZW50bzogXCIyNi8wNS84OVwiICAsZmVjaGE6XCIgIDI2LzA1IFwiLG1lczpcIiBtYXlvICBcIixpZE1vbnRoOlwiIDQgXCJ9LFxyXG57bGVnYWpvOlwiIDM5OSBcIixub21icmU6XCIgIEFMRUpBTkRSQSAgQ0FMSVNBWUEgXCIsZmVjaGFJbmc6XCIgIDAzLzEwLzIwMTMgIFwiLG5hY2ltaWVudG86IFwiMjcvMDMvNzNcIiAgLGZlY2hhOlwiICAyNy8wMyBcIixtZXM6XCIgbWFyem8gXCIsaWRNb250aDpcIiAyIFwifSxcclxue2xlZ2FqbzpcIiAyNjEgXCIsbm9tYnJlOlwiICBHSVNFTEEgIE1BUklPVFRJICBcIixmZWNoYUluZzpcIiAgMDMvMTIvMjAwNyAgXCIsbmFjaW1pZW50bzogXCIyNy8wNC84MVwiICAsZmVjaGE6XCIgIDI3LzA0IFwiLG1lczpcIiBhYnJpbCBcIixpZE1vbnRoOlwiIDMgXCJ9LFxyXG57bGVnYWpvOlwiICAgXCIsbm9tYnJlOlwiICBNSUdVRUwgUk9EUklHVUVaIFJFQ0NISUEgIFwiLGZlY2hhSW5nOlwiICAgIFwiLG5hY2ltaWVudG86IFwiMjkvMDkvNTdcIiAgLGZlY2hhOlwiICAyOS8wOSBcIixtZXM6XCIgc2VwdGllbWJyZSAgXCIsaWRNb250aDpcIiA4IFwifSxcclxue2xlZ2FqbzpcIiAyMzkgXCIsbm9tYnJlOlwiICBBTEVYQU5ERVIgIEZJTlNURVJCVVNDSCBcIixmZWNoYUluZzpcIiAgMDkvMDQvMjAwNyAgXCIsbmFjaW1pZW50bzogXCIzMS8wNy83MlwiICAsZmVjaGE6XCIgIDMxLzA3IFwiLG1lczpcIiBqdWxpbyBcIixpZE1vbnRoOlwiIDYgXCJ9LFxyXG57bGVnYWpvOlwiIDQ0MSBcIixub21icmU6XCIgIE1JR1VFTCAgTUFSWkVMTEEgIFwiLGZlY2hhSW5nOlwiICAyMC8wMy8yMDE3ICBcIixuYWNpbWllbnRvOiBcIjMxLzEyLzY0XCIgICxmZWNoYTpcIiAgMzEvMTIgXCIsbWVzOlwiIGRpY2llbWJyZSBcIixpZE1vbnRoOlwiIDExICBcIn0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYk9uZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9UYWJzL1RhYk9uZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRBY3Rpb25zLCBDYXJkSGVhZGVyLCBDYXJkTWVkaWEsIENhcmRUaXRsZSwgQ2FyZFRleHR9IGZyb20gJ21hdGVyaWFsLXVpL0NhcmQnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICdncmlkLXN0eWxlZCdcclxuaW1wb3J0ICogYXMgc3VwZXJhZ2VudCBmcm9tICdzdXBlcmFnZW50J1xyXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XHJcblxyXG5jb25zdCBSZWQgPSAnI2Q1MzkzYSc7XHJcbnZhciB1c2VyO1xyXG5cclxuY2xhc3MgVGFiVGhyZWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hhZG93OiAzLFxyXG4gICAgICBlZGl0OiBmYWxzZSxcclxuICAgICAgdXNlcjogdXNlciB8fCB7bmFtZTogXCJcIiwgY3VpbDogJycsIGRpcmVjY2lvbjpcIlwiLCB0ZWxlZm9ubzogMH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogdXNlcn0pO1xyXG4gICAgLy8gc3VwZXJhZ2VudC5nZXQoYGh0dHA6Ly9mYXJhZGF5OjgwMDAvYXBpL3VzZXJzLyR7X2lkfWApXHJcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQnICwgSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShyZXMudGV4dCkpKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKSlcclxuICAgIHZhciBfbmFtZSA9IHVzZXIubmFtZVxyXG4gICAgLy92YXIgX25hbWUgPSAnYXNkJztcclxuICAgIHN1cGVyYWdlbnQuZ2V0KGBodHRwOi8vZmFyYWRheTo4MDAwL2FwaS91c2Vycy9ieW5hbWUvJHtfbmFtZX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50JyAsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UocmVzLnRleHQpKSkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHZhciBzVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQnKSk7XHJcbiAgICAgICAgdmFyIHVzZXIgPSB7XHJcbiAgICAgICAgICBuYW1lOiBzVXNlci5uYW1lLCBcclxuICAgICAgICAgIGVtYWlsOiBzVXNlci5lbWFpbCwgXHJcbiAgICAgICAgICBjdWlsOiAnJywgXHJcbiAgICAgICAgICBkaXJlY2Npb246XCJcIiwgXHJcbiAgICAgICAgICB0ZWxlZm9ubzogMCxcclxuICAgICAgICAgIHByb2ZpbGVQaWN0dXJlOiBzVXNlci5pbWFnZVVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcmFnZW50LnBvc3QoJ2h0dHA6Ly9mYXJhZGF5OjgwMDAvYXBpL3VzZXJzJywgdXNlcilcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvci5zdGFjaykpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjaykgICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQnKSk7ICBcclxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXI6IHVzZXJ9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIodXNlcikge1xyXG4gICAgc3VwZXJhZ2VudC5wdXQoYGh0dHA6Ly9mYXJhZGF5OjgwMDAvYXBpL3VzZXJzLyR7dXNlci5faWR9YCwgdXNlcilcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKSkgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdDogIXRoaXMuc3RhdGUuZWRpdH0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICBpZighdGhpcy5zdGF0ZS5lZGl0KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4gICAgICAgICAgXHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPXt0aGlzLnN0YXRlLnVzZXIudGVsZWZvbm99IHN1YnRpdGxlPVwiVGVsZWZvbm9cIiBzdWJ0aXRsZUNvbG9yPXtSZWR9IC8+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPXt0aGlzLnN0YXRlLnVzZXIuZGlyZWNjaW9ufSBzdWJ0aXRsZT1cIkRpcmVjY2nDs25cIiBzdWJ0aXRsZUNvbG9yPXtSZWR9IC8+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPXt0aGlzLnN0YXRlLnVzZXIuY3VpbCB8fCAwfSBzdWJ0aXRsZT1cIkN1aWxcIiBzdWJ0aXRsZUNvbG9yPXtSZWR9IC8+XHJcbiAgICAgICAgICA8UmFpc2VkQnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBwcmltYXJ5PVwidHJ1ZVwiIGxhYmVsPVwiQUNUVUFMSVpBUlwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2VkaXQ6ICF0aGlzLnN0YXRlLmVkaXR9KX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogMTZ9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJUZWxlZm9ub1wiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS51c2VyLnRlbGVmb25vfVxyXG4gICAgICAgICAgICB0eXBlPSdudW1iZXInICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3R5bGU9e3t3ZWJraXRBcHBlYXJhbmNlOiAnbm9uZSd9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc3RhdGUudXNlci50ZWxlZm9ubyA9IGUudGFyZ2V0LnZhbHVlfVxyXG4gICAgICAgICAgLz48YnIgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEaXJlY2Npw7NuXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVzZXIuZGlyZWNjaW9ufVxyXG4gICAgICAgICAgICBtdWx0aUxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgIHJvd3M9ezF9XHJcbiAgICAgICAgICAgIHJvd3NNYXg9ezR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zdGF0ZS51c2VyLmRpcmVjY2lvbiA9IGUudGFyZ2V0LnZhbHVlfVxyXG4gICAgICAgICAgLz48YnIgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJDdWlsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnVzZXIuY3VpbH1cclxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc3RhdGUudXNlci5jdWlsID0gZS50YXJnZXQudmFsdWV9XHJcbiAgICAgICAgICAvPjxiciAvPlxyXG5cclxuICAgICAgICAgIDxSYWlzZWRCdXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IHNlY29uZGFyeT1cInRydWVcIiBsYWJlbD1cIkdVQVJEQVJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZS51c2VyKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkgeyAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnODB2aCcsIHBhZGRpbmc6IDE2LCBjb2xvcjogJyNmZmYnfX0+XHJcbiAgICAgICAgPEZsZXggd3JhcCBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgIDxCb3ggcD17MH0gd2lkdGg9e1sxLCAxLzQgXX0+PC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHA9ezB9IHdpZHRoPXtbMSwgMi80IF19PiAgIFxyXG4gICAgICAgICAgICA8Q2FyZCB6RGVwdGg9e3RoaXMuc3RhdGUuc2hhZG93fSA+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIkRhdG9zIFBlcnNvbmFsZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGVDb2xvcj17UmVkfSB0aXRsZT17dGhpcy5zdGF0ZS51c2VyLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPXt0aGlzLnN0YXRlLnVzZXIuZW1haWx9IHN1YnRpdGxlPVwiRW1haWxcIiBzdWJ0aXRsZUNvbG9yPXtSZWR9IC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zaG93KCl9IFxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHA9ezB9IHdpZHRoPXtbMSwgMS80IF19PjwvQm94PlxyXG4gICAgICAgIDwvRmxleD4gICAgICAgICAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IDE2XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVGhyZWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvVGFicy9UYWJUaHJlZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRBY3Rpb25zLCBDYXJkSGVhZGVyLCBDYXJkTWVkaWEsIENhcmRUaXRsZSwgQ2FyZFRleHR9IGZyb20gJ21hdGVyaWFsLXVpL0NhcmQnO1xyXG5pbXBvcnQgRm9sZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9maWxlL2ZvbGRlcic7XHJcbmltcG9ydCBGaWxlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9lZGl0b3IvaW5zZXJ0LWRyaXZlLWZpbGUnO1xyXG5pbXBvcnQge0dyaWRMaXN0LCBHcmlkVGlsZX0gZnJvbSAnbWF0ZXJpYWwtdWkvR3JpZExpc3QnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcclxuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XHJcbmltcG9ydCAqIGFzIHN1cGVyYWdlbnQgZnJvbSAnc3VwZXJhZ2VudCdcclxuY29uc3QgUmVkID0gJyNkNTM5M2EnO1xyXG52YXIgdXNlcjtcclxuXHJcbmNsYXNzIFRhYlR3byBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcclxuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgIHRoaXMuc3RhdGUgPSB7ICBcclxuICAgICAgc2hhZG93OiAzLFxyXG4gICAgICB1c2VyOiB1c2VyIHx8IHtuYW1lOiBcIlwiLCBjdWlsOiAnJywgZGlyZWNjaW9uOlwiXCIsIHRlbGVmb25vOiAwfSBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50JykpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogdXNlcn0pOyAgICBcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZEZpbGUgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTYsIGNvbG9yOiAnI2ZmZid9fT5cclxuICAgICAgICA8UGFwZXIgekRlcHRoPXswfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNhYWEnfX0+ICAgXHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy5oZWFkbGluZX0+RG9jdW1lbnRhY2nDs248L2gxPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBsb2FkRmlsZX1cclxuICAgICAgICAgIC8+PGJyIC8+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8UGFwZXIgekRlcHRoPXswfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNhYWEnfX0+ICAgXHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oZWFkbGluZX0+PEZvbGRlciBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+IFJSLkhILjwvaDI+XHJcbiAgICAgICAgPC9QYXBlcj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPEZsZXggd3JhcCBhbGlnbj0nY2VudGVyJyBzdHlsZT17c3R5bGVzLmZsZXh9PlxyXG4gICAgICAgICAgPEJveCBwPXsyfSB3aWR0aD17WzEsIDEvMiwgMS8zLCAxLzUgXX0+XHJcbiAgICAgICAgICAgIDxDYXJkIHpEZXB0aD17Mn0+XHJcbiAgICAgICAgICAgICAgPENhcmRNZWRpYT5cclxuICAgICAgICAgICAgICAgIDxGaWxlIHN0eWxlPXt7aGVpZ2h0OiA2NCwgcGFkZGluZ1RvcDogMTB9fS8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIkY5MzFcIiBzdWJ0aXRsZT1cIjAxLTIwMTdcIiAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWJyaXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiLi9zdGF0aWMvZG9jcy9SUkhIL0Zvcm11bGFyaW8gOTMxIEZhcmFkYXkgZW5lLnBkZlwiLz5cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggcD17Mn0gd2lkdGg9e1sxLCAxLzIsIDEvMywgMS81IF19PlxyXG4gICAgICAgICAgICA8Q2FyZCB6RGVwdGg9ezJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8RmlsZSBzdHlsZT17e2hlaWdodDogNjQsIHBhZGRpbmdUb3A6IDEwfX0vPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJGOTMxXCIgc3VidGl0bGU9XCIwMS0yMDE3XCIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkFicmlyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi4vc3RhdGljL2RvY3MvUlJISC9Gb3JtdWxhcmlvIDkzMSBGYXJhZGF5IGZlYi5wZGZcIi8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHA9ezJ9IHdpZHRoPXtbMSwgMS8yLCAxLzMsIDEvNSBdfT5cclxuICAgICAgICAgICAgPENhcmQgekRlcHRoPXsyfT5cclxuICAgICAgICAgICAgICA8Q2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgICAgPEZpbGUgc3R5bGU9e3toZWlnaHQ6IDY0LCBwYWRkaW5nVG9wOiAxMH19Lz5cclxuICAgICAgICAgICAgICA8L0NhcmRNZWRpYT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPVwiRjkzMVwiIHN1YnRpdGxlPVwiMDEtMjAxN1wiIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJBYnJpclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIuL3N0YXRpYy9kb2NzL1JSSEgvRm9ybXVsYXJpbyA5MzEgRmFyYWRheSBmZWIucGRmXCIvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBwPXsyfSBtbD0nYXV0bycgd2lkdGg9e1sxLCAxLzIsIDEvMywgMS81IF19PlxyXG4gICAgICAgICAgICA8Q2FyZCB6RGVwdGg9ezJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8RmlsZSBzdHlsZT17e2hlaWdodDogNjQsIHBhZGRpbmdUb3A6IDEwfX0vPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJGOTMxXCIgc3VidGl0bGU9XCIwMS0yMDE3XCIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkFicmlyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi4vc3RhdGljL2RvY3MvUlJISC9Gb3JtdWxhcmlvIDkzMSBGYXJhZGF5IGVuZS5wZGZcIi8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHA9ezJ9IG1sPSdhdXRvJyB3aWR0aD17WzEsIDEvMiwgMS8zLCAxLzUgXX0+XHJcbiAgICAgICAgICAgIDxDYXJkIHpEZXB0aD17Mn0+XHJcbiAgICAgICAgICAgICAgPENhcmRNZWRpYT5cclxuICAgICAgICAgICAgICAgIDxGaWxlIHN0eWxlPXt7aGVpZ2h0OiA2NCwgcGFkZGluZ1RvcDogMTB9fS8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIkY5MzFcIiBzdWJ0aXRsZT1cIjAxLTIwMTdcIiAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWJyaXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiLi9zdGF0aWMvZG9jcy9SUkhIL0Zvcm11bGFyaW8gOTMxIEZhcmFkYXkgZW5lLnBkZlwiLz5cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8UGFwZXIgekRlcHRoPXswfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNhYWEnfX0+ICAgXHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oZWFkbGluZX0+PEZvbGRlciBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+IExlZ2FsZXM8L2gyPlxyXG4gICAgICAgIDwvUGFwZXI+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDxGbGV4IHdyYXAgYWxpZ249J2NlbnRlcicgc3R5bGU9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICAgIDxCb3ggcD17Mn0gd2lkdGg9e1sxLCAxLzIsIDEvMywgMS81IF19PlxyXG4gICAgICAgICAgICA8Q2FyZCB6RGVwdGg9ezJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8RmlsZSBzdHlsZT17e2hlaWdodDogNjQsIHBhZGRpbmdUb3A6IDEwfX0vPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJGOTMxXCIgc3VidGl0bGU9XCIwMS0yMDE3XCIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkFicmlyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi4vc3RhdGljL2RvY3MvUlJISC9Gb3JtdWxhcmlvIDkzMSBGYXJhZGF5IGVuZS5wZGZcIi8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHA9ezJ9IHdpZHRoPXtbMSwgMS8yLCAxLzMsIDEvNSBdfT5cclxuICAgICAgICAgICAgPENhcmQgekRlcHRoPXsyfT5cclxuICAgICAgICAgICAgICA8Q2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgICAgPEZpbGUgc3R5bGU9e3toZWlnaHQ6IDY0LCBwYWRkaW5nVG9wOiAxMH19Lz5cclxuICAgICAgICAgICAgICA8L0NhcmRNZWRpYT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPVwiRjkzMVwiIHN1YnRpdGxlPVwiMDEtMjAxN1wiIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJBYnJpclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIuL3N0YXRpYy9kb2NzL1JSSEgvRm9ybXVsYXJpbyA5MzEgRmFyYWRheSBmZWIucGRmXCIvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBwPXsyfSB3aWR0aD17WzEsIDEvMiwgMS8zLCAxLzUgXX0+XHJcbiAgICAgICAgICAgIDxDYXJkIHpEZXB0aD17Mn0+XHJcbiAgICAgICAgICAgICAgPENhcmRNZWRpYT5cclxuICAgICAgICAgICAgICAgIDxGaWxlIHN0eWxlPXt7aGVpZ2h0OiA2NCwgcGFkZGluZ1RvcDogMTB9fS8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIkY5MzFcIiBzdWJ0aXRsZT1cIjAxLTIwMTdcIiAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWJyaXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiLi9zdGF0aWMvZG9jcy9SUkhIL0Zvcm11bGFyaW8gOTMxIEZhcmFkYXkgZmViLnBkZlwiLz5cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggcD17Mn0gbWw9J2F1dG8nIHdpZHRoPXtbMSwgMS8yLCAxLzMsIDEvNSBdfT5cclxuICAgICAgICAgICAgPENhcmQgekRlcHRoPXsyfT5cclxuICAgICAgICAgICAgICA8Q2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgICAgPEZpbGUgc3R5bGU9e3toZWlnaHQ6IDY0LCBwYWRkaW5nVG9wOiAxMH19Lz5cclxuICAgICAgICAgICAgICA8L0NhcmRNZWRpYT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPVwiRjkzMVwiIHN1YnRpdGxlPVwiMDEtMjAxN1wiIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJBYnJpclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIuL3N0YXRpYy9kb2NzL1JSSEgvRm9ybXVsYXJpbyA5MzEgRmFyYWRheSBlbmUucGRmXCIvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBwPXsyfSBtbD0nYXV0bycgd2lkdGg9e1sxLCAxLzIsIDEvMywgMS81IF19PlxyXG4gICAgICAgICAgICA8Q2FyZCB6RGVwdGg9ezJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8RmlsZSBzdHlsZT17e2hlaWdodDogNjQsIHBhZGRpbmdUb3A6IDEwfX0vPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJGOTMxXCIgc3VidGl0bGU9XCIwMS0yMDE3XCIgLz5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkFicmlyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi4vc3RhdGljL2RvY3MvUlJISC9Gb3JtdWxhcmlvIDkzMSBGYXJhZGF5IGVuZS5wZGZcIi8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRsaW5lOiB7XHJcbiAgICBmb250U2l6ZTogMjQsXHJcbiAgICBwYWRkaW5nVG9wOiAxNixcclxuICAgIG1hcmdpbkJvdHRvbTogMTIsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBjb2xvcjogJyNmZmYnXHJcbiAgfSxcclxuICBmbGV4OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nVG9wOiAyMFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlR3bztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9UYWJzL1RhYlR3by5qcyIsImltcG9ydCBUYWJPbmUgZnJvbSAnLi9UYWJPbmUnO1xyXG5pbXBvcnQgVGFiVHdvIGZyb20gJy4vVGFiVHdvJztcclxuaW1wb3J0IFRhYlRocmVlIGZyb20gJy4vVGFiVGhyZWUnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRhYk9uZSxcclxuICAgIFRhYlR3byxcclxuICAgIFRhYlRocmVlXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9UYWJzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUhBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFpQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1Q0E7QUFDQTtBQTZDQTtBQUNBO0FBL0NBO0FBQ0E7QUFxREE7QUFDQTtBQUdBO0FBRkE7QUF4REE7QUFDQTtBQTREQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBT0E7QUFBQTs7QUFFQTtBQUFBO0FBREE7QUFHQTtBQTVFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQVNBO0FBQUE7QUFTQTtBQUNBOzs7OztBQW9CQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBR0E7QUFIQTs7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUpBO0FBQUE7QUFBQTtBQUNBOztBQWZBO0FBc0JBO0FBdEJBO0FBQ0E7QUFxQkE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFGQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBQUE7QUFBQTs7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBS0E7QUFMQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFGQTs7QUFBQTtBQUtBO0FBTEE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBeEJBOztBQUFBO0FBMEJBO0FBMUJBO0FBQ0E7QUF5QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUhBO0FBT0E7QUFQQTtBQUNBO0FBT0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BOztBQUFBO0FBV0E7QUFYQTtBQUNBOzs7OztBQXpPQTtBQUNBO0FBREE7QUFDQTtBQXFQQTs7QUFHQTtBQUVBO0FBSEE7O0FBS0E7QUFDQTtBQUlBO0FBTkE7QUFMQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFRBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFNQTtBQUFBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUdBO0FBSEE7O0FBSUE7Ozs7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBRUE7QUFHQTtBQUhBOztBQUlBOzs7O0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBS0E7QUFMQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQU1BO0FBTkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBUkE7QUFVQTtBQVZBO0FBQ0E7O0FBU0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTs7QUFTQTtBQU1BO0FBTkE7QUFBQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBNUtBO0FBQ0E7QUFvTEE7QUFDQTtBQTRCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUlBOzs7OztBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBT0E7QUFHQTtBQUhBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUdBO0FBSEE7QUFJQTtBQUNBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBOztBQU5BO0FBV0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUxBOztBQUFBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBSEE7O0FBSUE7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBSUE7QUFKQTs7Ozs7O0FBakhBO0FBQ0E7QUF1SEE7O0FBTUE7QUFKQTtBQURBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBWkE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUhBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUtBO0FBTEE7OztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQU9BO0FBUEE7Ozs7OztBQWxKQTtBQUNBO0FBMkpBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFRQTtBQUNBO0FBSUE7QUFOQTtBQVJBO0FBQ0E7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        