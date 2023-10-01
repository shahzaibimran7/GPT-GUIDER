import { ToastContainer } from "react-toastify";
import Routers from "./routes/Routers";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="relative bg-[#07091E] min-h-screen min-w-screen pt-6 xl:px-[140px] lg:px-[90px]">
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
