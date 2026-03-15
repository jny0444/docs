---
id: 09-9-pricing-oracle-mechanics
sidebar_position: 9
title: "9. Mecânica de Preços e Oráculos"
slug: pricing-oracle-mechanics
---

O Protocolo determina preços indicativos usando adaptadores de oráculo incorporados que agregam taxas de exchanges selecionadas e locais P2P em uma mediana/TWAP com fallbacks. Estes oráculos analisam dados de preço de uma variedade de exchanges centralizadas e P2P para determinar o preço de negociação para o par stablecoin-fiduciário em questão.

**Parâmetros:** conjunto de fonte, limites de obsolescência, limiares de desvio e disjuntores. Cotações carregam uma expiração para limitar exposição; se o oráculo falhar ou exceder limites de desvio, pedidos pausam ou re-cotam.

---

