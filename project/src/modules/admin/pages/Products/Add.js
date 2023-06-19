import React, {useState, useEffect, useRef} from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import ProductService from '../../../../services/ProductService'
import CategorySerivce from '../../../../services/CategoryService'

const Add = () => {
    let file = useRef();
    let navigate = useNavigate();
    let [cate, setCate] = useState([]);
    // let [selectedCate, setSelectedCate] = useState();
    let [subCate, setSubCate] = useState([]);

    useEffect(()=>{
        let getCate = async ()=>{
            let result = await CategorySerivce.GetAll();
            setCate(result.info);
        }
        getCate();
    }, [])

    let { handleSubmit, handleChange } = useFormik({
        initialValues : { title : "", price : "", category : "", subcategory : "", detail : "", discount :  "", quantity : "", image : ""},
        onSubmit : async (formdata)=>{
            let uploadfile = file.current.files[0];
            let frm = new FormData(); // create our form by javascript
            frm.append("file", uploadfile);
            frm.append("data", JSON.stringify(formdata));
            let result = await ProductService.Add(frm);
            navigate("/admin/product/list");
        }
    })
    let getSubCate = async (e)=>{
        handleChange(e);
        let a = e.target.value;
        let result = await CategorySerivce.getSubCate(a);
        setSubCate(result.info[0].subcategory);
    }

   
  return (
    <>
        <div className='container my-5'>
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className='text-center'>Add New Product</h3>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type='text' name='title' onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type='text' name='price' onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Select Image Product</label>
                        <input type='file' ref={file} name='image' onChange={handleChange} className='form-control' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <select onChange={e=>getSubCate(e)} className='form-control' name='category'>
                            <option>Select</option>
                            {
                                cate.map((x)=><option key={x._id} value={x._id}>{x.name}</option>)
                            }                            
                        </select>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Sub-Category</label>
                        <select className='form-control' onChange={handleChange} name='subcategory'>
                            <option>Select</option>
                            {
                                subCate.map(x=><option key={x._id} value={x._id}>{x.name}</option>)
                            }
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Detail</label>
                        <textarea className='form-control' onChange={handleChange} name='detail'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Discount</label>
                        <input type='text' name='discount' onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input type='text' name='quantity' onChange={handleChange} className='form-control' />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Add</button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Add