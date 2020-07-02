# Project Instructions

- This app is currently in a broken state. You must create your component and add it to `ReactDOM.render` in `src/index.js` to get started.
- Using React and CSS, create a `Typeahead` component that takes a `list` prop.
- Use the `colorsList` list defined in `src/index.js` as the value for the `list` prop.
  - Please do not change `colorsList` or its contents.
  - If you want to go above and beyond, you can add other features or use another list that you receive from an async query, as long as it still meets all the same requirements when the `colorsList` is passed as the `list` prop.

## Submitting your Project
- Send us the link to a public repository with your project submission.

#### Things we like to see

- Use of propTypes and/or other typing systems
- Responsive design
- Tasteful styling
- Tasteful animations are a bonus

#### Things we hope not to see

- Use of styling frameworks (Material, Bootstrap, Tailwind, etc.)
  - Styling writing libraries and pre-processors (Styled Components, SCSS, etc) are welcome but not expected.
- Copy/Pasted code from other source code

## Requirements

1. As the user types in the input field, a list of options should appear below it.
   - The list should only appear when input is not empty. Whitespace is considered empty.
   - The list should contain items from the `list` prop that **start** with the user entered value. Matching should be case insensitive. Every new character typed should filter the list.
2. Clicking on a list item should populate the input with the selected item's value and hide the list.
3. As the user types, the matching substring within the dipslayed options should be bold. The rest of the string should not be bold.
   1. Ex. When the user types `bl`, `bl` in `black`, `blanchedalmond`, `blue`, and `blueviolet` should be bold. The rest of each word should not be bold.
4. For visible options, style the substring the user has entered as **bold**.
5. Mousing over a list item should highlight it, at least darkening its background color. Other styling is up to you.
6. The input and list should also be navigable using the keyboard.
   - Using `tab` and `shift+tab`, the user should be able to move focus to and from the different list items.
     - With the cursor in the input, pressing the `tab` key should move focus to the first item with the default browser focus style.
     - Subsequent presses of the "tab" key should focus the next item in the list.
     - Pressing the `shift+tab` keys should focus the previous item in the list.
     - Pressing the `shift+tab` key when the first item is focused should focus
       the input again.
     - Mousing over other list items should highlight them while the keyboard-
       focused item remains focused.
     - Pressing the `tab` key when no list is visible should move focus away
       from the input.
   - Pressing the `enter` or `return` key when an item is focused should populate the input with the focused item's value, hide the list, and focus the input again.
   - Pressing the `escape` key should close the list.
7. Clicking outside the input or the list should close the list.

#### Development Instructions

1. Clone this repository and run `npm install` to install dependencies.
2. From the project directory, `npm start` runs the app in development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

###### Attributions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
