const initialState = {
  categories: [
    {
      name: 'Headphones',
      slug: 'headphones',
    },
    {
      name: 'Speakers',
      slug: 'speakers',
    },
    {
      name: 'Earphones',
      slug: 'earphones',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
