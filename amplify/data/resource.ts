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
        family: a.belongsTo('Family', 'user_id'),
        responsibleFor: a.hasMany('ResponsibleFor', 'resp_for_id'),
        responsibleBy: a.hasMany('ResponsibleFor', 'resp_for_id'),
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

    ResponsibleFor: a
      .model({
        resp_for_id: a.id(),
        adult: a.belongsTo('User', 'user_id'),
        child: a.belongsTo('User', 'user_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

    Rule: a
      .model({
        id: a.id(),
        rule: a.string().required(),
        order: a.integer().required(),
        child: a.belongsTo('User', 'user_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

    Timetable: a
      .model({
        id: a.id(),
        timeSlot: a.string().required(),
        order: a.integer().required(),
        activity: a.string().required(),
        child: a.belongsTo('User', 'user_id'),
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
        family: a.belongsTo('Family', 'family_id'),
      })
      .authorization((allow) => [
        allow.owner(),
      ]),

    PointLog: a
      .model({
        id: a.id(),
        date: a.date().required(),
        time: a.time().required(),
        child: a.belongsTo('User', 'user_id'),
        rewardPunishmentGift: a.belongsTo('RewardPunishmentGift', 'reward_id'),
        points: a.integer().required(),
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