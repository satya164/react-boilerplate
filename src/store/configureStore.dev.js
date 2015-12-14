/* @flow */

import { createStore, applyMiddleware, compose } from "redux";
import { persistState } from "redux-devtools";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import DevTools from "../containers/DevToolsContainer";

const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
        )
    )
)(createStore);

export default function configureStore(initialState: ?any) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept("../reducers/rootReducer", () =>
            store.replaceReducer(require("../reducers/rootReducer"))
        );
    }

    return store;
}
