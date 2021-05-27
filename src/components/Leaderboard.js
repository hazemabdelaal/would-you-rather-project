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
    <div className="container w-80 mx-auto p-10 rounded-lg flex flex-col items-center">
      <p className="text-4xl font-bold text-gray-500 mb-4">Top Score</p>
      {scores
        .sort((a, b) => b.total - a.total)
        .map(user => (
          <div
            className="flex flex-col items-center justify-center border-4 border-gray-400 w-60 p-4 rounded-lg my-2"
            key={user.id}
          >
            <img
              src={users[user.id].avatarURL}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
            <p className="text-center text-3xl font-bold text-gray-500 mb-4">
              {users[user.id].name}
            </p>
            <div className="container border-4 border-gray-400 rounded-lg text-xl text-gray-500 py-1 px-2 font-semibold tracking-wide">
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
        ))}
    </div>
  );
};

export default Leaderboard;
