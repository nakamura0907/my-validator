// export const Validator = new Error("Not Implemented");

export const Validator = {
  email: (emailValue: string) => {
    const email = new RegExp(emailValue);

    new Error("Not Matched");
  },
  tell: () => {
    new Error("Not Matched");
  },
  japaneseAddress: () => {
    new Error("Not Matched");
  },
};

export default Validator;
