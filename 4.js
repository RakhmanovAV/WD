n = 7;
arr = [1,2,1,2,1,3,2];

function sockMerchant (n, arr){
        const pairMap = {};
        let pairs = 0;
        for(let i=0; i<n; i++){
            let color = arr[i];
            if(pairMap[color]){pairs+=1; delete pairMap[color]}
            else{pairMap[color]= true}
            }
        
        return console.log(pairs);

}

sockMerchant (n, arr);