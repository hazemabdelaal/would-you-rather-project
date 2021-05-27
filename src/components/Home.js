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
    <div>
      <div className="mx-auto mt-5 flex justify-center py-3 relative">
        <div className="text-center mx-auto">
          <button
            className="font-semibold text-2xl text-gray-100 border-2 bg-gray-500 rounded-lg py-1 px-2 hover:bg-gray-600 hover:text-gray-100 ml-20 focus:outline-none focus:bg-gray-600"
            onClick={() => setUnAnswered(false)}
          >
            Answered
          </button>
        </div>
        <div className="text-center mx-auto">
          <button
            className="font-semibold text-2xl text-gray-100 border-2 bg-gray-500 rounded-lg py-1 px-2 hover:bg-gray-600 hover:text-gray-100 mr-10 focus:outline-none focus:bg-gray-600"
            onClick={() => setUnAnswered(true)}
          >
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
