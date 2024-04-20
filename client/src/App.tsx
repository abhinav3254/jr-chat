import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import ChatScreen from "./components/ChatScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<ChatScreen />} />
      </Routes>
    </div>
  )
}