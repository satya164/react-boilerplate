/* @flow */

import React from "react";
import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

export default createDevTools(
    <DockMonitor
        toggleVisibilityKey="H"
        changePositionKey="Q"
        defaultPosition="right"
        defaultSize={0.25}
        defaultIsVisible
    >
        <LogMonitor />
    </DockMonitor>
);
