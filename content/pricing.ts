export const pricing = {
    websites: {
      label: 'Website & Funnel Development',
      tiers: [
        {
          name: 'Launch Pad Website',
          price: '$500–$1,000',
          features: [
            '1-page conversion landing page',
            'Basic brand styling + mobile ready',
            'Email capture (Google Sheets / Mailchimp)',
            'Light copy support, redirect message',
            'Template build in Webflow / WP / Carrd',
          ],
          note: 'Best for early-stage launches or proof-of-concept MVPs.',
        },
        {
          name: 'Startup Site & Funnel',
          price: '$2,000–$2,500',
          features: [
            'Up to 5 pages with custom layout',
            'Lead magnet funnel + email integration',
            'SEO + performance optimized',
            'Analytics included (GA / Hotjar)',
            'Copy guidance & responsive design',
          ],
          highlight: true,
        },
        {
          name: 'Full Funnel System',
          price: '$4,000–$6,000',
          features: [
            'Everything from Tier 2, plus:',
            'Blog / CMS setup',
            'Upsells, drip emails, retargeting pixels',
            'CRM automations (ConvertKit, Mailchimp)',
            'Heatmaps, A/B testing, training support',
          ],
        },
      ],
    },
    systems: {
      label: 'Systems That Scale',
      tiers: [
        {
          name: 'Systems Audit & Quick Win',
          price: '$250–$800',
          features: [
            'Audit of workflows + tool stack',
            '1-page bottleneck report',
            'One implemented automation (e.g. form → CRM)',
          ],
          note: 'Perfect first step for busy teams or solo founders.',
        },
        {
          name: 'Core Systems Setup',
          price: '$2,000–$2,500',
          features: [
            'CRM setup (Airtable / Notion / HubSpot)',
            '1 automated workflow (Zapier / Make)',
            '1 dashboard (metrics or task mgmt)',
            'Systems map + SOP docs/templates',
          ],
          highlight: true,
        },
        {
          name: 'ScaleOps Bundle',
          price: '$5,000–$6,500',
          features: [
            'Everything in Core Setup, plus:',
            'Project mgmt & comms tools setup',
            'Team training + SOP recording',
            'Optional analytics dashboard',
            'Slack/email support (30 days)',
          ],
        },
      ],
    },
    strategy: {
      label: 'Founder Strategy Accelerator',
      tiers: [
        {
          name: 'Strategy Sprint Session',
          price: '$150–$500',
          features: [
            '90-minute Zoom strategy session',
            'Follow-up roadmap or action plan',
          ],
          note: 'Fast clarity for stuck or scaling founders.',
        },
        {
          name: '90-Day Accelerator',
          price: '$2,000',
          features: [
            '6 bi-weekly strategy calls',
            'Email support + founder planning templates',
            'OKRs, launch plans, monthly reviews',
          ],
          highlight: true,
        },
        {
          name: 'Executive Growth Partner',
          price: '$1,000/mo (6-month min)',
          features: [
            'Weekly or biweekly advisory calls',
            'Live strategic review + materials feedback',
            'Slack/email async support',
            'Curated referral network access',
          ],
        },
      ],
    },
  };
  