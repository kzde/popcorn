// @flow

type State = Array<string>;

type AddAction = { type: 'ADD', movieId: string};
type RemoveAction = { type: 'REMOVE', movieId: string};
type Action = AddAction | RemoveAction;

const favorite = (state:State=[], action:Action):State => {
  switch (action.type) {
    case "ADD":
      return [...state, action.movieId];

    case "REMOVE":
      return state.filter(f => action.movieId !== f);

    default:
      return state;
  }
};

export default favorite;
