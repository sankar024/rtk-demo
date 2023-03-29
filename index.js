const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUser = require('./features/user/userSlice').fetchUser




console.log("Initial State", store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.reOrdered(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.reOrdered(3))

// unsubscribe()