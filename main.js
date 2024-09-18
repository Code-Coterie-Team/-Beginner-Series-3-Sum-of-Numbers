function getSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let arraySum = [];
    for (; min <= max; min++) {
        arraySum.push(min);
    }
    const sum = arraySum.reduce(getSum, 0);
    function getSum(total, num) {
        return total + Math.round(num);
    }
    return sum;
}
const sum = getSum(-5, 2);
console.log(sum);