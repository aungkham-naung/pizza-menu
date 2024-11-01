import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "../ui/Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {navigation.state === "loading" && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl overflow-scroll">
          {/* outlet allows to display all the routes that are children of AppLayout */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
