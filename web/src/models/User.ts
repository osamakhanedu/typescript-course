interface UserProp {
    name?: string;
    age?: number;
}

type Callback = () => {}


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

    }

}