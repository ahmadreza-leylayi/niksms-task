'use client'
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "home", label: "خانه", icon: "/icon/home.png" },
    { id: "features", label: "ویژگی‌ها", icon: "/icon/propertie.png" },
    { id: "video", label: "ویدیو معرفی", icon: "/icon/video.png" },
    { id: "plans", label: "پلن‌ها", icon: "/icon/plans.png" },
    { id: "comments", label: "نظرات کاربران", icon: "/icon/comments.png" },
  ]

  return (
    <>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', top: '10px', left: '0', right: '0', zIndex: 1000 }}>
        {/* لوگو و متن "نیک تست" */}
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <Image src="/icon/nik-sms.png" alt="Nik SMS Logo" width={48} height={48} />
          <h5>نیک تست</h5>
        </div>

        {/* فاصله دهنده */}
        <div className="navbar-spacer" style={{ flex: 1 }} />

        {/* تب‌های ناوبری - دسکتاپ */}
        <div className="nav-links desktop-nav">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              animate={{
                backgroundColor: activeTab === tab.id ? "#F0F2F5" : "transparent",
                borderRadius: activeTab === tab.id ? "8px" : "8px",
                scale: activeTab === tab.id ? 1 : 1,
                opacity: activeTab === tab.id ? 1 : 0.6,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: "6px 12px",
                minWidth: "fit-content",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab === tab.id ? tab.icon : "close"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={activeTab === tab.id ? tab.icon : "/icon/close.png"}
                    alt={tab.label}
                    width={16}
                    height={16}
                  />
                </motion.div>
              </AnimatePresence>
              <h5 style={{ fontSize: "0.9rem", margin: 0, color: '#333' }}>{tab.label}</h5>
            </motion.div>
          ))}
        </div>

        {/* فاصله دهنده */}
        <div className="navbar-spacer" style={{ flex: 1 }} />

        {/* دکمه‌های ورود و ثبت نام - دسکتاپ */}
        <div className="navbar-actions desktop-nav" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', height: '100%' }}>
          <motion.a
            href="#login"
            whileHover={{ opacity: 0.7 }}
            style={{
              color: '#333',
              fontSize: '0.9rem',
              textDecoration: 'none',
              cursor: 'pointer',
              marginLeft: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
              lineHeight: '32px',
              boxSizing: 'border-box',
              height: '32px',
              minHeight: '32px',
              fontFamily: 'inherit',
              margin: 0,
            }}
          >
            ورود
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: '#E0E7EB',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '16px',
              lineHeight: '1',
              boxSizing: 'border-box',
              height: '32px',
              minHeight: '32px',
              fontFamily: 'inherit',
              margin: 0,
            }}
          >
            <span style={{ color: '#999', fontSize: '0.8rem', fontWeight: '300', lineHeight: '1', display: 'flex', alignItems: 'center' }}>+</span>
            <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1', display: 'flex', alignItems: 'center' }}>ثبت نام</span>
          </motion.button>
        </div>

        {/* دکمه همبرگر - موبایل */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1001,
          }}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '2px',
            }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '2px',
            }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '2px',
            }}
          />
        </motion.button>
      </nav>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '5%',
              right: '5%',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              zIndex: 1000,
              overflow: 'hidden',
              direction: 'rtl',
            }}
          >
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* تب‌های ناوبری موبایل */}
              {tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsMobileMenuOpen(false)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: activeTab === tab.id ? "#F0F2F5" : "transparent",
                  }}
                >
                  <Image
                    src={activeTab === tab.id ? tab.icon : "/icon/close.png"}
                    alt={tab.label}
                    width={20}
                    height={20}
                  />
                  <span style={{ fontSize: '1rem', color: '#333', fontWeight: activeTab === tab.id ? '600' : '400' }}>
                    {tab.label}
                  </span>
                </motion.div>
              ))}

              {/* دکمه‌های ورود و ثبت نام موبایل */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px', paddingTop: '16px', borderTop: '1px solid #E0E7EB' }}>
                <motion.a
                  href="#login"
                  whileTap={{ scale: 0.98 }}
                  style={{
                    color: '#333',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    padding: '12px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    border: '1px solid #E0E7EB',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ورود
                </motion.a>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#E0E7EB',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    color: '#333',
                    fontWeight: '500',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span style={{ color: '#999', fontSize: '0.8rem', fontWeight: '300' }}>+</span>
                  <span>ثبت نام</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
