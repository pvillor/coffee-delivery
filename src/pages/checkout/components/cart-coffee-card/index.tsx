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
import { useCart } from "../../../../hooks/useCart";

interface CartCoffeeCardProps {
  id: string;
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
  id,
}: CartCoffeeCardProps) {
  const { incrementItemQuantity, decrementItemQuantity, removeItem } =
    useCart();

  const formattedPrice = (priceInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  return (
    <CartCoffeeCardContainer>
      <CartCoffeeCardInfo>
        <img src={imageUrl} alt="" />
        <CartCoffeeCardDetails>
          <p>{name}</p>
          <CartCoffeeCardActions>
            <CartCoffeeCardQuantity>
              <Minus onClick={() => handleItemDecrement(id)} />
              <span>{quantity}</span>
              <Plus onClick={() => handleItemIncrement(id)} />
            </CartCoffeeCardQuantity>

            <CartCoffeeCardRemoveButton onClick={() => handleItemRemove(id)}>
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
