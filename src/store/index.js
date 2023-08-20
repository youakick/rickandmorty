import {createStore} from "vuex"
import { inputModule } from "./inputModule"
import { episodeStoreModule } from "./episodeStoreModule"
import { selectedCharModule } from "./selectedCharModule"
import { locationsModule } from "./locationsModule"

export default createStore({
    modules: {
        inputModule,
        episodeStoreModule,
        selectedCharModule,
        locationsModule
    }
})