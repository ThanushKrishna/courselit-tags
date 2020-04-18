const graphql = require("graphql");

const { paypal, stripe, paytm } = require("../../config/constants.js");

const paymentMethodType = new graphql.GraphQLEnumType({
  name: "PaymentMethod",
  values: {
    STRIPE: { value: stripe },
    PAYPAL: { value: paypal },
    PAYTM: { value: paytm }
  }
});

const siteType = new graphql.GraphQLObjectType({
  name: "SiteInfo",
  fields: {
    title: { type: graphql.GraphQLString },
    subtitle: { type: graphql.GraphQLString },
    logopath: { type: graphql.GraphQLString },
    currencyUnit: { type: graphql.GraphQLString },
    currencyISOCode: { type: graphql.GraphQLString },
    copyrightText: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    paymentMethod: { type: paymentMethodType },
    stripePublishableKey: { type: graphql.GraphQLString },
    themePrimaryColor: { type: graphql.GraphQLString },
    themeSecondaryColor: { type: graphql.GraphQLString },
    codeInjectionHead: { type: graphql.GraphQLString }
  }
});

const siteAdminType = new graphql.GraphQLObjectType({
  name: "SiteInfoAdmin",
  fields: {
    title: { type: graphql.GraphQLString },
    subtitle: { type: graphql.GraphQLString },
    logopath: { type: graphql.GraphQLString },
    currencyUnit: { type: graphql.GraphQLString },
    currencyISOCode: { type: graphql.GraphQLString },
    copyrightText: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    paymentMethod: { type: paymentMethodType },
    stripePublishableKey: { type: graphql.GraphQLString },
    themePrimaryColor: { type: graphql.GraphQLString },
    themeSecondaryColor: { type: graphql.GraphQLString },
    codeInjectionHead: { type: graphql.GraphQLString },
    stripeSecret: { type: graphql.GraphQLString },
    paytmSecret: { type: graphql.GraphQLString },
    paypalSecret: { type: graphql.GraphQLString }
  }
});

const siteUpdateType = new graphql.GraphQLInputObjectType({
  name: "SiteInfoUpdateInput",
  fields: {
    title: { type: graphql.GraphQLString },
    subtitle: { type: graphql.GraphQLString },
    logopath: { type: graphql.GraphQLString },
    currencyUnit: { type: graphql.GraphQLString },
    currencyISOCode: { type: graphql.GraphQLString },
    copyrightText: { type: graphql.GraphQLString },
    about: { type: graphql.GraphQLString },
    paymentMethod: { type: paymentMethodType },
    stripePublishableKey: { type: graphql.GraphQLString },
    themePrimaryColor: { type: graphql.GraphQLString },
    themeSecondaryColor: { type: graphql.GraphQLString },
    codeInjectionHead: { type: graphql.GraphQLString },
    stripeSecret: { type: graphql.GraphQLString },
    paytmSecret: { type: graphql.GraphQLString },
    paypalSecret: { type: graphql.GraphQLString }
  }
});

module.exports = {
  siteType,
  siteAdminType,
  siteUpdateType
};
