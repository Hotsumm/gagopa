import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Nav/Navigation';
import { UserContext, CognitoContext, ThemeContext } from '../App';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { lightTheme } from '../theme';
import config from '../aws-exports';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { updateUser } from '../graphql/mutations';

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const EditContainer = styled.div`
  width: 100%;
  padding-top: 70px;
`;

const EditWrap = styled.div`
  width: 750px;
  margin: 0 auto;
  padding: 50px 0;
`;

const EditTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const Edit = styled.div`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.itemBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
`;

const InfoHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AvatarWrap = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 14px;
    color: #1c41ff;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const AvatarImage = styled.div`
  width: 80px;
  height: 80px;

  & img {
    border-radius: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.div`
  font-size: 18px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  & span {
    width: 90px;
    text-align: center;
    font-size: 15px;
  }
`;

const InputWrap = styled.div`
  width: 40%;

  & input {
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    &:focus {
      outline: none;
      border: 1px solid #7038d4;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 45px;
`;

const SubmitButton = styled.button`
  width: 110px;
  height: 47px;
  background: none;
  color: ${(props) => (props.theme === lightTheme ? '#7038d4' : '#fcfcfc')};
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.theme === lightTheme ? '#7038d4' : '#fcfcfc')};
`;

const Cancel = styled.button`
  width: 110px;
  height: 47px;
  color: #ca2121;
  background: none;
  border: 1px solid #ca2121;
  font-size: 14px;
  border-radius: 5px;
`;

const ProfileEdit = () => {
  const { userObj } = useContext(UserContext);
  const { cognitoUser } = useContext(CognitoContext);
  const { theme } = useContext(ThemeContext);

  const [fileName, setFileName] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const [username, setUsername] = useState(
    cognitoUser ? cognitoUser.username : '',
  );
  const [email, setEmail] = useState(cognitoUser ? cognitoUser.email : '');
  const hiddenFileInput = useRef(null);
  const history = useHistory();

  if (userObj === null) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let key;
    if (attachment) {
      Storage.put(fileName, attachment, {
        contentType: attachment.type,
      })
        .then((result) => {
          key = result.key;
          updateProfile(key);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      updateContentProfile();
    }
  };

  const updateContentProfile = async () => {
    const inputData = {
      userId: userObj.attributes.sub,
      username: username,
      email: email,
    };
    await API.graphql(graphqlOperation(updateUser, { input: inputData }))
      .then(() => history.push('/account'))
      .then(() => window.location.reload())
      .catch((error) => alert(error.message));
  };

  const updateProfile = async (key) => {
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    const inputData = {
      userId: userObj.attributes.sub,
      username: username,
      email: email,
      avatar: {
        bucket: 'mytravel-picture13646-dev',
        key: `public/${key}`,
        uri: url,
      },
    };
    await API.graphql(graphqlOperation(updateUser, { input: inputData }))
      .then(() => history.push('/account'))
      .then(() => window.location.reload())
      .catch((error) => alert(error.message));
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const file = files[0];
    setFileName(files[0].name);
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFilePreview(result);
      setAttachment(file);
    };
    reader.readAsDataURL(file);
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleFileClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Navigation show={true} navSearch={true} />
      <EditContainer>
        <EditWrap>
          <EditTitle>프로필 수정</EditTitle>
          <Edit theme={theme}>
            <InfoHeader>
              <AvatarWrap>
                <AvatarImage>
                  {filePreview ? (
                    <img src={filePreview} alt="avatar" />
                  ) : (
                    <img src={cognitoUser.avatar.uri} alt="avatar" />
                  )}
                </AvatarImage>
                <span onClick={handleFileClick}>사진 수정하기</span>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  ref={hiddenFileInput}
                  onChange={(e) => onFileChange(e)}
                  style={{ display: 'none' }}
                />
              </AvatarWrap>
              <UserName>{cognitoUser.username}</UserName>
            </InfoHeader>
            <InputContainer>
              <span>닉네임</span>
              <InputWrap>
                <input
                  name="username"
                  type="username"
                  required
                  value={username}
                  onChange={onChange}
                  placeholder="닉네임"
                />
              </InputWrap>
            </InputContainer>
            <InputContainer>
              <span>이메일</span>
              <InputWrap>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={onChange}
                  placeholder="이메일"
                />
              </InputWrap>
            </InputContainer>
            <ButtonWrap>
              <SubmitButton theme={theme} onClick={onSubmit}>
                제출
              </SubmitButton>
              <Link to="/account">
                <Cancel>취소</Cancel>
              </Link>
            </ButtonWrap>
          </Edit>
        </EditWrap>
      </EditContainer>
    </>
  );
};

export default ProfileEdit;
