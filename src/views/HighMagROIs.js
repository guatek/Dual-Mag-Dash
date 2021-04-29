import React from "react";

import ImageViewer from "components/Images/ImageViewer.js";

function HighMagROIs(props) {

    return (
        <>
            <ImageViewer {...props}/>
        </>
  );
}

HighMagROIs.defaultProps = {
  title: "Detected ROIs",
  cardTitle: "Camera ROIs", 
  isROI: true,
  pageSize: 200,
  cameraName: 'High Mag',
  images: window.high_mag_cam_rois,
  pixelSize: 0.87,
  sortMethodList: ["Height", "Timestamp", "Area", "Aspect Ratio", "Major Axis Length"],
};

export default HighMagROIs;