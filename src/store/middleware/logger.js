const logger = (store) => (next) => action => {
  console.log('__action__', action);
  next(action);
}

export default logger;
