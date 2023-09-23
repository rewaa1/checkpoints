var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];
var total=0;


var unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
var unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

var unique = unique1.concat(unique2);
for (var i = 0, sum = 0; i < unique.length; sum += unique[i++]);

console.log(sum)
