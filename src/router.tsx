import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { Success } from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
