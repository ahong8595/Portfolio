import React from 'react';
import resume from '../data/Hong_Andrew_Resume_2025.pdf';

function Resume() {
    return <div style={{ height: "100vh" }}>
        <embed src={resume} type="application/pdf" width="100%" height="100%" />
    </div>
}

export default Resume;