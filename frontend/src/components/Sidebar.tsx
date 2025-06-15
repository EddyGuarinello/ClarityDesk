import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Ticket,
  Users,
  Settings,
  BarChart3,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Ticket, label: "Tickets", active: false },
    { icon: Users, label: "Clientes", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: FileText, label: "Relatórios", active: false },
    { icon: Settings, label: "Configurações", active: false },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-white border-r border-slate-200 shadow-lg transition-all duration-300 z-20",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <div className={cn("flex items-center", !isOpen && "justify-center")}>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <span className="ml-3 text-xl font-bold text-slate-900">
              clarityDesk
            </span>
          )}
        </div>
        <button
          onClick={onToggle}
          className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {isOpen ? (
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group",
              item.active
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            {!isOpen && (
              <div className="absolute left-16 bg-slate-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </div>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
