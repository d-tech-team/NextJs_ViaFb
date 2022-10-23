const { createStore, applyMiddleware, combineReducers } = require("redux");
const userReducer = require("./features/userSlice");
const { createWrapper } = require("next-redux-wrapper");
const thunk = require("redux-thunk").default;

const store = createStore(combineReducers(userReducer), applyMiddleware(thunk));

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

module.exports = { store, wrapper };
