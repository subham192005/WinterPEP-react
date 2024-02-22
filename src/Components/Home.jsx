import React from "react";

function Home({ userDetails}) {

  return (
    <div className="container ms-3 mt-5">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Adress</th>
            <th scope="col">Email Adress</th>
          </tr>
        </thead>
        
        <tbody>
          
          {userDetails && userDetails.map((user, index) => (
              <tr key = {index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Home;
