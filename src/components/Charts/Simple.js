import React from "react";
import ReactEcharts from "echarts-for-react";

let data_temperature = [8.365,8.366,8.367,8.368,8.368,8.369,8.371,8.373,8.377,8.382,8.385,8.391,8.399,8.412,8.416,8.419,8.42,8.423,8.423,8.425,8.427,8.429,8.429,8.431,8.432,8.434,8.435,8.441,8.447,8.451,8.452,8.453,8.456,8.458,8.462,8.464,8.467,8.47,8.472,8.475,8.476,8.477,8.479,8.481,8.483,8.485,8.488,8.489,8.491,8.492,8.493,8.495,8.495,8.495,8.497,8.497,8.499,8.499,8.5,8.5,8.503,8.506,8.508,8.508,8.509,8.51,8.512,8.514,8.515,8.516,8.516,8.516,8.516,8.516,8.516,8.516,8.517,8.517,8.517,8.517,8.518,8.518,8.519,8.519,8.52,8.52,8.521,8.523,8.524,8.524,8.524,8.524,8.526,8.528,8.529,8.531,8.532,8.534,8.536,8.538,8.538,8.54,8.541,8.541,8.541,8.541,8.541,8.542,8.542,8.543,8.543,8.543,8.543,8.543,8.544,8.546,8.546,8.546,8.546,8.547,8.547,8.548,8.549,8.549,8.549,8.551,8.551,8.551,8.554,8.555,8.555,8.555,8.555,8.555,8.555,8.555,8.556,8.556,8.556,8.556,8.556,8.557,8.557,8.557,8.558,8.559,8.56,8.56,8.561,8.562,8.566,8.566,8.572,8.577,8.583,8.585,8.589,8.59,8.593,8.595,8.596,8.598,8.599,8.604,8.607,8.608,8.61,8.611,8.611,8.611,8.613,8.614,8.614,8.614,8.614,8.615,8.616,8.618,8.618,8.618,8.618,8.618,8.618,8.623,8.629,8.635,8.635,8.642,8.642,8.646,8.646,8.646,8.646,8.646,8.646,8.646,8.647,8.646,8.645,8.644,8.644,8.644,8.644,8.644,8.645,8.649,8.651,8.651,8.651,8.651,8.654,8.654,8.655,8.655,8.657,8.657,8.661,8.662,8.662,8.662,8.662,8.664,8.666,8.667,8.67,8.671,8.672,8.678,8.681,8.684,8.687,8.695,8.704,8.706,8.712,8.712,8.713,8.713,8.713,8.714,8.714,8.714,8.714,8.714,8.714,8.714,8.714,8.715,8.714,8.714,8.714,8.715,8.715,8.718,8.719,8.719,8.719,8.72,8.726,8.728,8.728,8.728,8.729,8.73,8.73,8.731,8.736,8.739,8.743,8.755,8.765,8.765,8.764,8.764,8.765,8.77,8.773,8.781,8.786,8.787,8.791,8.793,8.798,8.802,8.805,8.807,8.81,8.816,8.82,8.823,8.825,8.825,8.826,8.826,8.829,8.83,8.83,8.831,8.831,8.833,8.84,8.844,8.847,8.85,8.851,8.852,8.853,8.854,8.855,8.856,8.858,8.859,8.86,8.86,8.86,8.86,8.86,8.861,8.861,8.863,8.863,8.863,8.864,8.865,8.866,8.867,8.869,8.871,8.874,8.88,8.885,8.887,8.888,8.888,8.888,8.888,8.889,8.889,8.889,8.889,8.889,8.889,8.889,8.889,8.889,8.89,8.89,8.89,8.891,8.891,8.891,8.891,8.892,8.892,8.892,8.897,8.901,8.908,8.914,8.919,8.922,8.924,8.929,8.933,8.936,8.95,8.959,8.96,8.96,8.96,8.961,8.961,8.961,8.964,8.966,8.966,8.969,8.972,8.972,8.972,8.972,8.973,8.974,8.975,8.975,8.976,8.977,8.979,8.979,8.979,8.978,8.979,8.985,8.985,8.989,8.994,8.995,8.995,8.995,8.995,9,9.005,9.006,9.007,9.007,9.008,9.009,9.009,9.01,9.01,9.01,9.01,9.01,9.011,9.01,9.011,9.014,9.014,9.014,9.016,9.017,9.017,9.018,9.019,9.019,9.02,9.021,9.021,9.022,9.025,9.026,9.03,9.032,9.033,9.037,9.037,9.04,9.041,9.043,9.043,9.044,9.044,9.045,9.045,9.046,9.047,9.047,9.047,9.048,9.048,9.049,9.051,9.058,9.068,9.071,9.075,9.078,9.08,9.081,9.082,9.082,9.083,9.084,9.084,9.085,9.087,9.096,9.111,9.12,9.123,9.133,9.14,9.14,9.141,9.141,9.142,9.142,9.143,9.145,9.145,9.146,9.146,9.146,9.146,9.146,9.147,9.147,9.147,9.146,9.146,9.146,9.147,9.148,9.148,9.148,9.148,9.149,9.149,9.151,9.151,9.152,9.152,9.152,9.153,9.154,9.154,9.155,9.156,9.16,9.16,9.161,9.162,9.166,9.167,9.169,9.171,9.172,9.175,9.177,9.178,9.182,9.183,9.183,9.191,9.195,9.198,9.201,9.208,9.211,9.217,9.22,9.221,9.224,9.226,9.232,9.235,9.237,9.238,9.24,9.243,9.243,9.243,9.248,9.257,9.262,9.266,9.273,9.281,9.288,9.289,9.289,9.289,9.289,9.29,9.292,9.294,9.297,9.298,9.302,9.303,9.303,9.305,9.305,9.306,9.308,9.309,9.31,9.31,9.311,9.312,9.313,9.313,9.314,9.316,9.316,9.317,9.318,9.32,9.321,9.325,9.333,9.341,9.349,9.356,9.361,9.363,9.363,9.365,9.366,9.367,9.371,9.376,9.38,9.382,9.384,9.384,9.385,9.388,9.39,9.39,9.393,9.396,9.403,9.411,9.418,9.421,9.429,9.43,9.432,9.432,9.434,9.437,9.441,9.441,9.442,9.444,9.446,9.446,9.446,9.446,9.449,9.453,9.461,9.469,9.474,9.477,9.478,9.48,9.484,9.49,9.496,9.498,9.5,9.501,9.503,9.505,9.506,9.507,9.51,9.522,9.529,9.534,9.537,9.543,9.549,9.551,9.551,9.552,9.552,9.553,9.553,9.555,9.557,9.56,9.561,9.561,9.562,9.563,9.564,9.565,9.567,9.567,9.569,9.571,9.571,9.574,9.575,9.577,9.578,9.58,9.581,9.582,9.583,9.585,9.585,9.586,9.587,9.589,9.597,9.603,9.606,9.608,9.611,9.616,9.619,9.623,9.631,9.635,9.648,9.648,9.659,9.664,9.665,9.665,9.665,9.667,9.671,9.677,9.681,9.696,9.705,9.709,9.715,9.721,9.728,9.742,9.747,9.75,9.75,9.754,9.756,9.756,9.758,9.761,9.764,9.764,9.765,9.765,9.766,9.766,9.767,9.768,9.768,9.769,9.771,9.774,9.776,9.778,9.779,9.784,9.787,9.792,9.795,9.798,9.8,9.801,9.802,9.804,9.805,9.806,9.808,9.81,9.811,9.812,9.814,9.816,9.821,9.83,9.834,9.84,9.845,9.849,9.855,9.863,9.868,9.872,9.875,9.876,9.876,9.877,9.878,9.879,9.885,9.891,9.897,9.902,9.912,9.922,9.929,9.93,9.942,9.95,9.957,9.962,9.964,9.966,9.968,9.968,9.967,9.967,9.966,9.966,9.969,9.969,9.969,9.969,9.971,9.973,9.974,9.976,9.978,9.978,9.983,9.988,9.995,10.002,10.009,10.016,10.022,10.025,10.027,10.03,10.031,10.034,10.034,10.036,10.037,10.042,10.045,10.047,10.047,10.048,10.05,10.051,10.051,10.055,10.055,10.057,10.058,10.06,10.06,10.06,10.061,10.061,10.061,10.061,10.062,10.063,10.065,10.065,10.066,10.066,10.066,10.066,10.066,10.067,10.067,10.069,10.076,10.083,10.086,10.09,10.093,10.096,10.098,10.103,10.107,10.109,10.112,10.115,10.116,10.119,10.119,10.12,10.125,10.13,10.134,10.135,10.136,10.137,10.138,10.138,10.14,10.141,10.141,10.144,10.144,10.145,10.145,10.145,10.146,10.147,10.15,10.165,10.171,10.176,10.184,10.189,10.194,10.194,10.204,10.219,10.225,10.227,10.23,10.232,10.235,10.238,10.243,10.248,10.252,10.254,10.255,10.257,10.258,10.26,10.261,10.261,10.263,10.267,10.269,10.274,10.28,10.286,10.296,10.31,10.31
];

let data_pressure = [492.579,492.579,492.392,492.223,492.061,491.9,491.702,491.539,491.151,490.993,490.82,490.618,490.448,490.285,490.085,489.906,489.74,489.551,489.382,489.2,489.008,488.857,488.68,488.489,488.303,488.125,487.93,487.762,487.584,487.377,487.217,487.028,486.87,486.7,486.509,486.338,486.183,485.988,485.829,485.659,485.46,485.293,485.144,484.955,484.798,484.628,484.435,484.276,484.11,483.922,483.76,483.406,483.217,483.043,482.849,482.69,482.525,482.309,482.152,481.98,481.795,481.614,481.451,481.268,481.08,480.925,480.717,480.553,480.374,480.176,480.002,479.81,479.629,479.48,479.282,479.122,478.955,478.822,478.596,478.441,478.236,478.07,477.921,477.731,477.569,477.4,477.048,476.874,476.874,476.688,476.539,476.373,476.177,476.014,475.864,475.667,475.51,475.345,475.152,475.005,474.834,474.634,474.463,474.297,474.096,473.938,473.756,473.55,473.399,473.246,473.087,472.88,472.726,472.54,472.378,472.171,472.015,471.847,471.683,471.469,471.304,471.153,470.985,470.787,470.629,470.468,470.305,470.116,469.951,469.79,469.634,469.442,469.293,469.13,468.94,468.769,468.616,468.466,468.28,468.118,467.968,467.818,467.633,467.467,467.312,467.165,466.971,466.817,466.657,466.508,466.316,466.157,466.007,465.836,465.64,465.48,465.311,465.123,464.948,464.782,464.613,464.424,464.264,464.11,463.924,463.738,463.588,463.264,463.07,463.07,462.921,462.744,462.587,462.405,462.234,462.083,461.913,461.744,461.59,461.418,461.258,461.065,460.91,460.748,460.574,460.378,460.23,460.06,459.899,459.719,459.546,459.392,459.232,459.048,458.891,458.733,458.576,458.387,458.225,458.075,457.91,457.725,457.52,457.393,457.238,457.051,456.876,456.721,456.521,456.377,456.215,456.049,455.866,455.702,455.54,455.398,455.195,455.041,454.886,454.745,454.547,454.391,454.234,454.076,453.895,453.735,453.573,453.417,453.241,453.075,452.927,452.74,452.596,452.38,452.289,452.09,451.936,451.772,451.618,451.434,451.281,451.113,450.96,450.79,450.624,450.472,450.315,450.124,449.978,449.825,449.667,449.482,449.333,449.179,449.019,448.832,448.692,448.376,448.21,448.21,448.006,447.857,447.707,447.5,447.343,447.18,447.028,446.831,446.664,446.492,446.296,446.133,445.972,445.813,445.621,445.458,445.303,445.121,444.951,444.806,444.608,444.464,444.307,444.139,443.95,443.804,443.65,443.454,443.292,443.129,442.974,442.781,442.622,442.45,442.288,442.091,441.924,441.71,441.597,441.383,441.227,441.05,440.881,440.687,440.357,440.192,440.192,439.997,439.84,439.677,439.519,439.37,439.175,439.04,438.878,438.675,438.516,438.357,438.21,438.011,437.841,437.683,437.521,437.321,437.169,437.001,436.844,436.647,436.493,436.337,436.18,435.991,435.826,435.67,435.515,435.313,435.163,435.006,434.855,434.661,434.503,434.335,433.997,433.824,433.824,433.647,433.457,433.298,433.135,432.972,432.791,432.625,432.461,432.301,432.109,431.959,431.801,431.634,431.444,431.295,431.125,430.965,430.777,430.608,430.458,430.26,429.952,429.78,429.78,429.589,429.433,429.266,429.108,428.909,428.756,428.578,428.389,428.22,428.061,427.91,427.699,427.536,427.381,427.221,427.026,426.866,426.696,426.548,426.341,426.189,426.027,425.66,425.523,425.523,425.356,425.175,424.97,424.802,424.638,424.463,424.26,424.099,423.937,423.769,423.574,423.418,423.249,423.082,422.887,422.72,422.556,422.397,422.197,422.032,421.878,421.517,421.347,421.347,421.199,421.03,420.833,420.676,420.509,420.343,420.156,419.998,419.832,419.635,419.472,419.319,419.107,418.942,418.779,418.616,418.41,418.244,418.062,417.911,417.689,417.53,417.364,417.19,416.969,416.811,416.657,416.493,416.295,416.141,415.976,415.822,415.624,415.454,415.281,415.085,414.904,414.739,414.57,414.367,414.188,414.023,413.867,413.663,413.483,413.314,413.145,412.954,412.781,412.605,412.404,412.219,412.06,411.865,411.692,411.521,411.316,411.159,410.983,410.826,410.624,410.456,410.28,410.125,409.929,409.76,409.593,409.407,409.232,409.063,408.909,408.713,408.542,408.369,408.206,407.999,407.83,407.657,407.498,407.282,407.128,406.97,406.793,406.592,406.435,406.267,406.102,405.889,405.715,405.558,405.385,405.181,405.01,404.841,404.642,404.476,404.318,404.145,403.932,403.753,403.589,403.381,403.217,403.049,402.866,402.682,402.521,402.348,402.171,401.994,401.823,401.652,401.49,401.291,401.116,400.963,400.761,400.598,400.437,400.259,400.066,399.905,399.738,399.568,399.375,399.204,399.033,398.883,398.67,398.499,398.333,398.172,397.982,397.797,397.635,397.464,397.26,397.094,396.924,396.747,396.547,396.382,396.218,396.04,395.848,395.673,395.516,395.314,395.155,394.977,394.809,394.612,394.452,394.295,394.111,393.915,393.747,393.581,393.415,393.192,393.03,392.861,392.657,392.493,392.321,392.165,391.971,391.793,391.627,391.453,391.247,391.082,390.919,390.712,390.546,390.376,390.198,389.991,389.667,389.497,389.497,389.331,389.139,388.984,388.811,388.643,388.462,388.289,388.114,387.917,387.737,387.585,387.416,387.206,387.046,386.876,386.706,386.513,386.35,386.176,386.014,385.822,385.662,385.479,385.288,385.119,385.025,384.799,384.59,384.435,384.261,384.074,383.863,383.694,383.522,383.353,383.149,382.983,382.809,382.609,382.438,382.26,382.1,381.902,381.731,381.557,381.355,381.192,380.868,380.653,380.653,380.49,380.317,380.14,379.953,379.772,379.598,379.432,379.207,379.034,378.861,378.691,378.493,378.318,378.146,377.978,377.775,377.605,377.441,377.233,377.068,376.902,376.729,376.532,376.356,376.184,375.986,375.823,375.645,375.474,375.275,375.108,374.936,374.771,374.558,374.406,374.232,374.059,373.859,373.689,373.524,373.318,372.989,372.809,372.809,372.635,372.423,372.251,372.09,371.877,371.698,371.533,371.363,371.156,370.987,370.824,370.649,370.444,370.281,370.107,369.937,369.744,369.573,369.41,369.236,369.032,368.881,368.704,368.536,368.334,368.159,368.011,367.83,367.616,367.437,367.276,367.096,366.897,366.709,366.526,366.358,366.14,365.965,365.804,365.619,365.398,365.231,365.055,364.856,364.678,364.49,364.333,364.139,363.95,363.786,363.614,363.404,363.236,363.058,362.888,362.681,362.502,362.334,362.168,361.954,361.787,361.612,361.407,361.227,361.059,360.85,360.694,360.533,360.31,360.139,359.957,359.76,359.58,359.405,359.2,359.026,358.847,358.653,358.478,358.305,358.11,357.93,357.769,357.57,357.391,357.23,357.032,356.851,356.662,356.457,356.285,356.11,355.899,355.731,355.549,355.315,355.139,354.963,354.747,354.559,354.385,354.184,354.001,353.829,353.66,353.449,353.274,353.09,352.895,352.716,352.541,352.377,352.168,352.095,351.821,351.66,351.456,351.283,351.101,350.927,350.721,350.543,350.37,350.197,349.982,349.813,349.641,349.472,349.263,349.095,348.933,348.766,348.542,348.373,348.204,347.995,347.825,347.665,347.48,347.275,347.111,346.951,346.777,346.568,346.416,346.231,346.063,345.691,345.66,345.517,345.323,345.154,344.984,344.811,344.606,344.429,344.259,344.077,343.847,343.684,343.512,343.294,343.124,342.941,342.766,342.56,342.381,342.197,341.997,341.817,341.651,341.472,341.252,341.075,340.906,340.721,340.509,340.342,340.17,340.17,340.003,339.606,339.435,339.208,339.037,338.862,338.642,338.284,338.106,338.106,337.894,337.705,337.535,337.33,337.152,336.97,336.761,336.589,336.405,336.188,336.012,335.84,335.619,335.444,335.267,335.082,334.872,334.701,334.516,334.3,334.3,334.125,333.724,333.55];

let scatter_data = [];

for (var i = 0; i < data_temperature.length; i++) {
  scatter_data.push([data_temperature[i], data_pressure[i]]);
}

export default class Simple extends React.PureComponent {
  getOption = () => {
    return {
      backgroundColor: 'rgba(128, 128, 128, 0.0)',
      toolbox: {
        feature: {
            dataZoom: {
                type: 'inside',
                title: {
                  zoom: 'Zoom',
                  back: 'Zoom Reset'
                }
            },
            restore: {
              title: 'Restore'
            },
            saveAsImage: {
                title: 'Save as Image',
                lang: ['Right Click to Save Image']
            }
        }
      },
      tooltip : {
        trigger: 'axis'
      },
      xAxis: [
          {
            scale: true,
            axisLine: {
              lineStyle: {
                color: "#9e9e9e"
              }
            }
          },
      ],
      yAxis:        
          {
              inverse: true,
              scale: true,
              axisLine: {
                lineStyle: {
                  color: "#9e9e9e"
                }
              }
          },
      series: [
          {
              name: 'Temperature (C)',
              type: 'line',
              data: scatter_data
          }
      ]
    };
  };

  render() {
    return (
          <ReactEcharts
            option={this.getOption()}
            style={{height: '640px', width: '100%'}}
            theme='dark'
          />
    );
  }
}