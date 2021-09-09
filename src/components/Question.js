import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/index';

const Question = ({ question, unAnswered, history }) => {
  const authedUser = useSelector(state => state.authedUser);
  const users = useSelector(state => state.users);

  const author = question.author;
  const avatar = users[author].avatarURL;

  const [answer, setAnswer] = useState('');

  const handleOptionClick = e => {
    e.preventDefault();

    setAnswer(e.target.value);
  };

  const dispatch = useDispatch();

  const handleOptionSubmit = e => {
    e.preventDefault();

    const info = {
      authedUser,
      answer,
      qid: question.id,
    };

    dispatch(handleAnswerQuestion(info));

    history.push(`/questions/question_${info.qid}`);
  };

  return (
    <div className="my-5 border-2 border-main py-5 mx-2 rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5">
      <div className="flex flex-col items-center justify-between">
        <img
          src={avatar}
          alt="avatar"
          className="h-20 w-20 rounded-full mb-5"
        />
        <p className="text-xl text-main font-semibold xl:text-2xl">
          Would you rather
        </p>
        {unAnswered ? (
          <form
            className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36"
            onSubmit={handleOptionSubmit}
          >
            <button
              className="cursor-pointer w-full bg-main rounded py-2 capitalize text-secondary font-bold text-xl xl:text-2xl"
              value="optionOne"
              onClick={handleOptionClick}
            >
              {question.optionOne.text}
            </button>
            <div className="divide-dashed text-center font-bold text-red text-2xl my-2 tracking-wide xl:text-3xl">
              OR
            </div>
            <button
              className="cursor-pointer w-full bg-main rounded py-2 px-4 capitalize text-secondary font-bold text-xl xl:text-2xl"
              value="optionTwo"
              onClick={handleOptionClick}
            >
              {question.optionTwo.text}
            </button>
            <button
              className="py-2 px-4 bg-red rounded text-secondary text-xl focus:outline-none mx-auto font-semibold mt-5 xl:text-2xl"
              disabled={answer === ''}
            >
              Confirm
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36"
            onSubmit={handleOptionSubmit}
          >
            <div className="w-full bg-main rounded py-2 capitalize text-secondary font-bold text-xl text-center xl:text-2xl">
              {question.optionOne.text}
            </div>
            <div className="divide-dashed text-center font-bold text-red text-2xl my-2 tracking-wide xl:text-3xl">
              OR
            </div>
            <div className="text-center w-full bg-main rounded py-2 px-4 capitalize text-secondary font-bold text-xl xl:text-2xl">
              {question.optionTwo.text}
            </div>
            <Link
              to={`questions/question_${question.id}`}
              className="py-2 px-4 bg-red rounded text-secondary text-xl focus:outline-none mx-auto mt-5 font-semibold xl:text-2xl"
            >
              View Poll
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default withRouter(Question);
