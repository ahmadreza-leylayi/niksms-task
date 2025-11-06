'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SliderSection() {
  const [activeVerticalSlide, setActiveVerticalSlide] = useState(0)
  const [activeHorizontalSlide, setActiveHorizontalSlide] = useState(0)

  const verticalTestimonials = [
    {
      id: 1,
      name: "سی میسورن",
      company: "شرکت رهپویان نوین سیستم",
      avatar: "/slider/avatar1.png",
      image: "/slider/slider1.png",
    },
    {
      id: 2,
      name: "محمدرضا شریفی",
      company: "شرکت فناوری داده گستر پارس",
      avatar: "/slider/avatar1.png",
      image: "/slider/slider1.png",
    },
    {
      id: 3,
      name: "نام شخص",
      company: "نام شرکت",
      avatar: "/slider/avatar1.png",
      image: "/slider/slider1.png",
    },
  ]

  const rightColumnCards = [
    {
      id: 1,
      type: "testimonial",
      headerIcon: "",
      headerText: "همکاری با برترین برندها",
      quote: "تفاوت این تیم در تحلیل داده و دقت در جزئیات است. همکاری با آنها یکی از بهترین تصمیم های بازاریابی ما بود.",
      footerName: "مدیر بازاریابی مارکتینگ ۷۸۰",
      footerDots: ["#3B82F6", "#8B5CF6", "#EC4899"],
    },
    {
      id: 2,
      type: "stat",
      number: "+۱۲۰ هزار",
      label: "برند جهانی",
      description: "اتصال کسب و کارها برای رشد و موفقیت در سطح جهانی",
      icon: "",
    },
  ]

  const companyLogos = [
    { id: 1, logo: "/slider/logo1.png" },
    { id: 2, logo: "/slider/logo2.png" },
    { id: 3, logo: "/slider/logo3.png" },
    { id: 4, logo: "/slider/logo4.png" },
    { id: 5, logo: "/slider/logo5.png" },
    { id: 6, logo: "/slider/logo6.png" },
    { id: 7, logo: "/slider/logo7.png" },
    { id: 8, logo: "/slider/logo8.png" },
    { id: 9, logo: "/slider/logo1.png" },
    { id: 10, logo: "/slider/logo2.png" },
    { id: 11, logo: "/slider/logo3.png" },
    { id: 12, logo: "/slider/logo5.png" },
    { id: 13, logo: "/slider/logo6.png" },
    { id: 14, logo: "/slider/logo7.png" },
    { id: 15, logo: "/slider/logo8.png" },
    { id: 16, logo: "/slider/logo1.png" },
    { id: 17, logo: "/slider/logo2.png" },
    { id: 18, logo: "/slider/logo3.png" },
    { id: 19, logo: "/slider/logo5.png" },
  ]

  const nextVerticalSlide = () => {
    setActiveVerticalSlide((prev) =>
      prev < verticalTestimonials.length - 1 ? prev + 1 : 0
    )
  }

  const prevVerticalSlide = () => {
    setActiveVerticalSlide((prev) =>
      prev > 0 ? prev - 1 : verticalTestimonials.length - 1
    )
  }

  const nextHorizontalSlide = () => {
    setActiveHorizontalSlide((prev) =>
      prev < Math.ceil(companyLogos.length / 10) - 1 ? prev + 1 : 0
    )
  }

  const prevHorizontalSlide = () => {
    setActiveHorizontalSlide((prev) =>
      prev > 0 ? prev - 1 : Math.ceil(companyLogos.length / 10) - 1
    )
  }

  const getCurrentLogos = () => {
    const start = activeHorizontalSlide * 10
    return companyLogos.slice(start, start + 10)
  }

  return (
    <section className="slider-section" style={{
      padding: '80px 5%',
      backgroundColor: '#F5F5F5',
      backgroundImage: 'radial-gradient(circle, #E0E0E0 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      color: '#333',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}>
        {/* کارت testimonial بالا (موبایل) */}
        <div className="mobile-card-top" style={{
          backgroundColor: '#FFFFFF',
          border: '2px solid #BFDBFE',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            {rightColumnCards[0].headerIcon ? (
              <Image src={rightColumnCards[0].headerIcon} alt="" width={24} height={24} />
            ) : (
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#FFA500',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2L9.5 6L14 6.5L10.5 9.5L11.5 14L8 11.5L4.5 14L5.5 9.5L2 6.5L6.5 6L8 2Z" fill="#FFFFFF" />
                </svg>
              </div>
            )}
            <span style={{
              fontSize: '0.9rem',
              color: '#666',
              fontWeight: '500',
            }}>
              {rightColumnCards[0].headerText}
            </span>
          </div>

          {/* Quote */}
          <p style={{
            fontSize: '0.9rem',
            lineHeight: '1.7',
            color: '#333',
            margin: 0,
            textAlign: 'right',
          }}>
            "{rightColumnCards[0].quote}"
          </p>

          {/* Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
          }}>
            <div style={{
              fontSize: '0.85rem',
              color: '#666',
              fontWeight: '500',
            }}>
              {rightColumnCards[0].footerName}
            </div>
            <div style={{
              display: 'flex',
              gap: '6px',
            }}>
              {rightColumnCards[0].footerDots?.map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* بخش اصلی با testimonial و ستون سمت راست */}
        <div className="main-slider-container" style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'stretch',
          position: 'relative',
        }}>
          {/* دکمه‌های ناوبری عمودی - سمت چپ (دسکتاپ) */}
          <div className="vertical-nav-buttons desktop-nav" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}>
            <motion.button
              onClick={prevVerticalSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                rotate: '90deg',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L6 10L10 14" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextVerticalSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                rotate: '90deg',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14L14 10L10 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>

          {/* ستون سمت راست - دو کارت عمودی (دسکتاپ) */}
          <div className="right-column-cards desktop-cards" style={{
            flex: '0 0 380px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignSelf: 'stretch',
          }}>
            {/* کارت testimonial بالا */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #BFDBFE',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                {rightColumnCards[0].headerIcon ? (
                  <Image src={rightColumnCards[0].headerIcon} alt="" width={24} height={24} />
                ) : (
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#FFA500',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2L9.5 6L14 6.5L10.5 9.5L11.5 14L8 11.5L4.5 14L5.5 9.5L2 6.5L6.5 6L8 2Z" fill="#FFFFFF" />
                    </svg>
                  </div>
                )}
                <span style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  fontWeight: '500',
                }}>
                  {rightColumnCards[0].headerText}
                </span>
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#333',
                margin: 0,
                textAlign: 'right',
              }}>
                "{rightColumnCards[0].quote}"
              </p>

              {/* Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  fontWeight: '500',
                }}>
                  {rightColumnCards[0].footerName}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '6px',
                }}>
                  {rightColumnCards[0].footerDots?.map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* کارت آمار پایین */}
            <div style={{
              backgroundColor: '#1F2937',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
            }}>
              {/* آیکون تیک سبز */}
              <div style={{
                flexShrink: 0,
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {rightColumnCards[1].icon ? (
                  <Image src={rightColumnCards[1].icon} alt="" width={40} height={40} />
                ) : (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 8L12 22L6 16" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              {/* متن */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                }}>
                  {rightColumnCards[1].number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#D1D5DB',
                  fontWeight: '500',
                }}>
                  {rightColumnCards[1].label}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#9CA3AF',
                  lineHeight: '1.6',
                  marginTop: '4px',
                }}>
                  {rightColumnCards[1].description}
                </div>
              </div>
            </div>
          </div>

          {/* کارت testimonial اصلی - سمت چپ */}
          <div className="vertical-testimonial-card" style={{
            flex: 1,
            backgroundColor: '#F8F8F8',
            borderRadius: '16px',
            padding: '48px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            marginLeft: '60px',
            alignSelf: 'stretch',
            overflow: 'hidden',
          }}>
            {/* Desktop: نمایش یک testimonial */}
            <div className="desktop-testimonial-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVerticalSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    flex: 1,
                  }}
                >
                  {/* Testimonial قبلی (نیمه بالا) */}
                  {activeVerticalSlide > 0 && (
                    <div style={{
                      opacity: 0.4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingBottom: '24px',
                      borderBottom: '1px solid rgba(0,0,0,0.1)',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#E0E0E0',
                        border: '2px solid #F0F0F0',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}>
                        {verticalTestimonials[activeVerticalSlide - 1]?.avatar ? (
                          <Image
                            src={verticalTestimonials[activeVerticalSlide - 1].avatar}
                            alt=""
                            width={48}
                            height={48}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#D0D0D0',
                          }} />
                        )}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          color: '#666',
                          marginBottom: '4px',
                        }}>
                          {verticalTestimonials[activeVerticalSlide - 1]?.name}
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#999',
                        }}>
                          {verticalTestimonials[activeVerticalSlide - 1]?.company}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* عکس testimonial */}
                  <div style={{
                    position: 'relative',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#F5F5F5',
                  }}>
                    {verticalTestimonials[activeVerticalSlide]?.image ? (
                      <Image
                        src={verticalTestimonials[activeVerticalSlide].image}
                        alt={verticalTestimonials[activeVerticalSlide]?.name || ''}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <div style={{
                        padding: '40px',
                        textAlign: 'center',
                        color: '#999',
                      }}>
                        <p style={{ fontSize: '1rem', margin: 0 }}>
                          جای عکس testimonial
                        </p>
                      </div>
                    )}
                  </div>

                  {/* اطلاعات شخص - پایین */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    justifyContent: 'flex-end',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                  }}>
                    <div style={{
                      textAlign: 'right',
                    }}>
                      <div style={{
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '6px',
                      }}>
                        {verticalTestimonials[activeVerticalSlide]?.name}
                      </div>
                      {verticalTestimonials[activeVerticalSlide]?.company && (
                        <div style={{
                          fontSize: '1rem',
                          color: '#666',
                        }}>
                          {verticalTestimonials[activeVerticalSlide]?.company}
                        </div>
                      )}
                    </div>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#E0E0E0',
                      border: '3px solid #F0F0F0',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}>
                      {verticalTestimonials[activeVerticalSlide]?.avatar ? (
                        <Image
                          src={verticalTestimonials[activeVerticalSlide].avatar}
                          alt={verticalTestimonials[activeVerticalSlide]?.name || ''}
                          width={64}
                          height={64}
                          style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#D0D0D0',
                        }} />
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile/Tablet: نمایش testimonial با دکمه‌های navigation */}
            <div className="mobile-testimonial-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVerticalSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    flex: 1,
                  }}
                >
                  {/* عکس testimonial */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '250px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#F5F5F5',
                  }}>
                    {verticalTestimonials[activeVerticalSlide]?.image ? (
                      <Image
                        src={verticalTestimonials[activeVerticalSlide].image}
                        alt={verticalTestimonials[activeVerticalSlide]?.name || ''}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <div style={{
                        padding: '20px',
                        textAlign: 'center',
                        color: '#999',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                      }}>
                        <p style={{ fontSize: '0.9rem', margin: 0 }}>
                          جای عکس testimonial
                        </p>
                      </div>
                    )}
                  </div>

                  {/* اطلاعات شخص */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    justifyContent: 'flex-end',
                  }}>
                    <div style={{
                      textAlign: 'right',
                    }}>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '4px',
                      }}>
                        {verticalTestimonials[activeVerticalSlide]?.name}
                      </div>
                      {verticalTestimonials[activeVerticalSlide]?.company && (
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#666',
                        }}>
                          {verticalTestimonials[activeVerticalSlide]?.company}
                        </div>
                      )}
                    </div>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#E0E0E0',
                      border: '2px solid #F0F0F0',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}>
                      {verticalTestimonials[activeVerticalSlide]?.avatar ? (
                        <Image
                          src={verticalTestimonials[activeVerticalSlide].avatar}
                          alt={verticalTestimonials[activeVerticalSlide]?.name || ''}
                          width={48}
                          height={48}
                          style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#D0D0D0',
                        }} />
                      )}
                    </div>
                  </div>

                  {/* دکمه‌های navigation موبایل */}
                  <div className="mobile-nav-buttons" style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    marginTop: '16px',
                  }}>
                    <motion.button
                      onClick={prevVerticalSlide}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(105, 105, 105, 0.1)',
                        border: '2px solid #E5E7EB',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: '#333',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      قبلی
                    </motion.button>
                    <motion.button
                      onClick={nextVerticalSlide}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(105, 105, 105, 0.1)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: '#333',
                        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      بعدی
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* کارت آمار پایین (موبایل) */}
        <div className="mobile-card-bottom" style={{
          backgroundColor: '#1F2937',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
        }}>
          {/* آیکون تیک سبز */}
          <div style={{
            flexShrink: 0,
            width: '56px',
            height: '56px',
            borderRadius: '12px',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {rightColumnCards[1].icon ? (
              <Image src={rightColumnCards[1].icon} alt="" width={32} height={32} />
            ) : (
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 8L12 22L6 16" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>

          {/* متن */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            flex: 1,
          }}>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
              {rightColumnCards[1].number}
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#D1D5DB',
              fontWeight: '500',
            }}>
              {rightColumnCards[1].label}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: '#9CA3AF',
              lineHeight: '1.5',
              marginTop: '4px',
            }}>
              {rightColumnCards[1].description}
            </div>
          </div>
        </div>

        {/* اسلایدر افقی لوگوها */}
        <div className="horizontal-logo-slider" style={{
          width: '100%',
          position: 'relative',
        }}>
          {/* دکمه‌های ناوبری افقی (دسکتاپ) */}
          <motion.button
            className="horizontal-nav-btn prev-btn desktop-nav"
            onClick={prevHorizontalSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <motion.button
            className="horizontal-nav-btn next-btn desktop-nav"
            onClick={nextHorizontalSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          {/* گرید لوگوها */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHorizontalSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: '16px',
              }}
              className="desktop-logo-grid"
            >
              {getCurrentLogos().map((company) => (
                <div
                  key={company.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={`Logo ${company.id}`}
                      width={120}
                      height={60}
                      style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999',
                      fontSize: '0.8rem',
                    }}>
                      لوگو {company.id}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* موبایل: نمایش لوگوها با دکمه‌های navigation */}
          <div className="mobile-logo-wrapper" style={{
            backgroundColor: '#F8F8F8',
            borderRadius: '16px',
            padding: '16px',
            overflow: 'hidden',
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHorizontalSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '12px',
                }}
              >
                {getCurrentLogos().slice(0, 10).map((company) => (
                  <div
                    key={company.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '80px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                  >
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt={`Logo ${company.id}`}
                        width={80}
                        height={40}
                        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#F5F5F5',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        fontSize: '0.7rem',
                      }}>
                        لوگو {company.id}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* دکمه‌های navigation موبایل */}
            <div className="mobile-logo-nav-buttons" style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '20px',
            }}>
              <motion.button
                onClick={prevHorizontalSlide}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(105, 105, 105, 0.1)',
                  border: '2px solid #E5E7EB',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#333',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                قبلی
              </motion.button>
              <motion.button
                onClick={nextHorizontalSlide}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(105, 105, 105, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#333',
                  boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
                }}
              >
                بعدی
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
