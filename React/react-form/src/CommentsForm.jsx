import { useState } from "react"

export default function CommentsForm() {
    let  [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 4,
    });

    let handelInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        });
    };

    let handelSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 4,
        });
    };

    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                &nbsp;&nbsp;
                <input type="text" 
                placeholder="Username" 
                value={formData.username}
                onChange={handelInputChange}
                id="username"
                name="username"/>

                <br /> <br /> 

                <label htmlFor="remarks">Remarks</label>
                &nbsp;&nbsp;
                <textarea value={formData.remarks} placeholder="Add a Remark"
                onChange={handelInputChange}
                id="remarks"
                name="remarks">
                </textarea>

                <br /> <br /> 

                <label htmlFor="rating">Rating</label>
                &nbsp;&nbsp;
                <input type="number" 
                placeholder="rating" 
                min={1} 
                max={5} 
                value={formData.rating}
                onChange={handelInputChange}
                id="rating"
                name="rating"/>

                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}