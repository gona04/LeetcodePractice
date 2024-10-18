var canPlaceFlowers = function (flowerbed, n) {
    let availableSpots = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let prev = (i === 0) ? 0 : flowerbed[i - 1];
            let next = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];
            if (prev === 0 && next === 0) {
                availableSpots++;
                flowerbed[i] = 1; // Marking the spot as planted
            }
        }
    }
    return availableSpots >= n;
};


console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2));
console.log(canPlaceFlowers([0,0,1,0,1,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,1],2));