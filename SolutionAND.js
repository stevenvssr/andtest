function solution (input) {
  let results = [];
  let onlyNums = input.match(/\d/g);

if (onlyNums === null) {
        throw Error(`No numbers were found! Input given : ${input}`);
   }

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      results.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(onlyNums);

 const final = results.map(result => parseInt(result.join(''), 10)).sort().reverse();
  return final;
}
console.log(solution('236')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // expected Error
