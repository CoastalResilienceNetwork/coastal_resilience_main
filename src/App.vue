<script setup>
  import { ref } from 'vue'
  import MapContainer from './components/MapContainer.vue' 

  // export default {
  //   name: 'MyLayout',
  
    // setup () {
      const leftDrawerOpen = ref(false)
  
      // const toggleLeftDrawer = () =>{
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
  
      // return {
      //   leftDrawerOpen,
      //   toggleLeftDrawer
      // }
    // }
  // }
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
          <q-item >
            <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
              <q-item-section>
                <q-item-label header>COASTAL<br>Resilience<br>Mapping Portal</q-item-label>
                <q-btn color="green" text-color="black" label="Learn More" />
              </q-item-section>
            </q-img>
          </q-item>
        
          <q-item>
            <q-item-section>
              <q-item-label caption>Coastal Resilience is a program led by The Nature Conservancy to examine nature’s role in reducing coastal flood risk. The program consists of an approach, a web mapping tool, and a network of practitioners around the world supporting hazard mitigation and climate adaptation planning.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="xl" outline style="color: goldenrod;" label="Australia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="xl" outline style="color: goldenrod;" label="Caribbean" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="xl" outline style="color: goldenrod;" label="Indonesia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="xl" outline style="color: goldenrod;" label="Mexico and Central America" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="xl" outline style="color: goldenrod;" label="United States" />
            </q-item-section>
          </q-item>

          
          <q-item clickable target="_blank" rel="noopener" href="https://quasar.dev">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Docs</q-item-label>
              <q-item-label caption>https://quasar.dev</q-item-label>
            </q-item-section>
          </q-item>
          
        </q-list>
        <p>Terms of Use</p>
      </q-drawer>
  
      <q-page-container>
        <MapContainer msg="You did it!" />
      </q-page-container>
    </q-layout>
</template>