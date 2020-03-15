import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => { store.dispatch(inc())});
document.querySelector('#dec').addEventListener('click', () => { store.dispatch(dec())});
document.querySelector('#rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    store.dispatch(rnd(payload)
    )});

const update = () => {
    document.querySelector('#counter').innerHTML = store.getState()
}

store.subscribe(() => {update()})