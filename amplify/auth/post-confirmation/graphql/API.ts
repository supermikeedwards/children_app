/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Family = {
  __typename: "Family",
  createdAt: string,
  family_id?: string | null,
  id: string,
  members?: ModelUserConnection | null,
  name: string,
  owner?: string | null,
  rewardsPunishmentsGifts?: ModelRewardPunishmentGiftConnection | null,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  createdAt: string,
  email: string,
  family?: Family | null,
  id: string,
  name: string,
  nickname?: string | null,
  password: string,
  pointlog?: ModelPointLogConnection | null,
  rules?: ModelRuleConnection | null,
  surname: string,
  timetables?: ModelTimetableConnection | null,
  updatedAt: string,
  userType?: UserUserType | null,
  user_id?: string | null,
};

export type ModelPointLogConnection = {
  __typename: "ModelPointLogConnection",
  items:  Array<PointLog | null >,
  nextToken?: string | null,
};

export type PointLog = {
  __typename: "PointLog",
  createdAt: string,
  date: string,
  id: string,
  log_id?: string | null,
  owner?: string | null,
  pointLogs?: ModelPointLogRewardPunishmentGiftConnection | null,
  points: number,
  time: string,
  updatedAt: string,
  user?: User | null,
};

export type ModelPointLogRewardPunishmentGiftConnection = {
  __typename: "ModelPointLogRewardPunishmentGiftConnection",
  items:  Array<PointLogRewardPunishmentGift | null >,
  nextToken?: string | null,
};

export type PointLogRewardPunishmentGift = {
  __typename: "PointLogRewardPunishmentGift",
  createdAt: string,
  id: string,
  join_log_id?: string | null,
  owner?: string | null,
  pointLog?: PointLog | null,
  rewardPunishmentGift?: RewardPunishmentGift | null,
  updatedAt: string,
};

export type RewardPunishmentGift = {
  __typename: "RewardPunishmentGift",
  category?: RewardPunishmentGiftCategory | null,
  createdAt: string,
  description: string,
  family?: Family | null,
  id: string,
  order: number,
  owner?: string | null,
  pointLogs?: ModelPointLogRewardPunishmentGiftConnection | null,
  points: number,
  reward_id?: string | null,
  updatedAt: string,
};

export enum RewardPunishmentGiftCategory {
  GIFT = "GIFT",
  PUNISHMENT = "PUNISHMENT",
  REWARD = "REWARD",
}


export type ModelRuleConnection = {
  __typename: "ModelRuleConnection",
  items:  Array<Rule | null >,
  nextToken?: string | null,
};

export type Rule = {
  __typename: "Rule",
  User?: User | null,
  createdAt: string,
  id: string,
  order: number,
  owner?: string | null,
  rule: string,
  rule_id?: string | null,
  updatedAt: string,
};

export type ModelTimetableConnection = {
  __typename: "ModelTimetableConnection",
  items:  Array<Timetable | null >,
  nextToken?: string | null,
};

export type Timetable = {
  __typename: "Timetable",
  User?: User | null,
  activity: string,
  createdAt: string,
  id: string,
  order: number,
  owner?: string | null,
  timeSlot: string,
  time_id?: string | null,
  updatedAt: string,
};

export enum UserUserType {
  ADULT = "ADULT",
  CHILD = "CHILD",
}


export type ModelRewardPunishmentGiftConnection = {
  __typename: "ModelRewardPunishmentGiftConnection",
  items:  Array<RewardPunishmentGift | null >,
  nextToken?: string | null,
};

export type ModelFamilyFilterInput = {
  and?: Array< ModelFamilyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  family_id?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelFamilyFilterInput | null,
  or?: Array< ModelFamilyFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelFamilyConnection = {
  __typename: "ModelFamilyConnection",
  items:  Array<Family | null >,
  nextToken?: string | null,
};

export type ModelPointLogRewardPunishmentGiftFilterInput = {
  and?: Array< ModelPointLogRewardPunishmentGiftFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  join_log_id?: ModelIDInput | null,
  not?: ModelPointLogRewardPunishmentGiftFilterInput | null,
  or?: Array< ModelPointLogRewardPunishmentGiftFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPointLogFilterInput = {
  and?: Array< ModelPointLogFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  log_id?: ModelIDInput | null,
  not?: ModelPointLogFilterInput | null,
  or?: Array< ModelPointLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  time?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelRewardPunishmentGiftFilterInput = {
  and?: Array< ModelRewardPunishmentGiftFilterInput | null > | null,
  category?: ModelRewardPunishmentGiftCategoryInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelRewardPunishmentGiftFilterInput | null,
  or?: Array< ModelRewardPunishmentGiftFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  reward_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRewardPunishmentGiftCategoryInput = {
  eq?: RewardPunishmentGiftCategory | null,
  ne?: RewardPunishmentGiftCategory | null,
};

export type ModelRuleFilterInput = {
  and?: Array< ModelRuleFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelRuleFilterInput | null,
  or?: Array< ModelRuleFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  rule?: ModelStringInput | null,
  rule_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTimetableFilterInput = {
  activity?: ModelStringInput | null,
  and?: Array< ModelTimetableFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTimetableFilterInput | null,
  or?: Array< ModelTimetableFilterInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  timeSlot?: ModelStringInput | null,
  time_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  password?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userType?: ModelUserUserTypeInput | null,
  user_id?: ModelIDInput | null,
};

export type ModelUserUserTypeInput = {
  eq?: UserUserType | null,
  ne?: UserUserType | null,
};

export type ModelFamilyConditionInput = {
  and?: Array< ModelFamilyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  family_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelFamilyConditionInput | null,
  or?: Array< ModelFamilyConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateFamilyInput = {
  family_id?: string | null,
  id?: string | null,
  name: string,
};

export type ModelPointLogConditionInput = {
  and?: Array< ModelPointLogConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  log_id?: ModelIDInput | null,
  not?: ModelPointLogConditionInput | null,
  or?: Array< ModelPointLogConditionInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  time?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePointLogInput = {
  date: string,
  id?: string | null,
  log_id?: string | null,
  points: number,
  time: string,
};

export type ModelPointLogRewardPunishmentGiftConditionInput = {
  and?: Array< ModelPointLogRewardPunishmentGiftConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  join_log_id?: ModelIDInput | null,
  not?: ModelPointLogRewardPunishmentGiftConditionInput | null,
  or?: Array< ModelPointLogRewardPunishmentGiftConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePointLogRewardPunishmentGiftInput = {
  id?: string | null,
  join_log_id?: string | null,
};

export type ModelRewardPunishmentGiftConditionInput = {
  and?: Array< ModelRewardPunishmentGiftConditionInput | null > | null,
  category?: ModelRewardPunishmentGiftCategoryInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelRewardPunishmentGiftConditionInput | null,
  or?: Array< ModelRewardPunishmentGiftConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelIntInput | null,
  reward_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRewardPunishmentGiftInput = {
  category?: RewardPunishmentGiftCategory | null,
  description: string,
  id?: string | null,
  order: number,
  points: number,
  reward_id?: string | null,
};

export type ModelRuleConditionInput = {
  and?: Array< ModelRuleConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelRuleConditionInput | null,
  or?: Array< ModelRuleConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  rule?: ModelStringInput | null,
  rule_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRuleInput = {
  id?: string | null,
  order: number,
  rule: string,
  rule_id?: string | null,
};

export type ModelTimetableConditionInput = {
  activity?: ModelStringInput | null,
  and?: Array< ModelTimetableConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTimetableConditionInput | null,
  or?: Array< ModelTimetableConditionInput | null > | null,
  order?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  timeSlot?: ModelStringInput | null,
  time_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTimetableInput = {
  activity: string,
  id?: string | null,
  order: number,
  timeSlot: string,
  time_id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  password?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userType?: ModelUserUserTypeInput | null,
  user_id?: ModelIDInput | null,
};

export type CreateUserInput = {
  email: string,
  id?: string | null,
  name: string,
  nickname?: string | null,
  password: string,
  surname: string,
  userType?: UserUserType | null,
  user_id?: string | null,
};

export type DeleteFamilyInput = {
  id: string,
};

export type DeletePointLogInput = {
  id: string,
};

export type DeletePointLogRewardPunishmentGiftInput = {
  id: string,
};

export type DeleteRewardPunishmentGiftInput = {
  id: string,
};

export type DeleteRuleInput = {
  id: string,
};

export type DeleteTimetableInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateFamilyInput = {
  family_id?: string | null,
  id: string,
  name?: string | null,
};

export type UpdatePointLogInput = {
  date?: string | null,
  id: string,
  log_id?: string | null,
  points?: number | null,
  time?: string | null,
};

export type UpdatePointLogRewardPunishmentGiftInput = {
  id: string,
  join_log_id?: string | null,
};

export type UpdateRewardPunishmentGiftInput = {
  category?: RewardPunishmentGiftCategory | null,
  description?: string | null,
  id: string,
  order?: number | null,
  points?: number | null,
  reward_id?: string | null,
};

export type UpdateRuleInput = {
  id: string,
  order?: number | null,
  rule?: string | null,
  rule_id?: string | null,
};

export type UpdateTimetableInput = {
  activity?: string | null,
  id: string,
  order?: number | null,
  timeSlot?: string | null,
  time_id?: string | null,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  name?: string | null,
  nickname?: string | null,
  password?: string | null,
  surname?: string | null,
  userType?: UserUserType | null,
  user_id?: string | null,
};

export type ModelSubscriptionFamilyFilterInput = {
  and?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  family_id?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPointLogFilterInput = {
  and?: Array< ModelSubscriptionPointLogFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  log_id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPointLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  time?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPointLogRewardPunishmentGiftFilterInput = {
  and?: Array< ModelSubscriptionPointLogRewardPunishmentGiftFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  join_log_id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPointLogRewardPunishmentGiftFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRewardPunishmentGiftFilterInput = {
  and?: Array< ModelSubscriptionRewardPunishmentGiftFilterInput | null > | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRewardPunishmentGiftFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  reward_id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRuleFilterInput = {
  and?: Array< ModelSubscriptionRuleFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRuleFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  rule?: ModelSubscriptionStringInput | null,
  rule_id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTimetableFilterInput = {
  activity?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimetableFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTimetableFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  owner?: ModelStringInput | null,
  timeSlot?: ModelSubscriptionStringInput | null,
  time_id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  nickname?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  password?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userType?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
};

export type GetFamilyQueryVariables = {
  id: string,
};

export type GetFamilyQuery = {
  getFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetPointLogQueryVariables = {
  id: string,
};

export type GetPointLogQuery = {
  getPointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type GetPointLogRewardPunishmentGiftQueryVariables = {
  id: string,
};

export type GetPointLogRewardPunishmentGiftQuery = {
  getPointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetRewardPunishmentGiftQueryVariables = {
  id: string,
};

export type GetRewardPunishmentGiftQuery = {
  getRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type GetRuleQueryVariables = {
  id: string,
};

export type GetRuleQuery = {
  getRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTimetableQueryVariables = {
  id: string,
};

export type GetTimetableQuery = {
  getTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type ListFamiliesQueryVariables = {
  filter?: ModelFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamiliesQuery = {
  listFamilies?:  {
    __typename: "ModelFamilyConnection",
    items:  Array< {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPointLogRewardPunishmentGiftsQueryVariables = {
  filter?: ModelPointLogRewardPunishmentGiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPointLogRewardPunishmentGiftsQuery = {
  listPointLogRewardPunishmentGifts?:  {
    __typename: "ModelPointLogRewardPunishmentGiftConnection",
    items:  Array< {
      __typename: "PointLogRewardPunishmentGift",
      createdAt: string,
      id: string,
      join_log_id?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPointLogsQueryVariables = {
  filter?: ModelPointLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPointLogsQuery = {
  listPointLogs?:  {
    __typename: "ModelPointLogConnection",
    items:  Array< {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRewardPunishmentGiftsQueryVariables = {
  filter?: ModelRewardPunishmentGiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRewardPunishmentGiftsQuery = {
  listRewardPunishmentGifts?:  {
    __typename: "ModelRewardPunishmentGiftConnection",
    items:  Array< {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRulesQueryVariables = {
  filter?: ModelRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRulesQuery = {
  listRules?:  {
    __typename: "ModelRuleConnection",
    items:  Array< {
      __typename: "Rule",
      createdAt: string,
      id: string,
      order: number,
      owner?: string | null,
      rule: string,
      rule_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTimetablesQueryVariables = {
  filter?: ModelTimetableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimetablesQuery = {
  listTimetables?:  {
    __typename: "ModelTimetableConnection",
    items:  Array< {
      __typename: "Timetable",
      activity: string,
      createdAt: string,
      id: string,
      order: number,
      owner?: string | null,
      timeSlot: string,
      time_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateFamilyMutationVariables = {
  condition?: ModelFamilyConditionInput | null,
  input: CreateFamilyInput,
};

export type CreateFamilyMutation = {
  createFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePointLogMutationVariables = {
  condition?: ModelPointLogConditionInput | null,
  input: CreatePointLogInput,
};

export type CreatePointLogMutation = {
  createPointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type CreatePointLogRewardPunishmentGiftMutationVariables = {
  condition?: ModelPointLogRewardPunishmentGiftConditionInput | null,
  input: CreatePointLogRewardPunishmentGiftInput,
};

export type CreatePointLogRewardPunishmentGiftMutation = {
  createPointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateRewardPunishmentGiftMutationVariables = {
  condition?: ModelRewardPunishmentGiftConditionInput | null,
  input: CreateRewardPunishmentGiftInput,
};

export type CreateRewardPunishmentGiftMutation = {
  createRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateRuleMutationVariables = {
  condition?: ModelRuleConditionInput | null,
  input: CreateRuleInput,
};

export type CreateRuleMutation = {
  createRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTimetableMutationVariables = {
  condition?: ModelTimetableConditionInput | null,
  input: CreateTimetableInput,
};

export type CreateTimetableMutation = {
  createTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type DeleteFamilyMutationVariables = {
  condition?: ModelFamilyConditionInput | null,
  input: DeleteFamilyInput,
};

export type DeleteFamilyMutation = {
  deleteFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePointLogMutationVariables = {
  condition?: ModelPointLogConditionInput | null,
  input: DeletePointLogInput,
};

export type DeletePointLogMutation = {
  deletePointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type DeletePointLogRewardPunishmentGiftMutationVariables = {
  condition?: ModelPointLogRewardPunishmentGiftConditionInput | null,
  input: DeletePointLogRewardPunishmentGiftInput,
};

export type DeletePointLogRewardPunishmentGiftMutation = {
  deletePointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteRewardPunishmentGiftMutationVariables = {
  condition?: ModelRewardPunishmentGiftConditionInput | null,
  input: DeleteRewardPunishmentGiftInput,
};

export type DeleteRewardPunishmentGiftMutation = {
  deleteRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteRuleMutationVariables = {
  condition?: ModelRuleConditionInput | null,
  input: DeleteRuleInput,
};

export type DeleteRuleMutation = {
  deleteRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTimetableMutationVariables = {
  condition?: ModelTimetableConditionInput | null,
  input: DeleteTimetableInput,
};

export type DeleteTimetableMutation = {
  deleteTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type UpdateFamilyMutationVariables = {
  condition?: ModelFamilyConditionInput | null,
  input: UpdateFamilyInput,
};

export type UpdateFamilyMutation = {
  updateFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePointLogMutationVariables = {
  condition?: ModelPointLogConditionInput | null,
  input: UpdatePointLogInput,
};

export type UpdatePointLogMutation = {
  updatePointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type UpdatePointLogRewardPunishmentGiftMutationVariables = {
  condition?: ModelPointLogRewardPunishmentGiftConditionInput | null,
  input: UpdatePointLogRewardPunishmentGiftInput,
};

export type UpdatePointLogRewardPunishmentGiftMutation = {
  updatePointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateRewardPunishmentGiftMutationVariables = {
  condition?: ModelRewardPunishmentGiftConditionInput | null,
  input: UpdateRewardPunishmentGiftInput,
};

export type UpdateRewardPunishmentGiftMutation = {
  updateRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateRuleMutationVariables = {
  condition?: ModelRuleConditionInput | null,
  input: UpdateRuleInput,
};

export type UpdateRuleMutation = {
  updateRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTimetableMutationVariables = {
  condition?: ModelTimetableConditionInput | null,
  input: UpdateTimetableInput,
};

export type UpdateTimetableMutation = {
  updateTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type OnCreateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
  owner?: string | null,
};

export type OnCreateFamilySubscription = {
  onCreateFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePointLogSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogFilterInput | null,
  owner?: string | null,
};

export type OnCreatePointLogSubscription = {
  onCreatePointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type OnCreatePointLogRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnCreatePointLogRewardPunishmentGiftSubscription = {
  onCreatePointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnCreateRewardPunishmentGiftSubscription = {
  onCreateRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
  owner?: string | null,
};

export type OnCreateRuleSubscription = {
  onCreateRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTimetableSubscriptionVariables = {
  filter?: ModelSubscriptionTimetableFilterInput | null,
  owner?: string | null,
};

export type OnCreateTimetableSubscription = {
  onCreateTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type OnDeleteFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFamilySubscription = {
  onDeleteFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePointLogSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogFilterInput | null,
  owner?: string | null,
};

export type OnDeletePointLogSubscription = {
  onDeletePointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type OnDeletePointLogRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnDeletePointLogRewardPunishmentGiftSubscription = {
  onDeletePointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRewardPunishmentGiftSubscription = {
  onDeleteRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRuleSubscription = {
  onDeleteRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimetableSubscriptionVariables = {
  filter?: ModelSubscriptionTimetableFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTimetableSubscription = {
  onDeleteTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};

export type OnUpdateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFamilySubscription = {
  onUpdateFamily?:  {
    __typename: "Family",
    createdAt: string,
    family_id?: string | null,
    id: string,
    members?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?: string | null,
    rewardsPunishmentsGifts?:  {
      __typename: "ModelRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePointLogSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePointLogSubscription = {
  onUpdatePointLog?:  {
    __typename: "PointLog",
    createdAt: string,
    date: string,
    id: string,
    log_id?: string | null,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    time: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePointLogRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionPointLogRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePointLogRewardPunishmentGiftSubscription = {
  onUpdatePointLogRewardPunishmentGift?:  {
    __typename: "PointLogRewardPunishmentGift",
    createdAt: string,
    id: string,
    join_log_id?: string | null,
    owner?: string | null,
    pointLog?:  {
      __typename: "PointLog",
      createdAt: string,
      date: string,
      id: string,
      log_id?: string | null,
      owner?: string | null,
      points: number,
      time: string,
      updatedAt: string,
    } | null,
    rewardPunishmentGift?:  {
      __typename: "RewardPunishmentGift",
      category?: RewardPunishmentGiftCategory | null,
      createdAt: string,
      description: string,
      id: string,
      order: number,
      owner?: string | null,
      points: number,
      reward_id?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRewardPunishmentGiftSubscriptionVariables = {
  filter?: ModelSubscriptionRewardPunishmentGiftFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRewardPunishmentGiftSubscription = {
  onUpdateRewardPunishmentGift?:  {
    __typename: "RewardPunishmentGift",
    category?: RewardPunishmentGiftCategory | null,
    createdAt: string,
    description: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    order: number,
    owner?: string | null,
    pointLogs?:  {
      __typename: "ModelPointLogRewardPunishmentGiftConnection",
      nextToken?: string | null,
    } | null,
    points: number,
    reward_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRuleSubscription = {
  onUpdateRule?:  {
    __typename: "Rule",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    rule: string,
    rule_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimetableSubscriptionVariables = {
  filter?: ModelSubscriptionTimetableFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTimetableSubscription = {
  onUpdateTimetable?:  {
    __typename: "Timetable",
    User?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      nickname?: string | null,
      password: string,
      surname: string,
      updatedAt: string,
      userType?: UserUserType | null,
      user_id?: string | null,
    } | null,
    activity: string,
    createdAt: string,
    id: string,
    order: number,
    owner?: string | null,
    timeSlot: string,
    time_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    family?:  {
      __typename: "Family",
      createdAt: string,
      family_id?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    id: string,
    name: string,
    nickname?: string | null,
    password: string,
    pointlog?:  {
      __typename: "ModelPointLogConnection",
      nextToken?: string | null,
    } | null,
    rules?:  {
      __typename: "ModelRuleConnection",
      nextToken?: string | null,
    } | null,
    surname: string,
    timetables?:  {
      __typename: "ModelTimetableConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userType?: UserUserType | null,
    user_id?: string | null,
  } | null,
};
