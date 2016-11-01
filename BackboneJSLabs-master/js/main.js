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

var Person = Backbone.Model.extend({// на жаргоне это класс
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web-developer'
    }
});	
var PersonView = Backbone.View.extend({
	initialize: function () {
		console.log('Создан класс')
	},
tagName: 'li',
render: function () {
this.$el.html( this.model.get('name') + '(' + this.model.get('age') + ') - ' + this.model.get('job')); 	
}	
}); 

 var person = new Person;
 var personView = new PersonView({model: person});