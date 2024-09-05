import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  SuccessContainer,
  SuccessContent,
  SuccessCurrencyDollarIcon,
  SuccessHeader,
  SuccessOrderDetails,
  SuccessOrderDetailsItem,
  SuccessPinIcon,
  SuccessTimerIcon,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </SuccessHeader>
      <SuccessContent>
        <SuccessOrderDetails>
          <SuccessOrderDetailsItem>
            <SuccessPinIcon>
              <MapPin size={16} weight="fill" />
            </SuccessPinIcon>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </p>
              <p>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
              </p>
            </div>
          </SuccessOrderDetailsItem>
          <SuccessOrderDetailsItem>
            <SuccessTimerIcon>
              <Timer size={16} />
            </SuccessTimerIcon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessOrderDetailsItem>
          <SuccessOrderDetailsItem>
            <SuccessCurrencyDollarIcon>
              <CurrencyDollar size={16} />
            </SuccessCurrencyDollarIcon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
            </div>
          </SuccessOrderDetailsItem>
        </SuccessOrderDetails>
        <img src="/success/delivery-illustration.png" alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
