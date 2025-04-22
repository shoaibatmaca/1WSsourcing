"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Search,
  User,
  Check,
  Calendar,
  FileText,
  Package,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Mock notifications data
const mockNotifications = [
  {
    id: "notif-1",
    type: "quote",
    title: "Quote Response Received",
    message:
      "Your quote request for Organic Cotton T-Shirts has been updated with new pricing options.",
    time: "10:32 AM",
    date: "Today",
    read: false,
    link: "/dashboard/quotes/QUO-2023-5678",
  },
  {
    id: "notif-2",
    type: "message",
    title: "New Message",
    message:
      "Michael Chen from TextilePro Manufacturing sent you a message about your recent inquiry.",
    time: "Yesterday",
    date: "Yesterday",
    read: false,
    link: "/dashboard/messages",
  },
  {
    id: "notif-3",
    type: "order",
    title: "Order Status Update",
    message:
      "Your order #ORD-2023-1234 has been shipped. Tracking number: MSK12345678",
    time: "Apr 15, 2023",
    date: "Apr 15, 2023",
    read: true,
    link: "/dashboard/orders/ORD-2023-1234",
  },
  {
    id: "notif-4",
    type: "system",
    title: "Welcome to 1WorldSourcing",
    message:
      "Thank you for joining our platform. Get started by exploring our verified suppliers or requesting a quote.",
    time: "Apr 10, 2023",
    date: "Apr 10, 2023",
    read: true,
    link: "/dashboard",
  },
  {
    id: "notif-5",
    type: "quote",
    title: "Quote Approved",
    message:
      "Your quote for Recycled Polyester Jackets has been approved. Please proceed with the order.",
    time: "Apr 8, 2023",
    date: "Apr 8, 2023",
    read: true,
    link: "/dashboard/quotes/QUO-2023-5677",
  },
];

export function DashboardHeader() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const unreadCount = notifications.filter((notif) => !notif.read).length;
  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
    company: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("No token found");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/auth/users/me/", {
          headers: {
            Authorization: `JWT ${token}`, // 🛠️ Corrected this line
          },
        });

        if (res.ok) {
          const data = await res.json();
          console.log("Fetched user:", data);
          setUser({
            first_name: data.first_name,
            last_name: data.last_name,
            company: data.company,
          });
        } else {
          const errorData = await res.json();
          console.error("User fetch failed:", errorData);
        }
      } catch (err) {
        console.error("User fetch error:", err);
      }
    };

    // 🔁 Retry once in case of timing issues
    setTimeout(() => {
      fetchUser();
    }, 100);
  }, []);

  useEffect(() => {
    // Close notifications panel when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "quote":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "order":
        return <Package className="h-5 w-5 text-green-500" />;
      case "message":
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case "system":
        return <Bell className="h-5 w-5 text-gray-500" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 w-full"
              placeholder="Search orders, quotes, suppliers..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={notificationRef}>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>

            {/* Notifications Panel */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium">Notifications</h3>
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-7 px-2"
                      onClick={markAllAsRead}
                    >
                      Mark all as read
                    </Button>
                  )}
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p>No notifications</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition-colors ${
                            !notification.read ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium">
                                  {notification.title}
                                </p>
                                <div className="flex items-center">
                                  <p className="text-xs text-gray-500">
                                    {notification.time}
                                  </p>
                                  {!notification.read && (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="ml-1 h-6 w-6 p-0"
                                      onClick={() =>
                                        markAsRead(notification.id)
                                      }
                                    >
                                      <Check className="h-3 w-3" />
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">
                                {notification.message}
                              </p>
                              <a
                                href={notification.link}
                                className="text-xs text-blue-600 hover:underline"
                                onClick={() => markAsRead(notification.id)}
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-gray-200 text-center">
                  <a
                    href="/dashboard/notifications"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View All Notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <a href="/dashboard/settings" className="block">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
            </a>
            <div className="hidden md:block">
              <p className="text-sm font-medium">
                {user ? `${user.first_name} ${user.last_name}` : "Loading..."}
              </p>
              <p className="text-xs text-gray-500">
                {user ? user.company || "No company" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
