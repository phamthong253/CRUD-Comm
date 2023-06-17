import { useState, useEffect } from "react";
import instance from "../../interceptor/axios";

function Collection() {
  const [infoList, setInfoList] = useState([]);
  useEffect(() => {
    instance.get("/commission").then((response) => {
      setInfoList(response.data.data);
    });
  }, []);

  return (
    <div className="text-3xl container mx-auto px-5 py-2 lg:px-32 lg:pt-12" id="collection">
      <div className="inline-flex items-center justify-center w-full">
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {localStorage.getItem("username") ? <>
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          My Collection
        </span>
        </> : <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/image/halfbody2.jpeg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/image/halfbody4.jpeg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/image/halfbody8.jpeg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/image/halfbody9.png" />
      </div>
    </div>
  </div>
</div>}
        {infoList.map((val) => (
          <div key={val.id} className="flex w-1/4 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={val.imageSrc} />
              </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Collection;
