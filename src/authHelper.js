export const calcExpirationTime = ((expiredTime) => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expiredTime).getTime();

  const remainingTime = expirationTime - currentTime;
  return remainingTime;
});

export const retrieveStoredToken = () => {
  const expirationTime = localStorage.getItem("expirationTime");
  const storedToken = localStorage.getItem("token");

  const remainingTime = calcExpirationTime(expirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: expirationTime,
  };
};

