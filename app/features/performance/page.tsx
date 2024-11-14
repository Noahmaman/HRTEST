"use client"

import { Zap, Gauge, Cpu, Activity, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const metrics = [
  {
    icon: Gauge,
    title: "Response Time",
    value: "< 10ms",
    description: "Average global response time",
  },
  {
    icon: Cpu,
    title: "Processing",
    value: "0.1ms",
    description: "Average processing time",
  },
  {
    icon: Activity,
    title: "Availability",
    value: "99.99%",
    description: "Global uptime guarantee",
  },
  {
    icon: LineChart,
    title: "Throughput",
    value: "1M+/s",
    description: "Requests per second",
  },
]

export default function PerformancePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6">
        <Navbar />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-300 text-sm mb-6 inline-block">
                <Zap className="inline-block w-4 h-4 mr-2" />
                Lightning-fast performance
              </span>
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-6">Optimized Performance</h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Experience sub-second response times and unmatched reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card border-yellow-500/20 hover:border-yellow-400/30 transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-300 flex items-center justify-center mb-4">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{metric.title}</CardTitle>
                    <CardDescription>{metric.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              View Live Metrics
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}