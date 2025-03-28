"use client"

import Image from "next/image"
import {
  Mail,
  ChevronRight,
  CheckCircle,
  Users,
  BarChart,
  Code,
  Layout,
  Database,
  Search,
  Share2,
  PieChart,
  Smartphone,
  Cpu,
  GitBranch,
  Shield,
  MapPin,
  Phone,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useActiveSection } from "../hooks/use-active-section"
import { MobileMenu } from "../components/mobile-menu"

export default function Home() {
  const activeSection = useActiveSection()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="h-10 w-32">
              <Image src="/logo.png" alt="Tune IT Con Logo" width={128} height={40} className="h-full w-auto" />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("services")
              }}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === "services" ? "text-primary" : ""
              }`}
            >
              Services
              {activeSection === "services" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === "about" ? "text-primary" : ""
              }`}
            >
              About Us
              {activeSection === "about" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
            <a
              href="#clients"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("clients")
              }}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === "clients" ? "text-primary" : ""
              }`}
            >
              Our Clients
              {activeSection === "clients" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === "contact" ? "text-primary" : ""
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </nav>
          <Button
            className="hidden md:flex bg-neutral-900 hover:bg-neutral-800 text-white"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
          <MobileMenu scrollToSection={scrollToSection} />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="relative   max-w-4xl mx-auto">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center">
                  Enterprise Solutions for Modern Businesses
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl text-center">
                  Are you a startup, small to medium-size enterprise (SME), and would like to build a sustainable
                  business? We are here to help you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-center justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-neutral-900 hover:bg-neutral-800 text-white"
                    onClick={() => scrollToSection("services")}
                  >
                    Explore Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                    Contact Us
                  </Button>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Our Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We provide professional and top-quality services for startups and SMEs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <AnimatedServiceCard
                icon={<Database className="h-10 w-10 text-primary" />}
                title="IT Infrastructure"
                description="Business IT infrastructure checks and consultation to ensure your systems are optimized."
                delay={0.1}
              />
              <AnimatedServiceCard
                icon={<Layout className="h-10 w-10 text-primary" />}
                title="Business IT Architecture"
                description="Strategic IT architecture planning and implementation for your business needs."
                delay={0.2}
              />
              <AnimatedServiceCard
                icon={<Search className="h-10 w-10 text-primary" />}
                title="SEO Optimization"
                description="Search engine optimization to improve your visibility and drive more traffic."
                delay={0.3}
              />
              <AnimatedServiceCard
                icon={<Share2 className="h-10 w-10 text-primary" />}
                title="Social Media Integration"
                description="Connect with your audience through Facebook, Twitter, LinkedIn, Pinterest, Instagram and more."
                delay={0.4}
              />
              <AnimatedServiceCard
                icon={<PieChart className="h-10 w-10 text-primary" />}
                title="Analytics"
                description="Data-driven insights to help you make informed business decisions."
                delay={0.5}
              />
              <AnimatedServiceCard
                icon={<Smartphone className="h-10 w-10 text-primary" />}
                title="UI / UX Design"
                description="User-centered design that enhances user experience and satisfaction."
                delay={0.6}
              />
              <AnimatedServiceCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Software Development"
                description="Custom software solutions tailored to your specific business requirements."
                delay={0.7}
              />
              <AnimatedServiceCard
                icon={<Cpu className="h-10 w-10 text-primary" />}
                title="AI Services"
                description="Design and develop AI services including artificial intelligence and machine learning applications."
                delay={0.8}
              />
              <AnimatedServiceCard
                icon={<GitBranch className="h-10 w-10 text-primary" />}
                title="Project Management"
                description="Efficient project management and coordination to ensure timely delivery."
                delay={0.9}
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our founders with 15 years of experience provide professional services for a wide range of industries
                  and enterprises around the world.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We bring our long 15 years of enterprise experience to your business.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We believe that startups, micro, small and medium-sized business can benefit from services providers
                  like us who have extensive expertise and skills in large enterprises.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We provide professional and top-quality services that are affordable and optimally tailored to the
                  growth of your business.
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    className="bg-neutral-900 hover:bg-neutral-800 text-white"
                    onClick={() => scrollToSection("about")}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div> */}
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <motion.div
                      className="rounded-lg bg-background p-6 shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Users className="h-10 w-10 text-primary mb-2" />
                      <h3 className="text-xl font-bold">15+ Years</h3>
                      <p className="text-muted-foreground">Industry Experience</p>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-background p-6 shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Shield className="h-10 w-10 text-primary mb-2" />
                      <h3 className="text-xl font-bold">100%</h3>
                      <p className="text-muted-foreground">Client Satisfaction</p>
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-4 pt-8">
                    <motion.div
                      className="rounded-lg bg-background p-6 shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <BarChart className="h-10 w-10 text-primary mb-2" />
                      <h3 className="text-xl font-bold">500+</h3>
                      <p className="text-muted-foreground">Projects Completed</p>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-background p-6 shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <CheckCircle className="h-10 w-10 text-primary mb-2" />
                      <h3 className="text-xl font-bold">24/7</h3>
                      <p className="text-muted-foreground">Support Available</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Our Clients</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industries We Serve</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our profound client base spans across various industries around the world.
              </p>
            </motion.div>
            <div className="mt-12 space-y-8">
              <AnimatedIndustrySection
                title="Finance and Banking"
                clients={[
                  "Deutsche Investment Trust",
                  "Deutsche Review Stock Market",
                  "Deutsche Bank",
                  "Allianz Group",
                  "Swiss Bank",
                  "Commerzbank",
                  "Air Plus Business Credit Card",
                  "Bank of Ireland",
                ]}
                delay={0.1}
              />
              <AnimatedIndustrySection
                title="Logistics, Supply Chains, Shipping and Delivery Services"
                clients={["Deutsche Post", "DHL", "Federal Express"]}
                delay={0.2}
              />
              <AnimatedIndustrySection
                title="Telecommunication and Mobile Services"
                clients={["Deutsche Telekom", "T-Mobile", "Vodafone", "Nokia"]}
                delay={0.3}
              />
              <AnimatedIndustrySection
                title="Consulting/Consulting"
                clients={["Accenture", "IBM Professional Consultancy Services"]}
                delay={0.4}
              />
              <AnimatedIndustrySection
                title="IT, Software and Tools Development"
                clients={["IBM", "Ingres", "Borland", "Dassault Packard", "EDS", "Accenture IT Services"]}
                delay={0.5}
              />
              <AnimatedIndustrySection
                title="Online Shops, Consumer Products, Electronics and Retail"
                clients={[
                  "Procter & Gamble",
                  "Philips/Consumer Electronics",
                  "Avaya",
                  "Karstadt (retail)",
                  "Shopping malls",
                  "Neckermann",
                  "Quelle",
                  "Tchibo",
                  "Thonet (OTTO)",
                  "Online shop",
                  "Neckermann online shop",
                ]}
                delay={0.6}
              />
              <AnimatedIndustrySection
                title="Entertainment and News"
                clients={["ZDF TV station", "Navteq GPS/Online Navigation"]}
                delay={0.7}
              />
              <AnimatedIndustrySection
                title="Search Engine Services, Location and Maps"
                clients={["Metro online map and navigation", "Navteq", "Nokia"]}
                delay={0.8}
              />
              <AnimatedIndustrySection
                title="Public Sector"
                clients={["ZVEIT German Government IT Department", "Home Office UK"]}
                delay={0.9}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-primary/10">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Get In Touch</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Reach out to us for any inquiries or to discuss how we can help your business grow.
              </p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email Us</h3>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="grid gap-3">
                  <AnimatedEmailLink email="marketing@tuneicon.com" department="Marketing" delay={0.1} />
                  <AnimatedEmailLink email="sales@tuneicon.com" department="Sales Department" delay={0.2} />
                  <AnimatedEmailLink email="support@tuneicon.com" department="Technical Support" delay={0.3} />
                  <AnimatedEmailLink email="office@tuneicon.com" department="Office" delay={0.4} />
                  <AnimatedEmailLink email="hr@tuneicon.com" department="Human Resources" delay={0.5} />
                  <AnimatedEmailLink
                    email="customerservice@tuneicon.com"
                    department="For all other queries"
                    delay={0.6}
                  />
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-card p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">Our Office</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">UK Office</h4>
                        <address className="not-italic text-muted-foreground">
                          Tune ITCon Ltd
                          <br />D S House
                          <br />306 High Street
                          <br />
                          CR0 1NG Croydon
                          <br />
                          Surrey
                          <br />
                          United Kingdom
                        </address>
                      </div>
                    </div>
                  </div>
                 
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Website</h4>
                        <p className="text-muted-foreground">www.tuneitcon.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-2">
            <div className="h-10 w-32">
              <Image src="/logo.png" alt="Tune IT Con Logo" width={128} height={40} className="h-full w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tune ITCon Ltd. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("services")
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              About
            </a>
            <a
              href="#clients"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("clients")
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Clients
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

// Replace the ServiceCard function with this animated version
function AnimatedServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
        <CardContent className="p-6">
          <motion.div
            className="mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Replace the IndustrySection function with this animated version
function AnimatedIndustrySection({ title, clients, delay = 0 }) {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="rounded-full bg-muted px-4 py-2 text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            {client}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Replace the EmailLink function with this animated version
function AnimatedEmailLink({ email, department, delay = 0 }) {
  return (
    <motion.a
      href={`mailto:${email}`}
      className="flex items-center gap-2 rounded-lg border bg-card p-3 transition-colors hover:bg-muted"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Mail className="h-5 w-5 text-primary" />
      <div>
        <p className="font-medium">{email}</p>
        <p className="text-xs text-muted-foreground">{department}</p>
      </div>
    </motion.a>
  )
}

