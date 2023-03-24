function destroyer() {
    // gets numberArr from arguments
    let ans = arguments[0];

    // foreach 1 of arguments converted in array and using values of argument
    Object.values(arguments).forEach((element, index) => {

        // condition if arguments index is different than 0
        if (index > 0 ) {
            let newArr = []

            // foreach 2 of ans
            ans.forEach(arg => {

                // if the element arg of the foreach is different from the
                // element of foreach 1, then push to newArr
                if (arg !== element) {
                    newArr.push(arg);
                }
            })

            // equals ans to newArr so on the next element of foreach 1
            // ans will be updated without the element we just eliminated
            ans = newArr;
        }
    });
    return ans
}

const example_1 = [1, 2, 3, 1, 2, 3];
const example_2 = [1, 2, 3, 5, 1, 2, 3];


console.log(destroyer(example_1, 2, 3));
console.log(destroyer(example_2, 2, 3));