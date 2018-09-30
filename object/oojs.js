var person = {
    name: {first: 'Jacob', last: 'Lee'},
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio : function() {
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' +
        this.age + ' years old. He likes ' + this.interests[0] +
        ' and ' + this.interests[1] + '.');
    },
    greeting: function(){
        console.log('Hi! I\'m ' + this.name[0] + '.');
    }
};

console.log(person.name.first);
console.log(person['name']['first']);

person['eyes'] = 'brown';
person.farewell = function () {console.log('Bye everybody')};

person.farewell();

function Person(first, last, age, gender, interests){
    this.name = {
        'first': first,
        'last' : last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
      this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      };
      this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
      };
}

var person1 = new Person('Jacob', 'Lee', 32, 'male', ['music', 'skiing']);
person1.greeting();
