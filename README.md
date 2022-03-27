# DevHaven Design System

Inspired from [Spectrum](https://spectrum.adobe.com/) and [Carbon](https://www.carbondesignsystem.com/) Design Systems

### Useful Tips while creating a Design System with React

- [Wrapping/Mirroring a HTML Element](https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#:~:text=Wrapping/Mirroring%20a%20HTML%20Element%23)

### Styling Method

- Use [@layer directive to change base styles](https://v1.tailwindcss.com/docs/adding-base-styles#using-css) from tailwindcss for HTML elements.

- Use [tailwindcss plugins](https://tailwindcss.com/docs/plugins#adding-components) to add custom styles to HTML elements so that we can export them as a Design System

### Coding Standards

We know that you will get used to the coding standards by just glancing at the code, but we wanted to re-terate some of the decisions we took before working on this project

| Rule                                      | Description                                                                                                                                                                                          |
| :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exporting stuff                           | Always use named exports rather than default exports                                                                                                                                                 |
| Importing stuff                           | React > External Libraries > Internal Components/hoks (if there is a need to change this pattern, make sure to add a reason for doing so )                                                           |
| Creating a component                      | All the components are exported using an index file, which are again exported in `components/index.ts` )                                                                                             |
| Always create svg icons in `icons` folder | This ensures that an svg can easily be changed without being dependent on any specific icon library. You can use [react-svgr](https://react-svgr.com/playground/) to conver svg to a react component |

## Suggestions

- Let's use [rollup.js](https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj) to compile and add our component library to npm

## TODO

- In the future, we can use [classnames](https://www.npmjs.com/package/classnames) for decision based styling.

### Resources

- [px to em calculator](https://nekocalc.com/px-to-em-converter)
