module.exports = {
  preset: 'ts-jest',
  transform: {
    '\\.ts$': 'ts-jest',
    '\\.graphql$': 'jest-transform-graphql',
  },
}
