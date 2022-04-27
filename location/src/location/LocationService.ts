export interface LocationDto {
  title: string;
}

export class LocationService {
  async getLocations(): Promise<LocationDto[]> {
    return fetch("./locations.json").then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
