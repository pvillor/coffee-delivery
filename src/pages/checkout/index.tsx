import { CartCoffeeCard } from "./components/cart-coffee-card";
import {
  CheckoutContainer,
  ConfirmOrder,
  ConfirmOrderButton,
  OrderPriceSummary,
  OrderSummary,
} from "./styles";
import expressoTradicional from "../../assets/expresso.png";

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <div>
          <h2>Complete seu pedido</h2>
          <div></div>
        </div>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <OrderSummary>
          <CartCoffeeCard
            imageUrl={expressoTradicional}
            name="Expresso Tradicional"
            priceInCents={990}
            quantity={1}
          />
          <CartCoffeeCard
            imageUrl={expressoTradicional}
            name="Expresso Tradicional"
            priceInCents={990}
            quantity={1}
          />
          <ConfirmOrder>
            <OrderPriceSummary>
              <div>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <p>Total</p>
                <span>R$ 33,20</span>
              </div>
            </OrderPriceSummary>
            <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
          </ConfirmOrder>
        </OrderSummary>
      </aside>
    </CheckoutContainer>
  );
}
