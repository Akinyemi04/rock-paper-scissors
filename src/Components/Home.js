import Header from "./Header";
import rock from './images/icon-rock.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
import { NavLink } from "react-router-dom";
import rules from './images/image-rules.svg'
import CloseIcon from '@mui/icons-material/Close';
import triangle from './images/bg-triangle.svg'
import { useDispatch, useSelector } from "react-redux";
import { action } from "./store";
const Home = () => {
  const dispatch = useDispatch()
  const rule = useSelector((val)=>{
    return val.data.rule
  })
  return (
    <div className="home">
        <Header/>
        <main>
          <img src={triangle} alt="" />
            <NavLink to='/rock' className="red span"><p><img src={rock} alt="" /></p></NavLink>
            <NavLink to='/paper' className="blue span"><p><img src={paper} alt="" /></p></NavLink>
            <NavLink to='scissors' className="yellow span"><p><img src={scissors} alt="" /></p></NavLink>
        </main>
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

export default Home