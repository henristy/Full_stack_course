export const AddToFavorites = (azienda) => {
    console.log('added')
    return {type: 'ADD_TO_FAVORITES', payload: azienda}
}

export const RemoveFromFavorites = (azienda) => {
    console.log('deleted')
    return {type: 'REMOVE_FROM_FAVORITES', payload: azienda}
}