function palindrome(str) {

   let sentence = str.replace(/[^0-9a-z]/gi, '').toUpperCase();
  
  const length = sentence.length

  for(let i=0; i<length; i++){
    if(sentence[i]!==sentence[length-i-1]){
      return false;
    }
    
  }
return true;
}

palindrome("eye");
