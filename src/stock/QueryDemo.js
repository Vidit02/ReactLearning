import React, { useEffect, useState } from 'react'
import { use52WeekHigh, useGetWeather } from './QueryService'
export const QueryDemo = () => {

  const [data, setdata] = useState([])

  const res = use52WeekHigh("demo1")
  useEffect(() => {
    if (res.status === "success") {
      setdata(res.data.data.body.dataLtpGreater20)
      console.log(res.data.data.body.dataLtpGreater20);
    }
    console.log("Thhis is called from demo ", res)
    // 00set
  }, [res.status])
  // if(res.status === 'success'){
  //   console.log(res.data);
  // }
  return (
    <div>
      <button onClick={() => { res.refetch() }}>52 Week High</button>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Company name</th>
            <th scope="col">NEw52whl</th>
            <th scope="col">Prev52whl</th>
            <th scope="col">PrevClose</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(e => {
             return ( <tr>
                <td>{e.symbol}</td>
                <td>{e.comapnyName}</td>
                <td>{e.new52WHL}</td>
                <td>{e.prev52WHL}</td>
                <td>{e.prevHLDate}</td>
                <td>{e.change}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
