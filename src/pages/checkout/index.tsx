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
  OrderPriceSummary,
  OrderSummary,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Input } from "./components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Radio } from "./components/radio";

export type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.coerce.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const { cart, checkout } = useCart();

  const selectedPaymentMethod = watch("paymentMethod");

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    checkout(data);
    reset();
  };

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue +=
      (currentItem.priceInCents / 100) * currentItem.quantity);
  }, 0);

  const isCartEmpty = cart.length === 0;

  return (
    <CheckoutContainer>
      <main>
        <h2>Complete seu pedido</h2>
        <ConsumerInfoContainer
          id="form"
          onSubmit={handleSubmit(handleOrderCheckout)}
        >
          <ConsumerInfoAddress>
            <ConsumerInfoHeader>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </ConsumerInfoHeader>
            <ConsumerInfoAddressBody>
              <Input
                id="cep"
                placeholder="CEP"
                columns={3}
                register={register}
                error={errors.cep}
              />
              <Input
                id="street"
                placeholder="Rua"
                columns={8}
                register={register}
                error={errors.street}
              />
              <Input
                id="number"
                placeholder="Número"
                columns={3}
                register={register}
                error={errors.number}
              />
              <Input
                id="fullAddress"
                placeholder="Complemento"
                columns={5}
                suffix="Opcional"
                register={register}
                error={errors.cep}
              />
              <Input
                id="neighborhood"
                placeholder="Bairro"
                columns={3}
                register={register}
                error={errors.neighborhood}
              />
              <Input
                id="city"
                placeholder="Cidade"
                columns={4}
                register={register}
                error={errors.city}
              />
              <Input
                id="state"
                placeholder="UF"
                columns={1}
                register={register}
                error={errors.state}
              />
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
              <Radio
                type="radio"
                isSelected={selectedPaymentMethod === "credit"}
                {...register("paymentMethod")}
                value="credit"
              >
                <CreditCard size={16} /> <span>CARTÃO DE CRÉDITO</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === "debit"}
                {...register("paymentMethod")}
                value="debit"
              >
                <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === "cash"}
                {...register("paymentMethod")}
                value="cash"
              >
                <Money size={16} /> <span>DINHEIRO</span>
              </Radio>
            </ConsumerInfoPaymentBody>
            {errors.paymentMethod && (
              <span>{errors.paymentMethod.message}</span>
            )}
          </ConsumerInfoPayment>
        </ConsumerInfoContainer>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <OrderSummary>
          {coffeesInCart.map((coffee) => (
            <CartCoffeeCard
              id={coffee.id}
              imageUrl={coffee.image}
              name={coffee.title}
              priceInCents={coffee.priceInCents}
              quantity={coffee.quantity}
            />
          ))}
          <ConfirmOrder>
            <OrderPriceSummary>
              <div>
                <p>Total de itens</p>
                <span>
                  {totalItemsPrice.toLocaleString("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </span>
              </div>
              <div>
                <p>Entrega</p>
                <span>
                  {shippingPrice.toLocaleString("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </span>
              </div>
              <div>
                <p>Total</p>
                <span>
                  {(totalItemsPrice + shippingPrice).toLocaleString("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </span>
              </div>
            </OrderPriceSummary>
            <ConfirmOrderButton
              disabled={isCartEmpty}
              type="submit"
              form="form"
            >
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </ConfirmOrder>
        </OrderSummary>
      </aside>
    </CheckoutContainer>
  );
}
