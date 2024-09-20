import { User } from './models/User';

const user = new User({ name: "myname", age: 21 });

console.log(user.get("name"));
user.set({ name: 'myname 2' });

console.log(user);


user.on('click', () => {
    console.log('click event ')
})


user.trigger('click');
