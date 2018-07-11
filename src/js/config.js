export const INITIAL_STATE = {
  locateModalVisible: false,
  shareModalVisible: false,
  viewReady: false,
  search:'',
  itemInfo: {}
};

export const TEXT = {
  title: 'Esri Redux Example',
  subtitle: 'Example with Redux, React, Esri, Sass, and more.'
};

export const MAP_OPTIONS = {
  basemap: 'streets-vector'
};

export const VIEW_OPTIONS = {
  ui: { components: ['logo', 'attribution'] },
  center: [-35.55, 26.53],
  zoom: 2
};

export const URLS = {
  itemInfo: appid => `//www.arcgis.com/sharing/rest/content/items/${appid}/data`
};

export const SEARCH = {
  locate: location => `//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer`,
  singleLineFieldName: "SingleLine",
  outFields: ["Addr_type"],
  name: "ArcGis World Geocoding Service",
  localSearchOptions: {
    minscale: 300000,
    distance: 50000
  },
  placeholder: i18n.placeholder,
  resultsSymbol: {
    type: "picture-marker",
    url: this.basePath + "/images/search/search-symbol-32.png",
    size: 24,
    width: 24,
    height: 24,
    xoffset: 0,
    yoffset: 0
  }
}