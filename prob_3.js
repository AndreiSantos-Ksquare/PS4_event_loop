// function prob_3 receive and array and a function called condition
function prob_3(arr, cond) {
    // use state as a flag initialized in false
    let state = false;
    let newArr = [];

    arr.forEach( element => {

        // send the element to the condition so if the asnwer is true
        // the state flag change to true
        if (cond(element)) {
            state = true;
        }

        // if state is true we will add the actual element of the forEach to
        // a newArr array
        state ? newArr.push(element) : null;
    })
    return newArr
}

const arr_1 = [1, 2, 3, 4];
const cond_1 = (n) => (n >= 3);

const arr_2 = [1,2,3,7,4];
const cond_2 = (n) => (n > 3);

const arr_3 = [0,1,0,1];
const cond_3 = (n) => (n === 1);

console.log(prob_3(arr_1, cond_1));
console.log(prob_3(arr_2, cond_2));
console.log(prob_3(arr_3, cond_3));