import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const PricingPackages = () => {
  const [activeTab, setActiveTab] = useState('Website');

  const tabs = [
    'Website', 'Ecommerce', 'Web App Development', 'Seo', 
    'Branding', 'Video Animation', 'Content Writing', 'Digital Marketing'
  ];

  const packages = {
    Website: [
      {
        title: 'ECONOMY WEBSITE',
        price: '$259',
        originalPrice: '$497',
        features: [
          '2 Stock Images',
          '3 Page Website',
          'jQuery Slider Banner',
          'Contact/Query Form',
          'Basic SEO',
          'Complete W3C Certified HTML',
          'Complete Deployment',
          '100% Satisfaction Guarantee'
        ]
      },
      {
        title: 'BUSINESS WEBSITE',
        price: '$499',
        originalPrice: '$799',
        features: [
          '5 Stock Images',
          '5 Page Website',
          'jQuery Slider Banner',
          'FREE Google Friendly Sitemap',
          'Contact/Query Form',
          'Basic SEO',
          'Complete W3C Certified HTML',
          'Complete Deployment'
        ]
      },
      {
        title: 'PREMIUM WEBSITE',
        price: '$899',
        originalPrice: '$1299',
        features: [
          '10 Stock Images',
          '10 Page Website',
          'jQuery Slider Banner',
          'FREE Google Friendly Sitemap',
          'Contact/Query Form',
          'Basic SEO',
          'Complete W3C Certified HTML',
          'Complete Deployment'
        ]
      }
    ],
    Ecommerce: [
      {
        title: 'BASIC ECOMMERCE',
        price: '$999',
        originalPrice: '$1999',
        features: [
          'Conceptual And Dynamic Website',
          'Mobile Responsive',
          'Content Management System(CMS)',
          'Easy Product Search',
          'Product Reviews',
          'Inventory Management',
          'Multi-Currency Support',
          'Payment Module Integration'
        ]
      },
      {
        title: 'PROFESSIONAL ECOMMERCE',
        price: '$1999',
        originalPrice: '$2499',
        features: [
          'Advanced Design Features',
          'Content Management System(CMS)',
          'Mobile Responsive Design',
          'Easy Product Search',
          'Product Reviews',
          'Inventory Management',
          'Multi-Currency Support',
          'Payment Module Integration'
        ]
      },
      {
        title: 'ENTERPRISE ECOMMERCE',
        price: '$2999',
        originalPrice: '$3999',
        features: [
          'Premium Design Package',
          'Advanced CMS Features',
          'Mobile Responsive Design',
          'Enhanced Product Search',
          'Advanced Analytics',
          'Multi-Store Management',
          'Advanced Payment Options',
          'Priority Support'
        ]
      }
    ],
    'Web App Development': [
      {
        title: 'BASIC WEB APP',
        price: '$2499',
        originalPrice: '$4999',
        features: [
          'Custom Made Interactive Design',
          'Custom WP Development',
          '1 jQuery Slider Banner',
          'Up To 5 Custom Banner Designs',
          '5 Stock Images',
          'Unlimited Revisions',
          'Basic Hover Effects',
          'Content Management System'
        ]
      },
      {
        title: 'ADVANCED WEB APP',
        price: '$4999',
        originalPrice: '$8999',
        features: [
          'Advanced Interactive Features',
          'Custom PHP Development',
          'Multiple jQuery Sliders',
          'Up To 10 Custom Banner Designs',
          '10 Stock Images',
          'Unlimited Revisions',
          'Advanced Hover Effects',
          'Advanced CMS Features'
        ]
      },
      {
        title: 'ENTERPRISE WEB APP',
        price: '$7999',
        originalPrice: '$12999',
        features: [
          'Premium Interactive Design',
          'Full Stack Development',
          'Advanced Animation Features',
          'Unlimited Custom Designs',
          'Premium Stock Images',
          'Priority Support',
          'Advanced Security Features',
          'Multi-Language Support'
        ]
      }
    ],
    Seo: [
      {
        title: 'BASIC SEO PACKAGE',
        price: '$299',
        originalPrice: '$599',
        features: [
          'Keyword Research & Analysis',
          'On-Page Optimization',
          'Meta Tags Optimization',
          'Google Analytics Setup',
          'Monthly SEO Report',
          'Basic Link Building',
          'Content Optimization',
          'Technical SEO Audit'
        ]
      },
      {
        title: 'PROFESSIONAL SEO',
        price: '$699',
        originalPrice: '$1299',
        features: [
          'Advanced Keyword Research',
          'Complete On-Page SEO',
          'Local SEO Optimization',
          'Google My Business Setup',
          'Monthly Progress Reports',
          'Quality Link Building',
          'Content Strategy',
          'Competitor Analysis'
        ]
      },
      {
        title: 'ENTERPRISE SEO',
        price: '$1299',
        originalPrice: '$2499',
        features: [
          'Comprehensive SEO Strategy',
          'Advanced Technical SEO',
          'National SEO Campaigns',
          'Advanced Analytics Setup',
          'Weekly Progress Reports',
          'Premium Link Building',
          'Content Marketing',
          'Dedicated SEO Manager'
        ]
      }
    ],
    Branding: [
      {
        title: 'BASIC BRANDING',
        price: '$499',
        originalPrice: '$999',
        features: [
          'Logo Design (3 Concepts)',
          'Business Card Design',
          'Letterhead Design',
          'Brand Color Palette',
          'Typography Selection',
          'Basic Brand Guidelines',
          'Social Media Kit',
          'Unlimited Revisions'
        ]
      },
      {
        title: 'PROFESSIONAL BRANDING',
        price: '$1299',
        originalPrice: '$2499',
        features: [
          'Logo Design (5 Concepts)',
          'Complete Stationery Design',
          'Brochure Design',
          'Brand Identity Package',
          'Advanced Brand Guidelines',
          'Social Media Templates',
          'Marketing Materials',
          'Brand Strategy Consultation'
        ]
      },
      {
        title: 'ENTERPRISE BRANDING',
        price: '$2499',
        originalPrice: '$4999',
        features: [
          'Complete Brand Identity',
          'Logo Design (Unlimited)',
          'Full Stationery Suite',
          'Marketing Collateral',
          'Brand Manual Creation',
          'Digital Brand Assets',
          'Packaging Design',
          'Brand Strategy & Positioning'
        ]
      }
    ],
    'Video Animation': [
      {
        title: 'BASIC ANIMATION',
        price: '$799',
        originalPrice: '$1599',
        features: [
          '30 Second Video Animation',
          'Basic Motion Graphics',
          'Background Music',
          'Voice Over Recording',
          'HD Quality Export',
          '2 Revisions Included',
          'Script Writing',
          'Fast Delivery'
        ]
      },
      {
        title: 'PROFESSIONAL ANIMATION',
        price: '$1599',
        originalPrice: '$2999',
        features: [
          '60 Second Video Animation',
          'Advanced Motion Graphics',
          'Custom Background Music',
          'Professional Voice Over',
          '4K Quality Export',
          '3 Revisions Included',
          'Professional Script Writing',
          'Character Animation'
        ]
      },
      {
        title: 'PREMIUM ANIMATION',
        price: '$2999',
        originalPrice: '$5999',
        features: [
          '120 Second Video Animation',
          'Premium Motion Graphics',
          'Original Music Composition',
          'Celebrity Voice Over',
          '4K Ultra HD Export',
          'Unlimited Revisions',
          'Creative Direction',
          'Custom Character Design'
        ]
      }
    ],
    'Content Writing': [
      {
        title: 'BASIC CONTENT',
        price: '$199',
        originalPrice: '$399',
        features: [
          '5 Blog Posts (500 words)',
          'SEO Optimized Content',
          'Keyword Research',
          'Basic Proofreading',
          'Content Calendar',
          'Social Media Posts',
          'Email Templates',
          'Fast Turnaround'
        ]
      },
      {
        title: 'PROFESSIONAL CONTENT',
        price: '$499',
        originalPrice: '$999',
        features: [
          '10 Blog Posts (750 words)',
          'Advanced SEO Content',
          'In-depth Research',
          'Professional Editing',
          'Content Strategy',
          'Social Media Content',
          'Newsletter Content',
          'Industry Expertise'
        ]
      },
      {
        title: 'PREMIUM CONTENT',
        price: '$999',
        originalPrice: '$1999',
        features: [
          '20 Blog Posts (1000 words)',
          'Expert Level Content',
          'Comprehensive Research',
          'Premium Editing',
          'Content Marketing Strategy',
          'Multi-Platform Content',
          'Performance Analytics',
          'Dedicated Content Manager'
        ]
      }
    ],
    'Digital Marketing': [
      {
        title: 'BASIC DIGITAL MARKETING',
        price: '$599',
        originalPrice: '$1199',
        features: [
          'Social Media Management',
          'Facebook & Instagram Ads',
          'Google Ads Campaign',
          'Monthly Analytics Report',
          'Basic Email Marketing',
          'Content Creation',
          'Audience Targeting',
          'Campaign Optimization'
        ]
      },
      {
        title: 'PROFESSIONAL MARKETING',
        price: '$1299',
        originalPrice: '$2499',
        features: [
          'Multi-Platform Management',
          'Advanced PPC Campaigns',
          'Social Media Strategy',
          'Email Marketing Automation',
          'Content Marketing',
          'Lead Generation',
          'Conversion Tracking',
          'Dedicated Account Manager'
        ]
      },
      {
        title: 'ENTERPRISE MARKETING',
        price: '$2499',
        originalPrice: '$4999',
        features: [
          'Complete Digital Strategy',
          'Advanced Analytics',
          'Multi-Channel Campaigns',
          'Marketing Automation',
          'Advanced Lead Generation',
          'ROI Optimization',
          'Custom Reporting',
          'Marketing Consultation'
        ]
      }
    ]
  };

  const currentPackages = packages[activeTab] || packages.Website;

   return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#001245' }}>
      {/* Enquire Now Tab */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="bg-yellow-400 text-black px-3 py-8 rounded-r-lg transform -rotate-90 origin-left">
          <span className="text-sm font-semibold whitespace-nowrap">Enquire Now</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Choose <span className="text-blue-400">Your Package</span>
        </h1>
        <p className="text-white text-sm max-w-2xl mx-auto">
          Our plans are clear and open, no shocks or caps. Help is always here when you want it.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm rounded-full border-2 border-dashed transition-all ${
              activeTab === tab
                ? 'bg-blue-500 text-white border-blue-500'
                : 'text-white border-white hover:bg-white hover:text-blue-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {currentPackages.map((pkg, index) => (
          <div key={index} className="relative">
            <div className="bg-[#0D1E4E] rounded-2xl p-6 shadow-xl flex flex-col items-center w-full max-w-xs mx-auto">
              {/* Title Pill */}
              <div
                className="px-4 py-1 rounded-full text-white text-xs font-semibold mb-4"
                style={{
                  background: 'linear-gradient(90deg, #6B46C1 0%, #1080C6 100%)'
                }}
              >
                {pkg.title}
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{pkg.price}</span>
                <span className="text-lg text-[#7bd2f5] line-through ml-2">{pkg.originalPrice}</span>
              </div>

              {/* Features List */}
              <div
                className="w-full rounded-md overflow-y-auto max-h-52 text-xs text-white p-4 space-y-2"
                style={{
                  background: 'linear-gradient(135deg, #6B46C1 0%, #1080C6 100%)',
                  scrollbarWidth: 'thin'
                }}
              >
                {pkg.features.map((feature, i) => (
                  <div key={i}>{feature}</div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  className="px-5 py-2 rounded-full text-white font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(to right, #6B46C1, #1080C6)'
                  }}
                >
                  Chat Now
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1080C6] text-white flex items-center justify-center">
                  <Phone size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPackages;
