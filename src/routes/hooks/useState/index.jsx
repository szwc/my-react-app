import { useState } from "react";
import { Button } from "antd";
function Count(){
    const [count,setCount] = useState(0)

    return (
        <>
            <Button onClick={()=>{setCount(count+1)}}>click</Button>
            <div>count is {count}</div>
        </>
    )
}
export default Count