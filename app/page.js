'use client';

import { useState } from 'react';

export default function Home() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const blogTopics = [
    {
      title: "Inverter Battery Lifespan: How to Maximize Your Battery's Performance in 2025",
      searchIntent: "Informational",
      keywords: ["inverter battery lifespan", "battery performance", "extend battery life"],
      outline: [
        "Understanding average lifespan (3-7 years)",
        "Factors affecting battery longevity",
        "Maintenance tips for longer life",
        "Signs your battery needs replacement",
        "Cost-benefit analysis of premium batteries"
      ],
      seoScore: 95
    },
    {
      title: "Inverter Batteries vs Regular Batteries: Complete Comparison Guide",
      searchIntent: "Informational/Commercial",
      keywords: ["inverter batteries", "battery comparison", "types of batteries"],
      outline: [
        "Key differences explained",
        "Technology comparison (tubular vs flat plate)",
        "Performance metrics",
        "Price and value analysis",
        "Best use cases for each type"
      ],
      seoScore: 92
    },
    {
      title: "Top 10 Best Inverter Batteries for Home Use in 2025 (Tested & Reviewed)",
      searchIntent: "Commercial",
      keywords: ["best inverter batteries", "inverter battery reviews", "top batteries 2025"],
      outline: [
        "Testing methodology",
        "Detailed reviews of top 10 batteries",
        "Performance comparisons",
        "Price vs features analysis",
        "Buying recommendations"
      ],
      seoScore: 98
    },
    {
      title: "How to Choose the Right Inverter Battery Capacity for Your Home",
      searchIntent: "Informational/Commercial",
      keywords: ["inverter battery capacity", "battery sizing", "calculate battery requirement"],
      outline: [
        "Understanding Ah (Ampere-hour) ratings",
        "Calculating your power needs",
        "Load calculation worksheet",
        "Backup time considerations",
        "Common capacity options explained"
      ],
      seoScore: 94
    },
    {
      title: "Inverter Battery Maintenance: Essential Tips to Prevent Costly Repairs",
      searchIntent: "Informational",
      keywords: ["inverter battery maintenance", "battery care", "prevent battery damage"],
      outline: [
        "Monthly maintenance checklist",
        "Water level monitoring",
        "Terminal cleaning procedures",
        "Temperature management",
        "Common mistakes to avoid"
      ],
      seoScore: 91
    },
    {
      title: "Lithium vs Lead-Acid Inverter Batteries: Which Should You Buy?",
      searchIntent: "Commercial",
      keywords: ["lithium inverter battery", "lead-acid battery", "battery technology comparison"],
      outline: [
        "Technology fundamentals",
        "Lifespan and cycle life comparison",
        "Total cost of ownership",
        "Environmental impact",
        "Future-proofing your investment"
      ],
      seoScore: 96
    },
    {
      title: "Inverter Battery Price Guide 2025: What to Expect and How to Save",
      searchIntent: "Commercial",
      keywords: ["inverter battery price", "battery cost", "cheap inverter batteries"],
      outline: [
        "Current market prices by capacity",
        "Brand comparison",
        "Seasonal discounts and deals",
        "Warranty considerations",
        "Hidden costs to consider"
      ],
      seoScore: 93
    },
    {
      title: "Tubular vs Flat Plate Inverter Batteries: Expert Analysis",
      searchIntent: "Informational/Commercial",
      keywords: ["tubular battery", "flat plate battery", "battery types comparison"],
      outline: [
        "Construction differences",
        "Performance in various conditions",
        "Lifespan expectations",
        "Maintenance requirements",
        "Recommendation by use case"
      ],
      seoScore: 90
    },
    {
      title: "How to Install an Inverter Battery: Step-by-Step DIY Guide",
      searchIntent: "Informational/Transactional",
      keywords: ["inverter battery installation", "install battery", "DIY battery setup"],
      outline: [
        "Safety precautions",
        "Tools required",
        "Step-by-step installation process",
        "Connection diagrams",
        "Testing and troubleshooting"
      ],
      seoScore: 89
    },
    {
      title: "Common Inverter Battery Problems and How to Fix Them",
      searchIntent: "Informational",
      keywords: ["inverter battery problems", "battery troubleshooting", "battery not charging"],
      outline: [
        "Battery not holding charge",
        "Overheating issues",
        "Sulfation and recovery",
        "Low backup time solutions",
        "When to call a professional"
      ],
      seoScore: 92
    },
    {
      title: "Inverter Battery Backup Time Calculator: Find Your Ideal Battery",
      searchIntent: "Informational/Commercial",
      keywords: ["battery backup time", "calculate backup", "inverter battery calculator"],
      outline: [
        "Understanding backup time factors",
        "Load vs capacity relationship",
        "Step-by-step calculation method",
        "Real-world examples",
        "Interactive calculator explanation"
      ],
      seoScore: 94
    },
    {
      title: "Best Inverter Batteries for Frequent Power Cuts (Heavy-Duty Options)",
      searchIntent: "Commercial",
      keywords: ["heavy duty inverter battery", "frequent power cuts", "high performance battery"],
      outline: [
        "Requirements for high-cycle applications",
        "Top 5 heavy-duty batteries",
        "Deep discharge capabilities",
        "Warranty and reliability",
        "ROI analysis"
      ],
      seoScore: 91
    },
    {
      title: "Eco-Friendly Inverter Batteries: Sustainable Power Backup Solutions",
      searchIntent: "Informational/Commercial",
      keywords: ["eco-friendly batteries", "green power backup", "sustainable batteries"],
      outline: [
        "Environmental impact of traditional batteries",
        "Lithium-ion advantages",
        "Recycling and disposal",
        "Green certifications",
        "Future battery technologies"
      ],
      seoScore: 88
    },
    {
      title: "Inverter Battery Warranty Guide: What's Covered and What's Not",
      searchIntent: "Informational",
      keywords: ["inverter battery warranty", "battery guarantee", "warranty terms"],
      outline: [
        "Standard warranty periods",
        "Pro-rata vs replacement warranties",
        "Claim process",
        "Exclusions and limitations",
        "Tips for warranty protection"
      ],
      seoScore: 87
    },
    {
      title: "Solar Compatible Inverter Batteries: Complete Buying Guide",
      searchIntent: "Commercial",
      keywords: ["solar inverter battery", "solar compatible battery", "solar power backup"],
      outline: [
        "Solar integration requirements",
        "Best batteries for solar systems",
        "Hybrid inverter compatibility",
        "Sizing for solar installations",
        "Cost-benefit analysis"
      ],
      seoScore: 93
    }
  ];

  const generateTopics = () => {
    setLoading(true);
    setTimeout(() => {
      setTopics(blogTopics);
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px',
          paddingTop: '40px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '10px',
            fontWeight: '700'
          }}>
            SEO Blog Topics Generator
          </h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: '0.9'
          }}>
            Keyword: "Inverter Batteries"
          </p>
          <p style={{
            fontSize: '1rem',
            opacity: '0.8',
            marginTop: '10px'
          }}>
            800-1000 Word Article Topics
          </p>
        </header>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={generateTopics}
            disabled={loading}
            style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Generating...' : topics.length ? 'Refresh Topics' : 'Generate SEO Topics'}
          </button>
        </div>

        {topics.length > 0 && (
          <div style={{
            display: 'grid',
            gap: '25px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {topics.map((topic, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    background: '#667eea',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    Topic #{index + 1}
                  </span>
                  <span style={{
                    background: topic.seoScore >= 95 ? '#10b981' : topic.seoScore >= 90 ? '#f59e0b' : '#8b5cf6',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    SEO: {topic.seoScore}/100
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '15px',
                  color: '#1f2937',
                  lineHeight: '1.4'
                }}>
                  {topic.title}
                </h3>

                <div style={{
                  marginBottom: '15px'
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#e0e7ff',
                    color: '#667eea',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    marginRight: '8px'
                  }}>
                    {topic.searchIntent}
                  </span>
                </div>

                <div style={{
                  marginBottom: '15px'
                }}>
                  <strong style={{
                    fontSize: '0.9rem',
                    color: '#4b5563',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Target Keywords:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {topic.keywords.map((kw, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#f3f4f6',
                          color: '#6b7280',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          fontSize: '0.75rem'
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong style={{
                    fontSize: '0.9rem',
                    color: '#4b5563',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Content Outline:
                  </strong>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    color: '#6b7280',
                    fontSize: '0.85rem',
                    lineHeight: '1.6'
                  }}>
                    {topic.outline.map((item, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {topics.length > 0 && (
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '15px',
            padding: '30px',
            marginTop: '40px',
            color: 'white'
          }}>
            <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>SEO Optimization Tips</h2>
            <ul style={{ lineHeight: '1.8', fontSize: '1rem' }}>
              <li>✓ All topics target high-volume keywords related to "inverter batteries"</li>
              <li>✓ Mix of informational, commercial, and transactional intent</li>
              <li>✓ Optimized for featured snippets and "People Also Ask" boxes</li>
              <li>✓ 800-1000 words is ideal for ranking while maintaining reader engagement</li>
              <li>✓ Include comparison tables, images, and structured data for better SERP features</li>
              <li>✓ Internal linking opportunities between related topics</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
