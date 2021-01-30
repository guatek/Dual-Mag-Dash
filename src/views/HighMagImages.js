import React from "react";

import ImageViewer from "components/Images/ImageViewer.js";

function HighMagImages(props) {

    return (
        <>
            <ImageViewer {...props}/>
        </>
  );
}

HighMagImages.defaultProps = {
  title: "Full Frame Images",
  cardTitle: "Camera Images", 
  isROI: false,
  pageSize: 200,
  cameraName: 'High Mag',
  images: window.high_mag_cam_video,
  pixelSize: 0.87,
};

export default HighMagImages;