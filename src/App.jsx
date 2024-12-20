import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CommonPage } from "./assets/styles/CommonStyled";
import QCSDemoPage from "./views/QCSDemoPage";

function App() {
  return (
    <>
      <CommonPage>
        <Toaster toastOptions={{ duration: 1000 }} />
        <Routes>
          <Route path="/qcs" element={<QCSDemoPage />}></Route>
        </Routes>
      </CommonPage>
    </>
  );
}

export default App;
