import { NavLink } from "react-router-dom"

function Header({pageTitle}) {

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">
                
                {/* Since BookList is a partial match for all links
                the end prop will make sure it makes the path EXACTLY
                to know properly know when the active class should be applied */}
                    <NavLink to="/BookList/" end>
                      <button className="btn">
                          Books
                      </button>
                    </NavLink>

                   
                    <NavLink to="/BookList/add-book" end>
                      <button className="btn">
                          Add Book +
                      </button>
                      </NavLink>

            </div>
    
      </>
    )
  }
  
  export default Header
  