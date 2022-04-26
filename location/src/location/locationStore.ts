import {defineStore} from "pinia";


export const locationStore = defineStore('countStore', {
    state() {
        return {
            locations: ["test", "test2"]
        }
    }
});