<template>
    <div class="container">
        <div class="title">IP Address Tracker</div>
        <div class="search-bar col-lg-6">
            <div class="input-group" style="border-radius:4px">
                <input type="text"
                v-model="ipAddress"
                 class="form-control" 
                 placeholder="Enter IP address or domain">
                <div class="input-group-append"
                 style="background-color: black;
                 border-radius: 4px;">
                <button 
                class="btn" 
                type="button"
                @click="locateIpDetails"
                @keypress.enter="locateIpDetails">
                 <img src="../../src/assets/icon-arrow.svg">
                </button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'; 
export default {
    name: 'Header',
    computed: {
        ...mapGetters([
            'getIPAddress',
        ]),
        ipAddress: {
                get() {
                    return this.getIPAddress;
                },
                set(value) {
                    console.log('ipVAlue', value);
                    this.setIpAddress(value);
                }
            },
    },
    methods: {
    ...mapActions([
    'fetchLocationDetails',
    'setIpAddress',
    ]),
        locateIpDetails() {
            this.fetchLocationDetails();
        },
    },
}
</script>
<style lang="scss" scoped>
    .container {
        display:flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        color: white;
        .title {
            font-size: 40px;
        }

        .search-bar {
            padding-top: 40px;
            padding-bottom: 20px;
            .input-group {
             .form-control {
                 height: 54px;
                 line-height: 2.5px;
                 border-radius: 10px 0 0 10px;
                }
            .input-group-append{
                 border-radius: 0 10px 10px 0;
                .btn{
                    // background-image: url('../../src/assets/icon-arrow.svg');
                    // background-size: 100% 100%;
                }
            }
            }
        }
    }
</style>