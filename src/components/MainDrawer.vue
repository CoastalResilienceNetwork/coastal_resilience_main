<script setup>
    import {ref} from "vue"
    const props = defineProps(['regions']);
    const regionList = ref(props.regions)
    defineEmits(['regionClick'])
</script>

<template>
    <q-item>
        <q-item-section>
            <q-item-label class="main-caption" caption>Coastal Resilience is a program led by The Nature Conservancy to examine nature’s role in reducing coastal flood risk. The program consists of an approach, a web mapping tool, and a network of practitioners around the world supporting hazard mitigation and climate adaptation planning.</q-item-label>
        </q-item-section>
    </q-item>
    <q-item v-for="region in regionList" v-bind:key="region.index">
        <q-item-section>
            <q-btn size="l" outline color='secondary' :label=region.title @click="$emit('regionClick', region.Region)" />
        </q-item-section>
    </q-item>
</template>