# Codex Pad

## Installation

To install this package, run the following command in your terminal:

>npm i codex-pad

## Usage

After installing the package, you can include it in your JavaScript file using:

>const pad = require('codex-pad')

## Description

The `pad` function takes four parameters: a string, a character, a side, and a number. It pads the given string with the specified character on the specified side for the specified number of times.

## Parameters

- `string`: The string to be padded. This should be a string.
- `char`: The character to use for padding. This should be a string.
- `side`: The side to pad. This should be a string and can be either 'left', 'right', or 'both'.
- `num`: The number of times to repeat the padding character. This should be a number.

## Returns

The function returns the padded string.

## Example Usage

>console.log(pad("Hello World", " ", "left", 5))