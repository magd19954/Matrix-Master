function searchAndReplace(s,w1,w2){
    let finalString="";
    let words = s.split(' ');
    for(let i=0;i<words.length;i++){
        if(words[i] === w1){
            words[i] = w2;
        }
        finalString=finalString+" "+words[i];

    }
    return finalString.trim();
}


let sentnce="Hello , this Is Assigniment for Algorithims Course";
let oldWord='Assigniment';
let newWord ='Homwork';

console.log('the old Sentence is : '+ sentnce);
sentnce=searchAndReplace(sentnce,oldWord,newWord);
console.log('the new Sentence is : '+ sentnce);