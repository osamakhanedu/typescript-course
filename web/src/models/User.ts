import axios, { AxiosResponse } from "axios";

interface UserProp {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void// type alias


export class User {

    events: { [key: string]: Callback[] } = {}

    constructor(private data: UserProp = { name: "", age: 0 }) { }
    get(propertyName: string): (number | string) {
        return this.data[propertyName];
    }
    set(update: UserProp): void {

        Object.assign(this.data, update);

    }

    on(eventName: string, listener: Callback): void {

        const handlers = this.events[eventName] || [];
        handlers.push(listener);
        this.events[eventName] = handlers;

    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName] || [];

        if (handlers.length === 0) {
            return;

        }

        handlers.forEach(callback => {
            callback();
        })
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            })
    }

    save(): void{
        const id = this.get('id');

        if(id){
            axios.put(`http://localhost:3000/users/${id}`,this.data);
        }else{
            axios.post(`http://localhost:3000/users`,this.data);

        }
    }

}