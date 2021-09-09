import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const users = useSelector(state => state.users);

  const scores = Object.keys(users).map(id => ({
    id,
    total:
      Object.keys(users[id].answers).length +
      Object.keys(users[id].questions).length,
  }));

  return (
    <div className="my-5 py-5 mx-2 sm:w-3/4 sm:mx-auto lg:w-3/5 text-center">
      <p className="text-main text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
        Top Score
      </p>
      {scores
        .sort((a, b) => b.total - a.total)
        .map(user => (
          <div
            className="my-5 border-2 border-main py-5 mx-2 rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5"
            key={user.id}
          >
            <div className="flex flex-col items-center justify-between">
              <img
                src={users[user.id].avatarURL}
                alt="avatar"
                className="h-20 w-20 rounded-full mb-5"
              />
              <p className="text-xl text-main font-semibold xl:text-2xl">
                {users[user.id].name}
              </p>
              <div className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36 py-2 capitalize text-main font-bold text-xl xl:text-2xl text-center">
                <div>
                  <p>
                    <span className="mr-1">Score:</span>
                    {user.total}
                  </p>
                  <p>
                    <span className="mr-1">Answered:</span>
                    {Object.keys(users[user.id].answers).length}
                  </p>
                  <p>
                    <span className="mr-1">Asked:</span>
                    {users[user.id].questions.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Leaderboard;
