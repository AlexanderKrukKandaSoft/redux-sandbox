import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.payload;
        default:
            return 0;
    }
}

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => { store.dispatch({type: 'INC'})});
document.querySelector('#dec').addEventListener('click', () => { store.dispatch({type: 'DEC'})});
document.querySelector('#rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    store.dispatch({
        type: 'RND',
        payload
    }
    )});

const update = () => {
    document.querySelector('#counter').innerHTML = store.getState()
}

store.subscribe(() => {update()})