import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  Server,
  Printer,
  Router,
  Network,
  Camera,
  Monitor,
  HardDrive,
  CheckCircle,
  XCircle,
  Loader,
  HelpCircle,
  Zap,
  Clock,
  MapPin,
} from "lucide-react";
import { formatResponseTime, formatUptime } from "../utils/deviceUtils";
import { clsx } from "clsx";

const getDeviceIcon = (type) => {
  switch (type) {
    case "server":
      return Server;
    case "printer":
      return Printer;
    case "router":
      return Router;
    case "switch":
      return Network;
    case "camera":
      return Camera;
    case "workstation":
      return Monitor;
    default:
      return HardDrive;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "online":
      return CheckCircle;
    case "offline":
      return XCircle;
    case "checking":
      return Loader;
    default:
      return HelpCircle;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "online":
      return "text-success-500";
    case "offline":
      return "text-error-500";
    case "checking":
      return "text-warning-500";
    default:
      return "text-dark-400";
  }
};

const getStatusBadgeVariant = (status) => {
  switch (status) {
    case "online":
      return "success";
    case "offline":
      return "error";
    case "checking":
      return "warning";
    default:
      return "neutral";
  }
};

export const DeviceCard = ({ device, onPing, onEdit, onDelete }) => {
  const DeviceIcon = getDeviceIcon(device.type);
  const StatusIcon = getStatusIcon(device.status);
  const statusColor = getStatusColor(device.status);
  const isChecking = device.status === "checking";

  return (
    <Card hover className="animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <DeviceIcon className="h-8 w-8 text-dark-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark-900">
                {device.name}
              </h3>
              <p className="text-sm text-dark-600 font-mono">{device.ip}</p>
            </div>
          </div>
          <Badge
            variant={getStatusBadgeVariant(device.status)}
            className="flex items-center space-x-1"
          >
            <StatusIcon
              className={clsx(
                "h-3 w-3",
                statusColor,
                isChecking && "animate-spin"
              )}
            />
            <span className="capitalize">{device.status}</span>
          </Badge>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-dark-600">
            <MapPin className="h-4 w-4" />
            <span>{device.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-dark-500" />
              <span className="text-dark-600">Response:</span>
              <span className="font-medium text-dark-900">
                {formatResponseTime(device.responseTime)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-dark-500" />
              <span className="text-dark-600">Uptime:</span>
              <span className="font-medium text-dark-900">
                {formatUptime(device.uptime)}
              </span>
            </div>
          </div>

          {device.lastPing && (
            <div className="text-xs text-dark-500">
              Last ping: {device.lastPing.toLocaleTimeString()}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-dark-100">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPing(device.id)}
            disabled={isChecking}
            isLoading={isChecking}
          >
            {isChecking ? "Pinging..." : "Ping"}
          </Button>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => onEdit(device)}>
              Edit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(device.id)}
              className="text-error-600 hover:bg-error-50"
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
