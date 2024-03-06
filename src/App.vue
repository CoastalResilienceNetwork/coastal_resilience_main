<script setup>
  import { ref } from 'vue'
  import MapContainer from './components/MapContainer.vue' 
  import { useMatchMedia } from './useMatchMedia';
  const smallScreen = ref(useMatchMedia('(max-width: 1005px)'));
  
  let openDrawer = false;
  let closeDrawer = true;
  if (smallScreen.value === true) {
    closeDrawer = false;
    openDrawer = true;
  }

  const leftDrawerOpen = ref(false)  
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
            <q-img src="./assets/wave-pattern.svg" style="height: 200px" fit="cover">
              <q-item-section>
                <q-item-label class='header-label' color="white">COASTAL<br>Resilience<br>Mapping Portal</q-item-label>
                <q-btn color="secondary"  text-color="white" label="Learn More" /> 
              </q-item-section>
            </q-img>
          </q-item>
        
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>Coastal Resilience is a program led by The Nature Conservancy to examine nature’s role in reducing coastal flood risk. The program consists of an approach, a web mapping tool, and a network of practitioners around the world supporting hazard mitigation and climate adaptation planning.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Australia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Caribbean" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Indonesia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Mexico and Central America" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="United States" />
            </q-item-section>
          </q-item>

<!--           
          <q-item clickable target="_blank" rel="noopener" href="https://quasar.dev">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Docs</q-item-label>
              <q-item-label caption>https://quasar.dev</q-item-label>
            </q-item-section>
          </q-item> -->
          
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
      <q-btn id="drawer-toggle-close" v-show="closeDrawer" color="primary" round icon="chevron_left" @click="toggleLeftDrawer" />
      <q-btn id="drawer-toggle-open" v-show="openDrawer"  color="primary" round icon="chevron_right" @click="toggleLeftDrawer" />
      <q-page-container>
        <MapContainer />
      </q-page-container>
    </q-layout>
</template>

<style>
/* 1005 */
  .q-img__content > div {
    background: rgba(0, 0, 0, 0);
  }
  #drawer-toggle-close {
    z-index: 2;
    position: fixed;
    left: calc(100vw*.3);
  }
  #drawer-toggle-open {
    z-index: 2;
    position: fixed;
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
</style>