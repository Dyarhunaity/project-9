import './card.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions/index";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteButton: true };
    this.handleButton = this.handleButton.bind(this);
  }
  componentDidMount() {
    this.props.getUsers();
  }
  handleButton(id) {
    document.getElementById(id).style.display = "none";
  }
  render() {
    const { users } = this.props.users;
    console.log(this.props.users);

    return (
        <>
      <div>
        <nav style={{ backgroundColor: "#FFFFFF" }}>
          <ul>
            <a href="/log" className="btn btn-warning fixed-top" style={{ width: "250px" }}>
              Logout
            </a>
          </ul>
        </nav>

        {/* <div className="card-cont">
            <div className='container'>
          {" "}
          <div className='row'>
          <div className=" col"> */}
            {/* {users.map((res) => ( */}
                {/* <div
                class="card text-white bg-secondary mb-3"
                style="max-width: 18rem;"
                key={res.id}
                style={{ display: this.state.deleteButton ? "inline" : "none" }}
                id={res.id}
                > */}
                {/* <div class="card-header"> */}
                  {/* <h4>Language : {res.original_language}</h4> */}
                {/* </div> */}
                {/* <div class="card-body"> */}
                  {/* <a href=""> */}
                    {/* <img */}
                      {/* src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
                      alt=""
                      style={{
                          width: "150px",
                          marginLeft: "-5px",
                          borderRadius: "17px",
                        }}
                        />
                  </a> */}

                  {/* <h5 class="card-title ">{res.original_title}</h5>
                  <p class="card-text">{res.overview}</p>
                  <button
                    onClick={() => this.handleButton(res.id)}
                    className="btn btn-danger"
                    >
                    Delete
                  </button> */}
             {/* </div> */}
             {/* </div> */}
            {/* ))}    */}
              
          {/* </div>
        </div>
      </div>
      </div>*/}
      {/* </div>  */}
    <div className='container'>
        {users.map((res) => (
        <div className='row'>

            <div
            class="card text-white bg-secondary mb-3"
            // style="max-width: 18rem;"
            key={res.id} style={{ display: this.state.deleteButton ? "inline" : "none" }}
            id={res.id}  >
            <div className='col'>
            <h4>Language : {res.original_language}</h4>
            <img
            src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
            alt=""
            style={{
                  width: "150px",
                  marginLeft: "-5px",
                  borderRadius: "17px",
                }}
                /> 
              <h5 class="card-title ">{res.original_title}</h5>
              <p class="card-text">{res.overview}</p>
              <button
                    onClick={() => this.handleButton(res.id)}
                    className="btn btn-danger"
                    >
                    Delete
                  </button>
            </div>
        </div>
        </div>
))} 

    </div>
    </div>
    
    
    
    
    
            </>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(Users);

