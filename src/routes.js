/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Summary from "views/Summary.js";
import LowMagROIs from "views/LowMagROIs.js";
import LowMagImages from "views/LowMagImages.js";
import HighMagROIs from "views/HighMagROIs.js";
import HighMagImages from "views/HighMagImages.js";

var routes = [
  {
    path: "/summary",
    name: "Summary",
    icon: "tim-icons icon-paper",
    component: Summary,
    layout: "/admin",
  },
  {
    path: "/low-mag-camera-rois",
    name: "Low Mag Camera ROIs",
    icon: "tim-icons icon-image-02",
    component: LowMagROIs,
    layout: "/admin",
  },
  {
    path: "/low-mag-camera-images",
    name: "Low Mag Camera Images",
    icon: "tim-icons icon-image-02",
    component: LowMagImages,
    layout: "/admin",
  },
  {
    path: "/high-mag-camera-rois",
    name: "High Mag Camera ROIs",
    icon: "tim-icons icon-image-02",
    component: HighMagROIs,
    layout: "/admin",
  },
  {
    path: "/high-mag-camera-images",
    name: "High Mag Camera Images",
    icon: "tim-icons icon-image-02",
    component: HighMagImages,
    layout: "/admin",
  },
];
export default routes;
