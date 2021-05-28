import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const QuestionsList = ({ match }) => {
  const questions = useSelector(state => state.questions);
  const users = useSelector(state => state.users);
  const authedUser = useSelector(state => state.authedUser);

  const id = match.params.id;

  const question = questions[id];
  const author = question.author;

  const avatar = users[author].avatarURL;
  const votesOnePercent = Math.trunc(
    (question.optionOne.votes.length * 100) / Object.keys(users).length
  );
  const votesTwoPercent = Math.trunc(
    (question.optionTwo.votes.length * 100) / Object.keys(users).length
  );

  return (
    <div className="container w-96 mx-auto p-10 rounded-lg flex flex-col items-center">
      <p className="text-4xl font-bold text-gray-500 mb-4 mr-4">
        Question Poll
      </p>
      <div className="container border-8 border-gray-400 w-96 mt-8 p-10 rounded-lg mr-4">
        <div className="flex flex-col items-center justify-between">
          <img
            src={avatar}
            alt="logo"
            className="h-20 w-20 rounded-full mb-4"
          />
          <p className="text-center text-2xl font-bold text-gray-500">
            Would you rather
          </p>
          <div className="w-full py-1">
            <div className="flex justify-between items-center">
              <span className=" text-xs capitalize text-gray-500">
                {question.optionOne.text}
              </span>
              <span className="text-lg capitalize text-gray-500">
                {`Votes: ${question.optionOne.votes.length} / ${
                  Object.keys(users).length
                }`}
              </span>
            </div>
            <div className="shadow w-full bg-gray-300">
              <div
                className="bg-gray-700 text-lg leading-none py-2 text-center text-white rounded"
                style={{ width: `${votesOnePercent}%` }}
              >
                {question.optionOne.votes.includes(authedUser)
                  ? `Selected ${votesOnePercent}%`
                  : `${votesOnePercent}%`}
              </div>
            </div>
          </div>
          <div className="divide-dashed text-center font-bold text-gray-500 pt-1 text-2xl">
            OR
          </div>
          <div className="w-full py-1 mb-1 flex flex-col">
            <div className="flex justify-between items-center">
              <span className=" text-xs capitalize text-gray-500">
                {question.optionTwo.votes.includes(author)}
              </span>
              <span className="text-lg capitalize text-gray-500">
                {`Votes: ${question.optionTwo.votes.length} / ${
                  Object.keys(users).length
                }`}
              </span>
            </div>
            <div className="shadow w-full bg-gray-300 flex items-center justify-between">
              <div
                className="bg-gray-700 text-lg leading-none py-2 text-center text-white rounded order-first"
                style={{ width: `${votesTwoPercent}%` }}
              >
                {question.optionTwo.votes.includes(authedUser)
                  ? `Selected ${votesTwoPercent}%`
                  : `${votesTwoPercent}%`}
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-2 focus:outline-none"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionsList;
