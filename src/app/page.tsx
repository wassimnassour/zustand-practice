"use client"
import { useCountStore } from "@/store/useIncrementStore"

export default function Home() {
  const { count, increment } = useCountStore()

  return (
    <main className="flex flex-col flex-1 h-screen w-full ">
      <div className="p-5 text-center border">
        <h1>{count}</h1>
      </div>

      <div className="flex flex-1 ">
        <Counter />
        <div className="h-full border   border-white w-1" />
        <Counter2 />
      </div>
    </main>
  )
}

const Counter = () => {
  const { increment } = useCountStore()
  return (
    <div className="flex flex-1 justify-center  items-center bg-red-400">
      <button onClick={() => increment()}>increment</button>
    </div>
  )
}

const Counter2 = () => {
  const { decrement } = useCountStore()
  return (
    <div className="flex flex-1 justify-center  items-center ">
      <button onClick={() => decrement()}>decrement</button>
    </div>
  )
}
