// import * as config from "./configuration.json";
// In modern TypeScript/Angular, importing JSON modules needs specific config or usage.
// Assuming "resolveJsonModule" is true in tsconfig.
import config from "./configuration.json";

export const configuration = {
  application: {
    title: 'GitHub repositories',
  },
  contact: {
    email: ''
  },
  gitHub: {
      apiEndpoint: 'https://api.github.com/',
      gists: 'gists',
      repositories: 'repos',
      users: 'users',
      username: config.username
  },
  route: {
    name: {
      home: 'Home'
    },
    value: {
      home: ''
    }
  },
  version: '1.0.4'
};
