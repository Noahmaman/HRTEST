"use client"

import { Globe, Server, Network, Cloud, Database } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const features = [
  {
    icon: Server,
    title: "Edge Computing",
    description: "Deploy your applications closer to your users with our global edge network",
  },
  {
    icon: Network,
    title: "Global CDN",
    description: "Lightning-fast content delivery through our worldwide CDN infrastructure",
  },
  {
    icon: Cloud,
    title: "Auto-scaling",
    description: "Automatically scale resources based on demand",
  },
  {
    icon: Database,
    title: "Data Centers",
    description: "Strategic data center locations for optimal performance",
  },
]

export default function InfrastructurePage() {
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
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm mb-6 inline-block">
                <Globe className="inline-block w-4 h-4 mr-2" />
                Powered by enterprise-grade infrastructure
              </span>
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-6">Global Infrastructure</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Deploy your applications worldwide with our enterprise-grade infrastructure network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-300 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center rounded-lg bg-blue-900/20">
                      [Interactive Demo]
                    </div>
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
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Start Building Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}