import {ref} from 'vue';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

export function getFeatureLayer(){
    const regions = ref([]);
    const subregions = ref([]);
    const error = ref(null);

    const fl = new FeatureLayer({
        url: "https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/CoastalResilienceProjects/FeatureServer"
      });

    try{
        fl.queryFeatures()
            .then(function(response){
                response.features.forEach((feature)=>{
                    if(feature.attributes.Type === 'Region'){
                        regions.value.push(feature.attributes)
                    } else {
                        subregions.value.push(feature.attributes)
                    }
                    
                })
            });
    } catch {
        ((err) => (error.value = err))
    }

    return { regions, subregions, error }
}