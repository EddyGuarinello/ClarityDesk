import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TicketTable = () => {
  const tickets = [
    {
      id: "TK-2847",
      title: "Página de login não responsiva no mobile",
      customer: "Eddy Smith",
      priority: "alta",
      status: "aberto",
      responsavel: "Alex Silva",
      created: "há 2 horas",
      avatar: "AS",
    },
    {
      id: "TK-2846",
      title: "Problema na integração do gateway de pagamento",
      customer: "Douglas Johnson",
      priority: "alta",
      status: "em_progresso",
      responsavel: "Alex Silva",
      created: "há 4 horas",
      avatar: "AS",
    },
    {
      id: "TK-2845",
      title: "Alternância do modo escuro não funciona",
      customer: "Maria Clara",
      priority: "média",
      status: "resolvido",
      responsavel: "Alex Silva",
      created: "há 1 dia",
      avatar: "AS",
    },
    {
      id: "TK-2844",
      title: "Notificações por e-mail não estão sendo enviadas",
      customer: "Lucas Pereira",
      priority: "média",
      status: "aberto",
      responsavel: "Alex Silva",
      created: "há 1 dia",
      avatar: "AS",
    },
    {
      id: "TK-2843",
      title: "Dashboard carregando lentamente",
      customer: "Maria Garcia",
      priority: "baixa",
      status: "em_progresso",
      responsavel: "Alex Silva",
      created: "há 2 dias",
      avatar: "AS",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "in_progress":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  const formatStatus = (status: string) => {
    return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Tickets Recentes
        </CardTitle>
        <p className="text-sm text-slate-600">
          Gerencie e acompanhe seus tickets de suporte
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Ticket
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Cliente
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Prioridade
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Responsável
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Criado
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-slate-900">{ticket.id}</p>
                      <p className="text-sm text-slate-600 max-w-xs truncate">
                        {ticket.title}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-slate-900">{ticket.customer}</p>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(ticket.status)}>
                      {formatStatus(ticket.status)}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {ticket.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-900">
                        {ticket.responsavel}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-slate-600">{ticket.created}</p>
                  </td>
                  <td className="py-4 px-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Deletar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketTable;
