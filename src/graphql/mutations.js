/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      authorId
      city
      location
      author {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      instagram
      description
      attachment {
        bucket
        region
        key
        uri
      }
      likes {
        items {
          id
          pictureId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      authorId
      city
      location
      author {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      instagram
      description
      attachment {
        bucket
        region
        key
        uri
      }
      likes {
        items {
          id
          pictureId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      authorId
      city
      location
      author {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      instagram
      description
      attachment {
        bucket
        region
        key
        uri
      }
      likes {
        items {
          id
          pictureId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      pictures {
        items {
          id
          authorId
          city
          location
          instagram
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      avatar {
        bucket
        region
        key
        uri
      }
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userId
      pictures {
        items {
          id
          authorId
          city
          location
          instagram
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      avatar {
        bucket
        region
        key
        uri
      }
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      pictures {
        items {
          id
          authorId
          city
          location
          instagram
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      avatar {
        bucket
        region
        key
        uri
      }
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      city
      tag
      content
      thumbnail {
        bucket
        region
        key
        uri
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      city
      tag
      content
      thumbnail {
        bucket
        region
        key
        uri
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      city
      tag
      content
      thumbnail {
        bucket
        region
        key
        uri
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPictureLike = /* GraphQL */ `
  mutation CreatePictureLike(
    $input: CreatePictureLikeInput!
    $condition: ModelPictureLikeConditionInput
  ) {
    createPictureLike(input: $input, condition: $condition) {
      id
      pictureId
      userId
      user {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      picture {
        id
        authorId
        city
        location
        author {
          userId
          username
          email
          createdAt
          updatedAt
        }
        instagram
        description
        attachment {
          bucket
          region
          key
          uri
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePictureLike = /* GraphQL */ `
  mutation UpdatePictureLike(
    $input: UpdatePictureLikeInput!
    $condition: ModelPictureLikeConditionInput
  ) {
    updatePictureLike(input: $input, condition: $condition) {
      id
      pictureId
      userId
      user {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      picture {
        id
        authorId
        city
        location
        author {
          userId
          username
          email
          createdAt
          updatedAt
        }
        instagram
        description
        attachment {
          bucket
          region
          key
          uri
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePictureLike = /* GraphQL */ `
  mutation DeletePictureLike(
    $input: DeletePictureLikeInput!
    $condition: ModelPictureLikeConditionInput
  ) {
    deletePictureLike(input: $input, condition: $condition) {
      id
      pictureId
      userId
      user {
        userId
        pictures {
          nextToken
        }
        avatar {
          bucket
          region
          key
          uri
        }
        username
        email
        createdAt
        updatedAt
      }
      picture {
        id
        authorId
        city
        location
        author {
          userId
          username
          email
          createdAt
          updatedAt
        }
        instagram
        description
        attachment {
          bucket
          region
          key
          uri
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
