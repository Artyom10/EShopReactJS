export const removeFromBag = (removeTargetBag) => {
    return (dispatch, getState) => {
 //make async call to database
 dispatch({ type: 'REMOVE_FROM_BAG', removeTargetBag,})
    }
}