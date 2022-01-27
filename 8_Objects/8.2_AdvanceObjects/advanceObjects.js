//(8.2.1) the this keyword
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  console.log(robot.provideInfo())


//(8.2.2) Arrow functions andd this
const robot = {
    energyLevel: 100,
    checkEnergy(){
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();



//(8.2.3) Privacy
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot._energyLevel = 'high'
  robot.recharge()

  

//(8.2.4) Getters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') 
      {
        return 'My current energy level is ' + this._energyLevel
      } 
      
  else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  }
  console.log(robot.energyLevel);
  

  

//(8.2.5) setters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    
    set numOfSensors(num){
       if(typeof this._numOfSensors === 'number' && num>=0){
        return this._numOfSensors=num;
      }
      else{
        return 'Pass in a number that is greater than or equal to 0'
      }
    }
  };
  robot.numOfSensors=100
  console.log(robot.numOfSensors)
  

  
//(8.2.6) factory functions
const robotFactory = (model , mobile) =>{
    return  {
      model : model,
      mobile : mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
  }
  
  const tinCan = robotFactory('P-500',true)
  tinCan.beep()


//(8.2.7) property value shorthand
function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)



//(8.2.8) destructed assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const {functionality} = robot;
  functionality.beep()



//(8.2.9) built in object methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true})

console.log(newRobot);