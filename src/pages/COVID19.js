import React from "react";
import HTMLViewer from "../components/HTMLViewer";

var resume = require("'../data/COVID-19.html'")
function Resume() {
    return <div style={{ height: "100vh" }}>
        <HTMLViewer file={resume}></HTMLViewer>
    </div>
}

export default Resume;