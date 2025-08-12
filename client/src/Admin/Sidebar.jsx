import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../Components/ui/sheet"
import {
  Code2,
  LayoutDashboard,
  Home,
  Users,
  UserCheck,
  GraduationCap,
  Calendar,
  UserPlus,
  Menu,
  LogOut,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Homepage Content", href: "/admin/homepage", icon: Home },
  { name: "Team Management", href: "/admin/team", icon: Users },
  { name: "Affiliates", href: "/admin/affiliates", icon: UserCheck },
  { name: "Alumni", href: "/admin/alumni", icon: GraduationCap },
  { name: "Registration", href: "/admin/registration", icon: UserPlus },
  { name: "Events", href: "/admin/events", icon: Calendar },
]

export default function AdminLayout({ children }) {
  const location = useLocation()

  const Sidebar = ({ className }) => (
    <div className={`flex flex-col h-full bg-white border-r ${className || ""}`}>
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold">SRKR Coding Club</h2>
            <p className="text-sm text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={() => alert("Logout clicked")}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-50 lg:flex-col">
        <Sidebar />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="font-semibold">SRKR Coding Club</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="lg:pl-72">
        <main className="p-4 lg:p-8">{children}</main>
      </div> */}
    </div>
  )
}