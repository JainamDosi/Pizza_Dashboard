import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import PizzaTable from "@/components/PizzaTable";
import pizzaData from './DATA.json';


export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div>
      <PizzaTable data={pizzaData}/>
    </div>
  );
}
