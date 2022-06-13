window.onload = function() {

    console.log (fib(78))
    console.log (fib(12))

}

function fib (num) {
    let len = num - 2;
    let arr = [0,1];
  
    for(let i = 0; i < len; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  
    return arr[arr.length - 1];
    }