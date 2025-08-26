import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [id]); // ✅ Now re-fetches if ID changes

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (err) {
      console.error("❌ Error fetching user:", err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Name:</b> {user.name}</li>
              <li className="list-group-item"><b>Username:</b> {user.username}</li>
              <li className="list-group-item"><b>Email:</b> {user.email}</li>
            </ul>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
