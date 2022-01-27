//7.1.1 functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // code below
  let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
  is2p2();
  console.log(is2p2.name);


//7.1.2 Functions as parameters
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
  
  const checkConsistentOutput = (func,val) =>{
    let t1 = func(val);
    console.log(t1)
    let t2 = func(val);
    console.log(t2)
    if(t1===t2){
      return t1;
    }
    else{
      return 'This function returned inconsistent results'
    }
  }
  checkConsistentOutput(addTwo ,10);
  