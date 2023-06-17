// create.component.js
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import instance from "../../interceptor/axios"
export default function Create() {
  const [imageSrc, setImageSrc] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState([]);
  const [typeId, setTypeId] = useState("")
  const [price, setPrice] = useState(0);

  const addToList = () => {
    instance.post("/commission", {
      name,
      price,
      typeId,
      imageSrc,
    })
  };
  useEffect(() => {
    instance.get("/commission-type").then((response) => {
      console.log(response.data);
      setType(response.data.data);
    });
  }, []);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    function blobToBase64(blob) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
        console.log(file);
      });
    }
    blobToBase64(file).then(setImageSrc);
  };

  return (
    <div className="mt-3">
      <h3 className="text-3xl text-center">Add New Commission</h3>
      <form className="w-96">
        <div className="grid grid-flow- p-4">
          <div className="mb-3">
            <label htmlFor="formFile" className="mb-2 inline-block">
              Thêm ảnh Comm:
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFile"
              onChange={handlePreviewImage}
            />
            {imageSrc && (
              <img className="w-80" src={imageSrc.name} alt={imageSrc.name} />
            )}
          </div>
        </div>
        <div className="grid grid-flow- p-4">
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="standard"
            label="Thêm tên Comm:"
            className="border border-sky-700 rounded"
          />
        </div>
        <div className="grid grid-flow- p-4">
          <label>Thêm thể loại Comm: </label>
          <div>
            <select
            onChange={(e) => {
              setTypeId(e.target.value)
              console.log(typeId)
            }}
              name="option"
              className="border border-sky-700 rounded-lg w-[350px]"
            >
              <option value="">
                {" "}
                Chọn thể loại Comm{" "}
              </option>
              {type.map((data) => (
                <option key={data.id}
                value={data.id}>{data.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-flow- p-4">
          <label
            htmlFor="exampleFormControlInputNumber"
            className="pointer-events-none max-w-[90%] origin-[0_0] truncate pt-[0.37rem] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
          >
            Thêm giá tiền:
          </label>
          <input
            type="number"
            className="border-sky-700 peer block min-h-[auto] w-full rounded border px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
            id="exampleFormControlInputNumber"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className=" p-4">
          <button
            type="button"
            onClick={addToList}
            className="bg-sky-600 p-3 rounded-lg"
          >
            Xác nhận
          </button>
          <input
            type="submit"
            value="Hủy bỏ"
            className="bg-gray-400 p-3 rounded-lg mx-2"
          />
        </div>
      </form>
    </div>
  );
}
