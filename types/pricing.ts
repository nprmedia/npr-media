export interface PricingTier {
    title: string
    price: string
    features: string[]
  }
  
  export interface PricingCategory {
    category: string
    tiers: PricingTier[]
  }
  
  export type PricingContent = PricingCategory[]
  