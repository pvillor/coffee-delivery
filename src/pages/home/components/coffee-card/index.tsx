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

interface CoffeeCardProps {
  imageUrl: string;
  categories: string[];
  name: string;
  description: string;
  priceInCents: number;
}

export function CoffeeCard({
  imageUrl,
  categories,
  name,
  description,
  priceInCents,
}: CoffeeCardProps) {
  const formattedPrice = (priceInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const whiteSpaceBetweenSymbolAndValue = /\s+/;

  const [currencySymbol, value] = formattedPrice.split(
    whiteSpaceBetweenSymbolAndValue
  );

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
            <Minus />
            <span>1</span>
            <Plus />
          </CoffeeCardQuantity>

          <CoffeeCardCartButton>
            <ShoppingCart />
          </CoffeeCardCartButton>
        </CoffeeCardActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
