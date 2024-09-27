/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFamily = /* GraphQL */ `mutation CreateFamily(
  $condition: ModelFamilyConditionInput
  $input: CreateFamilyInput!
) {
  createFamily(condition: $condition, input: $input) {
    createdAt
    family_id
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    rewardsPunishmentsGifts {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFamilyMutationVariables,
  APITypes.CreateFamilyMutation
>;
export const createPointLog = /* GraphQL */ `mutation CreatePointLog(
  $condition: ModelPointLogConditionInput
  $input: CreatePointLogInput!
) {
  createPointLog(condition: $condition, input: $input) {
    createdAt
    date
    id
    log_id
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    time
    updatedAt
    user {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePointLogMutationVariables,
  APITypes.CreatePointLogMutation
>;
export const createPointLogRewardPunishmentGift = /* GraphQL */ `mutation CreatePointLogRewardPunishmentGift(
  $condition: ModelPointLogRewardPunishmentGiftConditionInput
  $input: CreatePointLogRewardPunishmentGiftInput!
) {
  createPointLogRewardPunishmentGift(condition: $condition, input: $input) {
    createdAt
    id
    join_log_id
    owner
    pointLog {
      createdAt
      date
      id
      log_id
      owner
      points
      time
      updatedAt
      __typename
    }
    rewardPunishmentGift {
      category
      createdAt
      description
      id
      order
      owner
      points
      reward_id
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePointLogRewardPunishmentGiftMutationVariables,
  APITypes.CreatePointLogRewardPunishmentGiftMutation
>;
export const createRewardPunishmentGift = /* GraphQL */ `mutation CreateRewardPunishmentGift(
  $condition: ModelRewardPunishmentGiftConditionInput
  $input: CreateRewardPunishmentGiftInput!
) {
  createRewardPunishmentGift(condition: $condition, input: $input) {
    category
    createdAt
    description
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    order
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    reward_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRewardPunishmentGiftMutationVariables,
  APITypes.CreateRewardPunishmentGiftMutation
>;
export const createRule = /* GraphQL */ `mutation CreateRule(
  $condition: ModelRuleConditionInput
  $input: CreateRuleInput!
) {
  createRule(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    createdAt
    id
    order
    owner
    rule
    rule_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRuleMutationVariables,
  APITypes.CreateRuleMutation
>;
export const createTimetable = /* GraphQL */ `mutation CreateTimetable(
  $condition: ModelTimetableConditionInput
  $input: CreateTimetableInput!
) {
  createTimetable(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    activity
    createdAt
    id
    order
    owner
    timeSlot
    time_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTimetableMutationVariables,
  APITypes.CreateTimetableMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    createdAt
    email
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    name
    nickname
    password
    pointlog {
      nextToken
      __typename
    }
    rules {
      nextToken
      __typename
    }
    surname
    timetables {
      nextToken
      __typename
    }
    updatedAt
    userType
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteFamily = /* GraphQL */ `mutation DeleteFamily(
  $condition: ModelFamilyConditionInput
  $input: DeleteFamilyInput!
) {
  deleteFamily(condition: $condition, input: $input) {
    createdAt
    family_id
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    rewardsPunishmentsGifts {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFamilyMutationVariables,
  APITypes.DeleteFamilyMutation
>;
export const deletePointLog = /* GraphQL */ `mutation DeletePointLog(
  $condition: ModelPointLogConditionInput
  $input: DeletePointLogInput!
) {
  deletePointLog(condition: $condition, input: $input) {
    createdAt
    date
    id
    log_id
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    time
    updatedAt
    user {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePointLogMutationVariables,
  APITypes.DeletePointLogMutation
>;
export const deletePointLogRewardPunishmentGift = /* GraphQL */ `mutation DeletePointLogRewardPunishmentGift(
  $condition: ModelPointLogRewardPunishmentGiftConditionInput
  $input: DeletePointLogRewardPunishmentGiftInput!
) {
  deletePointLogRewardPunishmentGift(condition: $condition, input: $input) {
    createdAt
    id
    join_log_id
    owner
    pointLog {
      createdAt
      date
      id
      log_id
      owner
      points
      time
      updatedAt
      __typename
    }
    rewardPunishmentGift {
      category
      createdAt
      description
      id
      order
      owner
      points
      reward_id
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePointLogRewardPunishmentGiftMutationVariables,
  APITypes.DeletePointLogRewardPunishmentGiftMutation
>;
export const deleteRewardPunishmentGift = /* GraphQL */ `mutation DeleteRewardPunishmentGift(
  $condition: ModelRewardPunishmentGiftConditionInput
  $input: DeleteRewardPunishmentGiftInput!
) {
  deleteRewardPunishmentGift(condition: $condition, input: $input) {
    category
    createdAt
    description
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    order
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    reward_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRewardPunishmentGiftMutationVariables,
  APITypes.DeleteRewardPunishmentGiftMutation
>;
export const deleteRule = /* GraphQL */ `mutation DeleteRule(
  $condition: ModelRuleConditionInput
  $input: DeleteRuleInput!
) {
  deleteRule(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    createdAt
    id
    order
    owner
    rule
    rule_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRuleMutationVariables,
  APITypes.DeleteRuleMutation
>;
export const deleteTimetable = /* GraphQL */ `mutation DeleteTimetable(
  $condition: ModelTimetableConditionInput
  $input: DeleteTimetableInput!
) {
  deleteTimetable(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    activity
    createdAt
    id
    order
    owner
    timeSlot
    time_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTimetableMutationVariables,
  APITypes.DeleteTimetableMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    createdAt
    email
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    name
    nickname
    password
    pointlog {
      nextToken
      __typename
    }
    rules {
      nextToken
      __typename
    }
    surname
    timetables {
      nextToken
      __typename
    }
    updatedAt
    userType
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateFamily = /* GraphQL */ `mutation UpdateFamily(
  $condition: ModelFamilyConditionInput
  $input: UpdateFamilyInput!
) {
  updateFamily(condition: $condition, input: $input) {
    createdAt
    family_id
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    rewardsPunishmentsGifts {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFamilyMutationVariables,
  APITypes.UpdateFamilyMutation
>;
export const updatePointLog = /* GraphQL */ `mutation UpdatePointLog(
  $condition: ModelPointLogConditionInput
  $input: UpdatePointLogInput!
) {
  updatePointLog(condition: $condition, input: $input) {
    createdAt
    date
    id
    log_id
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    time
    updatedAt
    user {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePointLogMutationVariables,
  APITypes.UpdatePointLogMutation
>;
export const updatePointLogRewardPunishmentGift = /* GraphQL */ `mutation UpdatePointLogRewardPunishmentGift(
  $condition: ModelPointLogRewardPunishmentGiftConditionInput
  $input: UpdatePointLogRewardPunishmentGiftInput!
) {
  updatePointLogRewardPunishmentGift(condition: $condition, input: $input) {
    createdAt
    id
    join_log_id
    owner
    pointLog {
      createdAt
      date
      id
      log_id
      owner
      points
      time
      updatedAt
      __typename
    }
    rewardPunishmentGift {
      category
      createdAt
      description
      id
      order
      owner
      points
      reward_id
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePointLogRewardPunishmentGiftMutationVariables,
  APITypes.UpdatePointLogRewardPunishmentGiftMutation
>;
export const updateRewardPunishmentGift = /* GraphQL */ `mutation UpdateRewardPunishmentGift(
  $condition: ModelRewardPunishmentGiftConditionInput
  $input: UpdateRewardPunishmentGiftInput!
) {
  updateRewardPunishmentGift(condition: $condition, input: $input) {
    category
    createdAt
    description
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    order
    owner
    pointLogs {
      nextToken
      __typename
    }
    points
    reward_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRewardPunishmentGiftMutationVariables,
  APITypes.UpdateRewardPunishmentGiftMutation
>;
export const updateRule = /* GraphQL */ `mutation UpdateRule(
  $condition: ModelRuleConditionInput
  $input: UpdateRuleInput!
) {
  updateRule(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    createdAt
    id
    order
    owner
    rule
    rule_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRuleMutationVariables,
  APITypes.UpdateRuleMutation
>;
export const updateTimetable = /* GraphQL */ `mutation UpdateTimetable(
  $condition: ModelTimetableConditionInput
  $input: UpdateTimetableInput!
) {
  updateTimetable(condition: $condition, input: $input) {
    User {
      createdAt
      email
      id
      name
      nickname
      password
      surname
      updatedAt
      userType
      user_id
      __typename
    }
    activity
    createdAt
    id
    order
    owner
    timeSlot
    time_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTimetableMutationVariables,
  APITypes.UpdateTimetableMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    createdAt
    email
    family {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    id
    name
    nickname
    password
    pointlog {
      nextToken
      __typename
    }
    rules {
      nextToken
      __typename
    }
    surname
    timetables {
      nextToken
      __typename
    }
    updatedAt
    userType
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
