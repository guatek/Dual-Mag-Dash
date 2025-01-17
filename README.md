# Dual-Mag-Dash



![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) 

Dual-Mag-Dash is a [Bootstrap 4](http://getbootstrap.com/), [Reacstrap](https://reactstrap.github.io/) and [React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app)) Admin Dashboard built from the excellent [Black-Dashboard-React](https://github.com/creativetimofficial/black-dashboard-react) project by [Creative Tim](https://www.creative-tim.com/)

The dashboard currently provides an image viewer to allow quick browsing of images in a grid gallery format with detail view. In addition a short summary of the data collection event that produced the images is provided as a separate view. 

## Requirements

- [nodejs](https://nodejs.org/en/)
- Data generated from [Dual-Mag-Data](https://github.com/guatek/Dual-Mag-Data)

## Highly Recommended

- [VS Code](https://code.visualstudio.com/)

## Quick start

1. Clone the repo: `git clone https://github.com/guatek/Dual-Mag-Dash.git`.
2. Browse to Dual-Mag-Dash
3. Install requirements: ```npm install```
4. Copy the following directories and files from a processed data directory to the ```public``` directory:
    - ```low_mag_cam_rois/```
    - ```low_mag_cam_video/```
    - ```high_mag_cam_rois/```
    - ```high_mag_cam_video/```
    - ```low_mag_cam_rois.js```
    - ```low_mag_cam_video.js```
    - ```high_mag_cam_rois.js```
    - ```high_mag_cam_video.js```
    - ```dual_mag_summary.js```
5. Run the app: ```npm start```

## Buliding for integration with Dual-Mag-Data

1. Remove all the files copied from to ```public``` for development leaving only the files from this repo.
2. build the production version: ```npm run build```

## Browser Support

Dual-Mag-Dash has been tested on the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64">

## Reporting Issues
We use GitHub Issues as the official bug tracker

## Technical Support or Questions

If you need support beyond github please use our [Contact Page](http://www.guatek.com/contact/) or reach out to us directly via email or slack.

## Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com)
- Copyright 2021 Guatek (http://www.guatek.com)
- Licensed under MIT (https://github.com/guatek/Dual-Mag-Dash/blob/master/LICENSE.md)

