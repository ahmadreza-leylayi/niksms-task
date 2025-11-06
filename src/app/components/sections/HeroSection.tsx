'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="hero-section" style={{
      padding: '60px 5%',
      backgroundColor: '#FFFFFF',
      direction: 'rtl',
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'clamp(20px, 5vw, 40px)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '10px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(24px, 5vw, 40px)',
      }}>
        {/* دکمه‌های بالا */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'white',
              border: '1px solid gray',
              cursor: 'pointer',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              color: '#333',
              whiteSpace: 'nowrap',
            }}
          >
            همراه مطمئن در مسیر بازاریابی آنلاین
          </motion.button>
            
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'white',
              border: '1px solid gray',
              cursor: 'pointer',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            بیشتر بخوانید
            <Image src="/icon/left.png" alt="arrow-left" width={16} height={16} />
          </motion.button>
        </div>

        {/* عنوان اصلی */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#1a1a1a',
            lineHeight: '1.2',
            margin: 0,
            maxWidth: '900px',
          }}
        >
          راهکار جامع بازاریابی دیجیتال برای رشد پایدار کسب و کارها
        </motion.h1>

        {/* توضیحات */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            color: '#666',
            lineHeight: '1.8',
            margin: 0,
            maxWidth: '800px',
          }}
        >
          از برنامه‌ریزی تا اجرا و تحلیل عملکرد، همه چیز را در یک مسیر منسجم و قابل اندازه‌گیری پیش ببرید. ما کمک می‌کنیم تا هر تصمیم، دقیق‌تر گرفته شود و هر اقدام هدفمندتر انجام گیرد.
        </motion.p>

        {/* دکمه‌های CTA */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(12px, 3vw, 14px) clamp(20px, 4vw, 28px)',
              borderRadius: '8px',
              backgroundColor: '#E0E7EB',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#333',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            ثبت نام 
            <Image src="/icon/share.png" alt="register" width={15} height={15} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(12px, 3vw, 14px) clamp(20px, 4vw, 28px)',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E7EB',
              cursor: 'pointer',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#333',
              fontWeight: '500',
              whiteSpace: 'nowrap',
            }}
          >
            مشاوره رایگان
          </motion.button>
        </div>

        {/* ویژگی‌ها */}
        <div style={{
          display: 'flex',
          gap: 'clamp(16px, 4vw, 32px)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: 'clamp(32px, 5vw, 40px)',
              height: 'clamp(32px, 5vw, 40px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image src="/icon/check.png" alt="tick" width={20} height={20} />
            </div>
            <span style={{
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              color: '#333',
              fontWeight: '500',
            }}>
              خدمات برتر
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: 'clamp(32px, 5vw, 40px)',
              height: 'clamp(32px, 5vw, 40px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image src="/icon/mokaab2.png" alt="box" width={20} height={20} />
            </div>
            <span style={{
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              color: '#333',
              fontWeight: '500',
            }}>
              قیمت گذاری ساده
            </span>
          </div>
        </div>
      </div>

      {/* بخش Image و آواتارها */}
      <div className="hero-image-container" style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
      }}>
        <Image 
          src="/hero-sec/chat.png" 
          alt="hero-section" 
          width={300} 
          height={300} 
          className="hero-main-image"
          style={{ 
            boxShadow:" 10px 0px 100px 20px rgba(192, 112, 179, 0.1)",
            maxWidth: '100%',
            height: 'auto',
            width: '80%',
          }}
        />
        
        {/* بخش آواتارها - سمت چپ Image */}
        <div className="hero-avatars" style={{
          position: 'absolute',
          left: '750px',
          bottom: '2px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
        }}>
          {/* آواتارها */}
          <div className="avatars-group" style={{
            display: 'flex',
            alignItems: 'center',
            direction: 'rtl',
          }}>
            {/* آواتار 1 */}
            <div style={{
              width: 'clamp(36px, 6vw, 48px)',
              height: 'clamp(36px, 6vw, 48px)',
              borderRadius: '50%',
              backgroundColor: '#E0E7EB',
              border: '3px solid #FFFFFF',
              marginLeft: 'clamp(-8px, -1.5vw, -12px)',
              position: 'relative',
              zIndex: 3,
              overflow: 'hidden',
            }}>
             <Image src="/hero-sec/avatar1.png" alt="avatar1" width={48} height={48} style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
            </div>
            {/* آواتار 2 */}
            <div style={{
              width: 'clamp(36px, 6vw, 48px)',
              height: 'clamp(36px, 6vw, 48px)',
              borderRadius: '50%',
              backgroundColor: '#E0E7EB',
              border: '3px solid #FFFFFF',
              marginLeft: 'clamp(-8px, -1.5vw, -12px)',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden',
            }}>
             <Image src="/hero-sec/avatar2.png" alt="avatar2" width={48} height={48} style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
            </div>
            {/* آواتار 3 */}
            <div style={{
              width: 'clamp(36px, 6vw, 48px)',
              height: 'clamp(36px, 6vw, 48px)',
              borderRadius: '50%',
              backgroundColor: '#E0E7EB',
              border: '3px solid #FFFFFF',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
            }}>
             <Image src="/hero-sec/avatar3.png" alt="avatar3" width={48} height={48} style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
            </div>
          </div>

          {/* متن‌های کنار آواتارها */}
          <div className="avatars-text" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            direction: 'rtl',
          }}>
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: 'bold',
              color: '#333',
            }}>
              +۱۲۰,۰۰۰ هزار
            </div>
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              color: '#666',
            }}>
              همراه همیشگی ما
            </div>
          </div>

          {/* فلش منحنی */}
          <div className="avatars-arrow" style={{
            position: 'absolute',
            right: '150px',
            top: '-10',
            transform: 'translateY(-85%)',
            rotate: '45deg',
            opacity: 0.3,
          }}>
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30 Q30 10, 50 30 T90 30" stroke="#999" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M85 25 L95 30 L85 35" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* الگوی نقطه‌چین در پس‌زمینه */}
          <div className="avatars-dots" style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.1,
            width: '200px',
            height: '200px',
            backgroundImage: 'radial-gradient(circle, #999 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
        </div>
      </div>
    </section>
  )
}

