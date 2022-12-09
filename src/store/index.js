import { createStore } from "vuex";
import currentModule from './current/index'
import dailyModule from './daily/index'
import hourlyModule from './hourly/index'
import airPollutionModule from './airpollution/index'
import authModule from './auth/index'

const store = createStore({
    modules: {
        current:  currentModule,
        daily: dailyModule,
        hourly: hourlyModule,
        airPollution: airPollutionModule,
        auth: authModule
    }
})

export default store