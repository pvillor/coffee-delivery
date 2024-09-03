import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import homeCoffee from "../../assets/home-coffee.png";
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

import expressoTradicional from "../../assets/expresso.png";
import expressoAmericano from "../../assets/americano.png";
import expressoCremoso from "../../assets/expresso-cremoso.png";
import expressoGelado from "../../assets/cafe-gelado.png";
import cafeComLeite from "../../assets/cafe-com-leite.png";
import latte from "../../assets/latte.png";
import cappuccino from "../../assets/cappuccino.png";
import macchiato from "../../assets/macchiato.png";
import mocaccino from "../../assets/mocaccino.png";
import chocolateQuente from "../../assets/chocolate-quente.png";
import cubano from "../../assets/cubano.png";
import havaiano from "../../assets/havaiano.png";
import arabe from "../../assets/arabe.png";
import irlandes from "../../assets/irlandes.png";

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
                  <Package />
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

        <img src={homeCoffee} alt="" />
      </main>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          <CoffeeCard
            imageUrl={expressoTradicional}
            categories={["TRADICIONAL"]}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={expressoAmericano}
            categories={["TRADICIONAL"]}
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={expressoCremoso}
            categories={["TRADICIONAL"]}
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={expressoGelado}
            categories={["TRADICIONAL", "GELADO"]}
            name="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={cafeComLeite}
            categories={["TRADICIONAL", "COM LEITE"]}
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={latte}
            categories={["TRADICIONAL", "COM LEITE"]}
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={cappuccino}
            categories={["TRADICIONAL", "COM LEITE"]}
            name="Cappuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={macchiato}
            categories={["TRADICIONAL", "COM LEITE"]}
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={mocaccino}
            categories={["TRADICIONAL", "COM LEITE"]}
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={chocolateQuente}
            categories={["ESPECIAL", "COM LEITE"]}
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={cubano}
            categories={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={havaiano}
            categories={["ESPECIAL"]}
            name="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={arabe}
            categories={["ESPECIAL"]}
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            priceInCents={990}
          />
          <CoffeeCard
            imageUrl={irlandes}
            categories={["ESPECIAL", "ALCOÓLICO"]}
            name="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            priceInCents={990}
          />
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
