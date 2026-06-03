import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Phone,
  Mail,
  ArrowUp,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  DollarSign,
  Zap,
  BarChart3,
  Star,
  Clock,
  ArrowRight,
  Award,
  ExternalLink
} from "lucide-react";

// Interactive Types & Contracts
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  metric: string;
  icon: React.ComponentType<any>;
}

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  stat: string;
  avatar: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // FAQ Accordion State
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Track scroll position for header styling & Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services Data
  const services: ServiceItem[] = [
    {
      id: "walmart-seo",
      title: "Walmart SEO",
      shortDesc: "Optimize product search placement organically.",
      detailedDesc: "Empower your listings with Walmart Search Engine Algorithms. We fine-tune hidden backend search attributes, structure titles to maximize match weights, and align category codes with precise shopper search intent. Real organic growth starts here.",
      metric: "+180% Avg Rank",
      icon: Search
    },
    {
      id: "listing-opt",
      title: "Product Listing Optimization",
      shortDesc: "Convert browsing sessions into absolute purchases.",
      detailedDesc: "Crafting highly convincing titles, bullet points, descriptions, and premium visual layout directions. We rewrite your listing assets to answer buyer hesitations instantly, helping you lock down the crucial Walmart Buy Box and defeat competitors.",
      metric: "+4.2% Conversion Ratio",
      icon: ShoppingBag
    },
    {
      id: "keyword-ranking",
      title: "Keyword Ranking",
      shortDesc: "Command position for high-volume searches.",
      detailedDesc: "Safe, TOS-compliant keyword boost strategies. We focus on search-find-buy optimization to build natural sales velocity under your highest revenue-generating search phrases. Ensure your product shows on Page 1 first.",
      metric: "Top 3 Ranking",
      icon: TrendingUp
    },
    {
      id: "visibility-improve",
      title: "Product Visibility Improvement",
      shortDesc: "Cross-dock lists into high-traffic filters.",
      detailedDesc: "Be discovered wherever customers search. Our system ensures search attribute matching across multi-tier category listing filters, shelf page placements, and automatic recommendation modules for complimentary product listings.",
      metric: "5x Listing Impressions",
      icon: Sparkles
    },
    {
      id: "sales-growth",
      title: "Sales Growth Strategy",
      shortDesc: "Build stable, long-term monthly revenue.",
      detailedDesc: "A complete performance design. We help you balance organic SEO with catalog scaling, competitive retail pricing models, customer review generation frameworks, and sustainable ranking protection matrices.",
      metric: "3.5x Monthly ROI",
      icon: BarChart3
    }
  ];

  // Benefits Data
  const benefits: BenefitItem[] = [
    {
      id: "b-1",
      title: "Higher Search Visibility",
      description: "Secure top search positions of Walmart search returns, bypassing competitive noise and capturing first-look clicks from high-intent e-shoppers.",
      highlight: "Page 1 First Look"
    },
    {
      id: "b-2",
      title: "More Organic Traffic",
      description: "Attract a river of consistent, free organic clicks from active product seekers. Drastically slash your reliance on costly sponsored PPC campaigns.",
      highlight: "Reduce PPC Costs"
    },
    {
      id: "b-3",
      title: "Increased Sales & Velocity",
      description: "Amplify your daily sales volume. Healthy sales rates drive search engines to naturally lock your product in dominant, long-standing leading ranks.",
      highlight: "Sustainable Growth"
    },
    {
      id: "b-4",
      title: "Better Conversion Rates",
      description: "Say goodbye to empty clicks. With laser-focused keywords and accurate description layouts, visitors find exactly what they expect and purchase.",
      highlight: "Trust-Based Design"
    },
    {
      id: "b-5",
      title: "Long-Term Ranking Growth",
      description: "Build robust, defensive, high-authority listing structures that continuously generate recurring profits weeks and months down the line.",
      highlight: "Permanent Authority"
    }
  ];

  // Why Choose Us Data
  const reasons = [
    {
      title: "Proven Ranking Methods",
      description: "We employ 100% TOS-compliant, white-hat ranking and list structure tactics designed to gain clean, penalty-free search authority.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50/70"
    },
    {
      title: "Fast Communication & Support",
      description: "Direct-action response. Speak directly with optimization experts who run your ranking tasks and offer immediate answers.",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-50/70"
    },
    {
      title: "Affordable & Fair Solutions",
      description: "Modern tier-pricing crafted around actual business metrics and target keyword categories. No hidden charges, just pure profit.",
      icon: DollarSign,
      color: "text-yellow-600",
      bg: "bg-amber-50/70"
    },
    {
      title: "Results-Focused Execution",
      description: "We are obsessed with your store's performance. Our metrics are simple: rank gains, click ratios, buy-box wins, and gross volume growth.",
      icon: Zap,
      color: "text-indigo-600",
      bg: "bg-indigo-50/70"
    }
  ];

  // Testimonials Data
  const testimonials: TestimonialItem[] = [
    {
      id: "t-1",
      name: "Marcus Sterling",
      role: "E-Commerce Director",
      company: "Apex Tech Brands",
      rating: 5,
      text: "The sheer listing refinement and search visibility boost did wonders. Our primary headphones product was stuck on page four. Within 12 days of starting, we hit slot #2 on high-volume terms and organic sales exploded. The results are incredible!",
      stat: "+290% Sales Growth",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "t-2",
      name: "Helena Rostova",
      role: "Founder & Creator",
      company: "Scent & Petal Co.",
      rating: 5,
      text: "I was highly skeptical of Walmart SEO compared to Amazon, but the Walmart Ranking Expert team completely proved me wrong. Our conversion rates went from a low 2.3% to almost 8.1% after they rewrote our descriptions and optimized the hidden search attributes.",
      stat: "8.1% Conversion Rate",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "t-3",
      name: "Ryan Gallagher",
      role: "Growth Operations Head",
      company: "SwiftHome Depot",
      rating: 5,
      text: "Outstanding communication and 100% white-hat techniques. We have launched 15 SKUs with them this year, and every single one secured sustainable visibility heights within 3 weeks. They are our unfair advantage inside the Walmart Marketplace.",
      stat: "15/15 Top-Tier Slots",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
    }
  ];

  // FAQ Data
  const faqs: FaqItem[] = [
    {
      question: "How does the Walmart Product Ranking Service work?",
      answer: "We perform a thorough evaluation of your current listing health, pricing, reviews, and prime competitors' keyword targets. Next, we structure search attribute placements, optimize the visible details (titles, feature bullets, primary descriptions), and implement white-hat search-find-buy promotional velocity campaigns to safely elevate your listings to top-shelf rankings."
    },
    {
      question: "Are your methods safe and TOS-compliant?",
      answer: "Absolutely. We are highly strict with Walmart policies. We rely entirely on organic search listing signals, high-relevance copywriting structure mapping, and authentic transactional velocity. We never utilize bot networks or black-hat systems that threaten your merchant center store safety."
    },
    {
      question: "How long does it take to see noticeable ranking improvements?",
      answer: "Most optimized listings observe initial search keyword positioning improvements within 5 to 10 days. Optimal top-tier Page 1 peak positioning is typically locked down in 14 to 28 days, depending on key keyword difficulty and catalog history."
    },
    {
      question: "Do you offer any guarantee on results?",
      answer: "While search algorithms are subject to periodic structural adjustments, our proven track record is remarkable (over 94% of our client items secure page-one placement). We stand by our work and will continuously optimize and adapt listing signals until the requested rank target matches are reached."
    },
    {
      question: "What items do you need to begin optimization?",
      answer: "We only require your active Walmart product URLs and any prioritized target keywords you wish to target. We do not require admin database logins or merchant credentials to start your primary visibility audit and strategy map!"
    }
  ];

  // Handle Form Submission
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill out all required fields (*).");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);

    // Simulate sending data to backend/email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setSubmitSuccess(false);
  };

  // Toggle Accordion FAQ
  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen selection:bg-walmart-accent selection:text-walmart-navy">
      
      {/* Dynamic Header / Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Link to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
              id="nav-logo-btn"
            >
              <div className="w-10 h-10 bg-walmart-navy flex items-center justify-center rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200">
                <span className="text-walmart-accent font-display font-extrabold text-xl">W</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-lg md:text-xl text-walmart-navy leading-none">
                  Walmart <span className="text-walmart-blue">Ranking</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-walmart-accent bg-walmart-navy px-1.5 py-0.5 rounded mt-0.5 self-start">
                  Expert
                </span>
              </div>
            </button>

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {["home", "services", "benefits", "about", "faq", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-semibold text-sm capitalize text-slate-600 hover:text-walmart-blue transition-colors duration-200 cursor-pointer focus:outline-none relative py-1 group"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-walmart-blue transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* CTA Desktop Launch Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-walmart-accent text-walmart-navy hover:bg-amber-400 font-bold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-walmart-accent scale-100 hover:scale-[1.02] cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-walmart-blue transition-colors focus:outline-none md:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/60 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-4/5 max-w-sm bg-white z-50 shadow-2xl p-6 transition-transform duration-300 transform md:hidden flex flex-col justify-between ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <span className="font-display font-extrabold text-xl text-walmart-navy">
              Walmart <span className="text-walmart-blue">Expert</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 bg-slate-100 text-slate-500 rounded-lg hover:text-red-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8">
            {["home", "services", "benefits", "about", "faq", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left font-bold text-lg capitalize text-slate-700 hover:text-walmart-blue py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-center bg-walmart-accent text-walmart-navy hover:bg-amber-400 font-bold py-3.5 rounded-xl transition-colors block shadow-md"
          >
            Get Free Consultation
          </button>
          <div className="text-xs text-center text-slate-400">
            © 2026 Walmart Ranking Expert. All rights reserved.
          </div>
        </div>
      </div>

      {/* HOME / HERO SECTION */}
      <section
        id="home"
        className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-gradient-to-b from-walmart-navy via-[#0c2a55] to-slate-900 text-white overflow-hidden"
      >
        {/* Abstract background vector patterns */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-walmart-accent blur-3xl"></div>
          <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-walmart-blue blur-3xl"></div>
        </div>

        {/* Dynamic decorative backdrop grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs font-semibold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-walmart-accent animate-pulse" />
                No. 1 Trusted Walmart SEO Service
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight xl:leading-none">
                Boost Your <span className="text-walmart-accent relative whitespace-nowrap">Walmart Product<span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-walmart-blue/40 -z-10"></span></span> Rankings
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Increase visibility, traffic, and sales with proven, strategy-driven Walmart SEO campaigns. We place your brand ahead of the pack organically.
              </p>

              {/* Responsive Double Action Button Cluster */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto text-center px-8 py-4 bg-walmart-accent text-walmart-navy hover:bg-amber-400 font-extrabold rounded-xl shadow-lg glow-on-hover hover:scale-105 transition-all duration-300 cursor-pointer text-lg"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="w-full sm:w-auto text-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 cursor-pointer text-lg"
                >
                  Explore Services
                </button>
              </div>

              {/* Minimal Trust Badge Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-walmart-accent font-display">94%</div>
                  <div className="text-xs text-slate-400 font-medium uppercase mt-1">Page 1 Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-white font-display">3.2x</div>
                  <div className="text-xs text-slate-400 font-medium uppercase mt-1">Average ROI</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-white font-display">25M+</div>
                  <div className="text-xs text-slate-400 font-medium uppercase mt-1">Sales Generated</div>
                </div>
              </div>
            </div>

            {/* Right Visual Interactive Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none group">
                {/* Accent glows */}
                <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition-opacity" />
                
                {/* Main Card Element */}
                <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl space-y-6 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">WMR_ALGORITHM_LIVE</span>
                  </div>

                  {/* Simulated SEO Dashboard visualization */}
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-800/80 rounded-xl space-y-2 border border-white/5">
                      <div className="flex justify-between items-center text-xs text-slate-400">
                        <span>Main Keyword Rank</span>
                        <span className="text-emerald-400 font-bold font-mono">+124 Pos</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="font-display font-bold text-lg text-white">#1 Best Seller Slot</span>
                        <span className="text-xs bg-walmart-accent text-walmart-navy font-bold px-2 py-0.5 rounded">
                          Walmart Choice
                        </span>
                      </div>
                      {/* Simulated performance line bars */}
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-walmart-accent rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div className="p-4 bg-slate-800/80 rounded-xl space-y-3 border border-white/5">
                      <div className="text-xs font-semibold text-slate-300">Listing Optimization Audit Score</div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-display font-bold text-xl text-emerald-400">
                          98%
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-white font-semibold">Perfect Structural Health</p>
                          <p className="text-[11px] text-slate-400">Attributes optimized, high CTR copywriting successfully active.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 bg-slate-800/40 border border-white/5 rounded-xl text-center">
                        <div className="text-xs text-slate-400">Conversion Increase</div>
                        <div className="text-lg font-bold text-walmart-accent font-display mt-0.5">+410%</div>
                      </div>
                      <div className="p-3.5 bg-slate-800/40 border border-white/5 rounded-xl text-center">
                        <div className="text-xs text-slate-400">Organic Clicks</div>
                        <div className="text-lg font-bold text-emerald-400 font-display mt-0.5">+12,480 /mo</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-walmart-blue/20 to-walmart-accent/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Audited Strategy Prepared In Minutes</span>
                    <button onClick={() => scrollToSection("contact")} className="text-walmart-accent flex items-center gap-1 hover:underline cursor-pointer">
                      Claim Free Audit <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-sm font-bold text-walmart-blue uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
              Expert Solutions
            </h2>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-walmart-navy tracking-tight leading-tight">
              Walmart-Specific SEO & Listing Optimization Services
            </p>
            <div className="w-16 h-1 bg-walmart-accent mx-auto rounded" />
            <p className="text-slate-500 font-light text-base sm:text-lg">
              We focus purely on the specialized algorithms of Walmart Search. Unlock higher ranking velocity and maintain dominant positions.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative group flex flex-col justify-between"
                  id={`service-${service.id}`}
                >
                  <div className="space-y-6">
                    {/* Top Icon & Metric badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-slate-50 group-hover:bg-walmart-blue/10 rounded-xl flex items-center justify-center text-walmart-blue group-hover:text-walmart-dark transition-colors duration-300">
                        <IconComp size={28} />
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        {service.metric}
                      </span>
                    </div>

                    {/* Service Text Detail */}
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-xl text-walmart-navy group-hover:text-walmart-blue transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 font-medium text-xs uppercase tracking-wide">
                        {service.shortDesc}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        {service.detailedDesc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Bottom Area */}
                  <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-xs font-bold text-walmart-navy hover:text-walmart-blue flex items-center gap-1 cursor-pointer focus:outline-none"
                    >
                      Book Free Strategy Session <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Consultation CTA Block */}
          <div className="mt-16 bg-gradient-to-r from-walmart-navy to-walmart-blue/90 rounded-2xl p-8 md:p-12 text-white shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="relative z-10 space-y-3 max-w-xl">
              <h4 className="font-display font-bold text-2xl">Ready to audit your Walmart catalog performance?</h4>
              <p className="text-slate-200 text-sm font-light">
                Give us your top SKU and we will provide a completely free optimization blueprint. No credit card required.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative z-10 shrink-0 bg-walmart-accent text-walmart-navy hover:bg-amber-400 font-extrabold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:scale-[1.03] text-sm cursor-pointer"
            >
              Get Free Consultation Now
            </button>
          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Left Frame */}
            <div className="space-y-6 lg:pr-8">
              <div className="inline-block bg-amber-150 text-walmart-dark bg-amber-55 text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-amber-800 px-3 py-1 rounded-md">
                Direct Benefits
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-walmart-navy tracking-tight leading-tight">
                Unlock Unfair Competitive Advantages on Walmart Marketplace
              </h2>
              <p className="text-slate-600 font-light text-base leading-relaxed">
                Ranking high on search terms is not a vanity metric — it is the single most reliable driver of recurrent e-commerce profits.
              </p>

              {/* Styled Metric box */}
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-walmart-blue/10 flex items-center justify-center text-walmart-blue">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Average Organic Growth Rate</div>
                  <div className="text-2xl font-bold text-walmart-navy">+240% in 14 Days</div>
                </div>
              </div>

              {/* CTA link to contact */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="font-bold text-sm text-walmart-blue hover:text-walmart-dark flex items-center gap-1.5 cursor-pointer"
                >
                  Schedule Your Ranking Project <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* List Right Frame */}
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.id}
                  className="bg-white border border-slate-150/60 p-5 rounded-xl hover:border-slate-300 transition-all duration-250 hover:shadow-md flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-walmart-navy">{benefit.title}</h3>
                      <span className="text-[10px] font-bold text-walmart-blue bg-blue-50 px-2 py-0.5 rounded-full">
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Grid with Reason Cards */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, i) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border border-slate-100/80 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
                    >
                      <div className={`w-12 h-12 rounded-xl ${reason.bg} ${reason.color} flex items-center justify-center`}>
                        <Icon size={24} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-base text-walmart-navy">{reason.title}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right explanation text */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <h2 className="text-xs font-bold text-walmart-blue uppercase tracking-widest block">
                Why Partner With Us
              </h2>
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-walmart-navy tracking-tight leading-tight">
                An Expert Agency Built Specifically for Walmart Success
              </p>
              <div className="w-12 h-1 bg-walmart-accent rounded" />
              <div className="space-y-4 text-slate-600 font-light text-base leading-relaxed">
                <p>
                  We are not a general-purpose digital agency offering side services. We are dedicated marketplace specialists studying the specific details of Walmart search indexing algorithms, buyer actions, and inventory signals.
                </p>
                <p>
                  Our goal is to help your store maximize organic traffic flow. By matching your listing fields precisely to high-intent buyer searches, we provide a reliable, long-term formula for business growth.
                </p>
              </div>

              {/* Client statistics */}
              <div className="pt-6 border-t border-slate-100 flex gap-8">
                <div>
                  <div className="text-3xl font-extrabold text-walmart-blue font-display">120+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Sellers Assisted</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-walmart-navy font-display">1,500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Keywords Ranked</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-sm font-bold text-walmart-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full inline-block">
              Client Success
            </h2>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-walmart-navy tracking-tight leading-loose">
              Trusted by Ambitious Walmart Marketplace Retailers
            </p>
            <div className="w-16 h-1 bg-walmart-accent mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-walmart-accent text-walmart-accent" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                </div>

                {/* Avatar and Info Block */}
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-walmart-navy leading-none">{test.name}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {test.role}, <span className="text-slate-500 font-semibold">{test.company}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {test.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold text-walmart-blue uppercase tracking-widest inline-block">
              Got Questions?
            </h2>
            <p className="font-display font-extrabold text-3xl text-walmart-navy tracking-tight">
              Frequently Asked Questions
            </p>
            <div className="w-12 h-1 bg-walmart-accent mx-auto rounded" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-250 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-base md:text-lg text-walmart-navy hover:text-walmart-blue hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className={`p-1.5 bg-slate-50 rounded-lg text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-walmart-blue" : ""
                    }`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100 border-t border-slate-50" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="p-6 text-slate-500 text-sm md:text-base leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Left Form Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-walmart-blue uppercase tracking-widest block">
                  Let's Connect
                </h2>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-walmart-navy tracking-tight leading-tight">
                  Start Boosting Your Listings Today
                </h3>
                <p className="text-slate-500 font-light text-base leading-relaxed">
                  Get in touch with an optimization expert to discuss your Walmart SKU rankings, review listing health, or answer campaign details.
                </p>
              </div>

              {/* Direct Clickable Quick Communication Action Cards */}
              <div className="space-y-4">
                
                {/* Phone Link Card */}
                <a
                  href="tel:+8801302251118"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-walmart-blue transition-colors duration-200 group shadow-sm block"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 text-walmart-blue flex items-center justify-center group-hover:bg-walmart-blue group-hover:text-white transition-colors duration-250">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Mobile Support</div>
                    <div className="text-base font-bold text-walmart-navy mt-0.5 hover:underline">+8801302251118</div>
                  </div>
                </a>

                {/* WhatsApp Chat Link Card */}
                <a
                  href="https://wa.me/8801302251118?text=Hi%2C%20I%20want%20to%20boost%20my%20Walmart%20Product%20Rankings!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-emerald-500 transition-colors duration-200 group shadow-sm block"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-250">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <div className="text-xs font-semibold text-slate-400">WhatsApp Chat</div>
                      <div className="text-base font-bold text-walmart-navy mt-0.5 hover:underline">+8801302251118</div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded inline-flex items-center gap-1">
                      Online <ExternalLink size={10} />
                    </span>
                  </div>
                </a>

                {/* Email Link Card */}
                <a
                  href="mailto:shohag.rana8686@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-amber-500 transition-colors duration-200 group shadow-sm block"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-250">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Email Address</div>
                    <div className="text-base font-bold text-walmart-navy mt-0.5 hover:underline">shohag.rana8686@gmail.com</div>
                  </div>
                </a>

              </div>

              {/* Instant Launch Action Row */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href="mailto:shohag.rana8686@gmail.com"
                  className="bg-walmart-navy text-white hover:bg-slate-800 text-sm font-bold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Mail size={16} /> Email Button
                </a>
                <a
                  href="tel:+8801302251118"
                  className="bg-walmart-blue text-white hover:bg-walmart-dark text-sm font-bold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone size={16} /> Call Now Button
                </a>
                <a
                  href="https://wa.me/8801302251118?text=Hi%2C%20I%20want%20to%20boost%20my%20Walmart%20Product%20Rankings!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare size={16} /> WhatsApp Chat Button
                </a>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-lg">
                
                {submitSuccess ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-2xl text-walmart-navy">Consultation Request Placed!</h4>
                      <p className="text-slate-500 max-w-sm mx-auto text-sm">
                        Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. An Optimization specialist will contact you at <span className="font-semibold text-slate-800">{formData.email}</span> shortly.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl text-left text-xs text-slate-500 max-w-sm mx-auto space-y-1">
                      <p className="font-semibold text-slate-700">Submitted Details:</p>
                      <p>Phone: {formData.phone || "Not provided"}</p>
                      <p className="line-clamp-2">Message: {formData.message}</p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors cursor-pointer"
                    >
                      Fill Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-walmart-navy">Let's Rank Your Store</h4>
                      <p className="text-xs text-slate-400">Fields marked with an asterisk (*) are mandatory.</p>
                    </div>

                    {submitError && (
                      <div className="p-4 bg-red-50 text-red-700 text-xs rounded-xl font-medium border border-red-100">
                        {submitError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Sarah Jenkins"
                          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:border-walmart-blue focus:ring-1 focus:ring-walmart-blue transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@yourbrand.com"
                          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:border-walmart-blue focus:ring-1 focus:ring-walmart-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 124-4567"
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-100/50 focus:outline-none focus:border-walmart-blue focus:ring-1 focus:ring-walmart-blue transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Your Message / Product URL & Target Keywords *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please include links to your main ASIN/SKU listing as well as any prioritized phrases you want us to audit first."
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:border-walmart-blue focus:ring-1 focus:ring-walmart-blue transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-walmart-accent hover:bg-amber-400 text-walmart-navy font-extrabold rounded-xl transition-all duration-250 shadow-md hover:shadow-lg disabled:opacity-50 text-base flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-walmart-navy border-t-transparent rounded-full animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        "Send Secure Consultation Request"
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-walmart-navy text-white pt-16 pb-8 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            
            {/* Branding Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded">
                  <span className="text-walmart-accent font-display font-extrabold text-base">W</span>
                </div>
                <span className="font-display font-bold text-lg text-white">
                  Walmart <span className="text-walmart-accent">Expert</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Premium optimization agency helping sellers obtain the supreme visibility organic search positions they deserve. Clear strategies, proven outcomes.
              </p>
            </div>

            {/* Quick Links Map */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm tracking-wider uppercase text-slate-300">Quick Links</h4>
              <ul className="space-y-2.5">
                {["home", "services", "benefits", "about", "faq"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-slate-400 hover:text-walmart-accent text-sm capitalize transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Specs */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm tracking-wider uppercase text-slate-300">Need Immediate Help?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <Mail size={16} className="text-walmart-accent" />
                  <a href="mailto:shohag.rana8686@gmail.com" className="hover:text-white transition-colors">
                    shohag.rana8686@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <Phone size={16} className="text-walmart-accent" />
                  <a href="tel:+8801302251118" className="hover:text-white transition-colors">
                    +8801302251118
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <MessageSquare size={16} className="text-emerald-500" />
                  <a
                    href="https://wa.me/8801302251118?text=Hi%2C%20I%20want%20to%20boost%20my%20Walmart%20Product%20Rankings!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Algorithm notice of expert updates */}
            <div className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse" />
                Algorithm Monitor
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Our templates and semantic parameters are updated to reflect the latest June 2026 Walmart Search Engine criteria. We update methods continuously.
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              &copy; 2026 Walmart Ranking Expert. All rights reserved. Registered agency specializing in Walmart SEO & Marketplace visibility solutions.
            </div>
            
            {/* Social media icons placeholder styled beautifully with lucide */}
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Facebook", "YouTube"].map((social, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold hover:bg-walmart-accent hover:text-walmart-navy transition-colors text-slate-400 cursor-pointer"
                  title={social}
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION ELEMENT: BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 p-3 h-12 w-12 rounded-full bg-walmart-accent hover:bg-amber-400 text-walmart-navy shadow-lg shadow-walmart-accent/20 flex items-center justify-center border border-walmart-accent/30 transition-all duration-300 transform ${
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={22} />
      </button>

    </div>
  );
}
