import React, {useState, useEffect} from 'react'
import CategoryService from '../../../../services/CategoryService'
import { useNavigate } from 'react-router-dom'
import Delete from '../../components/Delete/Delete';

const CategoryList = () => {
  let [allCate, setAllCate] = useState([]);
  let [cate, setCate] = useState();
  let navigate = useNavigate();
  useEffect(()=>{
    let getAllCategory = async () =>{
      let result = await CategoryService.GetAll();
      setAllCate(result.info);
    }
    getAllCategory();
    
  }, [])


  let askDelete = (obj)=>{
    setCate(obj);
  }
  let confDelete = async ()=>{
    let result =await CategoryService.deleteCate(cate)
    setAllCate((arr)=>{
      return arr.filter(val=>val != cate);
    })
    
  }

  let askEdit = (obj)=>{
    // console.log(obj);
    let id = obj._id;
    navigate(`/admin/category/edit/${id}`);
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {
              allCate.length ? (
            
            <table className='table table-hover table-dark table-striped'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Category Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                  {
                    allCate.map((cate, index)=>{
                      return(
                        <tr>
                          <td>{index+1}</td>
                          <td>{cate.name}</td>
                          <td><button onClick={()=>askEdit(cate)} className='btn btn-sm btn-info'>Edit</button></td>
                          <td><button onClick={()=>askDelete(cate)} data-toggle="modal" data-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td>
                          {/* <td><button onClick={askDelete} data-toggle="modal" data-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td> */}
                        </tr>
                      )

                    })
                  }
              </tbody>
            </table>) : <div className='alert alert-info'>No Data Found</div>
          }
          </div>
        </div>

    </div>

    <Delete info={cate} confDelete={confDelete}/>  




    </>
  )
}

export default CategoryList

/*
JavaScript
  Loop
    for()
    while()
    do.... while()

ES-6 (Array)
  for of
  for in

  Array

  forEach
  map
  reduce
  filter

  Array.forEach((value, indexd, currnet_arr, cbFn)=>{
    console.log(x)
  })


  let NewArray = Array.map((value, index, currnet_arr, cbFn)=>{
    return value+2;
  })

  let NewArray = Array.filter((value, index, currnet_arr, cbFn)=>{
    return value < 20 && value > 10;
  })


  let NewArray = Array.filter(value=> value != 10);


  Array = [4, 7, 10, 9, 3];

  let ans = Array.reduce((acu, val) => acu < val ? acu : val);

  let ans = Array.reduce((accumelator, value)=> accumelator+value);



  let data1 =[
    {
      name : "rohit",
      gender : "male"
    },
    {
      name : "jaya",
      gender : "female"
    }
  ]

  let data2 = data1.map(value=>{
    if(value.gender=="male"){
      value.name = "Mr. "+value.name;
    }
    {
      value.name = "Ms. "+value.name;
    }
    return value;
  })







*/