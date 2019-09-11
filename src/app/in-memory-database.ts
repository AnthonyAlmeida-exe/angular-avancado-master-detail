import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService{
  
  createDb(){
    const categories = [
      {id: 1, name:"lazer", description:"Aprendendo Api"},
      {id: 2, name:"beber", description:"Aprendendo Api"},
      {id: 3, name:"jogar bola", description:"Aprendendo Api"},
      {id: 4, name:"feedar", description:"Aprendendo Api"},
      {id: 5, name:"stompar", description:"Aprendendo Api"},
      {id: 6, name:"kiting", description:"Aprendendo Api"},

    ];

  }
}