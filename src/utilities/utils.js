const RandSet = (n, m, k) => {
    // Generate a set of 'k' of unique integers within range of ['n', 'm']
    var arr = [];
    while(arr.length < k){
        const min = Math.ceil(n);
        const max = Math.floor(m);
        var r = Math.floor(Math.random() * (max - min + 1)) + min;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

export {RandSet}