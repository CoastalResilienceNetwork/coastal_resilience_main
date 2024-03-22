<script setup>
import {watch, ref} from 'vue';

const props = defineProps(['subregion','subregions']);
defineEmits(['closeSubRegion'])
const listOfSubregionalLocations = ref([])
watch(props, (newProps) => {
    listOfSubregionalLocations.value = newProps.subregions.filter((feature) => feature.Region===newProps.subregion.Region)
})

</script>
<template>
    <q-btn icon="close" flat round dense @click="$emit('closeSubRegion')"/>
    <q-item>
        <q-item-section>
            <q-item-label header>{{ subregion.title }}</q-item-label>
            <q-item-label class="main-caption" caption>{{ subregion.description }}</q-item-label>
        </q-item-section>
    </q-item>
    <q-expansion-item v-for="subregion in listOfSubregionalLocations" v-bind:key="subregion.index" :label=subregion.title>
        <q-card>
            <q-card-section>
            {{subregion.description}}
            </q-card-section>
        </q-card>
    </q-expansion-item>

</template>