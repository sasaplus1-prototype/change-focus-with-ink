(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('node:readline'), require('react'), require('ink')) :
  typeof define === 'function' && define.amd ? define(['node:readline', 'react', 'ink'], factory) :
  (global = global || self, factory(global.readline, global.react, global.ink));
})(this, (function (readline, React, ink) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return n;
  }

  var readline__namespace = /*#__PURE__*/_interopNamespace(readline);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  readline__namespace.emitKeypressEvents(process.stdin);
  process.stdin.on('keypress', function (str, key) {
    if (key && key.name === 'q') {
      process.stdin.pause();
    }
  });
  process.stdin.setRawMode(true);
  function Item(props) {
    const {
      label
    } = props;
    const {
      isFocused
    } = ink.useFocus();
    return /*#__PURE__*/React__default["default"].createElement(ink.Text, {
      inverse: isFocused
    }, label);
  }
  function App() {
    return /*#__PURE__*/React__default["default"].createElement(ink.Box, {
      width: "100%",
      height: "100%",
      flexDirection: "column"
    }, /*#__PURE__*/React__default["default"].createElement(Item, {
      label: "Item 1"
    }), /*#__PURE__*/React__default["default"].createElement(Item, {
      label: "Item 2"
    }), /*#__PURE__*/React__default["default"].createElement(Item, {
      label: "Item 3"
    }));
  }
  ink.render( /*#__PURE__*/React__default["default"].createElement(App, null));

}));
//# sourceMappingURL=index.umd.js.map
