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
    name: 'Social Media Content & Trend analysis',
    description: 'Create, attract, retain, sell. Repeat.',
    section: 'social-media',
    currentSection: '',
    img: '/services/social.png',
    coverImg: 'services/socialmedia.webp',
    mixBlend: 'lighten',
    content: [
      {texts: ['We know social media. It’s the foundation upon how we built our business, and it’s a critical component to your foundational marketing and growth strategy.'], type: 'pbold'},
      {texts: ['Over 4 billion people use social media worldwide, nearly 300 million are in the US, and the average user spends 144 minutes per day on social platforms. We know that 54% of social browsers research products via social media before buying. With 70% of Americans on social media every day, it’s the perfect place to tell your brand’s story and find your fans.'], type:'p'},
      {texts: ['Our team’s social media packages are designed with your strategy and needs in mind, and can be customized to match your budget and goals.'], type:'p'},
      {texts: ['Social Media Services'], type: 'h1'},
      {texts: [
        'Social Media Audit and Optimization',
        'Market Research and Competitive Analysis',
        'Social Media Strategy',
        'Content and Design',
        'Hashtag Strategy',
        'Social Media Advertising',
        'Facebook and Instagram Live Coaching and Management',
        'Analytics and Reporting',
      ], type: 'list'},
    ],
  },
  {
    name: 'Brand / Corporate Identity',
    description: 'The pulse of every great brand.',
    section: 'brand-corporate-identity',
    currentSection: '',
    img: '/services/brand.png',
    coverImg: '/services/brand.webp',
    mixBlend: 'color-dodge',
    content: [
      {texts: ['Every organization is a living, breathing entity, continually  growing, changing, and responding to outside influences. It’s easy to see, therefore, how your organization’s corporate culture is inextricably linked to its branding and strategy.'], type: 'pbold'},
      {texts: ['In today’s competitive marketplace, it’s vital for organizations of all sizes, missions, and purposes to establish a corporate identity manual, brand style guide, principles, and tone of voice. Here are four reasons why.'], type:'p'},
      {texts: ['Our reasons for a solid corporate identity'], type: 'h1'},
      {texts: [
        '<b>Cohesiveness</b>. Establishing a consistent corporate brand identity ensures that everyone in the organization represents it the same way every time they interact with clients, stakeholders, and potential customers.',
        '<b>Expertise</b>. A company identity helps project your brand as a trustworthy expert in your industry.',
        '<b>Reliability</b>. A carefully crafted and cultivated corporate identity helps standardize your brand’s visual presentation across all channels, such as email, social media, etc.',
        '<b>Authority</b>. A strong corporate identity sets you apart from the competition and makes your brand readily recognizable through design, communication, and action.',
      ], type: 'list'},
    ],
  },
  {
    name: 'Google Ads & YouTube Ads',
    description: 'Focus on people who know what they want.',
    section: 'google-youtube',
    currentSection: '',
    img: '/services/youtube.png',
    coverImg: '/services/youtube.webp',
    mixBlend: 'lighten',
    content: [
      {texts: ['Do you love fast results? Then choose Google Ads. Through this strategy you will be on your clients` sight all along. We can track your customers and their behaviour on your site, thus increasing the revenues and e-commerce conversion rate. Let`s dive into the main types of Google Ads campaigns, to choose the best for your business.'], type: 'pbold'},
      {texts: ['Our types of ads'], type: 'h1'},
      {texts: [
        '<b>Search</b> – Text ads on Google search results',
        '<b>Display</b> – Image ads on websites or on Gmail',
        '<b>Video</b> – Video ads on YouTube',
        '<b>Shopping</b> – Product listings on Google',
        '<b>App</b> – Your app promotion on many channels',
        '<b>Smart</b> – Simplified automated ads on Google and across the web',
        '<b>Local</b> – Drive customers to a physical location',
        '<b>Discovery</b>  – Runs ads across Google’s feeds when they’re open',
      ], type: 'list'},
    ],
  },
  {
    name: 'Facebook Ads & Sales Funnels',
    description: 'The pulse of every great brand.',
    section: 'facebook',
    currentSection: '',
    img: '/services/facebook.png',
    coverImg: '/services/facebook.webp',
    mixBlend: 'screen',
    content: [
      {texts: ['Everybody is on Facebook now! Not a surprise!'], type: 'pbold'},
      {texts: ['But wasting money and getting 0 results is what shocks and gets everyone mad! Not us, and not you anymore, if you choose us. We know it sounds like a cliche because it is. However you already know that you need a correct, client and sales oriented Facebook and Instagram ads strategy for your business.'], type: 'p'},
      {texts: ['At Lira Digital Agency, we believe that every brand can sell on Facebook. We use a carefully considered combination of organic posts and Facebook Ads to lead potential customers through the sales funnel.'], type: 'p'},
      {texts: ['All of our work begins with a well thought out strategy, from which we develop campaigns that speak to your audience at a lower cost per conversion.'], type: 'p'},
      {texts: ['In the past month, our social media gurus have led home design, e-commerce, and parquet production, beauty salons and other companies to a 239%, 1264%, and 1656% return in ad spend respectively.'], type: 'p'},
    ],
  },
  {
    name: '360° Digital Marketing',
    description: 'The pulse of every great brand.',
    section: 'digital-marketing',
    currentSection: '',
    img: '/services/digitalMarketing.png',
    coverImg: '/services/digitalMarketing.webp',
    mixBlend: 'color-dodge',
    content: [
      {texts: ['Either you come for a piece of cake, or you can have it all!'], type: 'pbold'},
      {texts: ['It means taking a holistic approach to marketing so you can avoid leaving any gaps. Implementing such a plan means maintaining a solid presence across multiple online channels to get closer to your clients.'], type: 'p'},
      {texts: [
        '<b>Social media</b>. This is one of the most important resources for marketing in the modern age.',
        '<b>Live events</b>. You can host your own events online—from prescheduled webinars to more laid-back “Ask Me Anything” sessions.',
        '<b>Apps</b>. Mobile apps are especially useful because they allow you to reach customers anytime, anywhere.',
        '<b>Email</b>. Email marketing is an excellent method of spreading the news about sales or special deals you have going on, as well as for making announcements related to your business.',
        '<b>Video</b>. Video marketing continues to be one of the most popular and effective forms of advertising. Having a presence on YouTube and posting videos to your website can help extend your reach and engage potential customers.',
        '<b>Mobile web design</b>. It`s not enough to have a great design for standard web users; you must also optimize your site for mobile browsers, especially as the percentage of people who browse the internet on mobile devices continues to increase at a rapid pace.',
      ], type: 'list'},
    ],
  },
  {
    name: 'UI/UX & Product Design',
    description: 'The pulse of every great brand.',
    section: 'ui-ux',
    currentSection: '',
    img: '/services/uiux.png',
    coverImg: '/services/uiux.webp',
    mixBlend: 'lighten',
    content: [
      {texts: ['The glory of any website depends on how good its web design is. Web design is the most crucial part of your website building. It is the first thing that users and potential customers are going to see, that`s why it must be done cautiously with utmost perfection.'], type: 'pbold'},
      {texts: ['But how to do it and what are the basics of web design? Wait, wait.. do not bother yourself much, we are right here just to make the best UI/UX design for your site or app.'], type: 'p'},
      {texts: ['The websites and web applications these days are more complex and dynamic. This increases the complexity for the visitors to use and understand it. That`s why taking proper care of UI and UX has become so important now.'], type: 'p'},
      {texts: ['According to some stats of last year, 62% of the population uses the internet. That means, around 4.8 billion people!! Organisations and businesses are taking this opportunity to increase their business on the internet to reach lots and lots of people. You see, now almost every business is on the internet, also offline businesses are planning to join the online world.'], type: 'p'},
      {texts: ['The point of letting you know all this is to understand the value of a qualitative UX/UI for your next website or app!'], type: 'p'},
    ],
  },
]
