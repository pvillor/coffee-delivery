import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartButton,
  HeaderActions,
  HeaderContainer,
  LocationButton,
} from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  const cartCoffeesCount = cart.length;
  const isCartNotEmpty = cart.length > 0;

  return (
    <HeaderContainer>
      <a href="/">
        <img src="/header/coffee-delivery-logo.svg" alt="" />
      </a>

      <HeaderActions>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, SC</span>
        </LocationButton>
        <a href="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {isCartNotEmpty && <span>{cartCoffeesCount}</span>}
          </CartButton>
        </a>
      </HeaderActions>
    </HeaderContainer>
  );
}
