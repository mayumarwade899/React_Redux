import BookReducer from "./BookReducer";
import { createStore } from "redux";

const store = createStore(BookReducer)

export default store