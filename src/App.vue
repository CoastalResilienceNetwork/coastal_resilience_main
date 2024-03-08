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

  const alert = ref(false)
  const mainDrawer = ref(true)
  const australia = ref(false)
  const indonesia = ref(false)
  const caribbean = ref(false)
  const mexico = ref(false)
  const unitedstates = ref(false)
  const region = ref('')

  const toggleMain = () =>{
    mainDrawer.value = !mainDrawer.value
  }

  const toggleAustralia = () => {
    toggleMain()
    australia.value = !australia.value;
    region.value='australia'
  }
  const toggleIndonesia = () => {
    toggleMain()
    indonesia.value = !indonesia.value;
    region.value='indonesia'
  }
  const toggleCaribbean = () => {
    toggleMain()
    caribbean.value = !caribbean.value;
    region.value='caribbean'
  }
  const toggleMexico = () => {
    toggleMain()
    mexico.value = !mexico.value;
    region.value='mexico'
  }
  const toggleUnitedStates = () => {
    toggleMain()
    unitedstates.value = !unitedstates.value;
    region.value='unitedstates'
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
        
          <div v-show="mainDrawer"> 
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>Coastal Resilience is a program led by The Nature Conservancy to examine nature’s role in reducing coastal flood risk. The program consists of an approach, a web mapping tool, and a network of practitioners around the world supporting hazard mitigation and climate adaptation planning.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Australia" @click="toggleAustralia"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Caribbean" @click="toggleCaribbean"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Indonesia" @click="toggleIndonesia"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Mexico and Central America" @click="toggleMexico"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="United States" @click="toggleUnitedStates"/>
            </q-item-section>
          </q-item>
        </div>
        <div v-show="australia" >
          <q-btn icon="close" flat round dense @click="toggleAustralia"/>
          
          <q-item>
            <q-item-section>
              <q-item-label header>AUSTRALIA</q-item-label>
              <q-item-label class="main-caption" caption>The nation’s high level of biodiversity classifies it as one of 17 of the ‘megadiversity’ countries in the world, holding roughly two thirds of the world’s biodiversity. Climate adaptation strategies in Australia focus largely on coastal habitat restoration.</q-item-label>
            </q-item-section>
          </q-item>
          
          <!-- <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Victoria" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Western Australia" />
            </q-item-section>
          </q-item> -->
          <q-expansion-item label="Victoria">
            <q-card>
              <q-card-section>
                The temperate southern coast of Australia is home to hundreds of bays and estuaries containing important habitats like shellfish reefs, mangrove forests, seagrass beds and saltmarshes. The Nature Conservancy Australia is working to repair these coastal habitats and restore their critical natural services with a current focus on shellfish reef restoration.
              </q-card-section>
            </q-card>
        </q-expansion-item>
        <q-expansion-item label="Western Australia">
            <q-card>
              <q-card-section>
                Restoration of marine habitats in the Peel region of Western Australia begins with outreach and data collection in order to visualize and prioritize efforts to protect valuable mangroves, salt marches, seagrasses, and shellfish reefs. This project in the Peel-Harvey estuary launches in March, 2018, with a series of workshops on different approaches to restore these marine habitats.
              </q-card-section>
            </q-card>
        </q-expansion-item>
        </div>

        <div v-show="caribbean" >
          <q-btn icon="close" flat round dense @click="toggleCaribbean"/>
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>The impacts of climate change are increasingly seen across the Caribbean basin, a region where densely populated often low lying coastal areas are threatened by hurricanes, as well as rising warmer oceans. Given the high dependency in the Caribbean on natural resources for livelihoods, a focus on ecosystems and their interaction with people is essential for climate change adaptation. Our work in this region is focused on helping communities and government increase their resilience to climate change by protecting, restoring and sustainably managing their marine and coastal systems and strengthening local capacity for adaptation.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Dominican Republic" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Grenada, St. Vincent, and the Grenadines" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Jamaica" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="U.S Virgin Islands" />
            </q-item-section>
          </q-item>
        </div>

        <div v-show="indonesia" >
          <q-btn icon="close" flat round dense @click="toggleIndonesia"/>
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>The Nature Conservancy and the Red Cross have formed a unique and innovative partnership joining the world’s largest conservation nonprofit, with the world’s largest humanitarian organization to address the increasingly detrimental impacts from natural hazards. An initial project focuses on community resilience on the island of Java.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Semarang, Java" />
            </q-item-section>
          </q-item>
        </div>

        <div v-show="mexico" >
          <q-btn icon="close" flat round dense @click="toggleMexico"/>
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>The Government of Mexico’s adoption of an approach to climate and disaster risk reduction based in natural solutions is essential to protect its people and infrastructure, and our Coastal Resilience approach and team has a real opportunity to work with the Mexican government and its international policy delegations to influence peer countries in Latin America and emerging economies globally.</q-item-label>
            </q-item-section>
          </q-item>
          
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Mesoamerican Reef" />
            </q-item-section>
          </q-item>
        </div>

        <div v-show="unitedstates" >
          <q-btn icon="close" flat round dense @click="toggleUnitedStates"/>
          <q-item>
            <q-item-section>
              <q-item-label class="main-caption" caption>The Coastal Resilience tools provide support for decision-makers working at national and multi-national scales in assessing where to act in risk reduction, adaptation and conservation. They build from critical resources such as the Global Platform on Risk Reduction, World Risk Report, and Conservation Atlas.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="California" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Conneticut" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Georgia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Gulf of Mexico" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Hawaii" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Maine" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="New Jersey" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="North Carolina" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="South Carolina" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Southeast Florida" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Virginia" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn size="l" outline color='secondary' label="Washington" />
            </q-item-section>
          </q-item>
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
        <MapContainer :region='region' />
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