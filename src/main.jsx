import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

//fake comment
// function emitComment(id){
//   setInterval(() => {
//     window.dispatchEvent(
//   new CustomEvent(`course-${id}` ,{
//     detail: `Nội dung comment bài học của course ${id}`
//   })
//     )
//   },2000)
// }
// emitComment(1)
// emitComment(2)
// emitComment(3)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App className="from-indigo-300 via-purple-300 to-sky-300" />
  </BrowserRouter>
);
