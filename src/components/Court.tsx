import { FC, memo, useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

export const Court: FC = memo(() => {
  const [isDraging, setIsDraging] = useState<boolean>(false);
  const [x, setX] = useState<number>(50);
  const [y, setY] = useState<number>(50);
  const [x1, setX1] = useState<number>(50);
  const [y1, setY1] = useState<number>(5);
  const [x2, setX2] = useState<number>(200);
  const [y2, setY2] = useState<number>(300);
  const [x3, setX3] = useState<number>(100);
  const [y3, setY3] = useState<number>(400);
  const [x4, setX4] = useState<number>(220);
  const [y4, setY4] = useState<number>(590);
  const [xBall, setXBall] = useState<number>(28);
  const [yBall, setYBall] = useState<number>(20);
  return (
    <div>
      <div className="bg-gray-100 sm:px-48 px-8 h-screen pt-5">
        <div className='text-gray-400 font-black text-lg text-center mx-24 mb-6'>Server</div>
        <div className='bg-lime-400 h-3/4 border-4 border-white grid grid-rows-4 grid-cols-12'>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-8 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-8 row-span-1 border-4 border-white'></div>
        </div>
        <div className='text-gray-400 font-black text-lg text-center mx-24 mt-6'>Receiver</div>
        <div className='flex justify-between mt-4'>
          <button className='bg-gray-300 p-1.5 rounded-2xl cursor-pointer hover:opacity-80 active:opacity-80' onClick={() => {
            setX1(50);
            setY1(5);
            setX2(200);
            setY2(300);
            setX3(100);
            setY3(400);
            setX4(220);
            setY4(590);
            setXBall(28);
            setYBall(20);
          }}>順クロス</button>
          <button className='bg-gray-300 p-1.5 rounded-2xl cursor-pointer hover:opacity-80 active:opacity-80' onClick={() => {
            setX1(260);
            setY1(5);
            setX2(85);
            setY2(300);
            setX3(60);
            setY3(590);
            setX4(200);
            setY4(550);
            setXBall(240);
            setYBall(20);
          }}>逆クロス</button>
          <button className='bg-gray-300 p-1.5 rounded-2xl cursor-pointer hover:opacity-80 active:opacity-80' onClick={() => {
            setX1(260);
            setY1(5);
            setX2(175);
            setY2(280);
            setX3(165);
            setY3(370);
            setX4(230);
            setY4(640);
            setXBall(240);
            setYBall(20);
          }}>右ストレート</button>
          <button className='bg-gray-300 p-1.5 rounded-2xl cursor-pointer hover:opacity-80 active:opacity-80' onClick={() => {
            setX1(50);
            setY1(5);
            setX2(115);
            setY2(280);
            setX3(100);
            setY3(370);
            setX4(20);
            setY4(640);
            setXBall(28);
            setYBall(20);
          }}>左ストレート</button>
        </div>
      </div>
      <div className='absolute top-10 left-10'>
        <Stage width={window.innerWidth} height={700}>
      <Layer>
        <Rect
          x={x1}
          y={y1}
          width={30}
          height={30}
          draggable
          fill="red"
          shadowBlur={10}
          onDragStart={() => {setIsDraging(true)}}
          onDragEnd={(e) => {
            setIsDraging(false);
            setX(e.target.x());
            setY(e.target.y())
          }}
        />
        <Rect
          x={x2}
          y={y2}
          width={30}
          height={30}
          draggable
          fill="red"
          shadowBlur={10}
          onDragStart={() => {setIsDraging(true)}}
          onDragEnd={(e) => {
            setIsDraging(false);
            setX(e.target.x());
            setY(e.target.y())
          }}
        />
        <Rect
          x={x3}
          y={y3}
          width={30}
          height={30}
          draggable
          fill="red"
          shadowBlur={10}
          onDragStart={() => {setIsDraging(true)}}
          onDragEnd={(e) => {
            setIsDraging(false);
            setX(e.target.x());
            setY(e.target.y())
          }}
        />
        <Rect
          x={x4}
          y={y4}
          width={30}
          height={30}
          draggable
          fill="red"
          shadowBlur={10}
          onDragStart={() => {setIsDraging(true)}}
          onDragEnd={(e) => {
            setIsDraging(false);
            setX(e.target.x());
            setY(e.target.y())
          }}
        />
        <Circle
          x={xBall}
          y={yBall}
          radius={9}
          draggable
          fill="white"
          shadowBlur={10}
          onDragStart={() => {setIsDraging(true)}}
          onDragEnd={(e) => {
            setIsDraging(false);
            setX(e.target.x());
            setY(e.target.y())
          }}
        />
      </Layer>
    </Stage>
      </div>
    </div>
  )
})
