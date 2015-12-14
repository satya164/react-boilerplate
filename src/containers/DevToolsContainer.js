/* @flow */

import React from "react";
import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

export default createDevTools(
    <DockMonitor
        defaultPosition="right"
        defaultIsVisible={false}
        defaultSize={0.25}
        toggleVisibilityKey="H"
        changePositionKey="Q"
    >
        <LogMonitor />
    </DockMonitor>
);
