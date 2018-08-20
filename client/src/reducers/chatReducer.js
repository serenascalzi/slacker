const initialState = {
	username:'',
	messages1: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'MESSAGE_1':
      return {...state, messages1: [...state.messages1, action.payload]}
    default:
      return state
  }
}
