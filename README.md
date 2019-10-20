# React Fluid Text

A simple React component for creating a text that fits its container width.

### Briefly

I created this component while working on my [website](https://antoniofullone.com). I needed a text that would fit the its width. I used the magic formula from this jQuery project called [fitText](https://github.com/davatron5000/FitText.js/blob/master/README.md) from [@davatron5000](https://github.com/davatron5000/). All the credits for this magic goes to him.

The library exposes both the hook and a component called `FluidText`. The hook uses `ResizeObserver` behind the scene and its polyfill.

### Install

`yarn add react-fluid-text`

### Usage

```javascript
import FluidText from 'react-fluid-text';

function App() {
  return <FluidText text='Resize me!' />;
}
```

The only required prop is `text`. The rest is optional, but depending on the font you might want to tweak the `compressor` value for resize more or less aggressively. See below props. You can also pass custom `styles` and `className` of course.

### Props

| Name        | Description                                                                 | PropType         | Required           | Default Value |
| ----------- | --------------------------------------------------------------------------- | ---------------- | ------------------ | ------------- |
| text        | Text to be rendered                                                         | PropTypes.string | :heavy_check_mark: |               |
| as          | String representing the HTML element used to render the text. Default is h1 | PropTypes.string |                    | h1            |
| compressor  | How aggressive resize the font                                              | PropTypes.number |                    | 1             |
| minFontSize | The minimum font size. Default is 16                                        | PropTypes.number |                    | 16            |
| maxFontSize | The max font size to resize                                                 | PropTypes.number |                    | 512           |

### Using the Hook

You can use only the hook if you want. It takes an object with the 3 values `{compressor, minFontSize, maxFontSize}` which are all optional and have the same default values as he `FluidText` component. Simplest way is to call it with an empty object.

It returns a React `ref: React.RefObject` and `fontSize: Number` that you can then use as you want.

```javascript
import { useFluidFontSize } from 'react-fluid-text';

function App() {
  // use default values
  const [ref, fontSize] = useFluidFontSize({});
  return (
    <div style={{ fontSize }} ref={ref}>
      The font size is: {fontSize}
    </div>
  );
}
```

### Example

Example can be found in the `example` folder, run `yarn && yarn start`. A basic cypress setup for End to End testing is installed too, you can run `yarn cypress`
