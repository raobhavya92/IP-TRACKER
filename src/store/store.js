import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      locationDetails: {},
      locationError: '',
      latitude: '',
      longitude:'',
      ipAddress: '',
    },
    getters: {
        getIPAddress: (state) => state.ipAddress,
    },
    mutations: {
      SET_LOCATION_DETAILS(state, data) {
          state.locationDetails = data;
          const {
              location: {
                  lat= 0,
                  lng= 0,
              } = {},
          } = data;
          state.latitude = lat;
          state.longitude = lng;
      },
      SET_LOCATION_ERRORED(state,error){
        state.locationError = error;
      },
      SET_IP_ADDRESS(state,value) {
          state.ipAddress = value;
      }
    },
    actions: {
        fetchLocationDetails({state, commit}) {
            let locateIPURL = `https://geo.ipify.org/api/v1?apiKey=at_TgCTjVrZrXtLQrPG2rBMWzMF5R577&ipAddress=${state.ipAddress}`

            axios
            .get(locateIPURL)
            .then((response) => 
            {
                commit('SET_LOCATION_DETAILS',response.data);
                commit('SET_LOCATION_ERRORED','');
            })
            .catch((reject) => {
                commit('SET_LOCATION_DETAILS',{});
                commit('SET_LOCATION_ERRORED',reject.response.data.messages);
            });

        },
        setIpAddress({commit}, value) {
            commit('SET_IP_ADDRESS', value);
        }
    },

  });

export default store;

