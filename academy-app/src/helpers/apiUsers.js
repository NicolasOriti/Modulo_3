export const createUser = async ({ name, email, password }) => {
  const data = { name, email, password };

  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();

  console.log(resData);
};

export const getUserByEmail = async (email) => {
  const response = await fetch(`http://localhost:3000/users?email=${email}`);
  const [user] = await response.json();

  if (!user) {
    return null;
  }
  return user;
};
