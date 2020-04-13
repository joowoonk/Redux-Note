export const TOGGLE_EDITING = "TOGGLE_EDITING"
export const UPDATE_TITLE = "UPDATE_TITLE"

export function toggleEditing(){
    return {
        type: TOGGLE_EDITING
    };
}

export function updateTitle(title){
    return {
        type: UPDATE_TITLE,
        payload: title // used to be newTitle || props.title
    }
}