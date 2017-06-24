function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.legs = 4;
  this.isAGoodDog = true;
  this.says();
}
Dog.prototype.says = function(bark){
  console.log(bark);
};

var demi = new Dog('Demi', 'border collie');
demi.legs = 3;

var parker = new Dog('Parker', 'english shepard');
parker.says('woof');
