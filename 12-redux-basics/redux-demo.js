const redux = require('redux')


const storeReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state
}
const store = redux.createStore(storeReducer)
const storeSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(storeSubscriber)

store.dispatch({ type: 'increment' })