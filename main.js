//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, feed, owner) {
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.feed = feed;
  this.owner = owner;
}

let sadie = new Dog("normal","black",false,undefined,"mason");
let moonshine = new Dog(undefined, undefined, true, undefined, undefined);
let atticus = new Dog(undefined,undefined,undefined,undefined,undefined);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool, pet, feed) {
  this.cool = cool;
  this.pet = function (dog){
    return dog.status = "happy"
  };
  this.feed = function (dog){
    return dog.hungry = false;
  };
}

let mason = new Human(false, "sadie", undefined);
let julia = new Human(true, undefined, "moonshine");

// Instances of Human
// Needed: mason, julia
