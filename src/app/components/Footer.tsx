'use client'
import Image from "next/image"
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#212121',
      borderRadius: '24px 24px 0 0',
      padding: '60px 5% 40px',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      color: '#FFFFFF',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}>
        {/* بخش بالا - لوگو و متن توضیحات */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}>
          {/* لوگو */}
          <div style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         <Image src="/footer/logo.png" alt="Logo" width={60} height={60} />
          </div>

          {/* متن توضیحات */}
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: '#E5E5E5',
            textAlign: 'center',
            maxWidth: '800px',
            margin: 0,
          }}>
            ما با ارائه راهکارهای هوشمند بازاریابی دیجیتال به کسب و کارها کمک میکنیم تا بدون ریسک تبلیغات مؤثرتر و بازده بیشتری از سرمایه گذاری خود در فضای آنلاین تجربه کنند.
          </p>
        </div>

        {/* بخش میانی - لینک‌های ناوبری */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}>
          {/* لینک‌های ناوبری */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {/* خانه */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                backgroundColor: '#333333',
                borderRadius: '6px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#404040'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#333333'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.5L2 6.5V14H6V10H10V14H14V6.5L8 1.5Z" fill="#FFFFFF" />
              </svg>
              خانه
            </a>

            <span style={{ color: '#666666', fontSize: '1rem', padding: '0 4px' }}>+</span>

            {/* پلن ها */}
            <a
              href="#"
              style={{
                padding: '8px 16px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              پلن ها
            </a>

            <span style={{ color: '#666666', fontSize: '1rem', padding: '0 4px' }}>+</span>

            {/* ویژگی ها */}
            <a
              href="#"
              style={{
                padding: '8px 16px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              ویژگی ها
            </a>

            <span style={{ color: '#666666', fontSize: '1rem', padding: '0 4px' }}>+</span>

            {/* تماس با ما */}
            <a
              href="#"
              style={{
                padding: '8px 16px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              تماس با ما
            </a>

            <span style={{ color: '#666666', fontSize: '1rem', padding: '0 4px' }}>+</span>

            {/* نظرات کاربران */}
            <a
              href="#"
              style={{
                padding: '8px 16px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              نظرات کاربران
            </a>
          </nav>

          {/* خط جداکننده */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#404040',
            maxWidth: '1200px',
          }} />
        </div>

        {/* بخش پایین - شبکه‌های اجتماعی و کپی‌رایت */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          {/* شبکه‌های اجتماعی */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            {/* اینستاگرام */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
              </svg>
              اینستاگرام
            </a>

            {/* خط جداکننده عمودی */}
            <div style={{
              width: '1px',
              height: '20px',
              backgroundColor: '#404040',
            }} />

            {/* تلگرام */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E5E5E5',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E5E5E5'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 2.5L1.5 9.5L6.5 11.5L13.5 6.5L9.5 13.5L11.5 18.5L17.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              تلگرام
            </a>
          </div>

          {/* کپی‌رایت */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#E5E5E5',
            fontSize: '0.95rem',
          }}>
            <span>©</span>
            <span>تمامی حقوق برای نیک اس ام اس محفوظ است.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

