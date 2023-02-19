// variable for Coordinates for the USA
// let usCenterCoordinates = [37.0902, -95.7129];
let usCenterCoordinates = [42, -98];
// variable for map zoom level
let zoomLevel = 4;

// code to add map tile to page
let map = L.map("us-bridge-map").setView(usCenterCoordinates, zoomLevel);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// array of bridge data
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

// code to mark each bridge location on map using data from array
bridges.forEach(function (bridge) {
  // custom icon declaration
  let myIcon = L.icon({
    iconUrl: "bridge.png",
    iconSize: [19, 47],
    iconAnchor: [11, 47],
    popupAnchor: [-3, -76],
  });

  let markerText = `${bridge.bridgeName}<br/>${bridge.cityState}<p>${bridge.span} meters</p>    <a href="https://www.flaticon.com/free-icons/bridge" title="bridge icons">Bridge icons created by Freepik - Flaticon</a>
  `;
  L.marker(bridge.location, { icon: myIcon }).bindPopup(markerText).addTo(map);
});
