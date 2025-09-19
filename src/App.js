"use client"

import { Calendar, Mail, Plane, Plus, Settings, Mic, Bot } from "lucide-react"

export default function App() {
  const handleSidebarClick = (btn: string) => {
    console.log(`${btn} button clicked`)
  }

  const handleOptionClick = (option: string) => {
    console.log(`${option} option clicked`)
  }

  const handleAddAgent = () => {
    console.log("Add Agent button clicked")
  }

  const services = [
    {
      id: "add-agent",
      name: "Add an Agent",
      icon: Plus,
      description: "Create a new AI agent",
      status: "available",
      color: "bg-primary",
      isAddButton: true,
    },
    {
      id: "calendar",
      name: "Google Calendar",
      icon: Calendar,
      description: "Manage your schedule",
      status: "connected",
      color: "bg-blue-500",
    },
    {
      id: "gmail",
      name: "Gmail",
      icon: Mail,
      description: "Handle your emails",
      status: "connected",
      color: "bg-red-500",
    },
    {
      id: "travel",
      name: "Travel Agent",
      icon: Plane,
      description: "Plan your trips",
      status: "available",
      color: "bg-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-800 text-lg">AI Assistant</h1>
            <p className="text-xs text-gray-500">Your digital companion</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          <button
            className="w-full flex items-center gap-3 h-11 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => handleSidebarClick("Manage")}
          >
            <Settings className="w-5 h-5" />
            Manage
          </button>
          <button
            className="w-full flex items-center gap-3 h-11 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => handleSidebarClick("Voice/AI")}
          >
            <Mic className="w-5 h-5" />
            Voice/AI
          </button>
        </nav>

        {/* Status */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            All systems operational
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome to Your AI Personal Assistant
            </h1>
            <p className="text-xl text-gray-600">
              Connect your favorite services & manage your digital life effortlessly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                  onClick={() => (service.isAddButton ? handleAddAgent() : handleOptionClick(service.name))}
                >
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center transition-transform duration-200`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>

                  {!service.isAddButton && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.status === "connected"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {service.status === "connected" ? "Connected" : "Available"}
                    </span>
                  )}

                  {service.isAddButton && (
                    <button
                      className="w-full py-2 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddAgent()
                      }}
                    >
                      Create Agent
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 p-6 bg-gray-100 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-200">
                <Calendar className="w-4 h-4" />
                Check Schedule
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-200">
                <Mail className="w-4 h-4" />
                Read Emails
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-200">
                <Plane className="w-4 h-4" />
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
