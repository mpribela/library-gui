import { Route, Routes } from "react-router-dom";
import BookDetail from "./pages/BookDetail";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<MainPage />}></Route>
      <Route path="/:ISBN" element={<BookDetail />} />
    </Routes>
  );
}
