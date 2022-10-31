import { getInitColorSchemeScript } from '@mui/system'
import {configureStore, createSlice} from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name:'data',
    initialState:{
        rule:false,        
        score:12,
        game:['rock','paper','scissors'],
        state:false,
        win:false,
        draw:false,
        color:null,
        display_win:'none',
        image:null
    },
    reducers:{
        changerule(state){
            if(state.rule){
                return{
                    ...state,
                    rule:false
                }
            }
            else{
                return{
                    ...state,
                    rule:true
                }
            }
        },
        add(state){
            return{
                ...state,
                score:state.score +1
            }
        },
        subtract(state){
            return{
                ...state,
                score:state.score -1
            }
        },
        changeState(state,action){
            if(action.payload){
                return{
                    ...state,
                    state:false
                }
            }
            else{
                return{
                    ...state,
                    state:true
                }
            }
            
        },
        changeColor(state,action){
            return{
                ...state,
                color:action.payload
            }
        },
        changeImage(state,action){
            return{
                ...state,
                image:action.payload
            }
        },
        changeDraw(state,action){
            if(action.payload ==='no'){
                return{
                    ...state,
                    draw:false
                }
            }
            else{
                return{
                    ...state,
                    draw:true
                }
            }
        },
        win(state,action){
            if (action.payload ==='win'){
                return{
                    ...state,
                    display_win:'block',
                    win:true
                }
            }
            else{
                return{
                    ...state,
                    display_win:'block',
                    win:false
                }
            }
            
        },
        noWin(state){
            return{
                ...state,
                display_win:'none'
            }
        },
        changeScore(state,action){
            if(action.payload ==='+'){
                console.log(action.payload)
                return{
                    ...state,
                    score:state.score +1
                }
            }
            else{
                return{
                    ...state,
                    score:state.score - 1
                }
            }
        }

    }

})
export const action = dataSlice.actions
const store = configureStore({
    reducer:{
        data:dataSlice.reducer
    }
})
export default store