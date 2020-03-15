import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
            <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>INC</button>
            <button id="rnd" className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    );
}

const mapStateToProps = (state) => ({ counter: state })

const mapDispatchToProps = (dispatch) => {
    const { dec, inc, rnd } = bindActionCreators(actions, dispatch)
    return {
    inc,
    dec,
    rnd: () => {
        const value = Math.floor(Math.random() * 10);
        return rnd(value);
    }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);