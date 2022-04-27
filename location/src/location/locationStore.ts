import { defineStore } from "pinia";
import type { LocationDto } from "@/location/LocationService";
import { LocationService } from "@/location/LocationService";

export const locationStore = defineStore("locationStore", {
  state() {
    return {
      locations: [] as LocationDto[],
      currentLocation: undefined as unknown as LocationDto,
    };
  },
  actions: {
    selectLocation(location: LocationDto) {
      this.currentLocation = location;
    },

    async loadLocations(baseUrl?: string) {
      this.locations = await new LocationService().getLocations(baseUrl);
    },
  },
});
