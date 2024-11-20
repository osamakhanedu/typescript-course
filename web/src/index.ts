import { User } from './models/User';


const user = new User({ name: "Mubeen", age: 222 });


user.save();

user.events.on("trigger", () => {
    console.log('testing')
})

user.events.trigger('trigger')