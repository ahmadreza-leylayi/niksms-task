'use client'
import Image from "next/image"

export default function CtaSection() {
  // آدرس عکس را اینجا قرار دهید
  const imageUrl = "/cta/logo.png" // کاربر خودش آدرس را می‌دهد

  return (
    <section className="cta-section" style={{
      padding: '80px 5%',
      backgroundColor: '#FFFFFF',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: '60px',
        position: 'relative',
      }}>
        {/* سمت چپ - بخش بصری با الگوی باینری */}
        <div style={{
          flex: '1',
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* پس‌زمینه الگوی باینری */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            overflow: 'hidden',
          }}>
            {/* الگوی باینری پراکنده */}
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${10 + Math.random() * 16}px`,
                  color: `rgba(0, 0, 0, ${0.05 + Math.random() * 0.1})`,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {Math.random() > 0.5 ? '0' : '1'}
              </div>
            ))}
          </div>

          {/* عکس دایره‌ای مرکزی */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '12px solid #E8F0F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: '#F0F4F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="CTA Image"
                  width={320}
                  height={320}
                  style={{
                    objectFit: 'contain',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '1rem',
                }}>
                  جای عکس
                </div>
              )}
            </div>
          </div>
        </div>

        {/* سمت راست - محتوای متنی */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          paddingLeft: '40px',
        }}>
          {/* Badge سبز */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#FFFF',
            borderRadius: '8px',
            padding: '12px 20px',
            width: 'fit-content',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E0E7EB',
            
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#10B981',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4V12M4 8H12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{
              fontSize: '0.95rem',
              color: '#065F46',
              fontWeight: '500',
            }}>
              همین حالا همراه ما باشید !
            </span>
          </div>

          {/* عنوان اصلی */}
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1F2937',
            lineHeight: '1.3',
            margin: 0,
          }}>
            حالا نوبت شماست که نتیجه را تجربه کنید
          </h2>

          {/* متن توضیحات */}
          <p style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            lineHeight: '1.8',
            margin: 0,
          }}>
            صدها برند ایرانی با ما رشد کرده اند. شما هم میتوانید داستان موفقیت بعدی باشید.
          </p>

          {/* دکمه CTA */}
          <div style={{
            marginTop: '8px',
          }}>
            <button style={{
              backgroundColor: '#EBF3FA',
              border: 'none',
              borderRadius: '8px',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#1F2937',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C7D2FE'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E0E7FF'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
            >
              درخواست دریافت مشاوره 
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
