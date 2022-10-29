const { createStore, applyMiddleware, combineReducers } = require("redux");
const { configureStore } = require("@reduxjs/toolkit");
const thunk = require("redux-thunk").default;
const { createWrapper } = require("next-redux-wrapper");
const userReducer = require("./features/userSlice");
const dataReducer = require("./features/dataSlice");

const rootReducer = combineReducers(userReducer, dataReducer);

const store = () => createStore(rootReducer, applyMiddleware(thunk));

const wrapper = createWrapper(store);

module.exports = { store, wrapper };
