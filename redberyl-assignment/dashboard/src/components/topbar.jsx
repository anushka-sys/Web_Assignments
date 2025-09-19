import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="w-full bg-white shadow px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Breadcrumb */}
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="vState Logo" className="h-10" />
        
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-500 w-5 h-5" />
        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Topbar;
