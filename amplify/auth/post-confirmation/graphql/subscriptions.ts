/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFamily = /* GraphQL */ `subscription OnCreateFamily(
  $filter: ModelSubscriptionFamilyFilterInput
  $owner: String
) {
  onCreateFamily(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFamilySubscriptionVariables,
  APITypes.OnCreateFamilySubscription
>;
export const onCreatePointLog = /* GraphQL */ `subscription OnCreatePointLog(
  $filter: ModelSubscriptionPointLogFilterInput
  $owner: String
) {
  onCreatePointLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePointLogSubscriptionVariables,
  APITypes.OnCreatePointLogSubscription
>;
export const onCreatePointLogRewardPunishmentGift = /* GraphQL */ `subscription OnCreatePointLogRewardPunishmentGift(
  $filter: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput
  $owner: String
) {
  onCreatePointLogRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePointLogRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnCreatePointLogRewardPunishmentGiftSubscription
>;
export const onCreateRewardPunishmentGift = /* GraphQL */ `subscription OnCreateRewardPunishmentGift(
  $filter: ModelSubscriptionRewardPunishmentGiftFilterInput
  $owner: String
) {
  onCreateRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnCreateRewardPunishmentGiftSubscription
>;
export const onCreateRule = /* GraphQL */ `subscription OnCreateRule(
  $filter: ModelSubscriptionRuleFilterInput
  $owner: String
) {
  onCreateRule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRuleSubscriptionVariables,
  APITypes.OnCreateRuleSubscription
>;
export const onCreateTimetable = /* GraphQL */ `subscription OnCreateTimetable(
  $filter: ModelSubscriptionTimetableFilterInput
  $owner: String
) {
  onCreateTimetable(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTimetableSubscriptionVariables,
  APITypes.OnCreateTimetableSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteFamily = /* GraphQL */ `subscription OnDeleteFamily(
  $filter: ModelSubscriptionFamilyFilterInput
  $owner: String
) {
  onDeleteFamily(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFamilySubscriptionVariables,
  APITypes.OnDeleteFamilySubscription
>;
export const onDeletePointLog = /* GraphQL */ `subscription OnDeletePointLog(
  $filter: ModelSubscriptionPointLogFilterInput
  $owner: String
) {
  onDeletePointLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePointLogSubscriptionVariables,
  APITypes.OnDeletePointLogSubscription
>;
export const onDeletePointLogRewardPunishmentGift = /* GraphQL */ `subscription OnDeletePointLogRewardPunishmentGift(
  $filter: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput
  $owner: String
) {
  onDeletePointLogRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePointLogRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnDeletePointLogRewardPunishmentGiftSubscription
>;
export const onDeleteRewardPunishmentGift = /* GraphQL */ `subscription OnDeleteRewardPunishmentGift(
  $filter: ModelSubscriptionRewardPunishmentGiftFilterInput
  $owner: String
) {
  onDeleteRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnDeleteRewardPunishmentGiftSubscription
>;
export const onDeleteRule = /* GraphQL */ `subscription OnDeleteRule(
  $filter: ModelSubscriptionRuleFilterInput
  $owner: String
) {
  onDeleteRule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRuleSubscriptionVariables,
  APITypes.OnDeleteRuleSubscription
>;
export const onDeleteTimetable = /* GraphQL */ `subscription OnDeleteTimetable(
  $filter: ModelSubscriptionTimetableFilterInput
  $owner: String
) {
  onDeleteTimetable(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTimetableSubscriptionVariables,
  APITypes.OnDeleteTimetableSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateFamily = /* GraphQL */ `subscription OnUpdateFamily(
  $filter: ModelSubscriptionFamilyFilterInput
  $owner: String
) {
  onUpdateFamily(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFamilySubscriptionVariables,
  APITypes.OnUpdateFamilySubscription
>;
export const onUpdatePointLog = /* GraphQL */ `subscription OnUpdatePointLog(
  $filter: ModelSubscriptionPointLogFilterInput
  $owner: String
) {
  onUpdatePointLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePointLogSubscriptionVariables,
  APITypes.OnUpdatePointLogSubscription
>;
export const onUpdatePointLogRewardPunishmentGift = /* GraphQL */ `subscription OnUpdatePointLogRewardPunishmentGift(
  $filter: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput
  $owner: String
) {
  onUpdatePointLogRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePointLogRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnUpdatePointLogRewardPunishmentGiftSubscription
>;
export const onUpdateRewardPunishmentGift = /* GraphQL */ `subscription OnUpdateRewardPunishmentGift(
  $filter: ModelSubscriptionRewardPunishmentGiftFilterInput
  $owner: String
) {
  onUpdateRewardPunishmentGift(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRewardPunishmentGiftSubscriptionVariables,
  APITypes.OnUpdateRewardPunishmentGiftSubscription
>;
export const onUpdateRule = /* GraphQL */ `subscription OnUpdateRule(
  $filter: ModelSubscriptionRuleFilterInput
  $owner: String
) {
  onUpdateRule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRuleSubscriptionVariables,
  APITypes.OnUpdateRuleSubscription
>;
export const onUpdateTimetable = /* GraphQL */ `subscription OnUpdateTimetable(
  $filter: ModelSubscriptionTimetableFilterInput
  $owner: String
) {
  onUpdateTimetable(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTimetableSubscriptionVariables,
  APITypes.OnUpdateTimetableSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
