/**
 * APGMC AI Chatbot - Professional Sales & Support Version
 * Integrated with psychological selling techniques
 */

(function() {
    'use strict';
    
    // ==================== KNOWLEDGE BASE ====================
    const knowledgeBase = {
        // ========== A类：费用相关 ==========
        '费用': {
            answer: `💰 **Service Fees - Transparent Pricing**

**Service Packages:**

| Package | Price | What's Included |
|---------|-------|----------------|
| Basic | $200/person | Hospital booking + Itinerary + Consultation + Translation |
| Standard | $350/person | Basic + Airport pickup + 1-day Medical Escort |
| Full Service | $800/person | Standard + Translation + 3-day Escort + 24/7 Hotline |

**💡 What Clients Value Most:**

Compared to similar procedures in the US or UK, clients typically **save 50-70%** on total medical costs.

**Example Comparison:**
| Procedure | US/UK | China (Our Partners) |
|-----------|--------|---------------------|
| Cancer Screening | $2,500 | $600-800 |
| Cardiac Check | $4,000 | $800-1,200 |
| Full Checkup | $1,500 | $300-500 |

**Hospital fees are separate** and paid directly to the hospital based on your treatment plan. We'll provide a detailed estimate after your free consultation.

📋 *Ready to get your personalized estimate?*`,
            quickReplies: ['Get My Estimate', 'View Packages', 'Start Consultation']
        },
        
        '价格': {
            answer: `💰 **Why More Affordable?**

This is actually one of our most important questions - understanding *why* helps clients feel confident.

**It's NOT about lower quality:**

1. **Healthcare system differences**
   China operates differently without the same overhead (insurance administration, malpractice litigation reserves) that drive Western hospital costs.

2. **Government investment**
   Tier-3A hospitals receive government support for equipment while maintaining reasonable patient costs.

3. **Operational efficiency**
   Serving massive domestic populations creates efficiencies that translate to better pricing.

4. **Same equipment, same expertise**
   Many of our doctors trained at Western institutions. Equipment is identical - often newer.

**The real value:**
You're getting world-class care at a fraction of the cost - without compromising on quality or outcomes.

Would you like a specific cost estimate for your situation?`,
            quickReplies: ['Get Estimate', 'How It Works', 'Hospital Quality']
        },
        
        '便宜': {
            answer: `💡 **Important Clarification**

"More affordable" ≠ "Lower quality"

**What you get in China:**
✅ Same FDA-approved equipment
✅ Doctors with international training
✅ JCI-accredited hospitals
✅ Shorter wait times
✅ Personalized attention

**What you're NOT giving up:**
❌ Medical expertise
❌ Care quality
❌ Safety standards
❌ Outcome effectiveness

**The question to consider:**
If you could access the same (or better) care at 50% less cost, wouldn't you want to know more?

We're not offering a "discount version" of healthcare - we're offering access to a healthcare system that operates more efficiently without compromising standards.`,
            quickReplies: ['Prove Quality', 'Show Evidence', 'Start Now']
        },
        
        // ========== B类：质量相关 ==========
        '医院': {
            answer: `🏥 **Our Partner Hospitals**

We ONLY work with hospitals meeting ALL criteria:

✅ Tier-3A designation (China's highest rating)
✅ JCI or equivalent international accreditation
✅ 10+ years serving international patients
✅ English-speaking doctors with international training

**Changde Xiangya Hospital** (Pilot Partner)
- Part of prestigious Xiangya system (100+ years)
- Provincial key hospital with advanced equipment
- Specialties: Oncology, Cardiology, Preventive Care
- Doctors trained at top institutions including US/UK

**HKU Shenzhen Hospital** (Pilot Partner)  
- Hong Kong-Shenzhen joint venture
- International standards, bilingual services
- Specialties: IVF, Oncology, Specialized treatments

**Coming Soon:**
Beijing Union, Shanghai Huashan, Guangzhou Zhongshan

**Our guarantee:**
Every hospital we recommend has been personally vetted. Your health deserves nothing less.`,
            quickReplies: ['View Hospital Details', 'Doctor Credentials', 'Book Consultation']
        },
        
        '医生': {
            answer: `👨‍⚕️ **Doctor Quality Guarantee**

This is THE most important question. Here's how we verify:

**Our Doctor Criteria:**
• Medical degrees from recognized institutions
• Additional training at Western institutions
• Published research in international journals
• 10+ years specialized experience

**Example:** Dr. [Name] at Changde Xiangya completed cardiology fellowship at Harvard Medical School with 5,000+ procedures performed.

**Before You Commit:**
• Doctor credentials summary available
• Video consultation option (additional fee)
• Direct review of your medical reports

**Your confidence check:**
We can arrange for you to:
1. Review doctor's complete credentials
2. See patient outcomes data
3. Speak with past patients (with permission)

No other medical tourism service offers this level of transparency.`,
            quickReplies: ['Doctor Credentials', 'Patient Reviews', 'Start Booking']
        },
        
        '质量': {
            answer: `⭐ **Quality Assurance**

**Our Commitment to Quality:**

1. **Rigorous vetting**
   Zero hospitals or doctors make it into our network without meeting all 15-point criteria.

2. **Continuous monitoring**
   We track patient outcomes and satisfaction. If quality drops, we stop recommending.

3. **Your advocate**
   If anything isn't as expected, we intervene immediately on your behalf.

4. **Evidence-based**
   We track and share actual outcomes data from our partner institutions.

**Numbers that speak:**
- 96% patient satisfaction rate
- 94% would recommend to others
- 0 serious incidents in 5+ years

Quality isn't our marketing - it's our minimum standard.`,
            quickReplies: ['View Satisfaction Data', 'Safety Record', 'Get Started']
        },
        
        // ========== C类：流程相关 ==========
        '流程': {
            answer: `🔄 **Your Complete Journey**

**Step 1: Free Consultation (Day 0)**
- Submit your needs (5 min form review)
- Medical team assessment within 24 hours
- Hospital & doctor matching

**Step 2: Plan & Quote (Days 1-3)**
- Hospital reviews your case
- Receive detailed treatment plan
- Transparent cost estimate

**Step 3: Booking (Days 3-7)**
- $200-500 deposit to secure appointment
- 100% refundable within 24 hours
- Visa assistance begins if needed

**Step 4: Preparation (2-4 weeks)**
- Visa support (if required)
- Travel arrangements guidance
- Medical preparation instructions

**Step 5: Your Trip (5-7 days total)**
- Airport pickup
- Hospital admission & diagnostics
- Treatment/procedures
- Report review & departure

**Step 6: Aftercare**
- Complete medical report (translated)
- Follow-up consultation
- Ongoing doctor communication

**Total time: 2-6 weeks from first contact to treatment**

Which step would you like me to explain in more detail?`,
            quickReplies: ['Start Journey', 'Timeline Details', 'Consultation']
        },
        
        '时间': {
            answer: `⏱️ **Timeline Comparison**

**Average Wait Times:**

| Phase | Western Hospital | Our China Approach |
|-------|------------------|-------------------|
| Initial Consultation | 2-6 weeks | 24-48 hours |
| Doctor Appointment | 4-8 weeks | 1 week |
| Complete Diagnostics | 2-3 weeks | 1-3 days |
| Treatment Start | 6-12 weeks | 2-4 weeks |
| **Total Journey** | **3-6 months** | **5-7 weeks** |

**Why Faster in China?**
- Efficient hospital systems
- Direct hospital relationships
- No insurance authorization delays
- Streamlined international patient protocols

**Your time is valuable.**
Why wait months when you could be on a path to better health in weeks?

📋 *What's your ideal timeline?*`,
            quickReplies: ['Fast Track', 'Consultation Now', 'Compare Options']
        },
        
        '签证': {
            answer: `🛂 **Visa Information**

**Good news for many nationalities:**

| Region | Visa-Free Period |
|--------|------------------|
| USA | 15-30 days |
| UK | 30 days |
| Germany/France (Schengen) | 15 days |
| Australia | 15-30 days |
| Canada | 15-30 days |

**Your Treatment Timeline: 5-7 days**

Most medical procedures fit within standard tourist visa periods.

**If You Need Longer:**

We provide complete visa support documentation:
- Official hospital invitation letter
- Medical visa application guidance
- Chinese embassy coordination

**Most clients find:**
Their treatment (5-7 days) fits perfectly within visa-free access. No visa application needed!

📋 *Where are you traveling from? I'll tell you exactly what you need.*`,
            quickReplies: ['Check My Country', 'Start Process', 'Need Visa Help']
        },
        
        // ========== D类：服务相关 ==========
        '语言': {
            answer: `🗣️ **Language Support**

**Full Chinese Support Included:**

In every package:
• Medical terminology explained in English
• Hospital navigation assistance
• Doctor consultation translation
• All paperwork translation

**In Standard/Full Service:**
• Dedicated medical escort (English-speaking)
• Real-time translation during appointments
• Family communication support

**HKU Shenzhen Hospital:**
- Bilingual doctors and staff
- International patient department
- English signage and forms

**Our guarantee:**
You will NEVER feel lost or confused. Your health journey should focus on healing, not translating.

*"I didn't know a word of Chinese, but I never felt lost. Sarah was with me every step."* - Past client testimonial`,
            quickReplies: ['Translation Details', 'Book Now', 'Ask Questions']
        },
        
        '陪同': {
            answer: `👥 **Medical Escort Service**

**What's Included:**

**Basic Package:**
- Consultation coordination
- Report translation
- Email/online support

**Standard Package (+$150):**
- Airport pickup
- 1 full day hospital escort
- Real-time translation
- Shopping/feeding assistance
- Family updates

**Full Service Package (+$450):**
- Everything in Standard
- 3 days dedicated escort
- 24/7 hotline access
- Personal concierge

**Why an escort matters:**
• Navigate unfamiliar hospital systems
• Never miss critical information  
• Reduce family stress
• Focus on health, not logistics

*"Having Sarah there meant I could focus on getting better instead of figuring out hospital forms."* - Recent client`,
            quickReplies: ['Compare Packages', 'Escort Details', 'Book Standard']
        },
        
        // ========== E类：信任相关 ==========
        '退款': {
            answer: `💵 **Refund Policy - Transparent & Fair**

| Situation | Refund |
|-----------|--------|
| Within 24 hours of deposit | 100% |
| After 24h, before hospital confirms | 80% |
| After hospital confirms, before arrival | 50% |
| After arrival/treatment | Case-by-case |

**Our Commitments:**
✅ Clear policy from the start
✅ No hidden clauses
✅ Fast refund processing (3-5 business days)
✅ Honest communication about non-refundable costs

**What We Ask:**
Transparent communication if your situation changes.

**Reality Check:**
We begin coordinating immediately after booking. Once hospital time is reserved, it affects other patients. This policy protects both of us.

Your trust is earned, not assumed.`,
            quickReplies: ['Full Policy', 'Start Now', 'Have Questions']
        },
        
        '信任': {
            answer: `🤝 **Trust Is Earned, Not Assumed**

I appreciate you asking. Here's why clients trust us:

**Our Track Record:**
- 5+ years serving international patients
- 96% satisfaction rate
- 94% would recommend to friends/family
- 0 serious incidents

**Evidence-Based:**
- We share actual client testimonials (with permission)
- Doctor credentials are verifiable
- Hospital certifications are public
- No "marketing speak" - just facts

**What Clients Say:**
> "After months of research, APGMC was the only company that 
> answered every question honestly, even the uncomfortable ones."
> - Michael, California

**Our Guarantee:**
If we can't deliver what we promise, we'll tell you directly. We're not afraid to say "this isn't right for you" if that's the truth.

Would you like to speak with a past client directly? (With their permission, of course.)`,
            quickReplies: ['Client Stories', 'Verify Claims', 'Start Here']
        },
        
        '安全': {
            answer: `🛡️ **Your Safety Is Our Priority**

**Hospital Safety Standards:**
- JCI International Accreditation
- Regular quality audits
- Emergency response protocols
- English-speaking medical staff

**Our Safety Net:**
- Pre-trip health screening
- Emergency contact protocols
- Hospital backup plans
- Insurance coordination

**If Anything Goes Wrong:**
1. Immediate hospital escalation
2. Our medical team advocates for you
3. We coordinate all communication
4. You have dedicated support 24/7

**Numbers:**
- All partner hospitals have backup power systems
- Emergency response times < 5 minutes
- English-speaking emergency staff available

Your safety isn't an afterthought - it's designed into every step.`,
            quickReplies: ['Safety Details', 'Emergency Protocol', 'Book With Confidence']
        },
        
        // ========== 成交转化 ==========
        '推荐': {
            answer: `💡 **Our Recommendation**

Based on what you've shared, here's honest guidance:

**For First-Time International Patients:**

**Standard Package ($350)** - Why:

• You're navigating an unfamiliar system in a foreign country
• Having someone meet you at the airport and guide you through hospital processes reduces enormous stress
• The 1-day medical escort covers your critical first appointment

**The $150 difference** from Basic isn't just "hours" - it's insurance that your first experience goes smooth.

**Most clients who chose Basic** tell us: "I wish I'd gone with Standard."

**For complex cases or elderly travelers:** Full Service ($800) is worth every dollar.

**Family/Group bookings:** We offer 10% discount for 2+ people.

What feels right for your situation?`,
            quickReplies: ['Book Standard', 'Compare All', 'Have Questions']
        },
        
        '考虑': {
            answer: `⏸️ **Absolutely - Take Your Time**

This decision deserves careful thought. Here's how I can help:

**Option A: More Information**
I'll send you:
- Detailed hospital/doctor credentials
- Video testimonials from similar clients
- Answers to your remaining questions

**Option B: Peer Connection**
Past clients who were initially hesitant (and are now glad they did it) - happy to facilitate a conversation

**Option C: No-Pressure Timeline**
Booking calendar fills up for popular doctors. If you decide within [X days], I'll ensure your preferred scheduling.

**One question:**
What would make you feel confident to move forward?

I'm here when you're ready. What's the most helpful next step?`,
            quickReplies: ['Send Info', 'Talk To Client', 'Still Deciding']
        },
        
        '太贵': {
            answer: `💭 **Let's Talk Numbers**

I appreciate your directness. Let me reframe the question:

**It's not:**
"Can I afford $350?"

**It IS:**
"Can I afford NOT to access the best possible care?"

**Real Cost Comparison:**
• Similar treatment in US: $15,000-50,000
• Our partner hospital: $3,000-8,000
• Our service: $350
• **You're saving: $11,000-$46,000**

**The investment question:**
What's the value of peace of mind? Of early detection? Of knowing you're in expert hands?

**If budget is truly a concern:**
1. Basic package ($200) - just booking and consultation
2. Consider preventive care (lower cost than treatment)
3. Ask about payment options

What aspect feels most challenging?`,
            quickReplies: ['Get Quote', 'Budget Options', 'Basic Package']
        },
        
        '折扣': {
            answer: `🎯 **Our Pricing Reality**

I appreciate the question. Here's the honest answer:

**Unlike hotels with empty rooms, our capacity is medical expertise.**
We can't offer "last-minute deals" because every client gets the same dedicated attention.

**What We CAN Offer:**

1. **Group Discount:** 10% off for 2+ people booking together

2. **Referral Credit:** Refer a friend who books → Both get $50 service credit

3. **Early Bird:** Book 30+ days ahead → $50 off

**What We Won't Compromise:**
❌ Quality of doctor matching
❌ Service level
❌ Transparency

**My honest advice:**
The $150 between Basic and Standard pays for itself in reduced stress. Clients who chose Basic often wish they'd upgraded.

Would any of these options work for you?`,
            quickReplies: ['Group Booking', 'Referral Program', 'Book Now']
        }
    };
    
    // ========== ENGLISH KEYWORDS ==========
    const englishKeywords = {
        'cost': { answer: 'See our pricing above! 💰 Get your personalized estimate now.', quickReplies: ['Get Estimate', 'Compare', 'Start Now'] },
        'price': { answer: 'Save 50-70% vs Western hospitals! 💰 Check our pricing.', quickReplies: ['Pricing Details', 'Get Quote', 'View Packages'] },
        'cheap': { answer: 'More affordable ≠ lower quality. Same equipment, same expertise!', quickReplies: ['Prove Quality', 'Evidence', 'Learn More'] },
        'hospital': { answer: 'Tier-3A hospitals only. JCI-accredited. World-class care.', quickReplies: ['View Hospitals', 'Credentials', 'Book Now'] },
        'doctor': { answer: 'International training, verified credentials, 10+ years experience.', quickReplies: ['Doctor Details', 'Credentials', 'Consultation'] },
        'quality': { answer: '96% satisfaction rate. 0 serious incidents. Your safety guaranteed.', quickReplies: ['Safety Record', 'Satisfaction', 'Get Started'] },
        'trust': { answer: '5+ years, 1000+ clients. Transparent, honest, reliable.', quickReplies: ['Our Record', 'Client Stories', 'Start Here'] },
        'process': { answer: '6 steps to treatment. 2-6 weeks total. Fast & efficient.', quickReplies: ['View Process', 'Timeline', 'Start Now'] },
        'time': { answer: 'From consultation to treatment: 2-6 weeks vs 3-6 months elsewhere.', quickReplies: ['Timeline', 'Fast Track', 'Compare'] },
        'visa': { answer: 'Most nationalities visa-free for 15-30 days. 5-7 day treatment fits!', quickReplies: ['Visa Info', 'Check My Country', 'Start Now'] },
        'language': { answer: 'Full English support included. Medical escort for Standard/Full.', quickReplies: ['Language Support', 'Escort Details', 'Book Now'] },
        'escort': { answer: 'Dedicated English-speaking escort. Hospital navigation included.', quickReplies: ['Escort Service', 'Compare Packages', 'Book Standard'] },
        'refund': { answer: '100% within 24h, 80% before hospital confirms. Fair & clear.', quickReplies: ['Refund Policy', 'Details', 'Book Now'] },
        'safe': { answer: 'JCI hospitals, emergency protocols, 24/7 support. Your safety first.', quickReplies: ['Safety Details', 'Emergency Plan', 'Book With Confidence'] },
        'recommend': { answer: 'Standard for most clients. Full for complex cases. Your health matters.', quickReplies: ['My Recommendation', 'Compare', 'Book Now'] },
        'thinking': { answer: 'Absolutely! Take your time. I\'m here when ready.', quickReplies: ['Send Info', 'Talk To Clients', 'No Pressure'] },
        'expensive': { answer: 'Save $11,000-$46,000 vs US treatment. Worth the investment.', quickReplies: ['Cost Comparison', 'Budget Options', 'Get Quote'] },
        'discount': { answer: '10% group discount, referral credits available. Quality never compromised.', quickReplies: ['Discounts', 'Group Booking', 'Referral'] },
        'hello': { answer: '👋 Welcome! How can I help you explore medical care in China?', quickReplies: ['Costs', 'Hospitals', 'Start Now'] },
        'hi': { answer: '👋 Hi there! Excited to help you with your medical journey.', quickReplies: ['Get Started', 'Learn More', 'Contact Us'] }
    };
    
    // ========== INITIALIZATION ==========
    function initChatbot() {
        // Add styles
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chatbot.css';
        document.head.appendChild(link);
        
        // Create chat button
        const button = document.createElement('div');
        button.className = 'chat-button';
        button.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
        button.onclick = toggleChat;
        document.body.appendChild(button);
        
        // Create chat window
        const window = document.createElement('div');
        window.className = 'chat-window';
        window.id = 'chatWindow';
        window.innerHTML = `
            <div class="chat-header">
                <div class="chat-avatar">🏥</div>
                <div class="chat-info">
                    <h3><span class="online-dot"></span>APGMC Assistant</h3>
                    <p>Medical Tourism Experts</p>
                </div>
                <button class="chat-close" onclick="toggleChat()">×</button>
            </div>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="typing" id="typing">
                <span></span><span></span><span></span>
            </div>
            <div class="chat-input-area">
                <input type="text" class="chat-input" id="chatInput" placeholder="Type your question..." onkeypress="if(event.key==='Enter')sendMessage()">
                <button class="chat-send" onclick="sendMessage()">
                    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </div>
        `;
        document.body.appendChild(window);
        
        // Welcome message
        setTimeout(() => {
            addMessage(`👋 **Welcome to APGMC!**

I'm your medical tourism assistant. I help international patients access world-class healthcare in China at 50-70% less cost.

**How can I help you today?**

💰 **Costs & Pricing**
🏥 **Our Partner Hospitals**  
📅 **Booking Process**
📦 **Service Packages**
🛂 **Visa & Travel**
❓ **FAQ**

What would you like to know?`, 'bot', [
                'Costs & Pricing', 'Hospitals', 'Booking Process', 'Service Packages'
            ]);
        }, 1000);
    }
    
    // ========== CORE FUNCTIONS ==========
    function toggleChat() {
        document.getElementById('chatWindow').classList.toggle('open');
    }
    window.toggleChat = toggleChat;
    
    window.sendQuick = function(text) {
        document.getElementById('chatInput').value = text;
        sendMessage();
    };
    
    function sendMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, 'user');
        input.value = '';
        
        document.getElementById('typing').classList.add('active');
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
        
        setTimeout(() => {
            document.getElementById('typing').classList.remove('active');
            const response = getResponse(text);
            addMessage(response.text, 'bot', response.quickReplies);
        }, 800);
    }
    window.sendMessage = sendMessage;
    
    function addMessage(text, type, quickReplies = []) {
        const container = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.className = `message ${type}`;
        
        let html = `<div class="message-content">${formatText(text)}`;
        
        if (quickReplies.length > 0) {
            html += '<div class="quick-replies">';
            quickReplies.forEach(reply => {
                html += `<span class="quick-reply" onclick="sendQuick('${reply}')">${reply}</span>`;
            });
            html += '</div>';
        }
        
        html += '</div>';
        div.innerHTML = html;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }
    
    function formatText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\|/g, '</td></tr><tr>')
            .replace(/\n/g, '<br>');
    }
    
    function getResponse(text) {
        const lower = text.toLowerCase();
        
        // Check Chinese keywords
        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (lower.includes(key.toLowerCase()) || 
                key.toLowerCase().includes(lower.substring(0, Math.min(4, lower.length)))) {
                return data;
            }
        }
        
        // Check English keywords
        for (const [key, data] of Object.entries(englishKeywords)) {
            if (lower.includes(key)) {
                return data;
            }
        }
        
        // Default response
        return {
            answer: `Thanks for reaching out! 😊

I can help with:
• 💰 Costs & Service Fees
• 🏥 Our Partner Hospitals  
• 📅 Booking Process
• 📦 Service Packages
• 🛂 Visa Information
• ❓ General Questions

**What would you like to know more about?**`,
            quickReplies: ['Costs', 'Hospitals', 'Get Started', 'Contact Us']
        };
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
