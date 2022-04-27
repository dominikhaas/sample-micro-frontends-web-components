export interface LocationDto {
  title: string;
  city: string;
  kind: string;
}

export class LocationService {
  async getLocations(baseUrl?: string): Promise<LocationDto[]> {
    let url;
    if (baseUrl) {
      url = baseUrl + "/locations.json";
    } else {
      url = "./locations.json";
    }

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
