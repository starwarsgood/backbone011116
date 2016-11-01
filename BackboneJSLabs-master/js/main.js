//var Person = function(config){
//    this.name = config.name;
//    this.age = config.age;
//    this.job = config.job;
//};
//
//Person.prototype.walk = function(){
//  return this.name + ' is walking';
//};
//
//var nick = new Person({name: 'Nick', age:'24',job:'Front-end-developer'});

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        words: 'Hello,World'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'div',
    className: 'TOP',
    id: 'STAN',
    render: function () {
        this.$el.html(this.model.get('words'));
    }
});

var person = new Person;
var personView = new PersonView({model: person});
