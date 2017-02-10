function merge(left,right){
    left_index = 0
    right_index = 0 
    new_arr = []

    while(left_index<left.length && right_index<right.length){
        if(left[left_index]<right[right_index]){
            new_arr.push(left[left_index]);
            left_index+=1;
        }
        else{
            new_arr.push(right[right_index]);
            right_index+=1;
        }
    }
    while(left_index<left.length){
        new_arr.push(left[left_index])
        left_index+=1;
    }
    while(right_index<right.length){
        new_arr.push(right[right_index])
        right_index +=1;
    }
    console.log(new_arr);
    return new_arr
}
function mergesort(arr){
    var mid = Math.floor(arr.length/2); 
    var left = []
    var right = []


    for(var i = 0; i < mid; i++){
        left.push(arr[i])
    }
    for(var i= mid; i <arr.length; i++){
        right.push(arr[i])
    }
        if(arr.length==1){
        return arr
    }
    
    left = mergesort(left);
    right = mergesort(right);
    return merge(left,right)
}

mergesort([2,1,12,423,4,3,4565,756,86,76,7,3453,4534,7,67])