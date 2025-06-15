import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TicketChart = () => {
  const data = [
    { name: "Mon", criado: 45, resolvido: 38 },
    { name: "Tue", criado: 52, resolvido: 47 },
    { name: "Wed", criado: 38, resolvido: 41 },
    { name: "Thu", criado: 67, resolvido: 53 },
    { name: "Fri", criado: 58, resolvido: 62 },
    { name: "Sat", criado: 32, resolvido: 29 },
    { name: "Sun", criado: 28, resolvido: 31 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Atividades de tickets
        </CardTitle>
        <p className="text-sm text-slate-600">
          Criados vs Resolvidos esta semana
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar dataKey="criado" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="resolvido" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-slate-600">Created</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
            <span className="text-sm text-slate-600">Resolved</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketChart;
