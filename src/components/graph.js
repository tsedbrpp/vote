import React,{ PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from "./election.json"
import Female from "./Female";
import Male from "./Male";
import Elephant from "./Elephant";
import Donkey from "./Donkey";
import Black from "./Black";
import White from "./White";
/*const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];*/
const CustomizedDR = (props) => {
    const {
        cx, cy, stroke, payload, value,
    } = props;

    if (payload.party === "REP") {
        return (<Elephant cx={cx} cy={cy}/>
        )

    } else if (payload.party === "DEM")
        return (
            <Donkey cx={cx} cy={cy}/>

        );
    return null;
}
const CustomizedRA = (props) => {
    const {
        cx, cy, stroke, payload, value,
    } = props;

    if (payload.race === "BLACK or AFRICAN AMERICAN") {
        return (<Black cx={cx} cy={cy}/>
        )

    } else if (payload.race === "WHITE")
        return (
            <White cx={cx} cy={cy}/>

        );
    return null;
}

const CustomizedMF = (props) => {
    const {
        cx, cy, stroke, payload, value,
    } = props;
    const expr = 'DR';


            if (payload.gender === "FEMALE") {
                return (<Female cx={cx} cy={cy}/>
                )

            } else if (payload.gender === "MALE")
                return (
                    <Male cx={cx} cy={cy}/>

                );
 return null;
    }


const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        //console.log( payload);

        /*let result =   payload.filter(item =>

            (item[0].county === "WAKE")  && (item[0].id === payload[0].value)

        );*/
   if(!payload) return(<div> got a null</div>)

        return (

            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.race} : ${payload[0].value}`}</p>
                <p className="label">{`${payload[0].payload.gender}`}</p>
                <p className="label">{`${payload[0].payload.party}   `}</p>
                <p className="label">{`${payload[0].payload.type} `}</p>
                <p className="label">{`${payload[0].payload.county} `}</p>

            </div>
        );
    }

    return null;
};

export default class Example extends PureComponent {


   filterByCounty(counties) {
     // console.log("counties");
     // console.log(counties);

       if (counties.length > 0) {
           let array = data.rules;
            let filterCounties = counties.map( item => item.value);
           // console.log(filterCounties)
           let result = array.filter(item =>
               filterCounties.includes(item.county)
           );
        //   console.log(this.props.selected)
         //  console.log(result);
           return result;
       } else return null;
   }

    render() {
       const filtered = this.filterByCounty(this.props.selected);
       if(!filtered) return ( <div> waiting for selection</div>)
       if(this.props.cat == "MF"){
        return (

              <LineChart
                  width={1500}
                  height={800}
                  data={filtered}
                  margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                  }}
              >
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="county"/>
                  <YAxis/>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Legend/>
                  <Line type="monotone" dataKey="diff" stroke="#8884d8" activeDot={{r: 8}} dot={<CustomizedMF/>}/>

                  {/*   <Line type="monotone" dataKey="oc8" stroke="#82ca9d" />*/}
              </LineChart>
        )
       }
       else if(this.props.cat == "DR"){
           return (

               <LineChart
                   width={1500}
                   height={800}
                   data={filtered}
                   margin={{
                       top: 5, right: 30, left: 20, bottom: 5,
                   }}
               >
                   <CartesianGrid strokeDasharray="3 3"/>
                   <XAxis dataKey="county"/>
                   <YAxis/>
                   <Tooltip content={<CustomTooltip/>}/>
                   <Legend/>
                   <Line type="monotone" dataKey="diff" stroke="#8884d8" activeDot={{r: 8}} dot={<CustomizedDR/>}/>

                   {/*   <Line type="monotone" dataKey="oc8" stroke="#82ca9d" />*/}
               </LineChart>
           )
       }

       else if(this.props.cat == "RA"){
           return (

               <LineChart
                   width={800}
                   height={600}
                   data={filtered}
                   margin={{
                       top: 5, right: 30, left: 20, bottom: 5,
                   }}
               >
                   <CartesianGrid strokeDasharray="3 3"/>
                   <XAxis dataKey="county"/>
                   <YAxis/>
                   <Tooltip content={<CustomTooltip/>}/>
                   <Legend/>
                   <Line type="monotone" dataKey="diff" stroke="#8884d8" activeDot={{r: 8}} dot={<CustomizedRA/>}/>

                   {/*   <Line type="monotone" dataKey="oc8" stroke="#82ca9d" />*/}
               </LineChart>
           )
       }
   }

}
