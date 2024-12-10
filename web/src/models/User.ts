
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";




export interface UserProp {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void// type alias
const baseURL = "http://localhost:3000/users"


export class User {



    public events: Eventing = new Eventing();
    public sync: Sync<UserProp> = new Sync<UserProp>(baseURL)

    constructor(private data: UserProp = { name: "", age: 0 }) { }
    get(propertyName: string): (number | string) {
        return this.data[propertyName];
    }
    set(update: UserProp): void {

        Object.assign(this.data, update);

    }





}