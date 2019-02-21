function sortArrayInDescendingOrder(arr) { 
    for( i = 0; i < arr.length; i++ ){

        if(arr.indexOf(i) < 0){
        return "no negatives";
        }
     return arr.sort((a,b) => b - a)
    

        
    }
   
}

console.log(sortArrayInDescendingOrder(arr = [100, 3, 77, 45, 100]));