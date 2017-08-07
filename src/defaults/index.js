import persist from './persist';
import detectNetwork from './detectNetwork';
import effect from './effect';
import batch from './batch';
import retry from './retry';
import discard from './discard';

const noop = () => {};
const loggerStub = {
  log: noop,
  warn: noop,
  error: noop,
  debug: noop
};

export default {
  rehydrate: true,
  persist,
  detectNetwork,
  batch,
  effect,
  retry,
  discard,
  logger: loggerStub
};
