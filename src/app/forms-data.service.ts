import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormsDataService {

  constructor(private http: HttpClient) {

  }

  /**
   * GetCountries
   */
  public GetCountries() {
    return [
      { countryId: "0", countryName: "India" },
      { countryId: "1", countryName: "Pakistan" },
      { countryId: "2", countryName: "Bangladesh" },
      { countryId: "3", countryName: "Indonesia" },
      { countryId: "4", countryName: "US" }
    ];
  }

  public GetStates(countryId: string = "0") {

    return [
      { countryId: "0", stateId: "0", stateName: "Gujarat" },
      { countryId: "0", stateId: "1", stateName: "Delhi" },
      { countryId: "0", stateId: "2", stateName: "Maharashtra" },
      { countryId: "1", stateId: "3", stateName: "PakistanState1" },
      { countryId: "1", stateId: "4", stateName: "PakistanState2" },
      { countryId: "1", stateId: "5", stateName: "PakistanState3" },
      { countryId: "1", stateId: "6", stateName: "PakistanState4" },
      { countryId: "2", stateId: "7", stateName: "BangladeshState1" },
      { countryId: "2", stateId: "8", stateName: "BangladeshState2" },
      { countryId: "2", stateId: "9", stateName: "BangladeshState3" },
      { countryId: "2", stateId: "10", stateName: "BangladeshState4" },
      { countryId: "3", stateId: "11", stateName: "IndonesiaState1" },
      { countryId: "3", stateId: "12", stateName: "IndonesiaState2" },
      { countryId: "3", stateId: "13", stateName: "IndonesiaState3" },
      { countryId: "3", stateId: "14", stateName: "IndonesiaState4" },
      { countryId: "4", stateId: "15", stateName: "USState1" },
      { countryId: "4", stateId: "16", stateName: "USState2" },
      { countryId: "4", stateId: "17", stateName: "USState3" },
      { countryId: "4", stateId: "18", stateName: "USState4" },
      { countryId: "4", stateId: "19", stateName: "USState5" }
    ].filter(x => x.countryId == countryId);
  }

  public GetCities(stateId: string = "0") {
    return [
      { stateId: "0", cityId: "0", cityName: "city0" },
      { stateId: "0", cityId: "1", cityName: "city1" },
      { stateId: "1", cityId: "2", cityName: "city2" },
      { stateId: "1", cityId: "3", cityName: "city3" },
      { stateId: "2", cityId: "4", cityName: "city4" },
      { stateId: "2", cityId: "5", cityName: "city5" },
      { stateId: "3", cityId: "6", cityName: "city6" },
      { stateId: "3", cityId: "7", cityName: "city7" },
      { stateId: "4", cityId: "8", cityName: "city8" },
      { stateId: "4", cityId: "9", cityName: "city9" },
      { stateId: "5", cityId: "10", cityName: "city10" },
      { stateId: "5", cityId: "11", cityName: "city11" },
      { stateId: "6", cityId: "12", cityName: "city12" },
      { stateId: "6", cityId: "13", cityName: "city13" },
      { stateId: "7", cityId: "14", cityName: "city14" },
      { stateId: "7", cityId: "15", cityName: "city15" },
      { stateId: "8", cityId: "16", cityName: "city16" },
      { stateId: "8", cityId: "17", cityName: "city17" },
      { stateId: "9", cityId: "18", cityName: "city18" },
      { stateId: "9", cityId: "19", cityName: "city19" },
      { stateId: "10", cityId: "20", cityName: "city20" },
      { stateId: "10", cityId: "21", cityName: "city21" },
      { stateId: "11", cityId: "22", cityName: "city22" },
      { stateId: "11", cityId: "23", cityName: "city23" },
      { stateId: "12", cityId: "24", cityName: "city24" },
      { stateId: "12", cityId: "25", cityName: "city25" },
      { stateId: "13", cityId: "26", cityName: "city26" },
      { stateId: "13", cityId: "27", cityName: "city27" },
      { stateId: "14", cityId: "28", cityName: "city28" },
      { stateId: "14", cityId: "29", cityName: "city29" },
      { stateId: "15", cityId: "30", cityName: "city30" },
      { stateId: "15", cityId: "31", cityName: "city31" },
      { stateId: "16", cityId: "32", cityName: "city32" },
      { stateId: "16", cityId: "33", cityName: "city33" },
      { stateId: "17", cityId: "34", cityName: "city34" },
      { stateId: "17", cityId: "35", cityName: "city35" },
      { stateId: "18", cityId: "0", cityName: "city36" },
      { stateId: "19", cityId: "0", cityName: "city37" },
      { stateId: "20", cityId: "0", cityName: "city38" },
      { stateId: "21", cityId: "0", cityName: "city39" },
      { stateId: "22", cityId: "0", cityName: "city40" },
      { stateId: "23", cityId: "0", cityName: "city41" },
      { stateId: "24", cityId: "0", cityName: "city42" },
      { stateId: "25", cityId: "0", cityName: "city43" },
      { stateId: "26", cityId: "0", cityName: "city44" },
      { stateId: "27", cityId: "0", cityName: "city45" },
      { stateId: "28", cityId: "0", cityName: "city46" }
    ].filter(x => x.stateId == stateId);
  }
}


// @Injectable({
//   providedIn: 'root'
// })
// export class AnotherService {
//   constructor(private httpClient: HttpClient) {
//     // this.httpClient.get('url')
//     //   .map((res: Response) => {
//     //     res.json();
//     //   });
//   }
// }