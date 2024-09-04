import { CartCoffeeCard } from "./components/cart-coffee-card";
import {
  CheckoutContainer,
  ConfirmOrder,
  ConfirmOrderButton,
  ConsumerInfoAddress,
  ConsumerInfoAddressBody,
  ConsumerInfoContainer,
  ConsumerInfoHeader,
  ConsumerInfoPayment,
  ConsumerInfoPaymentBody,
  ConsumerInfoPaymentBodyButton,
  OrderPriceSummary,
  OrderSummary,
} from "./styles";
import expressoTradicional from "../../assets/expresso.png";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Input } from "./components/input";

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h2>Complete seu pedido</h2>
        <ConsumerInfoContainer id="form">
          <ConsumerInfoAddress>
            <ConsumerInfoHeader>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </ConsumerInfoHeader>
            <ConsumerInfoAddressBody>
              <Input placeholder="CEP" populateColumns={3} />
              <Input placeholder="Rua" populateColumns={8} />
              <Input placeholder="Número" populateColumns={3} />
              <Input
                placeholder="Complemento"
                populateColumns={5}
                suffix="Opcional"
              />
              <Input placeholder="Bairro" populateColumns={3} />
              <Input placeholder="Cidade" populateColumns={4} />
              <Input placeholder="UF" populateColumns={1} />
            </ConsumerInfoAddressBody>
          </ConsumerInfoAddress>
          <ConsumerInfoPayment>
            <ConsumerInfoHeader>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </ConsumerInfoHeader>
            <ConsumerInfoPaymentBody>
              <ConsumerInfoPaymentBodyButton>
                <CreditCard size={16} /> <span>CARTÃO DE CRÉDITO</span>
              </ConsumerInfoPaymentBodyButton>
              <ConsumerInfoPaymentBodyButton>
                <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
              </ConsumerInfoPaymentBodyButton>
              <ConsumerInfoPaymentBodyButton>
                <Money size={16} /> <span>DINHEIRO</span>
              </ConsumerInfoPaymentBodyButton>
            </ConsumerInfoPaymentBody>
          </ConsumerInfoPayment>
        </ConsumerInfoContainer>
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
            <ConfirmOrderButton type="submit" form="form">
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </ConfirmOrder>
        </OrderSummary>
      </aside>
    </CheckoutContainer>
  );
}
