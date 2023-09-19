import Image from 'next/image'
import { PieChart, Pie } from 'recharts'

const p1data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const p1data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];



export default function Home() {
  return (
    <main
      className='bg-gray-200 min-h-screen w-full p-4 grid grid-cols-2 gap-4 grid-rows-2'
    >
      <section className='grid grid-cols-3 gap-4'>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col items-center justify-center gap-2'>
            <p className='text-2xl text-black font-semibold'>Total Accounts Receivable</p>
            <h2 className='text-4xl text-blue-600 font-semibold'>$6,621,280</h2>
          </div>
          <div className='bg-white'>
          <PieChart width={230} height={250}>
            <Pie data={p1data01} dataKey="value" nameKey="name" cx="65%" cy="60%" outerRadius={50} fill="#8884d8" />
            <Pie data={p1data02} dataKey="value" nameKey="name" cx="65%" cy="60%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
          </div>
        </div>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col items-center justify-center gap-2'>
            <p className='text-2xl text-black font-semibold'>Total Accounts Payable</p>
            <h2 className='text-4xl text-red-600 font-semibold'>$1,630,270</h2>
          </div>
          <div className='bg-white'>
          </div>
        </div>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col pt-5 gap-2 items-center'>
            <p className='text-2xl text-black font-semibold'>Equity Ratio</p>
            <h2 className='text-5xl text-blue-900 font-semibold'>75.38 %</h2>
          </div>
          <div className='bg-white'>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-[1fr_2fr] gap-4'>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col pt-5 gap-2 items-center '>
            <p className='text-2xl text-black font-semibold'>Debt Equity</p>
            <h2 className='text-5xl text-blue-900 font-semibold'>1.10 %</h2>
          </div>
          <div className='bg-white'>

          </div>
        </div>
        <div className='bg-white'>
        </div>
      </section>
      <section className='bg-white'>
        
      </section>
      <section className='bg-white'>
        
      </section>
    </main>
  )
}
