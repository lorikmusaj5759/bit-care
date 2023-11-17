/* 
 * Filename: sophisticated_code.js
 * Description: This code is a complex simulation of a virtual ecosystem 
 * where predators and preys interact with each other.
 */

// Class for organisms
class Organism {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(food) {
    if (food.energy > 0) {
      this.energy += food.energy;
      console.log(this.name + " ate " + food.name + " and gained " + food.energy + " energy.");
      return true;
    } else {
      console.log(this.name + " cannot eat " + food.name + ".");
      return false;
    }
  }

  move() {
    console.log(this.name + " is moving.");
  }
}

// Class for predators
class Predator extends Organism {
  constructor(name, energy, huntingSkill) {
    super(name, energy);
    this.huntingSkill = huntingSkill;
  }

  hunt(prey) {
    if (prey.energy > 0 && this.huntingSkill > prey.energy) {
      this.energy += prey.energy;
      console.log(this.name + " hunted " + prey.name + " and gained " + prey.energy + " energy.");
      prey.energy = 0;
      return true;
    } else {
      console.log(this.name + " failed to hunt " + prey.name + ".");
      return false;
    }
  }
}

// Class for preys
class Prey extends Organism {
  constructor(name, energy, agility) {
    super(name, energy);
    this.agility = agility;
  }

  escape(predator) {
    if (this.agility > predator.huntingSkill) {
      console.log(this.name + " escaped from " + predator.name + ".");
      return true;
    } else {
      console.log(this.name + " failed to escape from " + predator.name + ".");
      return false;
    }
  }
}

// Simulate the ecosystem
let lion = new Predator("Lion", 100, 80);
let gazelle = new Prey("Gazelle", 50, 90);
let grass = new Organism("Grass", 5);

for (let i = 0; i < 10; i++) {
  console.log("==== Iteration " + (i+1) + " ====");
  lion.move();
  gazelle.move();

  if (lion.hunt(gazelle)) {
    gazelle.escape(lion);
  } else {
    gazelle.move();
  }

  lion.move();
  lion.eat(grass);
  gazelle.energy *= 0.9;
  grass.energy *= 1.1;
}
