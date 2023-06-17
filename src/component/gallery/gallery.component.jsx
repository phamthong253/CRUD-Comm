// index.component.js
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../../interceptor/axios";

export default function Gallery() {
  const [infoList, setInfoList] = useState([]);
  const commissionId = useParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    instance.get("/commission").then((response) => {
      console.log(response.data.data);
      setInfoList(response.data.data);
    });
  }, []);

  const deleteCommission = () => {
    instance.delete(`/commission/${commissionId.id}`).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <h1 className="text-center text-3xl">Render Commission </h1>
      <h2>Commission ID : {commissionId.id}</h2>
      {infoList.map((val) => (
        <>
          <div
            key={val.id}
            className="inline-block mx-20 my-5 rounded-lg border border-sky-950 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)"
          >
            <Link to={`/gallery/${val.id}`}>
              <img
                className="rounded-t-lg w-80 h-52 cursor-pointer object-cover "
                src={val.imageSrc}
                alt=""
                onClick={() => setShowModal(true)}
              />
            </Link>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tigh">
                Tên Comm: {val.name}
              </h5>
              <p className="mb-4 text-base ">Thể loại Comm: {val.type.name}</p>
              <p className="mb-4 text-base ">Giá Comm: {val.price}</p>
              <button
                type="button"
                onClick={deleteCommission}
                className="inline-block rounded bg-sky-600 border px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Delete
              </button>
              <button
                type="button"
                className="inline-block rounded bg-sky-600 border px-6 pb-2 pt-2.5 ml-16 text-lg font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {" "}
                <Link to={`/edit/${val.id}`}>Edit</Link>
              </button>
            </div>
          </div>
          {showModal ? (
            <div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-current opacity-20"
                  onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8 ">
                  <div className="relative w-full max-w-5xl p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 w-full sm:flex ">
                      <div className="flex items-center justify-center flex-none w-[350px] mx-auto bg-red-100 rounded-full">
                        <img src={val.imageSrc} alt={val.id} />
                      </div>
                      <div className="mt-12 text-center sm:ml-7 sm:text-left">
                        <h4 className="text-5xl leading-10 font-medium text-gray-800">
                          {val.name}
                        </h4>
                        <h4 className="text-3xl mt-5 leading-10 font-medium text-gray-800">
                          {val.type.name}
                        </h4>
                        <p className="mt-2 text-xl leading-relaxed text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <span className=" text-xl leading-10 text-medium">
                          {val.price} VND
                        </span>
                        <div className="items-center gap-2 mt-3 sm:flex">
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-white bg-sky-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={() => setShowModal(false)}
                          >
                            Xác nhận
                          </button>
                          <button
                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
