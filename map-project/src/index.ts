/// <reference types="@types/google.maps" />

import { User} from './User';
import { Company  } from "./Company";

const elementRef = document.getElementById("map") as HTMLElement;

const map = new google.maps.Map(elementRef,{
    zoom:1,
    center: { lat:  0, lng: 0 },
});



// const user = new User()
// const company = new Company();
// console.log(user);
// console.log(company);

// console.log(google);
