/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFamily = /* GraphQL */ `query GetFamily($id: ID!) {
  getFamily(id: $id) {
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
` as GeneratedQuery<APITypes.GetFamilyQueryVariables, APITypes.GetFamilyQuery>;
export const getPointLog = /* GraphQL */ `query GetPointLog($id: ID!) {
  getPointLog(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPointLogQueryVariables,
  APITypes.GetPointLogQuery
>;
export const getPointLogRewardPunishmentGift = /* GraphQL */ `query GetPointLogRewardPunishmentGift($id: ID!) {
  getPointLogRewardPunishmentGift(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPointLogRewardPunishmentGiftQueryVariables,
  APITypes.GetPointLogRewardPunishmentGiftQuery
>;
export const getRewardPunishmentGift = /* GraphQL */ `query GetRewardPunishmentGift($id: ID!) {
  getRewardPunishmentGift(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRewardPunishmentGiftQueryVariables,
  APITypes.GetRewardPunishmentGiftQuery
>;
export const getRule = /* GraphQL */ `query GetRule($id: ID!) {
  getRule(id: $id) {
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
` as GeneratedQuery<APITypes.GetRuleQueryVariables, APITypes.GetRuleQuery>;
export const getTimetable = /* GraphQL */ `query GetTimetable($id: ID!) {
  getTimetable(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTimetableQueryVariables,
  APITypes.GetTimetableQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listFamilies = /* GraphQL */ `query ListFamilies(
  $filter: ModelFamilyFilterInput
  $limit: Int
  $nextToken: String
) {
  listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      family_id
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFamiliesQueryVariables,
  APITypes.ListFamiliesQuery
>;
export const listPointLogRewardPunishmentGifts = /* GraphQL */ `query ListPointLogRewardPunishmentGifts(
  $filter: ModelPointLogRewardPunishmentGiftFilterInput
  $limit: Int
  $nextToken: String
) {
  listPointLogRewardPunishmentGifts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      id
      join_log_id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPointLogRewardPunishmentGiftsQueryVariables,
  APITypes.ListPointLogRewardPunishmentGiftsQuery
>;
export const listPointLogs = /* GraphQL */ `query ListPointLogs(
  $filter: ModelPointLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listPointLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPointLogsQueryVariables,
  APITypes.ListPointLogsQuery
>;
export const listRewardPunishmentGifts = /* GraphQL */ `query ListRewardPunishmentGifts(
  $filter: ModelRewardPunishmentGiftFilterInput
  $limit: Int
  $nextToken: String
) {
  listRewardPunishmentGifts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRewardPunishmentGiftsQueryVariables,
  APITypes.ListRewardPunishmentGiftsQuery
>;
export const listRules = /* GraphQL */ `query ListRules(
  $filter: ModelRuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      order
      owner
      rule
      rule_id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRulesQueryVariables, APITypes.ListRulesQuery>;
export const listTimetables = /* GraphQL */ `query ListTimetables(
  $filter: ModelTimetableFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimetables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTimetablesQueryVariables,
  APITypes.ListTimetablesQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
