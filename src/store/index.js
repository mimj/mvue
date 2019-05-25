import Vue from 'vue'
import Vuex from 'vuex'
import my_module from './modules/my_module'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        
    },
    mutations:{
    },
    getters:{
    },
    modules:{
        MyModule:my_module
    },
    actions:{

    },

})