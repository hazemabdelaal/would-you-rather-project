import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Question from './Question';

const QuestionsList = ({ match }) => {
  const questions = useSelector(state => state.questions);
  const users = useSelector(state => state.users);
  const authedUser = useSelector(state => state.authedUser);

  const question_id = match.params.question_id;
  const id = question_id.replace(`question_`, '');

  const question = questions[id];
  if (!question) {
    return <Redirect to="/error" />;
  }

  const author = question.author;

  const avatar = users[author].avatarURL;
  const votesOnePercent = Math.trunc(
    (question.optionOne.votes.length * 100) /
      (question.optionOne.votes.length + question.optionTwo.votes.length) || 0
  );
  const votesTwoPercent = Math.trunc(
    (question.optionTwo.votes.length * 100) /
      (question.optionOne.votes.length + question.optionTwo.votes.length) || 0
  );

  return (
    <div>
      {question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser) ? (
        <div className="my-5 py-5 mx-2 sm:w-3/4 sm:mx-auto lg:w-3/5 text-center">
          <p className="text-main text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
            Question Poll
          </p>
          <div className="my-5 border-2 border-main py-5 mx-2 rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5">
            <div className="flex flex-col items-center justify-between">
              <img
                src={avatar}
                alt="logo"
                className="h-20 w-20 rounded-full mb-5"
              />
              <p className="text-xl text-main font-semibold xl:text-2xl">
                Would you rather
              </p>
              <div className="flex flex-col items-center w-full px-10 my-5">
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs capitalize text-main">
                    {question.optionOne.text}
                  </span>
                  <span className="text-xs capitalize text-main">
                    {`Votes: ${question.optionOne.votes.length} / ${
                      Object.keys(users).length
                    }`}
                  </span>
                </div>
                <div className="shadow w-full bg-secondary border-2 border-red">
                  <div
                    className="w-full bg-main py-2 capitalize text-secondary font-bold text-xl xl:text-2xl text-center"
                    style={{ width: `${votesOnePercent}%` }}
                  >
                    {question.optionOne.votes.includes(authedUser)
                      ? `Selected ${votesOnePercent}%`
                      : `${votesOnePercent}%`}
                  </div>
                </div>
              </div>
              <div className="divide-dashed text-center font-bold text-red text-2xl my-2 tracking-wide xl:text-3xl">
                OR
              </div>
              <div className="flex flex-col items-center w-full px-10 my-5">
                <div className="flex justify-between items-center w-full">
                  <span className=" text-xs capitalize text-main">
                    {question.optionTwo.text}
                  </span>
                  <span className="text-xs capitalize text-main">
                    {`Votes: ${question.optionTwo.votes.length} / ${
                      Object.keys(users).length
                    }`}
                  </span>
                </div>
                <div className="shadow w-full bg-secondary border-2 border-red">
                  <div
                    className="w-full bg-main py-2 capitalize text-secondary font-bold text-xl xl:text-2xl text-center"
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
                className="py-2 px-4 bg-main rounded text-secondary text-xl focus:outline-none mx-auto font-semibold mt-5 xl:text-2xl"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Question question={question} unAnswered={true} />
      )}
    </div>
  );
};

export default QuestionsList;
