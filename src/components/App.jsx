import React, { Component } from 'react';
import Section from './section/Section';
import FeedBackOptions from './feedback-options/FeedBackOptions';
import Statistics from './feedback-options/Statistics';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

    


  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedBackOptions options={this.state}></FeedBackOptions>
          <Statistics></Statistics>
        </Section>
      </>
    );
  }

  
}

export default App;
