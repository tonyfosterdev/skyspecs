import { getGreeting } from './service';

export const schema = `
  type Query {
    hello: String
  }
`;

export const resolver = {
  hello: getGreeting,
};
