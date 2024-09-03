import { Minus, Plus, Trash } from "phosphor-react";
import {
  CartCoffeeCardActions,
  CartCoffeeCardContainer,
  CartCoffeeCardDetails,
  CartCoffeeCardInfo,
  CartCoffeeCardPrice,
  CartCoffeeCardQuantity,
  CartCoffeeCardRemoveButton,
} from "./styles";

interface CartCoffeeCardProps {
  imageUrl: string;
  name: string;
  quantity: number;
  priceInCents: number;
}

export function CartCoffeeCard({
  imageUrl,
  name,
  quantity,
  priceInCents,
}: CartCoffeeCardProps) {
  const formattedPrice = (priceInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CartCoffeeCardContainer>
      <CartCoffeeCardInfo>
        <img src={imageUrl} alt="" />
        <CartCoffeeCardDetails>
          <p>{name}</p>
          <CartCoffeeCardActions>
            <CartCoffeeCardQuantity>
              <Minus />
              <span>{quantity}</span>
              <Plus />
            </CartCoffeeCardQuantity>

            <CartCoffeeCardRemoveButton>
              <Trash size={16} />
              <span>REMOVER</span>
            </CartCoffeeCardRemoveButton>
          </CartCoffeeCardActions>
        </CartCoffeeCardDetails>
      </CartCoffeeCardInfo>
      <CartCoffeeCardPrice>{formattedPrice}</CartCoffeeCardPrice>
    </CartCoffeeCardContainer>
  );
}
