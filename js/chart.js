/* Get chart canvas and contex  */
let chartCanvas = document.querySelector("#bridge-bar-chart");
let ctx = chartCanvas.getContext("2d");

// create chart object
// array of bridge data
chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Verrazano-Narrows Bridge",
      "Golden Gate Bridge",
      "Mackinac Bridge",
      "George Washington Bridge",
      "Tacoma Narrows Bridge",
    ],
    datasets: [
      {
        label: "Span Lengths",
        data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
        backgroundColor: [
          "tomato",
          "orange",
          "dodgerblue",
          "mediumseagreen",
          "slateblue",
        ],
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
