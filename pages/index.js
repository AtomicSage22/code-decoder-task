import Image from 'next/image'
import { PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, LineChart } from 'recharts'

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

const barData = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

const data = [
  {
    "day": "05-01",
    "temperature": [
      -1,
      10
    ]
  },
  {
    "day": "05-02",
    "temperature": [
      2,
      15
    ]
  },
  {
    "day": "05-03",
    "temperature": [
      3,
      12
    ]
  },
  {
    "day": "05-04",
    "temperature": [
      4,
      12
    ]
  },
  {
    "day": "05-05",
    "temperature": [
      12,
      16
    ]
  },
  {
    "day": "05-06",
    "temperature": [
      5,
      16
    ]
  },
  {
    "day": "05-07",
    "temperature": [
      3,
      12
    ]
  },
  {
    "day": "05-08",
    "temperature": [
      0,
      8
    ]
  },
  {
    "day": "05-09",
    "temperature": [
      -3,
      5
    ]
  }
]


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
          <PieChart width={290} height={250}>
            <Tooltip />
            <Pie data={p1data01} dataKey="value" nameKey="name" cx="50%" cy="60%" outerRadius={50} fill="#72A956" />
            <Pie data={p1data02} dataKey="value" nameKey="name" cx="50%" cy="60%" innerRadius={60} outerRadius={80} fill="#8D56A9" label />
          </PieChart>
          </div>
        </div>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col items-center justify-center gap-2'>
            <p className='text-2xl text-black font-semibold'>Total Accounts Payable</p>
            <h2 className='text-4xl text-red-600 font-semibold'>$1,630,270</h2>
          </div>
          <div className='bg-white'>
          <PieChart width={290} height={250}>
            <Tooltip />
            <Pie data={p1data01} dataKey="value" nameKey="name" cx="50%" cy="60%" outerRadius={50} fill="#A6A059" />
            <Pie data={p1data02} dataKey="value" nameKey="name" cx="50%" cy="60%" innerRadius={60} outerRadius={80} fill="#595FA6" label />
          </PieChart>
          </div>
        </div>
        <div className='grid grid-rows-[1fr_2fr] gap-4'>
          <div className='bg-white flex flex-col pt-5 gap-2 items-center'>
            <p className='text-2xl text-black font-semibold'>Equity Ratio</p>
            <h2 className='text-5xl text-blue-900 font-semibold'>75.38 %</h2>
          </div>
          <div className='bg-white'>
          <PieChart width={290} height={250}>
            <Tooltip />
            <Pie data={p1data01} dataKey="value" nameKey="name" cx="50%" cy="60%" outerRadius={50} fill="#BE5D41" />
            <Pie data={p1data02} dataKey="value" nameKey="name" cx="50%" cy="60%" innerRadius={60} outerRadius={80} fill="#41A2BE" label />
          </PieChart>
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
            <PieChart width={290} height={250}>
            <Tooltip />
            <Pie data={p1data01} dataKey="value" nameKey="name" cx="50%" cy="60%" outerRadius={50} fill="#B946A4" />
            <Pie data={p1data02} dataKey="value" nameKey="name" cx="50%" cy="60%" innerRadius={60} outerRadius={80} fill="#46B95B" label />
          </PieChart>
          </div>
        </div>
        <div className='bg-white flex items-end pb-2 pr-4'>
        <BarChart width={590} height={430} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#724CB3" />
          <Bar dataKey="uv" fill="#8DB34C" />
        </BarChart>
        </div>
      </section>
      <section className='bg-white flex items-end justify-center'>
      <LineChart width={920} height={430} data={barData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </section>
      <section className='bg-white flex justify-center items-end'>
      <BarChart width={920} height={430} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
      </section>
    </main>
  )
}
