import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProp {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void// type alias


export class User {



    public events: Eventing = new Eventing();

    constructor(private data: UserProp = { name: "", age: 0 }) { }
    get(propertyName: string): (number | string) {
        return this.data[propertyName];
    }
    set(update: UserProp): void {

        Object.assign(this.data, update);

    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            })
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post(`http://localhost:3000/users`, this.data);

        }
    }

}