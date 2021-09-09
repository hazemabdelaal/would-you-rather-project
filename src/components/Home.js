import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';

const Home = () => {
  const [unAnswered, setUnAnswered] = useState(true);

  const authedUser = useSelector(state => state.authedUser);
  const questions = useSelector(state => state.questions);
  const users = useSelector(state => state.users);

  const userAvatar = Object.values(users).map(user => user.avatarURL);

  const userAnswers = users[authedUser].answers;
  const answeredQuestions = Object.keys(userAnswers).map(
    question => questions[question]
  );
  const sortedAnsweredQuestions = answeredQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const unAnsweredQuestions = Object.keys(questions)
    .filter(id => !Object.keys(userAnswers).includes(id))
    .map(id => questions[id]);

  const sortedUnAnsweredQuestions = unAnsweredQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <div className="my-5">
      <div className="flex flex-col justify-center items-center text-secondary text-xl sm:flex-row sm:justify-between lg:justify-center lg:text-2xl xl:text-3xl">
        <div className="text-center mx-5 bg-main py-2 w-3/4 sm:w-2/4 md:w-1/4 md:mx-auto rounded-xl mb-5 sm:mb-0 hover:bg-blue hover:text-main">
          <button className="font-bold" onClick={() => setUnAnswered(false)}>
            Answered
          </button>
        </div>
        <div className="text-center mx-5 bg-main py-2 w-3/4 sm:w-2/4 md:w-1/4 md:mx-auto rounded-xl hover:bg-blue hover:text-main">
          <button className="font-bold" onClick={() => setUnAnswered(true)}>
            Un Answered
          </button>
        </div>
      </div>
      {unAnswered ? (
        <div>
          {sortedUnAnsweredQuestions.map(question => (
            <Question
              key={question.id}
              question={question}
              button="Confirm"
              unAnswered={unAnswered}
              avatar={userAvatar}
            />
          ))}
        </div>
      ) : (
        <div>
          {sortedAnsweredQuestions.map(question => (
            <Question
              key={question.id}
              question={question}
              button="View Poll"
              unAnswered={unAnswered}
              avatar={userAvatar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
