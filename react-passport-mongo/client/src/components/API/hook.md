
  //In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

  //https://reactjs.org/docs/state-and-lifecycle.html
  //Clock Example referenced below

  //==================================================

  //{STEP 1}  When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component which sets up or prepares the state (or Clock.state or this.state) to be updated.

  //{STEP 2}  React then calls the Clock component's render() method.  This is how React learns what should be displayed on the screen and updates the DOM to match the Clock’s render output.

  //{STEP 3}  When the Clock output is inserted into the DOM, React calls the componentDidMount() lifecycle method.  Inside it the Clock component asks the browser to set up a time to call the component's tick() method once every second.

  //{STEP 4}  Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

  //{STEP 5}  If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.

  //=======================================================

  //In React whenever "class Clock extends React.Component" { (or XYZ) is rendered to the DOM for the first time this is called “mounting” and whenever the DOM produced by XYZ is removed this is called “unmounting”.   

  //Instead of a constructor and a class we use the useState() hook to define the conststants 'getter' and 'setter' in const [text,setText].  useState() is called inside a function component to add LOCAL STATE to the function.  useState()'s only argument is THE INITIAL STATE.

  //useState is similar to this.setState  in a class EXCEPT it doesn't merge the old and new state together!!!

  //Here we are binding the constants text and setText to a certain part of the global state using the hook useState().  

  //With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

  //Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.

  //Below useState() returns (i) the current state value (the 'getter') and (ii) a function that lets you update it (the 'setter').

  //The 'getter' ([text,...) is what react is listening for.  The 'setter' (..., setText]) is the callback function which sets, or udpates, the current state value text and can be called from an event handler or somewhere else. 

  //The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.  This is what you will use to make your API call.

  //When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state.

  //By default, React runs the effects after every render — including the first render!!! 

  //VERY IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //RULE 1 - Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
  //RULE 2 - Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. 
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//BUILDING CUSTOM HOOKS
//Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.
