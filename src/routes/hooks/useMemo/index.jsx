import { Button } from 'antd'
import { useMemo, useState } from 'react'

function MemoDemo(props) {
  // const {id} = props
  const [memoId, setMemoId] = useState(0)
  const [count, setCount] = useState(0)

  // useMemo 缓存计算
  // const res = useMemo(()=>{
  //     let startTime = performance.now();
  //     while (performance.now() - startTime < 500) {
  //         // 在 500 毫秒内不执行任何操作以模拟极慢的代码
  //     }

  //     return `id is ${memoId}`
  // },[memoId])

  const getRes = () => {
    let startTime = performance.now()
    while (performance.now() - startTime < 500) {
      // 在 500 毫秒内不执行任何操作以模拟极慢的代码
    }

    return `id is ${memoId}`
  }
  const res = getRes()

  console.log('useMemoDemo')
  const handleMemoIdIncrement = () => {
    setMemoId(memoId + 1)
  }
  const handleMemoIdNoIncrement = () => {
    console.log('handleMemoIdNoIncrement memoId', memoId)
    setMemoId(memoId)
  }
  return (
    <>
      <Button onClick={handleMemoIdIncrement}>memo setId</Button>
      page useMemo res is {res}
      <br />
      <Button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        setCount
      </Button>
      page useMemo count is {count}
    </>
  )
}
export default MemoDemo
