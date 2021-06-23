class Human {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  getBio() {
    return `Hi my name is ${this.name}, ${this.age} years old ${this.sex}`;
  }
}

class Student extends Human {
  constructor(name, age, sex, major, gpa) {
    super(name, age, sex);
    this.major = major;
    this.gpa = gpa;
  }
}

class Professional extends Human {
  constructor(name, age, sex, job) {
    super(name, age, sex);
    this.job = job;
  }

  getBio() {
    return `${this.name} is a ${this.age} year old ${this.sex} who is a ${this.job} `;
  }
}

class Expert extends Professional {
  constructor(name, age, sex, job, expYears) {
    super(name, age, sex, job);
    this.expYears = expYears;
  }

  getBio() {
    return `${this.name} is a ${this.sex} ${this.age} years old, who works as a ${this.job} for ${this.expYears} years`;
  }
}

const joe = new Student("Joe Harris", 39, "Male", "Business", 4.0);
const mary = new Professional("Mary J Blidge", 44, "Female", "Artist");
const billy = new Expert("Billy d Kid", 2, "Male", "Robber", 14);
console.log(joe.getBio());
console.log(mary.getBio());
console.log(billy.getBio());
