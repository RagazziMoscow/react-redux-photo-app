/*eslint-disable */
export const ping = (store) => {
    return (next) => {
      return (action) => {
        console.log(`Событие ${action.type}, данные события: ${action.payload}`);
        return next(action);
      };
    };
};
/*eslint-enable*/