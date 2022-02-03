/**Write a function that takes a string as an argument and returns the number of
words in it. (use appropriate built-in string and array functions as and when
required. */

const text="Write a function  that takes a string as an argument and returns the number"
const noOfWords = ((arg)=>{
    let count = 0;
    let isCompleteWord=false
    let i=0;
    while(i < arg.length){
      if (arg[i]==' ' || arg[i]=='\t' || arg[i]=='\n' ) {
          isCompleteWord=false
          //var set false if space or tab or next line encounters
      }
      else if(isCompleteWord == false){
        count++
        //console.log(arg[i])
        isCompleteWord = true
        //var set true if it is start of any word
      }
      i++;
    }
    
   return count;
})
console.log(noOfWords(text))