import awesomeLint from 'awesome-lint/index.js';
import config from 'awesome-lint/config.js';

const accentUrl = 'https://github.com/mirego/accent';
const doubleLinkIndex = config.findIndex(entry =>
  Array.isArray(entry) && entry[0]?.name === 'remark-lint:double-link');

if (doubleLinkIndex === -1) {
  throw new Error('Cannot find the duplicate-link rule in awesome-lint.');
}

const configuredRules = [...config];
const [doubleLinkRule, [severity, options]] = configuredRules[doubleLinkIndex];

configuredRules[doubleLinkIndex] = [doubleLinkRule, [severity, {
  ...options,
  // Accent belongs in both Business and Collaboration and Developer Tools.
  ignore: [...options.ignore, accentUrl],
}]];

await awesomeLint.report({filename: 'README.md', config: configuredRules});
