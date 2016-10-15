export interface IHero {
  name: string;
  description: string;
}

// export default class Hero implements IHero {
//
//   name: string;
//   description: string;
//
//   constructor(name: string, description: string) {
//     this.name = name;
//     this.description = description;
//   }
// }

// public - anyone can see the thing
// protected - only the children of the class can see the thing
// private - only the class can see the thing
export default class Hero implements IHero {

  constructor(public name: string, public description: string) { }
}
