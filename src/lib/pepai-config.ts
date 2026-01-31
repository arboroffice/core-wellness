export const PEPAI_CONFIG = {
  sellerAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD78', // TODO: Replace with Core Wellness wallet
  baseUrl: 'https://peptidepay-app.vercel.app',
  expiryDays: 7,
};

export const PRODUCTS: Record<string, { name: string; price: number; description: string }> = {
  'glp-3': { name: 'GLP-3 10mg/ml', price: 149, description: 'Research-grade GLP-3 peptide, 10mg/ml injectable' },
  'glp-2': { name: 'GLP-2 Research Peptide', price: 129, description: 'Research-grade GLP-2 peptide' },
  'lipo-in-a-bottle': { name: 'Lipo-in-a-Bottle', price: 99, description: 'Advanced lipolytic research compound' },
};
