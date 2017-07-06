Redux Notes
=====
Redux is in charge of managing the entire application state, and that state is a single plain JavaScript object.  
Application state is different than Component state.  
Application state is formed by our *Reducers*, that get tied together by the `combineReducers` method inside `reducers/index.js` file. For each key in the combineReducers object we assign one Reducer, which is responsible for reading its piece of State.  
Reducers are responsible for changing the application State over time. They do that through Actions. Whenever an Action is dispatched, it flows through all the Reducers in the application, and each Reducer has the option to return a different piece of State based on the type of action that was received.  

*ActionCreators* are simple functions that return an *Action*, which is a plain JavaScript object. An Action must have a type defined, and optionally a payload.
