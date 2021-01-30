import React from "react";

import ImageViewer from "components/Images/ImageViewer.js";

function LowMagImages(props) {

    return (
        <>
            <ImageViewer {...props}/>
        </>
  );
}

LowMagImages.defaultProps = {
  title: "Full Frame Images",
  cardTitle: "Camera Images", 
  isROI: false,
  pageSize: 200,
  cameraName: 'Low Mag',
  images: window.low_mag_cam_video,
  pixelSize: 6.79,
};

export default LowMagImages;