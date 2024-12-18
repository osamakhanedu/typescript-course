
type Callback = () => void// type alias


export class Eventing {

    events: { [key: string]: Callback[] } = {}


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

}