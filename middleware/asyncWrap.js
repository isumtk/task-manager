const asyncWrap = (fn) => {
  return async (req, res, next) => {
    try {
      fn(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrap;
