'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PricingSection() {
  const userCountOptions = [500, 1000, 1500, 2000, 2500]

  const plans = [
    {
      id: 'free',
      title: 'رایگان',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'مناسب برای شروع فعالیت های دیجیتال مارکتینگ',
      buttonText: 'شروع رایگان ',
      features: [
        'مدیریت تا ۱۰,۰۰۰ رویداد در ماه',
        'ارسال پیام از طریق ایمیل، پیامک',
        'امکان ایجاد تا ۲۰ کمپین یا گردش کار',
        '۲ محیط کاری (تست و اصلی)'
      ],
      highlighted: false
    },
    {
      id: 'professional',
      title: 'حرفه ای',
      monthlyPrice: 1800000,
      annualPrice: 18000000,
      description: 'مناسب کسب کارهایی با مقیاس پذیری، برندینگ اختصاصی',
      buttonText: 'شروع نسخه آزمایشی ',
      features: [
        'مدیریت تا ۳۰,۰۰۰ رویداد در ماه',
        'نگهداری گزارش ها تا ۷ روز',
        'امکان ایجاد تا ۵۰ کمپین یا گردش کار',
        'پشتیبانی اولویت دار از طریق چت و تیکت'
      ],
      highlighted: true
    },
    {
      id: 'team',
      title: 'تیمی',
      monthlyPrice: 15000000,
      annualPrice: 150000000,
      description: 'راهکاری جامع برای شرکت ها و تیم های مارکتینگ',
      buttonText: 'شروع رایگان ',
      features: [
        'مدیریت تا ۳۰,۰۰۰ رویداد در ماه',
        'ارسال پیام از طریق ایمیل، پیامک',
        'امکان ایجاد تا ۲۰ کمپین یا گردش کار',
        '۲ محیط کاری (تست و اصلی)'
      ],
      highlighted: false
    },
    {
      id: 'enterprise',
      title: 'سازمانی',
      monthlyPrice: null,
      annualPrice: null,
      description: 'ویژه سازمانها و برندهای بزرگ با نیازهای خاص',
      buttonText: 'تماس بگیرید ',
      features: [
        'مدیریت بیش از ۵ میلیون رویداد در ماه',
        'محیط های کاری نامحدود',
        'تنظیم مدت نگهداری داده ها به صورت سفارشی',
        'پشتیبانی اختصاصی و قرارداد SLA'
      ],
      highlighted: false
    }
  ]

  const [userCount, setUserCount] = useState(500)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null)

  const formatPrice = (price: number | null) => {
    if (price === null) return 'سفارشی'
    return price.toLocaleString('fa-IR')
  }

  const getPrice = (plan: typeof plans[0]) => {
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice
    return formatPrice(price)
  }

  return (
    <section className="pricing-section" style={{
      padding: '80px 1%',
      backgroundColor: 'linear-gradient(to bottom, #1a1a1a,rgb(81, 77, 77))',
      background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      color: '#FFFFFF',
      minHeight: '100vh',
      width: '98%',
      margin: '0 auto',
      borderRadius: '15px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1800px',
        margin: '0 auto',
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        padding: '40px 15px',
      }}>
        {/* Support Button - Top Left */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#22C55E',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
        >
          <span>سوال دارم !</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="10" cy="7" r="1" fill="currentColor"/>
          </svg>
        </motion.button>

        {/* Support Link */}
        <a
          href="#support"
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            color: '#9CA3AF',
            textDecoration: 'none',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          ارتباط با پشتیبانی
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
          marginTop: '100px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          padding: '10px',
          width: 'fit-content',
          backgroundColor: 'rgba(72, 70, 70, 0.56)',
        }}>
          <Image src="/icon/money.png" alt="coin" width={20} height={20} />
          <span style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.8)',
          }}>
            پلن ها راه شما را هموارتر خواهند کرد
          </span>
        </div>

        {/* Main Heading */}
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 'bold',
          color: '#FFFFFF',
          lineHeight: '1.2',
          margin: '0 0 16px 0',
        }}>
          پلن های قابل شخصی سازی
        </h2>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#9CA3AF',
          lineHeight: '1.8',
          margin: '0 0 60px 0',
          maxWidth: '800px',
        }}>
          شما میتوانید بر اساس نیاز خود و تعداد کاربرای خود یکی از پلن ها رو برای داشتن بهترین نتیجه انتخاب کنید
        </p>

        {/* User Count Section */}
        <div style={{
          marginBottom: '50px',
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#FFFFFF',
            marginBottom: '50px',
            fontWeight: '500',
          }}>
            تعداد کاربران فعال پلتفرم شما در حال حاضر چقدر است؟
          </p>

          {/* Slider Container */}
          <div style={{
            position: 'relative',
            marginBottom: '16px',
            paddingTop: '50px',
          }}>
            {/* Selected Value Display */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: `${((userCountOptions.indexOf(userCount) / (userCountOptions.length - 1)) * 100)}%`,
              transform: 'translateX(50%)',
            }}>
              <div style={{
                backgroundColor: '#374151',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                position: 'relative',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                width: 'fit-content',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                {userCount.toLocaleString('fa-IR')} کاربر
                <div style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '50%',
                  transform: 'translateX(50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid #374151',
                }} />
              </div>
            </div>

            {/* Slider Track */}
            <div style={{
              position: 'relative',
              height: '10px',
              backgroundColor: '#374151',
              borderRadius: '5px',
              marginBottom: '50px',
            }}>
              {/* Filled Track - از راست */}
              <div style={{
                position: 'absolute',
                right: 0,
                width: `${(userCountOptions.indexOf(userCount) / (userCountOptions.length - 1)) * 100}%`,
                height: '100%',
                backgroundColor: '#6B7280',
                borderRadius: '5px',
                transition: 'width 0.3s ease',
              }} />

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max={userCountOptions.length - 1}
                value={userCountOptions.indexOf(userCount)}
                onChange={(e) => {
                  const index = parseInt(e.target.value)
                  setUserCount(userCountOptions[index])
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                  zIndex: 2,
                  direction: 'rtl',
                }}
              />

              {/* Slider Handle Visual - از راست */}
              <motion.div
                animate={{
                  right: `${(userCountOptions.indexOf(userCount) / (userCountOptions.length - 1)) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  zIndex: 1,
                  border: '2px solid #6B7280',
                }}
              />

              {/* Labels */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px',
                padding: '0 10px',
                position: 'absolute',
                top: '100%',
                width: '100%',
                left: 0,
              }}>
                {userCountOptions.map((count) => (
                  <button
                    key={count}
                    onClick={() => setUserCount(count)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#9CA3AF',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: '8px 4px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9CA3AF'
                    }}
                  >
                    {count === 2500 ? 'بیش از ۲۰۰۰ کاربر' : `${count.toLocaleString('fa-IR')} کاربر`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Current Status */}
          <p style={{
            fontSize: '1rem',
            color: '#9CA3AF',
            marginTop: '80px',
          }}>
            در حال حاضر، پلتفرم ما بیش از{' '}
            <span style={{
              backgroundColor: '#374151',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              
            }}>
              {userCount.toLocaleString('fa-IR')} کاربر
            </span>
            {' '}کاربر فعال دارد !
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'flex',
            backgroundColor: '#374151',
            borderRadius: '12px',
            padding: '4px',
            gap: '4px',
          }}>
            <motion.button
              onClick={() => setBillingCycle('monthly')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '12px 32px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: billingCycle === 'monthly' ? '#6B7280' : 'transparent',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: billingCycle === 'monthly' ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              ماهانه
            </motion.button>
            <motion.button
              onClick={() => setBillingCycle('annual')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '12px 32px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: billingCycle === 'annual' ? '#6B7280' : 'transparent',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: billingCycle === 'annual' ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              سالانه
            </motion.button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '40px',
          width: '100%',
        }}>
          {plans.map((plan) => {
            const isSelected = selectedPlanId === plan.id
            return (
            <motion.div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: isSelected 
                  ? 'linear-gradient(135deg, #1F272A 0%,rgb(49, 65, 72) 100%)' 
                  : 'linear-gradient(135deg, rgba(65, 63, 63, 0.9) 0%, rgba(35, 33, 33, 0.9) 100%)',
                border: isSelected ? '2px solid rgb(48, 117, 119)' : 'none',
                borderRadius: '20px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                width: '100%',
                minHeight: 'auto',
              }}
            >
              {/* Title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                margin: 0,
              }}>
                {plan.title}
              </h3>

              {/* Price */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '6px',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                }}>
                  {getPrice(plan)}
                </span>
                {plan.monthlyPrice !== null && (
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#9CA3AF',
                  }}>
                    تومان / {billingCycle === 'monthly' ? 'ماهانه' : 'سالانه'}
                  </span>
                )}
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.85rem',
                color: '#9CA3AF',
                lineHeight: '1.5',
                margin: 0,
              }}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: isSelected ? '#FFFF' : '#374151',
                  color: isSelected ? 'black' : '#FFFF',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                {plan.buttonText}
                <Image src="/icon/share.png" alt="lightning" width={12} height={12} />
              </motion.button>

              {/* Features List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: 'auto',
              }}>
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: '#6B7280',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#D1D5DB',
                      lineHeight: '1.5',
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
