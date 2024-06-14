# hook

## useMemo

如果计算较复杂，可使用该方法缓存依赖结果，与 memo 结合可避免组件不必要的重新渲染

## useRef

- 修改ref 不会重新渲染
- 不要在渲染期间写入或者读取 ref.current
- 可以在 事件处理程序或者 Effect 中读取和写入 ref。
- 通过 ref 操作 DOM （当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为 ref 对象的 current 属性）
    - 自定义组件 ref 使用 forwordRef包含自定义组件
    ``` jsx
    import { forwardRef, useRef } from 'react';

    const MyInput = forwardRef((props, ref) => {
        return <input {...props} ref={ref} />;
    });

    export default function Form() {
        const inputRef = useRef(null);

        function handleClick() {
            inputRef.current.focus();
        }

        return (
            <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                聚焦输入框
            </button>
            </>
        );
    }
    ```




