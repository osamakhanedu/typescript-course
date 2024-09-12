interface UserProp {
    name: string;
    age: number;
}


export class User {

    constructor(private data: UserProp = { name: "", age: 0 }) { }
    getProps(propertyName: string): (number | string) {
        return this.data[propertyName];
    }
    setProps(propertyName: string, propertyValue: (number | string)): (number | string) {

        this.data[propertyName] = propertyValue;
        return this.getProps(propertyName);

    }
}