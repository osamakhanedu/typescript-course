/// <reference types="@types/google.maps" />

// instruction to how mappable interface look like. 
// any class want to add marker have to satisfy the Mappable property 
export interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
    color?: string;
};


export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            }
        );
    }
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },

        });


        marker.addListener('click', () => {
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infowindow.open(this.googleMap, marker);
        })
    }

}
