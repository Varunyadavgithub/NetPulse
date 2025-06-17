import { Card, CardContent, CardHeader } from "./ui/Card";
import { Activity, CheckCircle, XCircle, Zap } from "lucide-react";

export const NetworkStats = ({ stats }) => {
  const uptime =
    stats.totalDevices > 0
      ? (stats.onlineDevices / stats.totalDevices) * 100
      : 0;

  const statCards = [
    {
      title: "Total Devices",
      value: stats.totalDevices,
      icon: Activity,
      color: "text-primary-600",
      bgColor: "bg-primary-50",
    },
    {
      title: "Online",
      value: stats.onlineDevices,
      icon: CheckCircle,
      color: "text-success-600",
      bgColor: "bg-success-50",
    },
    {
      title: "Offline",
      value: stats.offlineDevices,
      icon: XCircle,
      color: "text-error-600",
      bgColor: "bg-error-50",
    },
    {
      title: "Avg Response",
      value: `${stats.averageResponseTime}ms`,
      icon: Zap,
      color: "text-warning-600",
      bgColor: "bg-warning-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <Card
          key={index}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dark-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-dark-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Network Health Indicator */}
      <Card
        className="md:col-span-2 lg:col-span-4 animate-slide-up"
        style={{ animationDelay: "400ms" }}
      >
        <CardHeader>
          <h3 className="text-lg font-semibold text-dark-900">
            Network Health
          </h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-dark-700">
                  Overall Uptime
                </span>
                <span className="text-sm font-bold text-dark-900">
                  {uptime.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-dark-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-success-500 to-success-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${uptime}%` }}
                ></div>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                uptime >= 95
                  ? "bg-success-100 text-success-800"
                  : uptime >= 80
                  ? "bg-warning-100 text-warning-800"
                  : "bg-error-100 text-error-800"
              }`}
            >
              {uptime >= 95 ? "Excellent" : uptime >= 80 ? "Good" : "Poor"}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
