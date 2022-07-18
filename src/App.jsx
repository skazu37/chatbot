import logo from './logo.svg';
import React from 'react';
import defaultDataset from './detaset';
import './assets/styles/style.css'

export  default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      answers:[],
      chats:[],
      currenId:"init",
      dataset:defaultDataset,
      open:false
    }
  }

  render(){
    return (
      <section className='c-section'> 
        <div className='c-box'>
          {this.state.currenId}
        </div>
      </section>
    );
  }
}
