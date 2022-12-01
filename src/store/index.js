import { createStore } from "vuex";
import todayModule from './today/index'
import dailyModule from './daily/index'
import hourlyModule from './hourly/index'
import airPollutionModule from './airpollution/index'

const store = createStore({
    modules: {
        today:  todayModule,
        daily: dailyModule,
        hourly: hourlyModule,
        airPollution: airPollutionModule
    }
})

export default store