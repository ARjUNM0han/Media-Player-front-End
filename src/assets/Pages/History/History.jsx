import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistory, deleteHistory } from '../../../Services/allApi';

function History() {

  const [history, setHistory] = useState([])
  useEffect(() => {
    document.title = 'Media Player | Watch History'
    allHistory()
  }, [])

  const allHistory = async () => {
    const res = await getHistory()
    setHistory(res.data)
  }

  const delhistory = async (id) => {
    // console.log(id)
    const res = await deleteHistory(id)
    if (res.status === 200) {
      console.log('----------history deleted-------', res)
      allHistory()
    } else {
      console.log(res)
    }
  }

  return (
    <>
      <div className='p-3 '>
        {history.length > 0 ?
          <Table className='border border-white' striped bordered hover responsive>
            <thead className='text-center'>
              <tr>
                <th>Video ID</th>
                <th>Caption</th>
                <th>Video URL</th>
                <th>Date&TIme</th>
                <th></th>
              </tr>
            </thead>

            <tbody className='text-center'>
              {history.map((i) => (
                <tr key={i.id}>
                  <td>{i.videoID}</td>
                  <td>{i.caption}</td>
                  <td>{i.videoURL}</td>
                  <td>{i.dateTime}</td>
                  <td><button className='btn btn-danger' onClick={() => { delhistory(i.id) }}><i className="fa-regular fa-trash-can" /></button></td>
                </tr>
              ))}

            </tbody>
          </Table>
          :
          <h4>no history found</h4>
        }
      </div>
    </>
  )
}

export default History