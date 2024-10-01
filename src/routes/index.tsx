import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App.tsx";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import ReferenceCopy from "../Pages/ReferenceCopy";
import Result from "../Pages/Result";

const MainRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App/>}
      >
        <Route index element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/referenceCopy" element={<ReferenceCopy/>}/>
        <Route path="/result" element={<Result/>}/>
      </Route>
    )
  )

  return {router}
}

export default MainRoutes