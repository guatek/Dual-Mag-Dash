/*!

=========================================================
* Dual-Mag-Dash v1.0 ImageGrid.js
=========================================================

* Render a grid of ROIs or full images with detail view

* Copyright 2020 Guatek
* Licensed under MIT (See LICENCE.md for details)

=========================================================

*/
import React from "react"
import Viewer from 'react-viewer';
import '../../assets/css/roi.css'
 
// The number of columns change by resizing the window
function ImageGridResponsive(props) {

  const [ visible, setVisible ] = React.useState(false);
  const [ detailImage, setDetailImage ] = React.useState(0);
  
  let imageSet = [];
  let heightScale = 1;
  let activeIndex = 1;

  if (props.images.length > 0 && detailImage < props.images.length) {
    if (props.isROI) {
      imageSet = [
        {src: props.images[detailImage].src, alt: props.images[detailImage].src},
        {src: props.images[detailImage].src.slice(0,-5)+'_rawcolor.jpeg', alt: props.images[detailImage].src.slice(0,-5)+'_rawcolor.jpeg'},
        {src: props.images[detailImage].src.slice(0,-5)+'_binary.png', alt: props.images[detailImage].src.slice(0,-5)+'_binary.png'},
      ];
      heightScale = props.images[detailImage].thumbnailHeight;
      activeIndex = 1;
    }
    else {
      imageSet = props.images.map(image => ({src: image.src, alt: image.caption}));
      heightScale = props.images[detailImage].fullHeight;
      activeIndex = detailImage;
    }
  }
  else {
    imageSet = [];
    heightScale = 1;
  }
    

  return (
    <div>
      <Viewer
        visible={visible}
        onClose={() => { setVisible(false); } }
        images={imageSet}
        zoomSpeed={.5}
        minScale={0.5}
        zIndex={10000}
        activeIndex={activeIndex}
        defaultScale={window.innerHeight / heightScale}
        noLimitInitializationSize={true}
        imgFilter={`contrast(${props.imageContrast}%) brightness(${props.imageBrightness}%)`}
      />
      {props.images.map((image, i) => {
        
        let w = 1;
        if (props.isROI) {
          w = image.thumbnailWidth;
        }
        else {
          w = image.fullWidth;
        }
            
        let wt = image.thumbnailWidth;
        let ht = image.thumbnailHeight;
        let imageInfo = image.src.split('\\').pop().split('/').pop().split("-"); // split file name into tokens
        let frameNumber = 0;
        if (imageInfo.length >=4) {
          frameNumber = imageInfo[3]
        }
        let sizeCaption = "F: " + parseInt(frameNumber) + ", " + parseInt(w * props.pixelSize) + " um";

        return (
        
          <div
            key={i}
            className="image-item"
            style={{
              backgroundColor: "#050505",
              width: props.boxSize, 
              height: props.boxSize, 
              overflow: "hidden"
            }}
            onClick={() => { setVisible(true); setDetailImage(i);} }
          >
            <div
              style={{
                filter: "contrast(" + props.imageContrast + "%) brightness(" + props.imageBrightness + "%)",
                backgroundImage: "url(" + image.thumbnail + ")", 
                backgroundPosition: "center",
                verticalAlign: "center",
                backgroundSize: "cover",
                position: "relative",
                display: "block",
                width:  (wt > ht ? props.boxSize-5 : wt * (props.boxSize-5) / ht), 
                height: (ht > wt ? props.boxSize-5 : ht * (props.boxSize-5) / wt),
                margin: "auto",
                marginTop: (ht > wt ? 0 : props.boxSize/2 - ht * (props.boxSize-5) / wt / 2)
              }}
            >
            </div>
            <div style={{position: "relative", marginTop: "-20px", zIndex: "100", width: props.boxSize, textAlign: "center", width: "100%", borderTop: "1px solid #333"}}>{sizeCaption}</div>
          </div>
      )})}
    </div>
  )
}

ImageGridResponsive.defaultProps = {
  isROI: false,
  imageBrightness: 120,
  imageContrast: 150
};

export default ImageGridResponsive;
