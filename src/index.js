// complete the function
function prime (num) {
let res = false; //not a prime number
if(num%2==0){
  //return res;
}
  else if(num%5==0){
    //return res
  }
  else{
  for(let i=0;i<(num/2);i++){
   if(num%i==0){
    res = true;
    break;
   }
  }
}

return res;
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
