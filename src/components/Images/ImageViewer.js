/*!

=========================================================
* Dual-Mag-Dash v1.0 ImageViewer.js
=========================================================

* Build a card with image thumbnails and controls for 
* page size, sort method, contrast and brightness

* Copyright 2020 Guatek
* Licensed under MIT (See LICENCE.md for details)

=========================================================

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";


// Page maker 
import Pager from "components/Pager.js";

// ROI grid component
import ImageGridResponsive from "components/Images/ImageGrid.js";

// Select list helper
import ColSelect from "components/ColSelect.js";

function ImageViewer(props) {

  // State variables
  const [pageNumber, setPageNumber] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(props.pageSize);
  const [sortMethod, setSortMethod] = React.useState(props.sortMethod);
  const [imageContrast, setImageContrast ] = React.useState(props.imageContrast);
  const [imageBrightness, setImageBrightness ] = React.useState(props.imageBrightness);

  // Temp container for images that have been sorted
  let sortedImages = [];

  if (sortMethod === "Height") {
    sortedImages = props.images.sort((a, b) => (a.fullHeight > b.fullHeight) ? -1 : 1);
  }
  else if (sortMethod === "Area") {
    sortedImages = props.images.sort((a, b) => (a.area > b.area) ? -1 : 1);
  }
  else if (sortMethod === "Aspect Ratio") {
    sortedImages = props.images.sort((a, b) => (a.aspectRatio > b.aspectRatio) ? -1 : 1);
  }
  else if (sortMethod === "Major Axis Length") {
    sortedImages = props.images.sort((a, b) => (a.majorAxisLength > b.majorAxisLength) ? -1 : 1);
  }
  else {
    sortedImages = props.images.sort((a, b) => (a.caption > b.caption) ? 1 : -1);
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" lg="4" md="0" sm="0">
                    <h5 className="card-category">{props.title}</h5>
                    <CardTitle tag="h2">{props.cameraName} {props.cardTitle}</CardTitle>
                  </Col>

                  <ColSelect justify="text-left" lg="2" md="6" sm="6" 
                    id="sortMethodSelect" name="Sort By:" 
                    items={props.sortMethodList} handler={setSortMethod} value={sortMethod} 
                  />
                                
                  <ColSelect justify="text-left" lg="2" md="6" sm="6" 
                    id="pageSizeSelect" name="Page Size:" 
                    items={props.pageSizeList} handler={setPageSize} value={pageSize} 
                  />

                  <ColSelect justify="text-left" lg="2" md="6" sm="6" 
                    id="contrastSelect" name="Contrast (%):" 
                    items={props.contrastList} handler={setImageContrast} value={imageContrast} 
                  />  

                  <ColSelect justify="text-left" lg="2" md="6" sm="6" 
                    id="brightnesstSelect" name="Brightness (%):" 
                    items={props.brightnessList} handler={setImageBrightness} value={imageBrightness} 
                  />  

                </Row>
                <Row>
                  <Col className="text-left" sm="12">
                    <h5 className="card-category">Pages: </h5>
                    <Pager 
                      pageNumber={pageNumber} 
                      setPageNumber={setPageNumber} 
                      pageSize={pageSize} 
                      totalItems={sortedImages.length}
                    />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody style={{padding: "10px"}}>
                <div style={{backgroundColor: "#000", borderRadius: "4px", padding: "4px", height: "75vh", overflowY: "scroll"}}>
                  <ImageGridResponsive
                    isROI={props.isROI} 
                    images={sortedImages.slice(pageNumber*pageSize,(pageNumber+1)*pageSize)} 
                    boxSize={200} 
                    pixelSize={props.pixelSize}
                    imageContrast={imageContrast}
                    imageBrightness={imageBrightness}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

ImageViewer.defaultProps = {
  title: "TITLE",
  cardTitle: "CARD TITLE",
  cameraName: 'CAMERA NAME',
  isROI: false,
  images: [],
  pixelSize: 6.79,
  pageSize: 200,
  pageSizeList: [100, 200, 400, 800, 1000, 2000, 4000, 10000],
  sortMethod: "Height",
  sortMethodList: ["Height", "Timestamp"],
  imageContrast: 100,
  contrastList: [25,50,75,100,115,125,135,150,165,175,185,200],
  imageBrightness: 100,
  brightnessList: [25,50,75,100,125,150,200,300,400],
};

export default ImageViewer;
