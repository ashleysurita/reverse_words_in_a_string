function(s) {
    let str = s.trim().split(' ')
    console.log(str)
    
    let reversed = []
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i].length > 0){
            reversed.push(str[i])
        }
    }
    
    return reversed.join(' ')
};
