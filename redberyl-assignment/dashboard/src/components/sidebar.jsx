// SidebarCompact.js
import {
  LayoutGrid,
  ShoppingCart,
  Building2,
  Users,
  User,
  Group,
  BarChart,
  LifeBuoy,
  Settings,
} from 'lucide-react';

const sidebarItems = [
  { name: "Dashboard", icon: LayoutGrid, active: false },
  { name: "Orders", icon: ShoppingCart, active: false },
  { name: "Companies", icon: Building2, active: true },
  { name: "Clients", icon: Users, active: false },
  { name: "Employees", icon: User, active: false },
  { name: "Vendors", icon: Group, active: false },
  { name: "Billings", icon: BarChart, active: false },
  { name: "Support", icon: LifeBuoy, active: false },
  { name: "Master Settings", icon: Settings, active: false },
];

const SidebarCompact = () => {
  return (
    <div className="w-[80px] h-[calc(100vh-50px)] bg-white border-r flex flex-col items-center py-4 mt-[10px]">
      {sidebarItems.map(({ name, icon: Icon, active }, idx) => (
        <button
          key={idx}
          className={`flex flex-col items-center justify-center my-2 p-1 w-full text-[11px] font-medium transition-colors
            ${active ? "text-blue-600 bg-blue-50" : "text-gray-400 hover:text-gray-600"}`}
        >
          <Icon size={20} />
          <span className={`mt-1 ${active ? "text-blue-600" : "text-gray-900"}`}>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarCompact;
