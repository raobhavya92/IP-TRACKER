<template>
    <div class="container" v-if="locationDetails.ip || locationError">
        <div v-if="locationError">
              <span class="information col-xs-12 col-sm-12 col-lg-3">
            <div class="information-content">
             <strong>  {{locationError}} </strong>
            </div>
        </span>
         </div>
        <div v-if="locationDetails.ip" class="row" >
        <span class="information col-xs-12 col-sm-12 col-lg-3">
            <div class="information-title">
            <strong>IP ADDRESS </strong>
            </div>
            <div class="information-content">
             <strong>  {{locationDetails.ip}} </strong>
            </div>
        </span>
        <span class="information col-xs-12 col-sm-12 col-lg-3">
             <div class="information-title">
           <strong> LOCATION </strong>
            </div>
            <div  class="information-content">
           <strong>  {{`${locationDetails.location.city},${locationDetails.location.country}`}}  </strong>
            </div>
        </span>
        <span class="information col-xs-12 col-sm-12 col-lg-3">
             <div class="information-title">
           <strong> TIMEZONE </strong>
            </div>
            <div  class="information-content">
            <strong> {{`UTC ${locationDetails.location.timezone}`}} </strong>
            </div>
        </span>
        <span class="information col-xs-12 col-sm-12 col-lg-3">
             <div class="information-title">
         <strong>   ISP </strong>
            </div>
            <div  class="information-content">
          <strong>   {{locationDetails.isp}} </strong>
            </div>
        </span>
         </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'Result',
    computed: {
        ...mapState({
            locationDetails: state => state.locationDetails,
            locationError: state => state.locationError,
        }),
    }
    
}
</script>
<style lang="scss" scoped>

    .container {
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        margin: auto;

        .information {
            text-align: left;
            padding: 20px;
            border-right: 2px solid #DCDCDC;

            .information-title {
                color: #808080;
                font-size: 10px;
                font-weight: 400;
            }

            .information-content {
                font-size: 25px;
            }
        }
        .information:last-child {
            border-right: none;
        }
    }

</style>