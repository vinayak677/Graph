import './App.css';
import {ResponsiveContainer,LineChart, Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip, AreaChart, Area, BarChart, Bar} from "recharts";

const ddata = [
  {
    name:'India',
    students:113,
    fees:100
  },
  {
    name:'Australia',
    students:101,
    fees:160
  },
  {
    name:'Germany',
    students:178,
    fees:140
  },
  {
    name:'Canada',
    students:128,
    fees:50
  },
  {
    name:'Belgium',
    students:120,
    fees:40
  },
  {
    name:'France',
    students:100,
    fees:80
  }
]
function App() {
  return (
   <>
   <h1 className='chart-line'>Line chart</h1>
   <ResponsiveContainer width='100%' aspect={3}> 
     <LineChart data={ddata} width={500} height={300} margin={{top:5,right:250,left:20,bottom:5}}>
       <CartesianGrid strokeDasharray='3 3'/>
       <XAxis dataKey='name' tickFormatter={(value)=>value + ' .'}/>
       <YAxis/>
       <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
       <Legend/>
       <Line type='monotone' dataKey='students' stroke='red'activeDot={{r:8}}/>
       <Line type='monotone' dataKey='fees'stroke='green' activeDot={{r:8}}/>

     </LineChart>
   </ResponsiveContainer>

   <h1 className='area-chart'>Area chart</h1>
   <ResponsiveContainer width='100%' aspect={3}> 
     <AreaChart data={ddata} width={500} height={300} margin={{top:5,right:250,left:20,bottom:5}}>
       <CartesianGrid strokeDasharray='3 3'/>
       <XAxis dataKey='name' />
       <YAxis/>
       <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
       <Legend/>
       <Area type='monotone' dataKey='students' stroke='red'activeDot={{r:8}}/>
       <Area type='monotone' dataKey='fees' stroke='green'activeDot={{r:8}}/>


     </AreaChart>
   </ResponsiveContainer> 

<h1 className='bar-chart'>Bar chart</h1>
   <ResponsiveContainer width='100%' aspect={3}> 
     <BarChart data={ddata} width={500} height={300} margin={{top:5,right:250,left:20,bottom:5}}>
       <CartesianGrid strokeDasharray='3 3'/>
       <XAxis dataKey='name' />
       <YAxis/>
       <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
       <Legend/>
       <Bar type='monotone' dataKey='students' fill='green'/>
       <Bar type='monotone' dataKey='fees' fill='blue'/>


     </BarChart>
   </ResponsiveContainer>
   </>

   
  );
}

export default App;
