import React from "react";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { NumberCard } from "../../Components/Stats/NumberCard";
import { H1 } from "../../Ui/Typography";
import { Content, Stats } from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <PrivateLayout>
      <>
        <Content>
          <H1>Dashboard</H1>
        </Content>
        <Stats>
          <NumberCard number={400} label="Orçamentos" variant="large" />
          <NumberCard number={33} label="Em andamento" />
          <NumberCard number={238} label="Finalizados" />
          <NumberCard number={11} label="Cancelados" />
          <NumberCard
            number={200.55}
            label="Valor total"
            money
            variant="small"
          />
        </Stats>
      </>
    </PrivateLayout>
  );
};
