
import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasID {
    id?: number
}


export class Sync<T extends HasID> {

    constructor(public baseUrl: string) {

    }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.baseUrl}/${id}`)

    }

    save(data: T): Promise<AxiosResponse<any, any>> {

        const { id } = data;

        if (id) {
            return axios.put(`${this.baseUrl}/${id}`, data);
        } else {
            return axios.post(`${this.baseUrl}/users`, data);

        }
    }
}