const initialState = {
  messages1: [],
	messages2: [],
	messages3: [],
	messages4: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'MESSAGE_1':
      return {...state, messages1: [...state.messages1, action.payload]}
    case 'MESSAGE_2':
      return {...state, messages2: [...state.messages2, action.payload]}
    case 'MESSAGE_3':
      return {...state, messages3: [...state.messages3, action.payload]}
    case 'MESSAGE_4':
      return {...state, messages4: [...state.messages4, action.payload]}
    default:
      return state
  }
}
