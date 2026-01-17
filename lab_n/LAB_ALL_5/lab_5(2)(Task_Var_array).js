javascript
function array() {
  const privateArray = []; 

  const functObj = (index) => {

    if (typeof index === 'number' && index >= 0 && index < privateArray.length) {
      return privateArray[index];
    }
    return undefined;
  };

  functObj.push = (value) => {
    privateArray.push(value);
  };

  functObj.pop = () => {

    return privateArray.pop();
  };

  return functObj;
}

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 
