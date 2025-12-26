import { setupListeners } from "@reduxjs/toolkit/query";
import { store } from "./index";

setupListeners(store.dispatch);
