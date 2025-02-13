function PageHeader() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/client/src/Course/list_course.jsx">Course Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/client/src/Course/list_course.jsx">List Course</a>
                            </li>
                            <li className="nav-item">
                                <a className= "nav-link " href="/client/src/Course/create_course.jsx">Add Course</a>
                            </li> 
                        </ul>  
                    </div>
                </div>
            </nav>
        </>
    );
  }
  
  export default PageHeader;
  
