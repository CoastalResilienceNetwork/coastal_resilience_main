<script setup>
import { onMounted } from "vue"
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from "@arcgis/core/config.js";
// import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"
esriConfig.apiKey = 'AAPK1d9ff5650e164ac09da678fe794990ae-BAm-ie8CRQuR0X-nJcYsklC7ry026EBzGjJYLwbr3NNw7fcCpE66BS8w9uC5_pu'
    

  onMounted(() => {
    //set up map & associated items in composables so it can be accessed from other components

    
    // const geojsonLayer = new GeoJSONLayer({
    //       url: "../assets/points.geojson",
    //       copyright: "TNC"
    //     });

    const map = new Map({
      basemap: "arcgis/topographic", // basemap styles service
     
    });

    const view = new MapView({
      map: map,
      center: [15.00, -3.00], // Longitude, latitude
      zoom: 4, // Zoom level
      container: 'map'
    });
  })
</script>

<template>
  <div id="map" class="map">
    
  </div>
</template>

<style scoped>
@import url("https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css");
  .map {
    height: 100vh;
    width: 100%;
  }
</style>