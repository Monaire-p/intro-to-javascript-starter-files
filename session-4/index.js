let personA ={
    name: "Ariel",
    age: 20,
    location: "The sea",
    likes: "Using a fork as a comb",
}

let personB ={
    name: "Mulan",
    age: 25,
    location: "China",
    likes: "Saving china",
}

let personC ={
    name: "Cinderella",
    age: 19,
    location: "The palace",
    likes: "Nights out before midnight",
}

let personD ={
    name: "Moana",
    age: 18,
    location: "Motunui",
    likes: "Sailing",
}

const biography = (person) => "Hi, my name is " + person.name + " i am " + person.age + " years old, I live in " + person.location + " and I like "+ person.likes + "." 

console.log(personA.name);
console.log(personB.name);
console.log(personC.name);
console.log(personD.name);

console.log(biography(personA))