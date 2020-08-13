function fibonacci(index){
    var fib_0 = 0;
    var fib_1 = 1;
    var arr = []; //0, 1, 1, 2
    arr.push(fib_0);
    arr.push(fib_1);
    if (index == 0){
        return 0;
    }
    else{
        for (var i = 2; i<= index; i++){
            arr.push(arr[i-1] + arr[i-2]);
        }
    }

    return (arr[arr.length -1]);
}
var y = fibonacci(7);
console.log(y);