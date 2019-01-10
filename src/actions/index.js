// @flow
export const addFavorite = (id:string) => ({
  type: 'ADD',
  id
});

export const removeFavorite = (id:string) => ({
  type: 'REMOVE',
  id
})