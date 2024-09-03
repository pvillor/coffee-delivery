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
      <a href="/">
        <img src="coffee-delivery-logo.svg" alt="" />
      </a>

      <HeaderActions>
        <LocationButton>
          <MapPin size={22} />
          <span>Porto Alegre, SC</span>
        </LocationButton>
        <a href="/checkout">
          <CartButton>
            <ShoppingCart size={22} />
          </CartButton>
        </a>
      </HeaderActions>
    </HeaderContainer>
  );
}
