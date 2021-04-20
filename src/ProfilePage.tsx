import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

interface profile {
  login: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: null | string;
  email: null | string;
}

const ProfilePage = () => {
  const [data, setData] = useState<profile | {}>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { username } = useParams() as { username: string };
  const history = useHistory();

  useEffect(() => {
    const getProfileDetail = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if ('message' in data && data.message === 'Not Found') {
          history.push('/404');
          return;
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProfileDetail();
  }, [history, username]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {Object.entries(data as profile).map(([key, value]) => (
        <p>
          {key} === {value}
        </p>
      ))}
    </div>
  );
};

export default ProfilePage;
