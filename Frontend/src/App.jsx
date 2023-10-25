import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBook from "./components/CreateBook/CreateBook";
import DeleteBook from "./components/DeleteBook/DeleteBook";
import GetAllBooks from "./components/GetAllBooks/GetAllBooks";
import LoginForm from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import GetAllUsers from "./components/GetAllUsers/GetAllUsers";

import DeleteUser from "./components/DeleteUser/DeleteUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
// import SearchBooks from "./components/SearchBooks/SearchBooks";
import CartTotal from "./components/Cart/CartTotal";
import { Provider } from "react-redux"; // Import Provider
import store from "./utils/store"; // Import the Redux store
import Authenticate from "./components/Authenticate/Authenticate";
import SearchBooks from "./components/SearchBooks/SearchBooks";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ResetPassword/ForgotPassword";
import AddFile from "./components/AddFile/AddFile";
import GetFile from "./components/GetFile/GetFile";

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<GetAllBooks />} />
            <Route path="/search" element={<SearchBooks />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password/" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:token/:userId"
              element={<ResetPassword />}
            />

            <Route path="/file-upload" element={<AddFile />} />
            <Route path="/file-get" element={<GetFile />} />

            <Route element={<Authenticate />}>
              <Route path="/create-book" element={<CreateBook />} />
              <Route path="/update-book" element={<UpdateBook />} />
              <Route path="/delete-book" element={<DeleteBook />} />
              <Route path="/admin" element={<GetAllUsers />} />
              <Route path="/update-user/:id" element={<UpdateUser />} />
              <Route path="/delete-user/:id" element={<DeleteUser />} />
            </Route>

            <Route path="/add-to-cart" element={<CartTotal />} />

            {/* {/* <Route path="/products/:productId" element={<ProductDetails />/> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </>
    </Provider>
  );
}

export default App;
