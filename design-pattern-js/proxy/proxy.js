class Greetings {
    english() { return 'Hello'; }
    korean() { return 'Ya'; }
}

class MoreGreetings {
    french() { return 'Bonjour'; }
    japanese() { return 'Gonijiwa'; }
}

const greetings = new Greetings();
const moreGreetings = new MoreGreetings();

const allGreetings = new Proxy(moreGreetings, {
    get: function (target, property) {
        return target[property] || greetings[property];
    }
});

console.log(allGreetings.korean());