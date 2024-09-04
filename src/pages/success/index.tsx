import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import successIllustration from "../../assets/success-illustration.png";
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

export function Success() {
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
              <MapPin size={16} />
            </SuccessPinIcon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </SuccessOrderDetailsItem>
        </SuccessOrderDetails>
        <img src={successIllustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
