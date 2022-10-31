import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import rules from './images/image-rules.svg'
import CloseIcon from '@mui/icons-material/Close';
import rock from './images/icon-rock.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
import {action} from './store'
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const Game = (props) => {
  const dispatch = useDispatch()
  const game = useSelector((val)=>{
    return(val.data.game)
  })
  const rule = useSelector((val)=>{
    return val.data.rule
  })
  const state = useSelector((val)=>{
    return val.data.state
  })
  const win = useSelector((val)=>{
    return val.data.win
  })
  const draw = useSelector((val)=>{
    return val.data.draw
  })
  const display_win = useSelector((val)=>{
    return val.data.display_win
  })
  const color = useSelector((val)=>{
    return val.data.color
  })
  const image = useSelector((val)=>{
    return val.data.image
  })
  const score = useSelector((val)=>{
    return val.data.score
  })
  useEffect(()=>{
  function player(){
    let data =  Math.floor(Math.random()*3)
    let house = game[data]
     const  card = document.getElementsByClassName("ex")
       card[0].removeAttribute('id')
     
     dispatch(action.changeState())
     if( house ==='rock'){
      dispatch(action.changeColor('red'))
      dispatch(action.changeImage(rock))
     }
     else if( house ==='paper'){
      dispatch(action.changeColor('blue'))
      dispatch(action.changeImage(paper))
     }
     else{
      dispatch(action.changeColor('yellow'))
      dispatch(action.changeImage(scissors))
     }
     if(props.player === house){
      dispatch(action.noWin())
      document.getElementById('me').setAttribute('class','win')
      document.getElementById('player').setAttribute('class','win')
      dispatch(action.changeDraw())
     }
     else{
      dispatch(action.changeDraw('no'))
      if(props.player ==='rock' && house ==='paper' ){
        document.getElementById('me').removeAttribute('class','win')
        document.getElementById('player').setAttribute('class','win')
        dispatch(action.changeScore('-'))
        dispatch(action.win())

      }
      else if((props.player ==='rock' && house ==='scissors')){
        console.log("player wins")
        document.getElementById('player').removeAttribute('class')
        document.getElementById('me').setAttribute('class','win')
        dispatch(action.win('win'))
        dispatch(action.changeScore('+'))
      }
      if(props.player ==='paper' && house ==='scissors' ){
        document.getElementById('me').removeAttribute('class','win')
        document.getElementById('player').setAttribute('class','win')
        dispatch(action.win())
        dispatch(action.changeScore())
      }
      else if((props.player ==='paper' && house ==='rock')){
        document.getElementById('player').removeAttribute('class','win')
        document.getElementById('me').setAttribute('class','win')
        dispatch(action.win('win'))
        dispatch(action.changeScore('+'))
      }
      if(props.player ==='scissors' && house ==='rock' ){
        document.getElementById('me').removeAttribute('class','win')
        document.getElementById('player').setAttribute('class','win')
        dispatch(action.win())
        dispatch(action.changeScore())
      }
      else if((props.player ==='scissors' && house ==='paper')){
        document.getElementById('player').removeAttribute('class','win')
        document.getElementById('me').setAttribute('class','win')
        dispatch(action.win('win'))
        dispatch(action.changeScore('+'))
      }
     }
  }

  setTimeout(player,3000)
  if(score === 0){
    dispatch(action.noWin())
    dispatch(action.changeDraw('no'))
  }
},[])
function Button(){
  dispatch(action.changeState('yes'))
  dispatch(action.noWin())
  dispatch(action.changeDraw('no'))
}
  if(props.player ==='rock'){
    return (
      <div className="game">
          <Header/>
          <section className=""  id="me">
            <p className="five">
            <p className="four">
            <p className="three">
            <span className="text">You Picked</span>
            <p style={{backgroundColor:'red'}} className="two">
            <p className="one"><img src={rock} alt="" /></p>
            </p>
            </p>
            </p>
            </p>
          </section>
          <section  id="player">
            <p className="five">
              <p className="four">
                <p className="three">
                  <span className="text">
                    The House Picked
                  </span>
                  <p style={{backgroundColor:color}} className="two ex " id="card">
                    <p className="one">
                      {state?<img src={image} alt="" />:
                      <span></span>}
                    </p>
                  </p>
                </p>
              </p>
              </p>
          </section>
          { win?<aside style={{display:display_win}} className="side">
            <p>YOU WIN</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside>:<aside style={{display:display_win}} className="side">
          <p>YOU LOSE</p>
            <NavLink onClick={Button}  className='link' to='/'>Play Again</NavLink>
            </aside>}
            {draw && <aside className="side">
            <p>Draw</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside> }
          {score === 0 &&
            <aside className="side">
            <p>GAME OVER</p>
            <span className='link' onClick={()=>{

            }}>Play Again</span>
          </aside>
          }
          { rule &&
          <section className="section">
            <p>RULES <CloseIcon onClick={()=>{
              dispatch(action.changerule())
            }} className="close"/></p>
          <img src={rules} alt="" />
          </section>
          }
          <footer onClick={()=>{
            dispatch(action.changerule())
          }}> 
            Rules
          </footer>
      </div>
    )
  }
   else if(props.player ==='paper'){
    return (
      <div className="game">
           <Header/>
          <section  id="me">
            <p className="five">
            <p className="four">
            <p className="three">
            <span className="text">You Picked</span>
            <p style={{backgroundColor:'blue'}} className="two">
            <p className="one"><img src={paper} alt="" /></p>
            </p>
            </p>
            </p>
            </p>
          </section>
          <section  id="player">
            <p className="five">
              <p className="four">
                <p className="three">
                  <span className="text">
                    The House Picked
                  </span>
                  <p style={{backgroundColor:color}} className="two ex" id="card">
                    <p className="one">
                      {state?<img src={image} alt="" />:
                      <span></span>}
                    </p>
                  </p>
                </p>
              </p>
              </p>
          </section>
          { win?<aside style={{display:display_win}} className="side">
            <p>YOU WIN</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside>:<aside style={{display:display_win}} className="side">
          <p>YOU LOSE</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
            </aside>}
            {draw && <aside className="side">
            <p>Draw</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside> }
          {score === 0 &&
            <aside className="side">
            <p>GAME OVER</p>
            <span className='link' onClick={()=>{

            }}>Play Again</span>
          </aside>
          }
          { rule &&
          <section className="section">
            <p>RULES <CloseIcon onClick={()=>{
              dispatch(action.changerule())
            }} className="close"/></p>
          <img src={rules} alt="" />
          </section>
          }
          <footer onClick={()=>{
            dispatch(action.changerule())
          }}> 
            Rules
          </footer>
      </div>
    )
  }
  else{
    return (
      <div className="game">
          <Header/>
          <section id="me">
            <p className="five">
            <p className="four">
            <p className="three">
            <span className="text">You Picked</span>
            <p style={{backgroundColor:'yellow'}} className="two">
            <p className="one"><img src={scissors} alt="" /></p>
            </p>
            </p>
            </p>
            </p>
          </section>
          <section  id="player">
            <p className="five">
              <p className="four">
                <p className="three">
                  <span className="text">
                    The House Picked
                  </span>
                  <p style={{backgroundColor:color}} className="two ex " id="card">
                    <p className="one">
                      {state?<img src={image} alt="" />:
                      <span></span>}
                    </p>
                  </p>
                </p>
              </p>
              </p>
          </section>
          { win?<aside style={{display:display_win}} className="side">
            <p>YOU WIN</p>
            <NavLink  onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside>:<aside style={{display:display_win}} className="side">
          <p>YOU LOSE</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
            </aside>}
            {draw && <aside className="side">
            <p>Draw</p>
            <NavLink onClick={Button} className='link' to='/'>Play Again</NavLink>
          </aside> }
          {score === 0 &&
            <aside className="side">
            <p>GAME OVER</p>
            <span className='link' onClick={()=>{

            }}>Play Again</span>
          </aside>
          }
          { rule &&
          <section className="section">
            <p>RULES <CloseIcon onClick={()=>{
              dispatch(action.changerule())
            }} className="close"/></p>
          <img src={rules} alt="" />
          </section>
          }
          <footer onClick={()=>{
            dispatch(action.changerule())
          }}> 
            Rules
          </footer>
      </div>
    )
  }
}

export default Game