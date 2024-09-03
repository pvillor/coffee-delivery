import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartButton,
  HeaderActions,
  HeaderContainer,
  LocationButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="coffee-delivery-logo.svg" alt="" />

      <HeaderActions>
        <LocationButton>
          <MapPin size={22} />
          <span>Porto Alegre, SC</span>
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} />
        </CartButton>
      </HeaderActions>
    </HeaderContainer>
  );
}
