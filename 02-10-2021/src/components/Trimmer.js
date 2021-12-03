import ReactVideoTrimmer from "react-video-trimmer";

import React from 'react'

const Trimmer = () => {
    return (
        <div>
             <ReactVideoTrimmer
    loadingFFMPEGText="Loading required libs..."
    timeLimit={30}
    timeRange={5}
    showEncodeBtn
  />
        </div>
    )
}
export default Trimmer
