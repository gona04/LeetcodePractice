var kidsWithCandies = function(candies, extraCandies) {
    SortedCandies = candies.sort();
    let arrayBooleans = [];
    let lastCandy = SortedCandies.length-1;
    let firstCandy = 0;
    if((SortedCandies[firstCandy] + extraCandies) >= SortedCandies[(lastCandy)]) {
        arrayBooleans = new Array((lastCandy)).fill(true)
    } else {
    //    arrayBooleans[firstCandy] = false;
        SortedCandies.shift();
        kidsWithCandies(SortedCandies, extraCandies);
    }

    console.log(arrayBooleans)
};

// kidsWithCandies([1,8,3,7,5,6], 10);
kidsWithCandies([2,3,5,1,3], 4);

//SORTED ARRAY == 12335 