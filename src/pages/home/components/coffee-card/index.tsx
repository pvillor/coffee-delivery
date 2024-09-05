import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeCardActions,
  CoffeeCardCartButton,
  CoffeeCardCategories,
  CoffeeCardContainer,
  CoffeeCardDetails,
  CoffeeCardFooter,
  CoffeeCardHeader,
  CoffeeCardPrice,
  CoffeeCardQuantity,
} from "./styles";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCardProps {
  id: string;
  imageUrl: string;
  categories: string[];
  name: string;
  description: string;
  priceInCents: number;
}

export function CoffeeCard({
  id,
  imageUrl,
  categories,
  name,
  description,
  priceInCents,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  const formattedPrice = (priceInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const whiteSpaceBetweenSymbolAndValue = /\s+/;

  const [currencySymbol, value] = formattedPrice.split(
    whiteSpaceBetweenSymbolAndValue
  );

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleAddCoffeesInCart() {
    addItem({ id: id, quantity });
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardHeader>
        <img src={imageUrl} alt="" />
        <CoffeeCardCategories>
          {categories.map((category) => (
            <span>{category}</span>
          ))}
        </CoffeeCardCategories>
      </CoffeeCardHeader>

      <CoffeeCardDetails>
        <h2>{name}</h2>
        <p>{description}</p>
      </CoffeeCardDetails>

      <CoffeeCardFooter>
        <CoffeeCardPrice>
          {currencySymbol} <span>{value}</span>
        </CoffeeCardPrice>
        <CoffeeCardActions>
          <CoffeeCardQuantity>
            <Minus onClick={handleDecreaseQuantity} />
            <span>{quantity}</span>
            <Plus onClick={handleIncreaseQuantity} />
          </CoffeeCardQuantity>

          <CoffeeCardCartButton onClick={handleAddCoffeesInCart}>
            <ShoppingCart />
          </CoffeeCardCartButton>
        </CoffeeCardActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
