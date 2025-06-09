import { useState } from 'react';
import { WrapperFeedback } from './Feedback.styled';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const handleFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() === 0
      ? 0
      : Math.round((feedback.good / countTotalFeedback()) * 100);

  const keys = Object.keys(feedback);
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <WrapperFeedback>
          <FeedbackOptions keys={keys} handleFeedback={handleFeedback} />
        </WrapperFeedback>
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            Total={totalFeedback}
            Positive={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () =>
//     this.countTotalFeedback() === 0
//       ? 0
//       : Math.round((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <WrapperFeedback>
//             <FeedbackOptions keys={keys} handleFeedback={this.handleFeedback} />
//           </WrapperFeedback>
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               Total={totalFeedback}
//               Positive={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
