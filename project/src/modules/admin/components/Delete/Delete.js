import React from 'react'

const Delete = (props) => {

  

  return (
    <>
    <div id='delModal' className='modal fade'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"><h2>Delete !!!</h2></div>
          <div className="modal-body">
            <p>Are You Sure Want to Delete <b>{props.info ? props.info.name : ''}</b> !</p>
          </div>
          <div className="modal-footer">
            <button className='btn btn-danger' data-dismiss="modal" onClick={props.confDelete}>Delete</button>
            <button className='btn btn-info' data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Delete