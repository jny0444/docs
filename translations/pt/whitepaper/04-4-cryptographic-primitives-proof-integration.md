---
id: 04-4-cryptographic-primitives-proof-integration
sidebar_position: 4
title: "4. Primitivos Criptográficos e Integração de Provas"
slug: cryptographic-primitives-proof-integration
---

## 4.1 Verificação de Identidade (Ao Vivo)

O Protocolo P2P usa provas ZK para verificação de identidade preservadora de privacidade. Um novo membro pode realizar KYC trustless compartilhando uma prova ZK de sua identidade — mantendo seus dados pessoais privados enquanto constrói reputação on-chain e desbloqueia limites de transação mais altos sem revelar PII bruto on-chain.

O protocolo atualmente suporta verificação de identidade através de múltiplos métodos baseados em ZK:

- **Verificação de ID governamental** via verificadores de prova ZK on-chain para documentos de identidade suportados.
- **Verificação de conta social** via **Reclaim Protocol** [1], que usa provas zkTLS para verificar propriedade e reputação de contas sociais (ex: redes profissionais, plataformas de desenvolvedores, mídia social) sem expor credenciais de conta ou dados pessoais.
- **Verificação de passaporte** via sistemas de prova ZK que podem verificar idade, nacionalidade e status de sanções sem divulgar conteúdo do documento.

Cada verificação bem-sucedida fortalece a reputação on-chain do usuário e expande sua capacidade de transação dentro do protocolo.

## 4.2 Módulo de Evidência para Verificação de Transações Bancárias (Roadmap)

Um módulo de evidência planejado estenderá as capacidades ZK do protocolo para verificação de transações bancárias para resolução de disputas on-chain. Este módulo aproveitará provas apoiadas por TLS para que um usuário ou comerciante possa produzir uma testemunha criptográfica de que uma declaração específica sobre uma transferência bancária ou recebimento de pagamento é verdadeira — sem expor credenciais ou detalhes de transação.

O módulo planejado especificará onde as provas são verificadas:

- **Verificador on-chain** para reivindicações compactas e hashes de atestação.
- **Verificador/relayer off-chain** (referência open-source) para declarações complexas ou específicas de trilho, postando uma atestação sucinta de volta on-chain.

> Provas brutas permanecerão com os usuários; a chain armazena apenas compromissos e vereditos mínimos.

## 4.3 Propriedades de Privacidade

A implementação atual de ZK-KYC fornece:

- **Divulgação não-interativa:** compartilhe apenas a prova, não os dados subjacentes.
- **Revelação seletiva:** apenas campos exigidos pelo circuito de verificação são expostos ao circuito.
- **Vinculação limitada:** IDs de protocolo e compromissos minimizam vinculabilidade entre sessões onde viável.

O módulo de evidência planejado estenderá essas propriedades de privacidade para verificação de transações bancárias.

---

