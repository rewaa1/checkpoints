function insert(set){

    for( var i = set[1] ; i < set.length;i++){
      for(var j = i; j > 0;j--){
        if(set[j] < set[j - 1]){
          const vv = set[j];
          set[j]=set[j - 1];
          set[j - 1]= vv;
        } else {
          break;  
        }
    
      }
    }
    
    return set;
}
    console.log(insert([2,3,4,4,5,3,22,3,44,5,4,2,2,45,56665,32,2,1,23,34,45,5,5]))                            