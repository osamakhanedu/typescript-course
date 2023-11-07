/// <reference types="@types/google.maps" />

import { User} from './User';
import { Company} from './Company';

export class CustomMap {

    private googleMap: google.maps.Map;

     constructor(htmlElementId: string ="map") {

        this.initMap(htmlElementId);
        // const elementRef = document.getElementById(htmlElementId) as HTMLElement;

        // const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

        //  this.googleMap = new google.maps.Map(elementRef,{
        //     zoom:1,
        //     center: { lat:  0, lng: 0 },
        // });

    }

    async initMap(htmlElementId: string ="map"): Promise<void> {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        this.googleMap = new Map(document.getElementById(htmlElementId) as HTMLElement, {
            center: { lat: 0, lng: 0 },
            zoom: 1,
        });
      }

   
      addUserMarker(user: User): void{

      }

      addCompanyMarker(Company: Company): void{

      }
}