/* @flow */

import { createStore, applyMiddleware, compose } from "redux";
import { persistState } from "redux-devtools";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import DevTools from "../containers/DevToolsContainer";

const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        typeof window !== "undefined" ? window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
        ) : null
    )
)(createStore);

export default function configureStore(initialState: ?any): Object {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept("../reducers", () =>
            store.replaceReducer(require("../reducers").default)
        );
    }

    return store;
}
