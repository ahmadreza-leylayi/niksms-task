'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("website")

  const tabs = [
    {
      id: "website",
      label: "پاسخ گویی خودکار وب سایت",
      icon: "/icon/earth.png",
      image: "/features/slide1.png",
      title: "پاسخ گویی خودکار وب سایت",
      description: "با ارائه پاسخ های دقیق و فوری به بازدید کنندگان، تجربه کاربری را بهبود دهید، نرخ تبدیل را افزایش دهید و جریان فروش خود را به صورت مداوم بهینه کنید.",
      ctaText: "مشاوره رایگان :"
    },
    {
      id: "phone",
      label: "پاسخ گویی تلفنی هوشمند",
      icon: "/icon/phone.png",
      image: "/features/slide1.png",
      title: "پاسخ گویی تلفنی هوشمند",
      description: "با سیستم پاسخگویی تلفنی هوشمند، تمام تماس‌های مشتریان را به صورت خودکار مدیریت کنید و در هر لحظه پاسخگو باشید.",
      ctaText: "مشاوره رایگان :"
    },
    {
      id: "chat",
      label: "مدیریت پیام ها و چت ها",
      icon: "/icon/chat.png",
      image: "/features/slide1.png",
      title: "مدیریت پیام ها و چت ها",
      description: "تمام پیام‌ها و چت‌های مشتریان را از یک پنل واحد مدیریت کنید و پاسخ‌های سریع و دقیق ارائه دهید.",
      ctaText: "مشاوره رایگان :"
    },
    {
      id: "analytics",
      label: "دریافت اطلاعات و ارزیابی",
      icon: "/icon/lamp.png",
      image: "/features/slide1.png",
      title: "دریافت اطلاعات و ارزیابی",
      description: "با سیستم تحلیل و ارزیابی پیشرفته، عملکرد خود را بررسی کنید و تصمیم‌های بهتری بگیرید.",
      ctaText: "مشاوره رایگان :"
    }
  ]

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <section className="features-section" style={{
      padding: '80px 5%',
      backgroundColor: '#FFFFFF',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        gap: '20px',

      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
          borderRadius: '20px',
          padding: '10px 20px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          width: 'fit-content',
          margin: '0 auto',
         
        }}>
          <Image src="/icon/lightness.png" alt="lightning" width={20} height={20} />
          <span style={{
            fontSize: '0.9rem',
            color: '#666',
          }}>
            پاسخ فوری رمز موفقیت در بازاریابی دیجیتال
          </span>
        </div>

        {/* Main Heading */}
        <h2 style={{
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          fontWeight: 'bold',
          color: '#1a1a1a',
          lineHeight: '1.3',
          margin: '0 0 16px 0',
          maxWidth: '50%',
        }}>
          بیش از ۹۰٪ مشتریان انتظار دارند بلافاصله پاسخ بگیرند، اگر شما پاسخ ندهید، رقیبتان میدهد!
        </h2>

        {/* Sub-paragraph */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: '#666',
          lineHeight: '1.8',
          margin: '0 0 60px 0',
          maxWidth: '800px',
        }}>
          ما به شما کمک میکنیم تا در هر لحظه، پیامها و تماسهای مشتریان را به صورت خودکار و بدون تأخیر مدیریت کنید.
        </p>

        {/* Two Column Layout */}
        <div style={{
          display: 'flex',
          gap: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          minHeight: '600px',
        }}>
          {/* Left Column - Tabs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minWidth: '280px',
          }}>
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: activeTab === tab.id ? '#F0F2F5' : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'right',
                  width: '100%',
                  transition: 'all 0.3s ease',
                }}
              >
                <Image 
                  src={tab.icon} 
                  alt={tab.label} 
                  width={24} 
                  height={24} 
                />
                <span style={{
                  fontSize: '1rem',
                  color: '#333',
                  fontWeight: activeTab === tab.id ? '600' : '400',
                  flex: 1,
                }}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}>
            {/* Image/Interface */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  minHeight: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  width={600}
                  height={400}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Title and Description */}
            <div>
              <h3 style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 'bold',
                color: '#1a1a1a',
                margin: '0 0 16px 0',
              }}>
                {activeTabData.title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 1vw, 1rem)',
                color: '#666',
                lineHeight: '1.8',
                margin: 0,
                textAlign:"center"
              }}>
                {activeTabData.description}
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '8px',
                backgroundColor: '#FFFF',
                border: '1px solid #E0E7EB',
                cursor: 'pointer',
                fontSize: '1rem',
                color: '#333',
                fontWeight: '500',
                alignSelf: 'flex-start',
                textAlign:"center",
                margin:"0 auto"
              }}
            >
              {activeTabData.ctaText}
              <Image src="/icon/share.png" alt="lightning" width={16} height={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

