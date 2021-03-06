import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import ListBox from './childComponents/ListBox.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('is easy to use and behaves similarly to mocha/chai',()=>{
    expect(true).toEqual(true);
});

it('imports ListBox state correctly',()=>{
    let wrapper = shallow(<ListBox/>);
    expect(wrapper.instance().state).toHaveProperty('todoList');
});

it("toggle click", ()=>{
    let wrapper = shallow(<ListBox/>);
    wrapper.instance().state.todoList[0].completed = false;
    wrapper.instance().state.toggleClick(0);
    
    expect(wrapper.instance().state.todoList[0].completed).toBe(true);
});

it("clear tasks", ()=>{
    let wrapper = shallow(<ListBox/>);
});

it("add new tasks", ()=>{
    let wrapper = shallow(<ListBox/>);
    let length = wrapper.instance().state.todoList.length;
    wrapper.instance().state.addNewTask("treasure");

    expect(wrapper.instance().state.todoList.length).toBeGreaterThan(length);
});