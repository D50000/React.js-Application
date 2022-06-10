# React.js-Application

Develop a Application with [**React.js**](https://beta.reactjs.org/learn).
Using [Create-React-App](https://beta.reactjs.org/learn/start-a-new-react-project#getting-started-with-a-minimal-toolchain) and make the learning notes for everyone.

## React Core Concepts

- **Components**
- **Props**
- **State**, and [**Hooks**](https://reactjs.org/docs/hooks-intro.html)
  - [Ref](https://beta.reactjs.org/learn/referencing-values-with-refs)
  - [Reducer](https://beta.reactjs.org/learn/managing-state#extracting-state-logic-into-a-reducer)
  - [Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context)

## 1. Environment setup

- Install **node.js** (for running modules and tools)
- Install **react developer tools** (for Chrome or Firefox browser)
- Install **Prettier** (for auto formatting to code when save.)
- Install terminal [**cmder**](https://cmder.net/) (only if you are windows user)
- Install **Babel JavaScript** syntax highlighting for VSCode.

## 2. package.json

It is the project configuration file.  
(similar with with the **Java Spring framework: server.xml**)

1.  Download the project and input `npm install` then it will reference
    all the modules back.
2.  Input `npm start` for start the server.
3.  `ctrl + c` for stop the server.

## 3. JSX (JavaScript XML) Components

**JSX doesn't have any logic statement.** (ex: loop for create DOM)

```
return(
  <Fragment>
  {/* "Fragment tag" for multiple tag in sigle component */}
    <header className="top">
      <h1>D50000 Fish Market</h1>
      <h3 className="tagline">
        <span>{this.props.tagline}</span>
      </h3>
    </header>
  </Fragment>
)
```

## 4. Loading CSS into React Application

1.  Import at **individual components**.
2.  Load at index.js or index.html.

## 5. Props and State

- `props` provide for the components.
- `state` is the container of `props`. (More informantion in #10)

## 6. Stateless Functional Components

```
class Header extends React.Component {
  render() {
    return (
      {/* render DOM....... */}
      <h3 className="tagline">
        <span>{this.props.tagline}</span>
      </h3>
    );
  }
}
```

If the components only do the simply render stuff. It can change to **Stateless Function**. ⬇️⬇️⬇️⬇️⬇️⬇️

```
const Header = props => (
  {/* render DOM....... */}
  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
);
```

## 7. React Router

A component that control the web routing & redirect.

```
<Switch>
  <Route exact path="/" component={StorePicker} />
  <Route path="/store/:storeId" component={App} />
  <Route component={NotFound} />
</Switch>
```

## 8. Export methods

- Import **library**:  
  export default Class;  
  ⬇️⬇️⬇️⬇️⬇️⬇️  
  import Class from "Class";
- Import **method**:  
  export function test(arr) {........}  
  ⬇️⬇️⬇️⬇️⬇️⬇️  
  import { test } from "Class ";

## 9. Refs in React

**ref** can bind the attribute data in the DOM.

```
nameRef = React.createRef();
priceRef = React.createRef();

render() {
  return(
    <form className="fish-edit" onSubmit={this.createFish}>
      <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
      <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
    </form>
  )
}
```

## 10. State in React

**State** is a object that contain all the component's data.
Store at root component, and transfer with in props to children components.

## 11. Render Function

A separate render function in a single component, for more readable code.

## 12. Firebase

- Real time data
- WebSocket transfer
- Life cycle API control data flow

## 13. Lifecycle methods

The 3 phases are: [Mounting, Updating, and Unmounting.](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)

[Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![](https://github.com/D50000/React.js-Application/blob/master/react_lifecycle.png)
| # | Common used API | Purpose | Example |
| --- | ------------- | ------------------ | -------------- |
| 1 | **constructor(props)** | If you don’t initialize state and bind methods, no need to implement a constructor in React component. | 1. Initial props `constructor(props)`. 2. Initializing local state by assigning an object to this.state. 3. Binding event handler methods to an instance. |
| 2 | **render()** | The only **_required_** method in a class component. | It will return the component to the DOM. |
| 3 | **componentDidMount()** | Invoked immediately after a component is mounted (inserted into the tree). | Set up any subscriptions or APIs. |
| 4 | **componentDidUpdate(prevProps, prevState, snapshot)** | Invoked immediately after updating occurs. This method is **_not called for the initial render_**. | Update the API data or business's logic scenario. |
| 5 | **componentWillUnmount()** | Invoked immediately **_before_** a component is unmounted and destroyed | Clean and remove the request or method here. **_Should not call setState() here_**.

ps: [useEffect](https://zh-hant.reactjs.org/docs/hooks-effect.html) will run when ***componentDidMount***, ***componentDidUpdate*** trigger.It's similar with ***Angular's ngOnchanges***.

**React** (data, template binding and rendering)

1. **Triggering a render**: React will call the root component.
2. **Rendering the component**: React will call the function component whose state update triggered the render.
3. **Committing to the DOM**: React will apply the minimal necessary operations (calculated while rendering).

## 14. Bi-directional Data Flow and Live State Editing

**There is no Bi-directional Data Binding method in React.** (React Discipline)

1.  Pass the update method down to the component with props.
2.  Component call the update method.
3.  App.js update the state.

## 15. Animating React Components

Using "react-transition-group" package, and use it's syntax.  
(similar with the **Bootstrap** library)

```
<TransitionGroup component="ul" className="order">
  {orderIds.map(this.renderOrder)}
</TransitionGroup>
```

## 16. Component Validation with Prop Types

Use [prop-types library](https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html) since React v15.5

```
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number.isRequired,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string.isRequired,
  optionalSymbol: PropTypes.symbol,
}
```

## 17. Useful Plugins

- create-React-app (**SPA**, Develop template, Boilerplate, **eject**)
- Next.js (**SSR**, **Router**, **SEO**, Webpack...)
- Gatsby (**Static Website**, **PWA**, fast, **SEO**...)
