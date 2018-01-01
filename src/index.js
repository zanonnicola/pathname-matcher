const throwIfMissing = () => {
  throw new Error("Missing parameter");
};

const pathnameMatcher = (str = throwIfMissing(), path = throwIfMissing()) => {
  const regx = new RegExp(`.*/${path}($|W)`);
  return regx.test(str);
};

export default pathnameMatcher;
