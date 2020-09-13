<template>
  <div id="app">
    <div class="container-fluid">
      <div class="bg-container">
        <Header></Header>
        <Results></Results>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import Header from '../src/components/Header';
import Results from '../src/components/Results';
import L from 'leaflet';
import { mapState } from 'vuex'; 

export default {
  name: 'app',
  components: { Header, Results },
  data () {
    return {
      map: {},
      marker: {},
      tiles: {},
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',

    }
  },
  computed: {
    ...mapState({         
        locationDetails: state => state.locationDetails,
        latitude: state => state.latitude,
        longitude: state => state.longitude,
    }),
  },
  watch: {
    locationDetails(newLocation, oldLocation){
      this.marker.setLatLng([this.latitude, this.longitude]);
      this.map.setView([this.latitude,this.longitude]);
    },
  },
  mounted() {
   this.setUpMap([0,0]);
  },
  methods: {
    updateTile() {
       const { attribution, tileUrl } = this;
       this.tiles = L.tileLayer(tileUrl, {attribution});
      this.tiles.addTo(this.map);
    },
    setUpMap(coordinates) {
    this.map = L.map('map', {
      center: coordinates,
      zoom: 5
    });

    const locationIcon = L.icon({
      iconUrl: '../../src/assets/icon-location.svg',
      iconSize: [30,30],
      iconAnchor: [25,16],
    });

    this.marker = L.marker(coordinates, {icon: locationIcon}).addTo(this.map);
    this.updateTile();
    },
  },
}
</script>

<style lang="scss">
 @import "../main.css";

  .container-fluid {
    padding: 0 !important;
    .bg-container {
      height: 300px;
      background-image: url('../src/assets/pattern-bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    #map {
      position: absolute;
      z-index: -1;
      bottom: 0;
      top: 300px;
      width: 100%;
      height: auto;
    }
  }

</style>
