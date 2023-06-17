import { useEffect, useState } from "react";
import instance from "../../interceptor/axios";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "./deleteModal.component";

export default function Manage() {
  const userId = useParams();
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    instance.get("/user").then((response) => {
      console.log(response.data.data);
      setUser(response.data.data);
    });
  }, []);

  const editUser = () => {
    instance.patch(`/user/${userId.id}`, {
      username,
      password,
      email,
    });
  };
  const deleteUser = () => {
    instance
      .delete(`/user/${userId.id}`, {
        username,
        password,
        email,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      {Object.entries(user).map(([key, val]) => (
        <div
          key={key}
          className="inline-block mx-20 my-5 rounded-lg border border-sky-950 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)"
        >
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tigh">
              Tên User: {val.username}
            </h5>
            <p className="mb-4 text-base ">Email: {val.email}</p>
            <p className="mb-4 text-base ">User ID: {val.id}</p>
            <p className="mb-4 text-base ">
              Roles: {val.roles[0].name}{" "}
              {val.roles[1] ? `, ` + val.roles[1].name : ""}
            </p>
            {isChange && (
              <button
                onClick={() => setIsChange(false)}
                className="relative px-1 mb-5 border bg-red-500"
              >
                X
              </button>
            )}
            {isChange && (
              <div className="editForm mb-5 rounded-lg grid grid-flow-row ">
                <label>Username:</label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="border border-sky-700 rounded mb-5"
                ></input>
                <label>Password:</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-sky-700 rounded mb-5"
                ></input>
                <label>Email:</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="password"
                  placeholder="example@gmail.com"
                  className="border border-sky-700 rounded mb-5"
                ></input>
                <button
                  type="button"
                  className="inline-block rounded bg-sky-400 border px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                  onClick={editUser}
                >
                  {" "}
                  Submit
                </button>
              </div>
            )}
            <button
              type="button"
              className="inline-block rounded bg-red-400 border text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
            >
              <Link to={`${val.id}`}>
                {" "}
                <DeleteModal sendData={deleteUser()}/>
              </Link>
            </button>

            <button
              type="button"
              className="inline-block rounded bg-sky-600 border px-6 pb-2 pt-2.5 ml-16 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
              onClick={() => setIsChange(true)}
            >
              {" "}
              <Link to={`${val.id}`}>Edit User</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
