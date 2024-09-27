import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    User: a
      .model({
        user_id: a.id(),
        email: a.string().required(),
        password: a.string().required(),
        name: a.string().required(),
        surname: a.string().required(),
        nickname: a.string(),
        userType: a.enum(['CHILD', 'ADULT']),
        rules: a.hasMany('Rule', 'rule_id'),
        timetables: a.hasMany('Timetable', 'time_id'),
        pointlog: a.hasMany('PointLog','log_id'),
        family: a.belongsTo('Family', 'user_id'),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("id"),
      ]),

    Family: a
      .model({
        family_id: a.id(),
        name: a.string().required(),
        members: a.hasMany('User', 'user_id'),
        rewardsPunishmentsGifts: a.hasMany('RewardPunishmentGift', 'reward_id'),
      })
      .authorization((allow) => [
        allow.owner(),
        allow.publicApiKey(),
      ]),

    Rule: a
      .model({
        rule_id: a.id(),
        rule: a.string().required(),
        order: a.integer().required(),
        User: a.belongsTo('User', 'rule_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

    Timetable: a
      .model({
        time_id: a.id(),
        timeSlot: a.string().required(),
        order: a.integer().required(),
        activity: a.string().required(),
        User: a.belongsTo('User', 'time_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

      RewardPunishmentGift: a
      .model({
        reward_id: a.id(),
        category: a.enum(['PUNISHMENT', 'REWARD', 'GIFT']),
        order: a.integer().required(),
        description: a.string().required(),
        points: a.integer().required(),
        family: a.belongsTo('Family', 'reward_id'),
        pointLogs: a.hasMany('PointLogRewardPunishmentGift', 'join_log_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),


      PointLog: a
      .model({
        log_id: a.id(),
        date: a.date().required(),
        time: a.time().required(),
        user: a.belongsTo('User', 'log_id'),
        pointLogs: a.hasMany('PointLogRewardPunishmentGift', 'join_log_id'),
        points: a.integer().required(),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

      PointLogRewardPunishmentGift: a
      .model({
        join_log_id: a.id(),
        pointLog: a.belongsTo('PointLog', 'join_log_id'),
        rewardPunishmentGift: a.belongsTo('RewardPunishmentGift', 'join_log_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});