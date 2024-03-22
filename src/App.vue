<script setup>
  import { ref } from 'vue'
  import MainDrawer from './components/MainDrawer.vue'; 
  import MapContainer from './components/MapContainer.vue';
  import SubRegion from './components/SubRegion.vue';
  import { useMatchMedia } from './useMatchMedia';
  import { defineCustomElements } from "@arcgis/map-components/dist/loader";
  import { getFeatureLayer } from './getFeatureLayer.js'

  defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });

  const smallScreen = ref(useMatchMedia('(max-width: 1005px)'));
  const leftDrawerOpen = ref(false);  
  const alert = ref(false);
  const region = ref('');
  const showMainDrawer = ref(true);
  const showSubregion = ref(false);
  const subregion = ref([]);
  const coordinates = ref([]);
  const errorAlert = ref(false)

  const { regions, subregions } = getFeatureLayer();
  
  let openDrawer = false;
  let closeDrawer = true;
  if (smallScreen.value === true) {
    closeDrawer = false;
    openDrawer = true;
  }

  const toggleLeftDrawer = () =>{
    leftDrawerOpen.value = !leftDrawerOpen.value
    if (leftDrawerOpen.value === true && smallScreen.value != true){
      closeDrawer = true;
      openDrawer = false;
    } else {
      openDrawer = true;
      closeDrawer = false;
     
    }
  }

  const showSubRegions = (regionClicked) =>{
    region.value = regionClicked
    let regionCenterCoordinates = regions.value.find((feature)=> feature.Region===regionClicked)
    coordinates.value = [regionCenterCoordinates.Longitude,regionCenterCoordinates.Latitude]
    subregion.value = regions.value.find((feature)=> feature.Region===regionClicked)
    showSubregion.value = true;
    showMainDrawer.value = false;
  }

  const closeSubRegions =()=>{
    showSubregion.value = false;
    showMainDrawer.value = true;
  }

  const showErrorPage = () =>{
    errorAlert.value = true;
  }

</script>

<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">  
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-grey-2"
      >
        <q-list>
          <q-item class="header-image">
           <q-btn class="offset-10" id="drawer-toggle-close" v-show="closeDrawer" color="secondary" round icon="chevron_left" @click="toggleLeftDrawer" />
            
            <q-img src="./assets/wave-pattern.svg" style="height: 200px" fit="cover">
              <q-item-section>
                <q-item-label class='header-label' color="white"><b>COASTAL</b><br>Resilience<br>Mapping Portal</q-item-label>
                <q-btn color="secondary"  text-color="white" label="Learn More" @click="alert = true"/> 
              </q-item-section>
            </q-img>
          </q-item>
        <div v-show="showMainDrawer"> 
          <MainDrawer :regions='regions' @regionClick="showSubRegions" />
        </div>
        <div v-show="showSubregion">
          <SubRegion :subregion="subregion" :subregions="subregions" @closeSubRegion="closeSubRegions"/>
        </div>
        </q-list>
        <div class="terms">
          <a href="http://coastalresilience.org/terms-of-use/" target="_blank">
            Terms of Use
          </a> | 
          <a href="https://www.nature.org/about-us/governance/privacy-policy.xml?redirect=https-301" target="_blank">
            Privacy Statement
          </a>
          <br>
          © The Nature Conservancy. All rights reserved
        </div>
      </q-drawer>
      
      <q-btn id="drawer-toggle-open" v-show="openDrawer"  color="primary" round icon="chevron_right" @click="toggleLeftDrawer" />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">About the Coastal Resilience Mapping Portal</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none">
            Coastal Resilience supports a community of practitioners around the world who are applying spatial planning innovations to coastal hazard risk, resilience and adaptation issues. This is a global network providing access to peer practitioners, tools, information and training focused on nature-based solutions. For more information see our <a href="https://coastalresilience.org/" target="_blank">Coastal Resilience website.</a>
            <q-space />
            <div class="q-pa-md row q-gutter-md">
              <q-card class="my-card text-white text-center" style="background:#334a51">
                <q-card-section>
                  ENGAGEMENT <br> 100 communities across 11 countries trained in Coastal Resilience planning & action
                </q-card-section>
              </q-card>
              <q-card class="my-card text-white text-center" style="background:#334a51">
                <q-card-section>
                  AWARENESS <br> 90 publications making the case for nature–based solutions that reduce risk
                </q-card-section>
              </q-card>
              <q-card class="my-card text-white text-center" style="background:#334a51">
                <q-card-section>
                 ACTION <br> 25 restoration or conservation projects implemented using our decision support tools
                </q-card-section>
              </q-card>
            </div>
            <div class="logos">
              <q-img class='partner-logos' src="./assets/partners/ASFPM-Logo-full-color.jpg" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/azavea-logo.png" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/cisr_logo.png" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/esri-10GlobeLogo_sRGBflat300.jpg" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/GDPC Logo Final CMYK.jpg" style="width: 200px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/IFRC.jpeg" style="width: 200px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/msft.jpg" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/NatCapLogo.png" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/NOAA_logo_color_broadcast2.jpg" style="width: 80px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/SpatialDev.jpeg" style="width: 150px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/TNCLogoPrimary_RGB2.jpg" style="width: 150px" ></q-img>
              <q-img class='partner-logos' src="./assets/partners/UNU-EHS_3c.jpg" style="width: 150px" ></q-img>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-page-container>
        <q-banner inline-actions class="text-white bg-red" v-show="errorAlert">
        Sorry the map layers are not currently accessible. Please try again later.
        </q-banner>
        <MapContainer :region="region" :coordinates="coordinates"  @mapError="showErrorPage"/>
      </q-page-container>
    </q-layout>
</template>

<style>
  .q-img__content > div {
    background: rgba(0, 0, 0, 0);
  }
  .logos {
    text-align: center;
  }
  .partner-logos {
    margin: 10px;
  }
  #drawer-toggle-close {
    z-index: 2;
    position: fixed;
    top: 3px;
  }
  #drawer-toggle-open {
    z-index: 2;
    position: fixed;
    top: 3px;
  }
  .header-image {
    background-color: #38525a;
    padding: 0;
  }
  .header-label {
    padding: 10px;
    font-size: 1.5rem;
  }
  .main-caption {
    font-size: 0.85rem;
    padding: 10px;
  }
  .terms {
    padding: 25px;
    a {
      color: #8dc558;
    }
  }
  .my-card {
    width: 30%;
  }
</style>