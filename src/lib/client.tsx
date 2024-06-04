import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/generated/graphql';

const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwudzwtr02yu08umcj6fnolo/master';

const token = process.env.HY_TOKEN;

const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    'authorization': `Bearer ${token}`,
  },
});

export const sdk = getSdk(hygraphClient);
