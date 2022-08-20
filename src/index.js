const arr=[2,1,2,5]

function sum(n,k,arr){


}

console.log(sum(4,2))

//problem 2


function triplet (arr){

const result=[]
for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0)
          {
            result.push(arr[i])
            result.push(arr[j])
            result.push(arr[k])
            result.push('|')
            
          }
        }
        }
      }
        return result
          }

console.log(triplet([-1,0,1,2,-1,4]))

//problem 3
function palindrome(str){
    return str === str.split('').reverse().join('')
}

console.log(palindrome('anna'))