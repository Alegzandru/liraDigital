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
    description: 'Services.Social.description',
    section: 'social-media',
    currentSection: '',
    img: '/services/socialMediaNew.webp',
    coverImg: '/services/socialMediaNew.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['Services.Social.subtitle'], type: 'h1' },
      { texts: ['Services.Social.intro'], type: 'p' },
      { texts: ['Services.Social.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.Social.listItem1',
          'Services.Social.listItem2',
          'Services.Social.listItem3',
          'Services.Social.listItem4',
          'Services.Social.listItem5',
        ], type: 'list',
      },
      { texts: ['Services.Social.ctaBold'], type: 'pbold' },
      { texts: ['Services.Social.conclusion'], type: 'p' },
      { texts: ['Services.Social.closingTitle'], type: 'h1' },
    ],
  },
  {
    name: 'Brand & Corporate Identity',
    description: 'Services.Brand.description',
    section: 'brand-corporate-identity',
    currentSection: '',
    img: '/services/brandCorporate.webp',
    coverImg: '/services/brandCorporate.webp',
    mixBlend: 'normal',
    content: [
      { texts: ['Services.Brand.subtitle'], type: 'h1' },
      { texts: ['Services.Brand.intro'], type: 'p' },
      { texts: ['Services.Brand.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.Brand.listItem1',
          'Services.Brand.listItem2',
          'Services.Brand.listItem3',
          'Services.Brand.listItem4',
        ], type: 'list',
      },
      { texts: ['Services.Brand.ctaBold'], type: 'pbold' },
      { texts: ['Services.Brand.conclusion'], type: 'p' },
      { texts: ['Services.Brand.closingTitle'], type: 'h1' },
    ],
  },
  {
    name: 'Google Ads & YouTube Ads',
    description: 'Services.Google.description',
    section: 'google-youtube',
    currentSection: '',
    img: '/services/youtubeGoogleAds.webp',
    coverImg: '/services/youtubeGoogleAds.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['Services.Google.subtitle'], type: 'h1' },
      { texts: ['Services.Google.intro'], type: 'p' },
      { texts: ['Services.Google.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.Google.listItem1',
          'Services.Google.listItem2',
          'Services.Google.listItem3',
          'Services.Google.listItem4',
          'Services.Google.listItem5',
          'Services.Google.listItem6',
          'Services.Google.listItem7',
          'Services.Google.listItem8',
        ], type: 'list',
      },
      { texts: ['Services.Google.secondListTitle'], type: 'h1' },
      {
        texts: [
          'Services.Google.secondListItem1',
          'Services.Google.secondListItem2',
          'Services.Google.secondListItem3',
          'Services.Google.secondListItem4',
        ], type: 'list',
      },
      { texts: ['Services.Google.thirdListTitle'], type: 'h1' },
      {
        texts: [
          'Services.Google.thirdListItem1',
          'Services.Google.thirdListItem2',
          'Services.Google.thirdListItem3',
          'Services.Google.thirdListItem4',
        ], type: 'list',
      },
      { texts: ['Services.Google.closingTitle'], type: 'h1' },
    ],
  },
  {
    name: 'Facebook Ads & Sales Funnels',
    description: 'Services.Facebook.description',
    section: 'facebook',
    currentSection: '',
    img: '/services/facebookAds.webp',
    coverImg: '/services/facebookAds.webp',
    mixBlend: 'screen',
    content: [
      { texts: ['Services.Facebook.subtitle'], type: 'h1' },
      { texts: ['Services.Facebook.intro'], type: 'p' },
      { texts: ['Services.Facebook.listTitle'], type: 'h1' },
      { texts: ['Services.Facebook.listItem1'], type: 'p' },
      { texts: ['Services.Facebook.listItem2'], type: 'p' },
      {
        texts: [
          'Services.Facebook.listItem2Case1',
          'Services.Facebook.listItem2Case2',
          'Services.Facebook.listItem2Case3',
        ], type: 'list',
      },
      { texts: ['Services.Facebook.listItem3'], type: 'p' },
      { texts: ['Services.Facebook.listItem4'], type: 'p' },
      { texts: ['Services.Facebook.listItem5'], type: 'p' },
      { texts: ['Services.Facebook.listItem6'], type: 'p' },
      {
        texts: [
          'Services.Facebook.listItem6Case1',
          'Services.Facebook.listItem6Case2',
          'Services.Facebook.listItem6Case3',
          'Services.Facebook.listItem6Case4',
          'Services.Facebook.listItem6Case5',
          'Services.Facebook.listItem6Case6',
          'Services.Facebook.listItem6Case7',
        ], type: 'list',
      },
      { texts: ['Services.Facebook.listItem7'], type: 'p' },
      { texts: ['Services.Facebook.ctaBold'], type: 'h1' },
      { texts: ['Services.Facebook.conclusion'], type: 'p' },
    ],
  },
  {
    name: '360° Digital Marketing',
    description: 'Services.Digital.description',
    section: 'digital-marketing',
    currentSection: '',
    img: '/services/digital360.webp',
    coverImg: '/services/digital360.webp',
    mixBlend: 'normal',
    content: [
      { texts: ['Services.Digital.intro'], type: 'p' },
      { texts: ['Services.Digital.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.Digital.listItem1',
          'Services.Digital.listItem2',
          'Services.Digital.listItem3',
          'Services.Digital.listItem4',
          'Services.Digital.listItem5',
        ], type: 'list',
      },
      { texts: ['Services.Digital.ctaBold'], type: 'pbold' },
      { texts: ['Services.Digital.conclusion'], type: 'p' },
      { texts: ['Services.Digital.closingTitle'], type: 'h1' },
    ],
  },
  {
    name: 'IT Products & Web Development',
    description: 'Services.ITProducts.description',
    section: 'ui-ux',
    currentSection: '',
    img: '/services/uiuxNew.webp',
    coverImg: '/services/uiuxNew.webp',
    mixBlend: 'lighten',
    content: [
      { texts: ['Services.ITProducts.intro'], type: 'p' },
      { texts: ['Services.ITProducts.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.ITProducts.listItem1',
          'Services.ITProducts.listItem2',
          'Services.ITProducts.listItem3',
          'Services.ITProducts.listItem4',
          'Services.ITProducts.listItem5',
          'Services.ITProducts.listItem6',
          'Services.ITProducts.listItem7',
        ], type: 'list',
      },
      { texts: ['Services.ITProducts.secondListTitle'], type: 'h1' },
      {
        texts: [
          'Services.ITProducts.secondListItem1',
          'Services.ITProducts.secondListItem2',
          'Services.ITProducts.secondListItem3',
          'Services.ITProducts.secondListItem4',
          'Services.ITProducts.secondListItem5',
        ], type: 'list',
      },
      { texts: ['Services.ITProducts.closingTitle'], type: 'h1' },
    ],
  },
  {
    name: 'Business Consulting',
    description: 'Services.BusinessConsulting.description',
    section: 'business-consulting',
    currentSection: '',
    img: '/services/businessConsult.png',
    coverImg: '/services/businessConsult.png',
    mixBlend: 'normal',
    content: [
      { texts: ['Services.BusinessConsulting.intro'], type: 'p' },
      { texts: ['Services.BusinessConsulting.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.BusinessConsulting.listItem1',
          'Services.BusinessConsulting.listItem2',
          'Services.BusinessConsulting.listItem3',
          'Services.BusinessConsulting.listItem4',
          'Services.BusinessConsulting.listItem5',
        ], type: 'list',
      },
      { texts: ['Services.BusinessConsulting.closingText1'], type: 'p' },
      { texts: ['Services.BusinessConsulting.closingText2'], type: 'h1' },
    ],
  },
  {
    name: 'AI Automation & Intelligent Agents',
    description: 'Services.AIAutomation.description',
    section: 'ai-automation',
    currentSection: '',
    img: '/services/aiAutomation.png',
    coverImg: '/services/aiAutomation.png',
    mixBlend: 'lighten',
    content: [
      { texts: ['Services.AIAutomation.intro'], type: 'p' },
      { texts: ['Services.AIAutomation.introListTitle'], type: 'p' },
      {
        texts: [
          'Services.AIAutomation.introListItem1',
          'Services.AIAutomation.introListItem2',
          'Services.AIAutomation.introListItem3',
        ], type: 'list',
      },
      { texts: ['Services.AIAutomation.introClosing'], type: 'p' },
      { texts: ['Services.AIAutomation.listTitle'], type: 'h1' },
      {
        texts: [
          'Services.AIAutomation.listItem1',
          'Services.AIAutomation.listItem2',
          'Services.AIAutomation.listItem3',
          'Services.AIAutomation.listItem4',
          'Services.AIAutomation.listItem5',
        ], type: 'list',
      },
      { texts: ['Services.AIAutomation.listTitle2'], type: 'pbold' },
      {
        texts: [
          'Services.AIAutomation.listItem6',
          'Services.AIAutomation.listItem7',
          'Services.AIAutomation.listItem8',
          'Services.AIAutomation.listItem9',
        ], type: 'list',
      },
      { texts: ['Services.AIAutomation.closingText1'], type: 'h1' },
    ],
  },
]
