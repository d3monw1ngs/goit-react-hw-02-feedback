import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleClick = type => {
    this.setState ((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round(( good / total ) * 100);
  };

  
  render () {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];
    

    return (
      <>
        <Section title="Please Leave Feedback">
        {/* Feedback Component */}
        <FeedbackOptions 
          options={options} 
          onLeaveFeedback={this.handleClick} 
        />
        </Section>

        <Section title="Statistics">
        {/* Statistics Component */}
        {total > 0 ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={positivePercentage} 
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
        </Section>
      </>
    );
  }  
}

