const { createStore, applyMiddleware, combineReducers } = require("redux");
const { configureStore } = require("@reduxjs/toolkit");
const thunk = require("redux-thunk").default;
const { createWrapper } = require("next-redux-wrapper");
import userReducer from "./features/userSlice";
import dataReducer from "./features/dataSlice";

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
});

const store = () => createStore(rootReducer, applyMiddleware(thunk));

const wrapper = createWrapper(store);

module.exports = { store, wrapper };
