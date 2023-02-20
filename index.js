let classGroup = "Arts";
let subjects;

if (classGroup === "Science") {
  subjects = "Physics, Chemistry, Biology, Technical Drawing";
} else if (classGroup === "Social Science") {
  subjects = "Accounting, Commerce, Marketing, Geography";
} else if (classGroup === "Arts") {
  subjects = "Government, Economics, Literature, History";
} else {
  subjects = "English, Mathematics";
}
console.log(subjects);
// "Government, Economics, Literature, History"


//5.
function findNearestPowerOfTwo(num) {
    let powerOfTwo = 1;
    while (powerOfTwo < num) {
      powerOfTwo *= 2;
    }
    if (num - Math.pow(2, Math.floor(Math.log2(num))) < Math.pow(2, Math.ceil(Math.log2(num))) - num) {
      powerOfTwo = Math.pow(2, Math.floor(Math.log2(num)));
    } else {
      powerOfTwo = Math.pow(2, Math.ceil(Math.log2(num)));
    }
    console.log("The number " + powerOfTwo + " is the power of 2 nearest to " + num + ".");
  }
  



