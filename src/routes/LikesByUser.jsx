import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Nav/Navigation';
import { API, graphqlOperation } from 'aws-amplify';
import { likesByUser } from '../graphql/queries';
import { CognitoContext } from '../App';
import LoadingPage from '../components/Load/LoadingPage';
import LikesPost from '../components/Likes/LikesPost';
import LikesHeader from '../components/Likes/LikesHeader';

const MyLikesContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyLikesGridWrap = styled.div`
  display: ${(props) => (props.hasPost ? 'grid' : 'none')};
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin-bottom: 60px;
`;

const LikesByUser = () => {
  const { cognitoUser } = useContext(CognitoContext);
  const [myLikesPost, setMyLikesPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPost, setHasPost] = useState(false);

  const fetchPictures = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await API.graphql(
        graphqlOperation(likesByUser, {
          userId: cognitoUser.userId,
          sortDirection: 'DESC',
        }),
      );
      const posts = await data.data.likesByUser.items;
      setMyLikesPost(posts);
      setHasPost(posts.length > 0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [cognitoUser.userId]);

  useEffect(() => {
    fetchPictures();
  }, [fetchPictures]);

  return (
    <>
      <Navigation show={true} navSearch={true} />
      <MyLikesContainer>
        <LikesHeader />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <MyLikesGridWrap hasPost={hasPost}>
            {myLikesPost.map((post) => (
              <LikesPost key={post.id} post={post.picture} next={null} />
            ))}
          </MyLikesGridWrap>
        )}
      </MyLikesContainer>
    </>
  );
};

export default LikesByUser;
