<script setup>
import { onMounted, watch } from "vue"
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from "@arcgis/core/config.js";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

const props = defineProps(['region'])

const regionCenters = {
  australia: {
    coordinates: [130.00, -30.00],
    zoomLevel: 5
  }, 
  caribbean: {
    coordinates: [-62.9591, 15.7691],
    zoomLevel: 6 
  },
  indonesia: {
    coordinates: [116.96, -7.00], 
    zoomLevel: 6
  },
  mexico: {
    coordinates: [-96.1962, 17.4345],
    zoomLevel: 6
  },
  unitedstates: {
    coordinates: [-97.1192, 39.3003],
    zoomLevel: 4
  }
}

esriConfig.apiKey = 'AAPK1d9ff5650e164ac09da678fe794990ae-BAm-ie8CRQuR0X-nJcYsklC7ry026EBzGjJYLwbr3NNw7fcCpE66BS8w9uC5_pu'
    

  onMounted(() => {
    watch(props, (newProps) => {
      zoomToRegion(regionCenters[newProps.region]);
    })
    //set up map & associated items in composables so it can be accessed from other components

    const pointsRenderer = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        size: 9,
        color: '#8dc558',
        outline: {  // autocasts as new SimpleLineSymbol()
          color: '#ffffff',
          width: 1  // points
        }
      }
    };
    
    const pointPopup = {
        "content": "<h2>{title}</h2><br><a href={mapUrl}>Open Map</a><br><br><p>{description}</p>"
    }

    const geojsonLayer = new GeoJSONLayer({
      url: "src/assets/points.geojson",
      copyright: "TNC",
      renderer: pointsRenderer,
      outFields: ["title", "description", "mapUrl"],
      popupTemplate: pointPopup,
    });

    const map = new Map({
      basemap: "arcgis/topographic", // basemap styles service
     
    });

    const view = new MapView({
      map: map,
      center: [-81.00, 27.00], // Longitude, latitude
      zoom: 3, // Zoom level
      container: 'map'
    });
    
    view.popup.visibleElements = {
      collapseButton: false,
      actionBar: false,
      heading: false
    }

    view.ui.move([ "zoom"], "bottom-left");

    map.add(geojsonLayer)
    
    const zoomToRegion = (region) =>{    
      if (view.zoom >3){
        view.goTo({
          center: [view.center.longitude, view.center.latitude],
          zoom: 3
        },{duration: 2000, easing: 'ease'}).then(()=>{
          view.goTo({
            center: region.coordinates,
            zoom: region.zoomLevel
          }, {duration: 5000, easing: 'ease'})
        })
      } else {
        view.goTo({
            center: region.coordinates,
            zoom: region.zoomLevel
          }, {duration: 5000, easing: 'ease'})
      }
    }
  })
</script>

<template>
  <div id="map" class="map"></div>
</template>

<style >
  .map {
    height: 100vh;
    width: 100%;
  }
</style>