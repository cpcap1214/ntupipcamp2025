document.addEventListener('DOMContentLoaded', function() {
    // 設定營隊開始日期（2025年8月24日）
    const campStartDate = new Date('2025-08-24T00:00:00').getTime();
    
    // 更新倒數計時的函數
    function updateCountdown() {
        // 獲取當前日期和時間
        const now = new Date().getTime();
        
        // 計算剩餘時間
        const timeRemaining = campStartDate - now;
        
        // 計算天、小時、分鐘和秒數
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // 更新HTML元素
        updateCountdownDigit('days', days);
        updateCountdownDigit('hours', hours);
        updateCountdownDigit('minutes', minutes);
        updateCountdownDigit('seconds', seconds);
        
        // 如果倒數結束，顯示特殊訊息
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            
            // 可以添加營隊已開始的訊息
            document.querySelector('.countdown-container h2').innerText = '營隊已開始！';
        }
    }
    
    // 更新數字並添加動畫效果
    function updateCountdownDigit(id, value) {
        const element = document.getElementById(id);
        const newValue = value.toString().padStart(2, '0');
        
        if (element.innerText !== newValue) {
            element.classList.add('flip');
            setTimeout(() => {
                element.innerText = newValue;
                element.classList.remove('flip');
            }, 250);
        }
    }
    
    // 立即執行一次
    updateCountdown();
    
    // 每秒更新一次
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // 添加滾動動畫效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.info-card, .countdown-section, footer');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // 當元素進入視窗時添加動畫類
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('fade-in-up');
            }
        });
    };
    
    // 初始檢查
    animateOnScroll();
    
    // 滾動時檢查
    window.addEventListener('scroll', animateOnScroll);
    
    // 添加標題閃光效果
    const header = document.querySelector('header');
    let timeoutId;
    
    header.addEventListener('mousemove', function(e) {
        clearTimeout(timeoutId);
        
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        this.appendChild(sparkle);
        
        timeoutId = setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
    
    // 添加滑鼠互動效果到時間盒子
    const timeBoxes = document.querySelectorAll('.time-box');
    
    timeBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(255, 94, 26, 0.3)';
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        });
        
        box.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        box.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 500);
        });
    });
    
    // 添加滑鼠追蹤效果到信息卡片
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const maxRotate = 5; // 最大旋轉角度
            
            const rotateX = (y - centerY) / centerY * maxRotate;
            const rotateY = (centerX - x) / centerX * maxRotate;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            setTimeout(() => {
                this.style.transition = '';
            }, 300);
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    // 添加CSS樣式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes flip {
            0% { transform: perspective(400px) rotateX(0); }
            50% { transform: perspective(400px) rotateX(90deg); }
            100% { transform: perspective(400px) rotateX(0); }
        }
        
        .flip {
            animation: flip 0.5s ease;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 30px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .sparkle {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.8);
            pointer-events: none;
            z-index: 10;
            animation: sparkleAnimation 1s ease-in-out forwards;
        }
        
        @keyframes sparkleAnimation {
            0% { transform: scale(0); opacity: 1; }
            50% { transform: scale(20); opacity: 0.5; }
            100% { transform: scale(30); opacity: 0; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 0.5s ease;
        }
    `;
    document.head.appendChild(style);
}); 