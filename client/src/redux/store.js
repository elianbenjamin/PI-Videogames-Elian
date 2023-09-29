import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../redux/reducer";


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware)) // esta linea sirve para hacer peticiones a una api/servidor
);

export default store;
