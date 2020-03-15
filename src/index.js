import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);

const { dispatch, getState } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Counter
            counter={getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random() * 10);
                rnd(value)
            }}/>, document.querySelector("#root"));
}

update();
store.subscribe(() => {update()})