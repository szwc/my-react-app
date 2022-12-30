import { useState,useEffect } from "react";
import { Button } from "antd";
import { NavLink,redirect,useNavigate } from "react-router-dom";
function EffectCount(props){
    const [count,setCount] = useState(0)
    let navigate = useNavigate();
    useEffect(()=>{
        console.log('effect');
        document.title = `你点击了${count}次`
        const timer = setInterval(() => {
            console.log('定时器');
        }, 2000);
        return ()=>{
            clearInterval(timer)
        }
    },[])
    function toState(){
        console.log('redirect',redirect);
        navigate('/state')
    }
    return (
        <>
            <Button onClick={()=>{setCount(count+1)}}>click</Button>
            <Button onClick={toState}>to state</Button>
            {/* <NavLink to={'/state'}>to state</NavLink> */}
            <div>count is {count}</div>
        </>
    )
}
export default EffectCount