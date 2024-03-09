export const checkValidData = (email, password) => {
  // const isName = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
  //   name
  // );
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  // if(!isName) return "Enter a valid name."
  if (!isEmail) return "Invalid Email.";
  if (!isPassword) return "Invalid Password.";

  return null;
};
