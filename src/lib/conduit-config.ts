export const CONDUIT_CONFIG = {
  sellerAddress: '0xYOUR_WALLET_ADDRESS_HERE', // TODO: Replace with real wallet
  baseUrl: 'https://app.instantescrow.nz',
  tokenSymbol: 'USDC' as const,
  expiryDays: 7,
  mode: 'popup' as const,
};

export const PRODUCTS: Record<string, { name: string; price: number; description: string }> = {
  'glp-3': { name: 'GLP-3 10mg/ml', price: 149, description: 'Research-grade GLP-3 peptide, 10mg/ml injectable' },
  'glp-2': { name: 'GLP-2 Research Peptide', price: 129, description: 'Research-grade GLP-2 peptide' },
  'lipo-in-a-bottle': { name: 'Lipo-in-a-Bottle', price: 99, description: 'Advanced lipolytic research compound' },
};
