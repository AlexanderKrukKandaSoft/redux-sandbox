const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        default:
            return 0;
    }
}

let state = reducer(undefined, {type: 'INC'});
console.log(state);
state = reducer(state, {type: 'INC'});
console.log(state);
