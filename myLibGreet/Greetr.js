;(function(global, $) {
// ';' in case previous JS does finish without ';'  
    // 'new' an object
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    // hidden within the scope of the IIFE and never directly acccessible
    var supportedLangs = ['en', 'kor'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        kor: 'Annyeong'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        kor: 'Annyeonghaseyo'
    };

    // logger messages
    var logMessage = {
        en: 'Logged in',
        kor: 'Jeobsog'
    };

    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname;
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes this method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessage[this.language]  + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang){
            this.language = lang;
            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loadded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;
    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our ppor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));