import AuthProvider from "./provider/AuthProvider";
import withAuth from "./withAuth";
import { Chat } from "./components/Chat";

const AuthenticatedChat = withAuth(Chat);

export const Home = () => {
   

  return (
  <AuthProvider>
    <AuthenticatedChat/>
  </AuthProvider>
  )
}