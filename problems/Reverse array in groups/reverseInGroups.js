'use strict'

function reverseInGroups(arr, n, k) {
    let factor = 1;
    let init = 0;
    let end = (factor*k)-1;

    if(k >= n) {
        let t1 = 0, t2 = n - 1;
        change(t1, t2)
    }

    function change(t1, t2) {
        while(t1 <= t2) {
        if(t1 != t2) {
            let v = arr[t1];
            arr[t1] = arr[t2];
            arr[t2] = v;
        }
        t1++, t2--;
        } 
    }

    for(let i=0; i<n; i++) {
        if(i == factor * k-1) {
        end = (factor*k)-1;
        let t1 = init, t2 = end;
        change(t1, t2);   
        init = i + 1, factor++, i++;       
        }
    }
    
    if(n - end > 2) {
        let t1 = end + 1;
        let t2 = n - 1;
        change(t1, t2);
    }

}

module.exports = reverseInGroups;


