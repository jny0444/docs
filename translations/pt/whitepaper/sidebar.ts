import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  translationsPtWhitepaperSidebar: [
    {
        "type": "category",
        "label": "Whitepaper",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "00-abstract"
        },
        "items": [
            {
                "type": "doc",
                "id": "00-abstract",
                "label": "Resumo"
            },
            {
                "type": "doc",
                "id": "01-1-the-vision",
                "label": "1. A Visão"
            },
            {
                "type": "doc",
                "id": "02-2-design-goals-and-non-goals",
                "label": "2. Objetivos de Design e Não-Objetivos"
            },
            {
                "type": "doc",
                "id": "03-3-system-overview",
                "label": "3. Visão Geral do Sistema"
            },
            {
                "type": "doc",
                "id": "04-4-cryptographic-primitives-proof-integration",
                "label": "4. Primitivos Criptográficos e Integração de Provas"
            },
            {
                "type": "doc",
                "id": "05-5-trade-protocol-on-and-off-ramp",
                "label": "5. Protocolo de Negociação (On-Ramp e Off-Ramp)"
            },
            {
                "type": "doc",
                "id": "06-6-proof-of-credibility-reputation-matching",
                "label": "6. Proof-of-Credibility (Reputação e Correspondência)"
            },
            {
                "type": "doc",
                "id": "07-7-fraud-prevention",
                "label": "7. Prevenção de Fraude"
            },
            {
                "type": "doc",
                "id": "08-8-dispute-resolution",
                "label": "8. Resolução de Disputas"
            },
            {
                "type": "doc",
                "id": "09-9-pricing-oracle-mechanics",
                "label": "9. Mecânica de Preços e Oráculos"
            },
            {
                "type": "doc",
                "id": "10-10-liquidity-market-design",
                "label": "10. Liquidez e Design de Mercado"
            },
            {
                "type": "doc",
                "id": "11-11-security-model",
                "label": "11. Modelo de Segurança"
            },
            {
                "type": "doc",
                "id": "12-12-privacy-model",
                "label": "12. Modelo de Privacidade"
            },
            {
                "type": "doc",
                "id": "13-13-compliance-policy-positioning",
                "label": "13. Conformidade e Posicionamento de Política"
            },
            {
                "type": "doc",
                "id": "14-14-accessing-p2p-protocol-clients-sdks",
                "label": "14. Acessando o Protocolo P2P: Clientes e SDKs"
            },
            {
                "type": "doc",
                "id": "15-15-governance-upgradability",
                "label": "15. Governança e Atualizabilidade"
            },
            {
                "type": "doc",
                "id": "16-16-token-economics",
                "label": "16. Economia de Tokens"
            },
            {
                "type": "doc",
                "id": "17-17-disclosures-risks",
                "label": "17. Divulgações e Riscos"
            },
            {
                "type": "doc",
                "id": "18-18-references",
                "label": "18. Referências"
            },
            {
                "type": "doc",
                "id": "19-appendices",
                "label": "19. Apêndices"
            }
        ]
    }
  ],
};

export default sidebars;

