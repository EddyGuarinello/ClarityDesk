import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, UserPlus, CheckCircle } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "ticket_created",
      user: "Eddy Smith",
      action: "ticket criado",
      target: "#TK-2847",
      time: "2 minutos atrás",
      priority: "alta",
      icon: MessageSquare,
      avatar: "SJ",
    },
    {
      id: 2,
      type: "ticket_resolved",
      user: "Douglas",
      action: "ticket encerrado",
      target: "#TK-2845",
      time: "15 minutos atrás",
      priority: "media",
      icon: CheckCircle,
      avatar: "MC",
    },
    {
      id: 3,
      type: "user_assigned",
      user: "Maria Clara",
      action: "foi atribuído a",
      target: "#TK-2844",
      time: "1 hora atrás",
      priority: "baixa",
      icon: UserPlus,
      avatar: "ED",
    },
    {
      id: 4,
      type: "ticket_updated",
      user: "Alex Silva",
      action: "atualizou o ticket",
      target: "#TK-2843",
      time: "2 horas atrás",
      priority: "media",
      icon: Clock,
      avatar: "AR",
    },
    {
      id: 5,
      type: "ticket_created",
      user: "Lucas Pereira",
      action: "ticket criado",
      target: "#TK-2842",
      time: "3 horas atrás",
      priority: "alta",
      icon: MessageSquare,
      avatar: "LP",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-red-100 text-red-800";
      case "media":
        return "bg-yellow-100 text-yellow-800";
      case "baixa":
        return "bg-green-100 text-green-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Atividade Recente
        </CardTitle>
        <p className="text-sm text-slate-600">
          Ultiimas atualizações do seu time
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt={activity.user} />
                <AvatarFallback className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <activity.icon className="w-4 h-4 text-slate-500" />
                  <p className="text-sm text-slate-900">
                    <span className="font-media">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-media text-blue-600">
                      {activity.target}
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className={getPriorityColor(activity.priority)}
                  >
                    {activity.priority}
                  </Badge>
                  <span className="text-xs text-slate-500">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
