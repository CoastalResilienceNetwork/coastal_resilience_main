<script setup>
import { watch } from "vue"

const props = defineProps(['region','coordinates']);

function onReady(event) {
    const {view} = event.target;
    watch(props, (newProps) => {
        zoomToRegion(newProps.coordinates);
    })
    view.ui.move([ "zoom"], "bottom-left");

    const zoomToRegion = (coordinates) =>{  
        if (view.zoom >3){
        view.goTo({
          center: [view.center.longitude, view.center.latitude],
          zoom: 3
        },{duration: 2000, easing: 'ease'}).then(()=>{
          view.goTo({
            center: coordinates,
            zoom: 4
          }, {duration: 5000, easing: 'ease'})
        })
      } else {
        view.goTo({
            center: coordinates,
            zoom: 4
          }, {duration: 5000, easing: 'ease'})
      }
    }
}
</script>

<template>
    <arcgis-map item-id="ce8962985bf145f188eeee5dfb69dc2c" @arcgisViewReadyChange="onReady" />
</template>
  
<style >
    arcgis-map {
        height: 100vh;
        width: 100%;
        display: inherit;
    }
</style>