import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Ticket,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const TicketStats = () => {
  const stats = [
    {
      title: "Tickets Totais",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Ticket,
      color: "bg-blue-500",
    },
    {
      title: "Tickets Abertos",
      value: "486",
      change: "+8%",
      trend: "up",
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      title: "Resolvidos",
      value: "2,361",
      change: "+15%",
      trend: "up",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: "Alta Prioridade",
      value: "23",
      change: "-5%",
      trend: "down",
      icon: AlertTriangle,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-200"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {stat.value}
            </div>
            <div className="flex items-center mt-2 text-sm">
              {stat.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span
                className={
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }
              >
                {stat.change}
              </span>
              <span className="text-slate-500 ml-1">do ultimo mês</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TicketStats;
