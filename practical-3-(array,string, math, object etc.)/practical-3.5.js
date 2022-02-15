/**Write a function to sort the given array in ascending order based on
the timeToReachFinishLine.

- Write another function which finds values of winner, firstRunnerUp,
secondRunnerUp and puts the remaining elements into an array
called justParticipants. (you are supposed to declare and
initialize all of these variables together in a single line. you
cannot create more variables other than these 4 variables.)*/

const sprinters = [{
    "name": "James",
    "timeToReachFinishLine": 9.10
    
    },
    {
    "name": "George",
    "timeToReachFinishLine": 9.11
    },
    {
    "name": "Robert",
    "timeToReachFinishLine": 9.25
    },
    {
    "name": "Mary",
    "timeToReachFinishLine": 9.13
    },
    {
    "name": "Patricia",
    "timeToReachFinishLine": 9.14
    },
    {
    "name": "Christopher",
    "timeToReachFinishLine": 10.0
    },
    {
    "name": "Thomas",
    "timeToReachFinishLine": 11.0
    },
    {
    "name": "Anthony",
    "timeToReachFinishLine": 9.0
    },
    {
    "name": "Timothy",
    "timeToReachFinishLine": 19.0
    },
    {
    "name": "Samuel",
    "timeToReachFinishLine": 10.10
    }];
const sortArrayObject = (arr) => {
    
        const ascArray=arr.sort((a,b)=> (a.timeToReachFinishLine > b.timeToReachFinishLine ? 1 : -1))
        return ascArray

}

const sortedData = sortArrayObject(sprinters)
console.log("Sorted Data : "+sortedData)
const [{name :winner},{name :firstRunnerUp},{name :secondRunnerUp},...justParticipants] = sortedData
console.log("Winner :"+winner)
console.log("FirstRunnerUp :"+firstRunnerUp)
console.log("SecondRunnerUp:"+secondRunnerUp)
console.log("Just Participants:"+justParticipants.map(item=>item.name))

//ToDO: justparticipants var doest return 