//8.1.1 creating object literals
let fasterShip = {
    'Fuel Type' : 'Turbo Fuel',
    color : 'silver'
  }


//8.1.2 Accessing properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;


//8.1.3 bracket notation
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
       // Write your code below
  let isActive = spaceship['Active Mission'];
  console.log(isActive);



//8.1.4 property assignment
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
       // Write your code below
  spaceship.color = 'glorious gold'
  spaceship.numEngines = Math.random()*10 ;
  delete spaceship['Secret Mission'];



//8.1.5 methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
} 
alienShip.retreat();
alienShip.takeOff();


//8.1.6 nested objects
let spaceship = {
    passengers: [{name:'Rutvik'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0]
  let firstPassenger = spaceship.passengers[0] 

  

//8.1.7 pass by refrence
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  const greenEnergy = (obj) => {
    obj['Fuel Type']= 'avocado oil'
  }
  
  const remotelyDisable = (obj) =>{
    obj['disabled']=true
  }
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  console.log(spaceship)



//8.1.8 looping through objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

          // Write your code below
for(let person in spaceship.crew ){
  console.log(`${person}: ${spaceship.crew[person].name}`)
}
for(let person in spaceship.crew){
  console.log(`${spaceship.crew[person].name}: ${spaceship.crew[person].degree}`)
}

