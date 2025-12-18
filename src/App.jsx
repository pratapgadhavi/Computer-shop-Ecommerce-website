import AppRoutes from "./Routes/AppRoutes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            marginTop: "60px", 
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <AppRoutes />
    </>
  );
};

export default App;
