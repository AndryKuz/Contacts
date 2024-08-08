import { useEffect } from "react";
import AppRoutes from "../Routes/AppRoutes";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../data/contactSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
