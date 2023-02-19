/* Get chart canvas and contex  */
let chartCanvas = document.querySelector("#bridge-bar-chart");
let ctx = chartCanvas.getContext("2d");

bridges = [
  {
    bridgeName: "Verrazano-Narrows Bridge",
    cityState: "New York, NY",
    span: 1298.4,
    location: [40.6066, -74.0447],
  },
  {
    bridgeName: "Golden Gate Bridge",
    cityState: "San Francisco and Marin, CA",
    span: 1280.2,
    location: [37.8199, -122.4783],
  },
  {
    bridgeName: "Mackinac Bridge",
    cityState: "Mackinaw and St Ignace, MI",
    span: 1158.0,
    location: [45.8174, -84.7278],
  },
  {
    bridgeName: "George Washington Bridge",
    cityState: "New York, NY and New Jersey, NJ",
    span: 1067.0,
    location: [40.8517, -73.9527],
  },
  {
    bridgeName: "Tacoma Narrows Bridge",
    cityState: "Tacoma and Kitsap, WA",
    span: 853.44,
    location: [47.269, -122.5517],
  },
];

// create chart object
// array of bridge data
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Span Lengths",
        data: [],
        backgroundColor: [],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

function addBridgeDataToChart() {
     // TODO add data to chart

}
console.log(addBridgeDataToChart)