import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import {
  CoffeeList,
  CoffeeListContainer,
  HomeCartIcon,
  HomeCoffeeIcon,
  HomeContainer,
  HomeIntro,
  HomeIntroItem,
  HomeIntroItems,
  HomeIntroItemsColumn,
  HomePackageIcon,
  HomeTimerIcon,
  HomeTitles,
} from "./styles";
import { CoffeeCard } from "./components/coffee-card";
import { coffees } from "../../data";

export function Home() {
  return (
    <HomeContainer>
      <main>
        <HomeIntro>
          <HomeTitles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </HomeTitles>
          <HomeIntroItems>
            <HomeIntroItemsColumn>
              <HomeIntroItem>
                <HomeCartIcon>
                  <ShoppingCart />
                </HomeCartIcon>
                <span>Compra simples e segura</span>
              </HomeIntroItem>
              <HomeIntroItem>
                <HomeTimerIcon>
                  <Timer />
                </HomeTimerIcon>
                <span>Entrega rápida e rastreada</span>
              </HomeIntroItem>
            </HomeIntroItemsColumn>
            <HomeIntroItemsColumn>
              <HomeIntroItem>
                <HomePackageIcon>
                  <Package weight="fill" />
                </HomePackageIcon>
                <span>Embalagem mantém o café intacto</span>
              </HomeIntroItem>
              <HomeIntroItem>
                <HomeCoffeeIcon>
                  <Coffee />
                </HomeCoffeeIcon>
                <span>O café chega fresquinho até você</span>
              </HomeIntroItem>
            </HomeIntroItemsColumn>
          </HomeIntroItems>
        </HomeIntro>

        <img src="home-coffee.png" alt="" />
      </main>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              id={coffee.id}
              imageUrl={coffee.image}
              categories={coffee.tags}
              name={coffee.title}
              description={coffee.description}
              priceInCents={coffee.priceInCents}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
