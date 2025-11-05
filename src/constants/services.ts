/* eslint-disable max-len*/

export type SERVICE = {
  name: string
  description: string
  coverImg: string
  img: string
  content: Content[]
  section: string
  currentSection: string
  mixBlend: string
}

export type Content = {
  texts: string[]
  type: 'p' | 'pbold' | 'h1' | 'list'
}

export const SERVICES2: SERVICE[] = [
  {
    name: 'Social Media Strategy & Content Creation',
    description: 'We turn your social media presence into a competitive advantage.',
    section: 'social-media',
    currentSection: '',
    img: '/services/socialMediaNew.webp',
    coverImg: '/services/socialMediaNew.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['In an ever-evolving digital era, social media is more than just a promotional platform - it is an essential tool for connecting with your audience, building authentic relationships, and driving sales. Every post must be relevant, and every campaign must deliver tangible results. In 2024, we have the technologies and marketing strategies that make the difference between a simple online presence and an active, loyal, and engaged community.'], type: 'p' },
      { texts: ['Our services include'], type: 'h1' },
      {
        texts: [
          '<b>Complete Social Media Consultancy</b> - We create integrated strategies for each social platform, aligned with your vision and goals.',
          '<b>Content Creation</b> - From images to videos, we create content that not only attracts but also resonates with your audience.',
          '<b>Effective Ad Campaigns</b> - We design and manage campaigns that generate conversions, not just impressions',
          '<b>Analysis and Reporting</b> - We continuously monitor performance and adjust campaigns in real time to improve results.',
          '<b>Live-Streaming and Real-Time Interaction Consultancy</b> - We help you connect your brand directly with your audience through successful live sessions.',
        ], type: 'list',
      },
      { texts: ['Be where it matters.'], type: 'pbold' },
      { texts: ['Transform your brand into a leader on social media and grow your business with modern, data-driven strategies that will deliver clear and measurable results.'], type: 'p' },
    ],
  },
  {
    name: 'Brand & Corporate Identity',
    description: 'The pulse of a successful brand.',
    section: 'brand-corporate-identity',
    currentSection: '',
    img: '/services/brandCorporate.webp',
    coverImg: '/services/brandCorporate.webp',
    mixBlend: 'normal',
    content: [
      { texts: ['In an ever-changing world, every company has its own DNA that defines it - internal culture, values, vision, and the way it interacts with the outside world. Corporate identity is not just about a logo or colors but about how your brand presents itself and connects with the audience consistently. In this competitive environment, a clear and coherent identity is essential for success.'], type: 'p' },
      { texts: ['How we help you build a successful identity'], type: 'h1' },
      {
        texts: [
          '<b>Complete Consultancy for Corporate Identity Development</b> - From design to communication strategy, we build you a solid brand based on clear values, reflected in every action of your company.',
          '<b>Creation of Customized Style Guides</b> - We offer you an identity manual that includes clear rules for logo usage, colors, typography, and messaging, ensuring consistency across all channels.',
          '<b>Differentiation Strategies</b> - We help position your brand clearly in the market by highlighting what makes you unique and what your core values are.',
        ], type: 'list',
      },
      { texts: ['Be memorable and professional'], type: 'pbold' },
      { texts: ['By investing in a strong corporate identity, you\'ll create a brand that stays in the minds of customers, differentiates you from the competition, and builds long-term trust and authority.'], type: 'p' },
    ],
  },
  {
    name: 'Google Ads & YouTube Ads',
    description: 'We put your brand in direct contact with those who need it.',
    section: 'google-youtube',
    currentSection: '',
    img: '/services/youtubeGoogleAds.webp',
    coverImg: '/services/youtubeGoogleAds.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['If you want to achieve fast and precise results, Google Ads and YouTube Ads are the ideal solutions to reach the audience that knows what they want. These platforms allow you to focus on active users, increase visibility, and optimize conversions through well-targeted campaigns. Every click and every view is an opportunity to attract customers and maximize your ROI.'], type: 'p' },
      { texts: ['Types of Google Ads and YouTube Ads campaigns for your business'], type: 'h1' },
      {
        texts: [
          '<b>Search Ads</b> – Text ads that appear on Google search results pages, reaching users who are actively looking for products and services like yours.',
          '<b>Display Ads</b> – Visual banners, images, and ads placed on websites and Gmail to capture attention and increase brand awareness.',
          '<b>Video Ads (YouTube)</b> – Video ads on YouTube, ideal for increasing brand awareness and attracting an interested audience through engaging visual content.',
          '<b>Shopping Ads</b> – Promote your products directly on Google with images and prices, helping users make purchases directly from search pages.',
          '<b>App Ads</b> – Promote your app across multiple channels, attracting new users through app-specific ads.',
          '<b>Smart Ads</b> – Automated, simple, and effective ads that optimize over time to achieve the best results on Google and display networks.',
          '<b>Local Ads</b> – Drive customers to your physical location using localized ads that help them find you quickly.',
          '<b>Discovery Ads</b> – Broadcast visual ads in Google streams, attracting users\' attention with relevant content on multiple Google platforms.',
        ], type: 'list',
      },
      { texts: ['Transform visibility into conversions.'], type: 'pbold' },
      { texts: ['With Google Ads and YouTube Ads campaigns, you can reach your marketing objectives faster, with increased traffic and revenue just a click away. With precise targeting, we take your business to the next level.'], type: 'p' },
    ],
  },
  {
    name: 'Facebook Ads & Sales Funnels',
    description: 'Maximize conversions with effective Facebook Ads strategies.',
    section: 'facebook',
    currentSection: '',
    img: '/services/facebookAds.webp',
    coverImg: '/services/facebookAds.webp',
    mixBlend: 'screen',
    content: [
      { texts: ['At Lira Digital Agency, we create personalized Facebook Ads campaigns, supported by an optimized sales funnel to attract and convert relevant customers. We use advanced targeting techniques and constant testing to maximize ROI and boost the performance of your campaigns.'], type: 'p' },
      { texts: ['Our services'], type: 'h1' },
      {
        texts: [
          '<b>Consultancy and Customized Strategy</b> - We create a strategy tailored to your business, based on clear objectives (conversions, traffic, brand awareness).',
          '<b>Advanced Targeting</b> - We segment the audience based on behavior and interests to attract relevant customers.',
          '<b>Optimized Sales Funnels</b> - We create a 3-stage sales funnel:',
          '- <b>Top of Funnel</b> - Awareness building through video ads and banners.',
          '- <b>Middle of Funnel</b> - Education and trust-building with offers and testimonials.',
          '- <b>Bottom of Funnel</b> - Conversion campaigns to turn interest into purchases.',
          '<b>Optimization and A/B Testing</b> - We continuously monitor, optimize, and test campaigns to improve performance and results.',
          '<b>Landing Page Creation</b> - We build optimized landing pages for maximum conversions.',
          '<b>Detailed Reporting</b> - We provide clear reports to measure success and adjust the strategy.',
        ], type: 'list',
      },
      { texts: ['Average Results by Industry'], type: 'pbold' },
      {
        texts: [
          '<b>E-commerce</b> - Average ROI of 300%-400% through remarketing.',
          '<b>Interior Design</b> - Average ROI of 250%-300% for attracting local clients.',
          '<b>Beauty Salons/Aesthetic Surgery Clinics</b> - Average ROI of 300%-350%, ',
        ], type: 'list',
      },
      { texts: ['Geo - Moldova, Romania, UAE'], type: 'pbold' },
      {
        texts: [
          '<b>Language Schools</b> - Average ROI of 350%-400% through precise targeting of international students.',
        ], type: 'list',
      },
      { texts: ['Turn your interactions on Facebook into a constant revenue stream with optimized campaigns and an efficient sales funnel. At Lira Digital Agency, we maximize the impact of every campaign for your business.'], type: 'p' },
    ],
  },
  {
    name: '360° Digital Marketing',
    description: 'Complete, integrated strategies that work across all touchpoints.',
    section: 'digital-marketing',
    currentSection: '',
    img: '/services/digital360.webp',
    coverImg: '/services/digital360.webp',
    mixBlend: 'normal',
    content: [
      { texts: ['In the modern marketing landscape, success is not just about focusing on one platform or one aspect of your business—it\'s about creating a seamless experience for your customers across all channels. With 360° marketing, we create a holistic approach that covers every angle, from brand awareness to conversion. Our goal is to ensure that no matter where your audience interacts with your brand, they experience consistency, relevance, and value.'], type: 'p' },
      { texts: ['What we offer with 360° Marketing'], type: 'h1' },
      {
        texts: [
          '<b>Integrated Marketing Campaigns</b> - We create multi-channel campaigns that include online, offline, and experiential marketing, aligning every aspect of your strategy to achieve the best results.',
          '<b>Cross-Platform Synergy</b> - We ensure that your message is consistent and tailored across all digital channels—social media, email, search engines, websites, and even physical stores.',
          '<b>Customer-Centric Strategies</b> - By analyzing customer behavior, preferences, and engagement patterns, we tailor our approach to ensure that every campaign speaks directly to their needs and desires.',
          '<b>Data-Driven Insights</b> - We continuously analyze performance and optimize campaigns based on real-time data, adjusting our approach to maximize results.',
          '<b>Brand Experience</b> - We ensure that every interaction your audience has with your brand—whether online or offline—is impactful and memorable, strengthening customer loyalty and driving long-term growth.',
        ], type: 'list',
      },
      { texts: ['With our 360° marketing approach, your brand is positioned at the center of a cohesive, data-driven strategy that moves customers through the entire journey, from awareness to conversion, with clarity and precision.'], type: 'p' },
    ],
  },
  {
    name: 'UI/UX & Product Design',
    description: 'Creating experiences that captivate and convert.',
    section: 'ui-ux',
    currentSection: '',
    img: '/services/uiuxNew.webp',
    coverImg: '/services/uiuxNew.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['User Interface (UI) and User Experience (UX) design are at the heart of every digital interaction. Whether it\'s a website, app, or any other digital product, a great UI/UX design is key to ensuring users engage with your brand effectively, enjoy the experience, and ultimately take action. At Lira Digital Agency, we focus on designing user-centered digital experiences that are both visually appealing and functionally efficient.'], type: 'p' },
      { texts: ['What we offer in UI/UX Design'], type: 'h1' },
      {
        texts: [
          '<b>User-Centered Design</b> - Our designs focus on your audience, ensuring that each touchpoint delivers a smooth, intuitive experience that meets their needs and expectations.',
          '<b>Wireframing and Prototyping</b> - We create wireframes and prototypes to visualize the structure and functionality of your digital products, ensuring the design is both practical and user-friendly.',
          '<b>UI Design</b> - We design beautiful, on-brand user interfaces that provide a visually engaging experience while remaining functional and intuitive.',
          '<b>UX Research and Testing</b> - We conduct in-depth user research to understand pain points, behaviors, and motivations, followed by testing to ensure our designs improve usability and meet user expectations.',
          '<b>Mobile-First Design</b> - With a growing number of users accessing digital products via mobile devices, we prioritize mobile-first design to ensure seamless experiences on any device.',
          '<b>Conversion Optimization</b> - We design with conversion in mind, using data and best practices to create interfaces that drive users to take meaningful actions, whether it\'s making a purchase, signing up, or engaging with content.',
          '<b>Continuous Improvement</b> - We use analytics and user feedback to constantly iterate and refine designs, ensuring that the user experience evolves with trends, technology, and customer needs.',
        ], type: 'list',
      },
      { texts: ['Through our UI/UX design services, we help you deliver exceptional digital experiences that not only meet user expectations but exceed them, increasing engagement, customer satisfaction, and conversion rates.'], type: 'p' },
    ],
  },
]
