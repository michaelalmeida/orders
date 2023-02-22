import React from "react";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { NumberCard } from "../../Components/Stats/NumberCard";
import { H1 } from "../../Ui/Typography";
import { Content, Stats } from "./Dashboard.style";
import { useSidebarItems } from "./useSidebarItems";

export const Dashboard = () => {
  const { items } = useSidebarItems();
  return (
    <PrivateLayout>
      <>
        <Content>
          <H1>Dashboard</H1>
        </Content>
        <Stats>
          {items.map((item) => (
            <NumberCard
              key={item.label}
              number={item.number}
              label={item.label}
              variant={item.variant}
              action={item.action}
            />
          ))}
        </Stats>
      </>
    </PrivateLayout>
  );
};
