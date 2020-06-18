import { Component } from 'react';
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { withLeaflet } from 'react-leaflet';
import './SearchBar.css';

class SearchBar extends Component {
  componentDidMount() {
    const map = this.props.leaflet.map;
    const searchControl = new ELG.Geosearch({
      expanded: true,
      collapseAfterResult: false,
      placeholder: 'Adresse...',
    }).addTo(map);
    const results = new L.LayerGroup().addTo(map);
    //L.geoJSON(geojsonFeature).addTo(map);
    searchControl.on('results', function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
      localStorage.setItem('data', JSON.stringify({ data: data.results }));
    });
  }

  render() {
    return null;
  }
}

export default withLeaflet(SearchBar);
