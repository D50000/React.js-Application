
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

 1. Download the project and input `npm install` and it will reference
    all the modules back.
 2. Input `npm start` for start the server.
 3. `ctrl + c` for stop the server.


## 3. JSX (JavaScript XML) Components
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
 - `state` is the container of `props`.


## 6. Stateless Functional Components



## 7. React Router
a component that control the web routing

## 8. Export methods
x > export default App;
{getFunName} > export function getFunName(){}
