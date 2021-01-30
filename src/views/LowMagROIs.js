import React from "react";

import ImageViewer from "components/Images/ImageViewer.js";

function LowMagROIs(props) {

    return (
        <>
            <ImageViewer {...props}/>
        </>
  );
}

LowMagROIs.defaultProps = {
  title: "Detected ROIs",
  cardTitle: "Camera ROIs", 
  isROI: true,
  pageSize: 200,
  cameraName: 'Low Mag',
  images: window.low_mag_cam_rois,
  pixelSize: 6.79,
};

export default LowMagROIs;