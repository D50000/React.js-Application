
# React.js-Application
Develop a Application with **React.js**.
And make learning notes for everyone.


## 1. Environment setup
 - Install **node.js** (for running modules and tools)
 - Install **react developer tools** (for Chrome or Firefox browser)
 - Install **Prettier** (for auto formatting to code when save.)
 - Install terminal [**cmder**](https://cmder.net/) (only if you are windows user)


## 2. package.json
It is the project configuration file.  
(similar with with the **Java Spring framework: server.xml**)

 1. Download the project and input `npm install` then it will reference
    all the modules back.
 2. Input `npm start` for start the server.
 3. `ctrl + c` for stop the server.


## 3. JSX (JavaScript XML) Components
JSX doesn't have any logic statement. (ex: loop for create DOM)
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


## 4. Loadinf CSS into React Application
 1. Import at **individual components**.
 2. Load at index.js or index.html.


## 5. Props and State
 - `props` provide for the components.
 - `state` is the container of `props`. (More informantion in #10)


## 6. Stateless Functional Components
```
class Header extends React.Component {
   render() {
		{/* render DOM....... */}
		<h3 className="tagline">
			<span>{this.props.tagline}</span>
		</h3>
	}
}
```
If the components only do the simply render stuff. It can change to **Stateless Function**.  ⬇️⬇️⬇️⬇️⬇️⬇️
```
const Header = props => (
	{/* render DOM....... */}
	<h3 className="tagline">
		<span>{props.tagline}</span>
	</h3>
)
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
 export  default  Class;  
 ⬇️⬇️⬇️⬇️⬇️⬇️
import  Class from  "Class";  
 - Import **method**:  
 export  function  test(arr) {........}  
 ⬇️⬇️⬇️⬇️⬇️⬇️  
 import { test } from "Class ";


 ## 9. Refs in React
    constructor(){
        // Need to super() first, if the current class is extends from other class.
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

   goToStore(event){
        // 1. Stop the form from submitting.
        event.preventDefault();
        // 2. Get the text from that input.Ｂut don't "select" or "modify" any DOM in react framework.
        console.log(this.myInput);

        // 3. Change the page to /store/xxxxxxx
    }


## 10. State in React
**State** is a object that contain all the component's data. 
put at root component


## 11. Render Function
a separate render function in a single component, for more readable