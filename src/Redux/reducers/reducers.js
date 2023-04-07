
const initialState = {
    notes: [],
};

function rootReducer(state = initialState, action) {
    if (action.type == 'ADD_NOTE') {
        return {
            notes: [
                ...state.notes,
                {
                    title: action.title,
                    content: action.content
                }

            ]
        }
    }
    else if (action.type == 'REMOVE_NOTE') {
        return {
            notes: state.notes.filter((note, index) => {
                return index != action.id
            })
        }
    }
    else if (action.type == 'UPDATE_NOTE') {
        return {
            ...state,
            notes: state.notes.map((note, index) => {
                if (index === action.id) {
                    return {
                        ...note,
                        title: action.title,
                        content: action.content,
                    }
                }
                return note;
            })
        };
    }
    else {
        return state
    }
}

export default rootReducer