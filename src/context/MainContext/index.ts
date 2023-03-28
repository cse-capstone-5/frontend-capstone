import {createContext} from "react";
import {MAIN_CONTEXT_DEFAULT_VALUE} from "./constants";

const MainContext = createContext(MAIN_CONTEXT_DEFAULT_VALUE);

export default MainContext;