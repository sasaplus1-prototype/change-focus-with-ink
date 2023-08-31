import * as readline from 'node:readline';
import React from 'react';
import { render, Box, Text, useFocus } from 'ink';

readline.emitKeypressEvents(process.stdin);
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
  } = useFocus();
  return /*#__PURE__*/React.createElement(Text, {
    inverse: isFocused
  }, label);
}
function App() {
  return /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "Press Tab to focus next item. Press q to exit."), /*#__PURE__*/React.createElement(Item, {
    label: "Item 1"
  }), /*#__PURE__*/React.createElement(Item, {
    label: "Item 2"
  }), /*#__PURE__*/React.createElement(Item, {
    label: "Item 3"
  }));
}
render( /*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=index.module.js.map
