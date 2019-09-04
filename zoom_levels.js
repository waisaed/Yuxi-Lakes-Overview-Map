const zoomLevel = {
  zoomStatus: [
    {
      subtitle: "The Yunnan Provence of China",
      text: "Yuxi is located in China's Yunnan province.",
      layer: "yunnanOutline", //
      zoom: 5,
      lat: 30.0,
      long: 104.0,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "The Nine Plateau Lakes Region",
      text:
        '<p>Yunnan\'s Plateau Region has 1,066 km2 total lake surface area. </ br>Nine of these "plateau" lakes are recognized as having surface areas over 30 km2.</p><p><em>(Drainage sub-basins are shown in red)</em>',
      layer: "nineLakes",
      secondLayer: "subBasins",
      zoom: 7,
      lat: 26.199619,
      long: 101.967598,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "Three Yuxi Lakes",
      text:
        "<p>Three lakes surrounding Yuxi city are known for their beauty.</p><p><em>(Click the lakes to learn more about them)</em>",
      layer: "yuxiLakes", //
      zoom: 10,
      lat: 24.423742,
      long: 102.810943,
      tiles: "satelliteStreets",
      polyColor: "#3388ff"
    },
    {
      subtitle: "Comparing lakes of the Yuxi District with Lake Erie",
      text:
        "<p>Lake Erie (pictured here below the Yuxi District lakes) faces similar threats to water quality despite it's larger volume and surface area.</p>",
      layer: "yuxiLakes",
      secondLayer: "lakeErie",
      zoom: 8,
      lat: 23.609959,
      long: 104.34255,
      tiles: "noLabels",
      polyColor: "#3388ff"
    }
  ]
};
