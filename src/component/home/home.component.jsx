import { Link } from "react-router-dom";
import CarouselHome from "./carousel-home";
import Artist from "./artist.component";
import Navbar from "./navbar.component";
import Footer from "../footer/footer.component";
import Collection from "./collection.component";
import instance from "../../interceptor/axios";

function Home() {
  const permissions = instance
    .get("/permission/current-user")
    .then((response) => {
      console.log(response.data.data);
    });

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200">
        <div className="container">
          <br />
          <div className="text-center w-full md:px-60 md:my-48 my-12 py-12 max-w-screen-2xl justify-around">
            <h2 className="text-purple-500 text-6xl font-bold leading-[4.5rem]">
              {localStorage.getItem("username")
                ? <p className="text-gray-700 inline-block"> Hello {localStorage.getItem("username")},</p>
                : null}{" "}
              Welcome to React CRUD Commission
            </h2>
            <br />
            <p className="text-xl ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              rerum rem consequatur libero voluptatem tempore aliquam eius odio
              maxime temporibus. Cum commodi mollitia recusandae dolorum
              laboriosam fugiat nam magnam odio!
            </p>{" "}
            {localStorage.getItem("username") ? null : (
              <p className="text-xl mt-5 font-bold">
                Login to create your Commission Collection
              </p>
            )}
            <br />
            {localStorage.getItem("username") ? (
              <Link to={"/create"}>
                <button className="rounded-2xl text-center text-xl bg-purple-600 h-14 min-w-[15rem] text-white font-medium leading-10">
                  Let's get started
                </button>
              </Link>
            ) : (
              <Link to={"/signup"}>
                <button className="rounded-2xl text-center text-xl bg-purple-600 h-14 min-w-[15rem] text-white font-medium leading-10">
                  Let's get started
                </button>
              </Link>
            )}
            <br />
          </div>
          <>
            <section className="doll1 mb-32 text-gray-800" id="doll1">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                    <img
                      src="/image/doll1.png"
                      alt="Doll Commission"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-2xl font-bold mb-4">
                        the secret of the great taste?
                      </h2>
                      <p className="text-gray-500 mb-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Earum maxime voluptas ipsam aliquam itaque
                        cupiditate provident architecto expedita harum culpa
                        odit, inventore rem molestias laborum repudiandae
                        corporis pariatur quo eius iste! Quaerat, assumenda
                        voluptates! Molestias, recusandae? Maxime fuga omnis
                        ducimus.
                      </p>
                      <p className="text-gray-500">
                        Commodi ut nisi assumenda alias maxime necessitatibus ad
                        rem repellat explicabo, reiciendis illum suscipit iusto?
                        Provident dignissimos similique, reiciendis inventore
                        accusantium unde mollitia, deleniti quae atque error id
                        perspiciatis illum. Laboriosam aperiam ab illo
                        dignissimos obcaecati corporis similique a odio, optio
                        iste quis placeat alias amet rerum sint quos dolor
                        pariatur inventore possimus ad consequuntur fugiat
                        perferendis consectetur laudantium.
                      </p>
                      <Link to={"/gallery"}>
                        <button className="rounded-2xl my-5 text-center text-xl bg-purple-600 h-14 min-w-[10rem] text-white font-medium leading-10">
                          Show more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-32 text-gray-800" id="doll2">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-2xl font-bold mb-4">
                        the secret of the great taste?
                      </h2>

                      <p className="text-gray-500 mb-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Earum maxime voluptas ipsam aliquam itaque
                        cupiditate provident architecto expedita harum culpa
                        odit, inventore rem molestias laborum repudiandae
                        corporis pariatur quo eius iste! Quaerat, assumenda
                        voluptates! Molestias, recusandae? Maxime fuga omnis
                        ducimus.
                      </p>
                      <p className="text-gray-500">
                        Commodi ut nisi assumenda alias maxime necessitatibus ad
                        rem repellat explicabo, reiciendis illum suscipit iusto?
                        Provident dignissimos similique, reiciendis inventore
                        accusantium unde mollitia, deleniti quae atque error id
                        perspiciatis illum. Laboriosam aperiam ab illo
                        dignissimos obcaecati corporis similique a odio, optio
                        iste quis placeat alias amet rerum sint quos dolor
                        pariatur inventore possimus ad consequuntur fugiat
                        perferendis consectetur laudantium.
                      </p>
                      <Link to={"/gallery"}>
                        <button className="rounded-2xl my-5 text-center text-xl bg-purple-600 h-14 min-w-[10rem] text-white font-medium leading-10">
                          Show more
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                    <img
                      src="image/doll2.png"
                      alt="Doll Commission"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
        <CarouselHome />
        <Artist />
        <Collection />
        <Footer />
      </div>
    </>
  );
}
export default Home;
