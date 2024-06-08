import React from 'react'
import NavBar from './NavBar'

const AddPhoto = () => {
    return (
        <div>
        <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">id</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">name</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">date</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">category</label>
                                <select name="" id="" className="form-control">
                                    <option value="wedding">wedding</option>
                                    <option value="mobile" mobile></option>
                                    <option value="betrothal">betrothal</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">email</label>
                                <input type="email" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button class="btn btn-success">SUBMIT</button>
                            </div>
                        </div>                </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto