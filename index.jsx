import * as readline from 'node:readline';
import React, { useState, useEffect } from 'react';
import { Box, render, Text, useFocus } from 'ink';

readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', function (str, key) {
  if (key && key.name === 'q') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);

function Item(props) {
  const { label } = props;
  const { isFocused } = useFocus();

  return (
    <Text inverse={isFocused}>{label}</Text>
  );
}

function App() {
  return (
    <Box width="100%" height="100%" flexDirection="column">
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Box>
  );
}

render(<App />);
