import Header from '../components/Header.jsx';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function AddBookPage() {

    const navigate = useNavigate();

    function handleAddBook(event) {
        event.preventDefault;
        // Form is not submitted and we can run our own function
        alert('Book created successfully!');
        navigate("/BookList/");

    }
    
    
    const pageTitle = "Add Book";

    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />

            <form className="add-form">
                <div className="form-control">
                    <label>Title *</label>
                    <input type="text" name="title" placeholder="Add Book Title" />
                </div>
                <div className="form-control">
                    <label>Book Cover *</label>
                    <input type="text" name="cover" placeholder="Add Cover" />
                </div>

                <div className="form-control">
                <label>Author *</label>
                <input
                    type="text" name="author" placeholder="Add Author" />
                </div>

                <div className="form-control">
                <label>Synopsis *</label>
                <textarea
                    type="text" name="synopsis" placeholder="Add a synopsis..." />
                </div>
                
                <button onClick={(event) => handleAddBook(event)} className="btn btn-block">Save Book</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  