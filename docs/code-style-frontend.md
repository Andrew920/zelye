# Code style - Frontend

This file addresses the code styles and rules for the client side of the application.

This is meant as a guide to maintain a clear, simple and readable code.

## Framework and language

The project is using a Javascript framework called React. To ensure safer development Typescript is used.

For stylesheets, a library called sass is used.

## Project folder structure

```
client/
└── src/
    ├── Api/
    ├── Assets/
    ├── Components/
    ├── Hooks/
    ├── Slices/
    ├── Store/
    ├── Style/
    ├── Types/
    ├── Utils/
    └── Views/
```

### Api

This is a directory that stores all the API calls and it's configuration.

### Assets

Includes assets that are not part of the code but should be included in the project - images, fonts, icons...

### Components

Meant for Global components. If nescessary divide it into two seperate folders - UI only and Smart components. Any component that is generic or is used by multiple Views should be moved here.

#### Component definition

All components should **always** be defined as a directory, named with PascalCase. The content of the directory:

```bash
ComponentName/
├── index.ts            # exports the component to parent index.ts
├── ComponentName.scss  # main stylesheet
└── ComponentName.tsx   # component logic and JSX
```

### Hooks

Meant for custom hooks that help components do their job. Hooks are meant to be named using `camelCase`

### Slices

These are functions that change and store the global state of the application such as user authentication, color theme, dialogs etc.

### Store

A file containing the store, which holds the global state of the application.

### Style

A stylesheet folder containing global styles and classes used in the project. It should contain the typography, colors, mixins, breakpoints, variables, webfonts...

### Types

Types folder contains the global types and interfaces that are used in the project. Most common are some generic types such as NonEmptyArray, Stack, Api Body Responses etc.

### Utils

Helper functions that should help with code readability in other parts of the code. Examples: Array manipulation functions, String mutation functions, longer code blocks that would otherwise make the component unreadable etc.

### Views

Views folder includes the main functionality of the code. Each View servers as it's own 'page'. If the View has multiple features and components, it should be divided in **local** components. Usually each View has it's coresponding page route that is defined in `AppRoutes.tsx`

## Code style - JavaSript/TypeScript

### Line length should not exceed the limit of 100 characters

There is a configuration file for formatting called `prettierrc` that should format and break lines accordingly so make sure you format the document often.

Suggestion: Enable 'Format on Save' option in VS Code settings.

### Use of explanatory variables

Bad

```js
const onlyNumbers = /^\d+$/;
const validate = (message) => (value) =>
  !onlyNumbersRegex.test(value) && message;

validateNumber("error message")(1);
```

Good

```js
const onlyNumbersRegex = /^\d+$/;
const getNumberValidation = (message) => (value) =>
  !onlyNumbersRegex.test(value) && message;

const isNumber = getNumberValidation("error message");

isNumber(1);
```

### Use searchable names

Bad

```js
setTimeout(doSomething, 86400000);
```

Good

```js
const DAY_IN_MILLISECONDS = 86400000;

setTimeout(doSomething, DAY_IN_MILLISECONDS);
```

### Use of functional components with hooks

Do not use class components to maintain unified code.

Bad

```js
class ComponentName extends Component {
  constructor() {
    // Set state
  }

  componentDidMount() {
    // Code
  }

  render() {
    return <div>This is a component</div>;
  }
}
```

Good

```js
const ComponentName: FC = () => {
  const [state, setState] = useState();

  useEffect(() => {
    // Code
  }, []);

  return <div>This is a component</div>;
};
```

### Use of arrow functions

Bad

```js
function functionName(args) {
    // code
    return ...
}
```

Good

```js
const functionName = (args) => {
    // code
    return ...
}
```

Arrow functions are used to make the components look more clean and also implying one-line returns from a function:

```js
const functionName = (args) => returnValue;
```

### Destructure objects and arrays when possible

Bad

```js
const object = {
  fieldOne: "value1",
  fieldTwo: "value2",
};

const array = ["value1", "value2"];

const value1 = object.fieldOne;
const value2 = object.fieldTwo;

const arrayValue1 = array[0];
```

Good

```js
const object = {
  fieldOne: "value1",
  fieldTwo: "value2",
};

const array = ["value1", "value2"];

const { fieldOne, fieldTwo, ...rest } = object;

const [arrayValue1, ...rest] = array;
```

## Code style - Scss

### Do not use hardcoded values

Do not use measurment with aboslute values such as `px`

Instead use `em` and `rem`. This makes the element sizing more responsive and maintainable.

### Use constant variables

Colors, font-sizes, spacings... should all be defined with a variable. They are defined in the `Styles/` folder.

### Layout

Try to stick with one style of displaying elements: Flexbox or Grid layout. Do not switch between the two.

Flexbox is easier to use and provides a good looking responsivness feel.

### Margins and paddings of a child should not overflow the content of the parent.

### Avoid using inline styles

If it is not absolutely nescessary, avoid using inline styles.

Instead use sass and use it in component as classes.
