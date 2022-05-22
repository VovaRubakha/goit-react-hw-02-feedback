import {Component} from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'

const options = ['good', 'neutral', 'bad']

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
    
  };

  countTotalFeedback() {
    const items = Object.values(this.state);
    const total = items.reduce((acc, item) => (item += acc), 0);
    console.log(items);
    return total;
  }

  countPositiveFeedbackPercentage () {
    const percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );

    return percentage;
  };
    
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <>
      <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleClick}/>
      </Section>
      
      <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage ? positivePercentage : 0}
          />
      </Section> 
    </>);
  }  
};

export default App;