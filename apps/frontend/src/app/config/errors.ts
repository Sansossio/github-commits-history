type ErrorDialog = {
  [key: number]: {
    title: string;
    message: string;
  };
};

export const ErrorsDialog: ErrorDialog = {
  403: {
    title: 'An error has occurred',
    message: 'The github api has returned a forbidden error, consider adding an api key.'
  },
  404: {
    title: 'An error has occurred',
    message: 'User or repository not found'
  }
}