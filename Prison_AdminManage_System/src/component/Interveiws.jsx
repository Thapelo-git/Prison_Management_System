import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa'
const StatusTD=styled.td`
font-weight:bold;
color:${(props)=>(props.type === "Pending" ? "blue":"")}
color:${(props)=>(props.type === "Accepted" ? "green" :"")}
color:${(props)=> (props.type === "Rejected"?"red":"")}
`
const Interveiws = () => {
  const [Interveiws,SetInterviews]=useState([])
  const updateBooking = (bookingNumb, status) => {

    // db.ref('BookEvent').child(bookingNumb).update({Status:status})
    // .then(()=>db.ref('BookEvent').once('value'))
    // .then(snapshot=>snapshot.val())
    // .catch(error => ({
    //   errorCode: error.code,
    //   errorMessage: error.message
    // }));
    
    
  };
  return (
    <div>
          {Interveiws ? (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ marginTop: "10px", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Events</th>
              <th>Fee</th>
              
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Interveiws).map((id,booking) => (

           



  

              <tr key={Interveiws.id}>
                
              <>
              
               
                  <td>{id}</td>
                  <td>{Interveiws[id].events}</td>
                  <td>{Interveiws[id].price}</td>
                  
                  <td>{Interveiws[id].Description}</td>
                  <td>{Interveiws[id].date}</td>
                  <td>{Interveiws[id].time}</td>
                  <td>{Interveiws[id].location}</td>
                  <StatusTD type={Interveiws[id].Status}>{Interveiws[id].Status}</StatusTD>
                  {Interveiws[id].Status === "Pending" ? (
                    <>
                      <td style={{ textAlign: "center" }}>
                        <FaCheckCircle
                          color="green"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => updateBooking(id, "Accepted")}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
 
                        <FaTimesCircle
                          color="red"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => updateBooking(id, "Rejected")}
                        />
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                  
                 
                </>
                 
                 
              </tr>
             
            ))}
          </tbody>
        </Table>):(<h1>Nothing</h1>)}
    </div>
  )
}

export default Interveiws