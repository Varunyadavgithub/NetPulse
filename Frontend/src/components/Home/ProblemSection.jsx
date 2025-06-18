import { AlertCircle, Terminal, XCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ProblemSection = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalRef = useRef(null);

  const pingCommands = [
    {
      ip: "192.168.1.10",
      responses: [
        "PING 192.168.1.10 (192.168.1.10) 56(84) bytes of data.",
        "64 bytes from 192.168.1.10: icmp_seq=1 ttl=64 time=0.045 ms",
        "64 bytes from 192.168.1.10: icmp_seq=2 ttl=64 time=0.037 ms",
      ],
    },
    {
      ip: "192.168.1.20",
      responses: [
        "PING 192.168.1.20 (192.168.1.20) 56(84) bytes of data.",
        "64 bytes from 192.168.1.20: icmp_seq=1 ttl=64 time=0.032 ms",
        "64 bytes from 192.168.1.20: icmp_seq=2 ttl=64 time=0.041 ms",
      ],
    },
    {
      ip: "192.168.1.30",
      responses: [
        "PING 192.168.1.30 (192.168.1.30) 56(84) bytes of data.",
        "Request timeout for icmp_seq=1",
        "Request timeout for icmp_seq=2",
      ],
    },
    {
      ip: "192.168.1.40",
      responses: [
        "PING 192.168.1.40 (192.168.1.40) 56(84) bytes of data.",
        "64 bytes from 192.168.1.40: icmp_seq=1 ttl=64 time=0.028 ms",
        "64 bytes from 192.168.1.40: icmp_seq=2 ttl=64 time=0.035 ms",
      ],
    },
  ];

  useEffect(() => {
    let currentCommandIndex = 0;
    let currentResponseIndex = 0;
    let isCommand = true;

    const addLine = () => {
      const currentCommand = pingCommands[currentCommandIndex];

      if (isCommand) {
        setTerminalLines((prev) => [
          ...prev,
          {
            text: `ping ${currentCommand.ip}`,
            type: "command",
          },
        ]);
        isCommand = false;
        currentResponseIndex = 0;
      } else {
        if (currentResponseIndex < currentCommand.responses.length) {
          setTerminalLines((prev) => [
            ...prev,
            {
              text: currentCommand.responses[currentResponseIndex],
              type: "response",
            },
          ]);
          currentResponseIndex++;
        } else {
          currentCommandIndex = (currentCommandIndex + 1) % pingCommands.length;
          isCommand = true;
          setTerminalLines((prev) => [...prev, { text: "", type: "empty" }]);
          setTerminalLines((prev) => prev.slice(-20));
        }
      }

      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    };

    const interval = setInterval(addLine, 800);
    return () => clearInterval(interval);
  }, []);

  const getLineStyle = (line) => {
    if (!line || !line.type) return "";

    if (line.type === "command") return "text-green-400";
    if (line.type === "empty") return "h-2";
    if (line.type === "response") {
      return line.text && line.text.includes("timeout")
        ? "text-red-400"
        : "text-gray-300";
    }
    return "";
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-red-500 font-semibold mb-4">
                THE CHALLENGE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                The Problem IT Teams Face Daily
              </h2>
              <p className="text-gray-400 text-lg">
                Traditional network monitoring methods are holding teams back.
                Here's why:
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Terminal className="w-6 h-6" />,
                  title: "Manual Terminal Chaos",
                  description:
                    "Running ping commands in 10+ terminal windows is time-consuming and error-prone.",
                },
                {
                  icon: <AlertCircle className="w-6 h-6" />,
                  title: "No Historical Data",
                  description:
                    "No way to track connectivity patterns or identify recurring issues over time.",
                },
                {
                  icon: <XCircle className="w-6 h-6" />,
                  title: "Reactive Monitoring",
                  description:
                    "Finding out about network issues only after users complain.",
                },
              ].map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    {problem.icon}
                    <div className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      {problem.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Window */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              {/* Terminal Header */}
              <div className="bg-gray-800 rounded-t-lg p-3 flex items-center gap-2 border-b border-gray-700">
                {/* Window Controls */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* Terminal Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
                  terminal -- ping commands
                </div>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                className="bg-[#1E1E1E] font-mono text-sm h-[400px] overflow-y-auto p-4 rounded-b-lg border border-gray-700 shadow-inner scrollbar-hide"
                style={{
                  scrollbarWidth: "none" /* Firefox */,
                  msOverflowStyle: "none" /* IE and Edge */,
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Optional Path Display */}
                <div className="text-gray-500 mb-2">
                  user@network-monitor ~ %
                </div>

                {terminalLines.map((line, index) => (
                  <div key={index} className={getLineStyle(line)}>
                    {line.type === "command" && (
                      <span className="text-gray-500">
                        user@network-monitor ~ %{" "}
                      </span>
                    )}
                    {line.text}
                  </div>
                ))}
                <div className="animate-pulse text-green-400">_</div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-gray-400 text-center mt-4">
              The old way: Multiple terminals, manual tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
