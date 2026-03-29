---
id: 05-5-trade-protocol-on-and-off-ramp
sidebar_position: 5
title: "5. Protocolo de Negociação (On-Ramp e Off-Ramp)"
slug: trade-protocol-on-and-off-ramp
---

Formalizamos o ciclo de vida do pedido como uma máquina de estados com timeouts:

**Estados:** `ABERTO → CORRESPONDIDO → FINANCIADO → CONFIRMADO → LIQUIDADO | DISPUTADO → RESOLVIDO | EXPIRADO`

**Parâmetros Comuns (governados):**

- `T_match` (tempo máximo para aceitar uma correspondência), `T_fiat` (tempo máximo para fazer transferência fiduciária), `T_confirm` (janela de confirmação), `T_dispute` (janela de desafio).
- `B_bond_user`, `B_bond_merchant` (títulos de desempenho opcionais/pesos de slashing por nível de reputação e classe de risco de trilho de pagamento).
- `min_amount`, `max_amount` por trilho/região; cronogramas de taxas; janelas de expiração de cotação.

## 5.1 On-Ramp (Fiduciário → USDC em Base; Solana planejado)

1. **Abrir:** Usuário abre pedido BUY com valor e trilho.
2. **Corresponder:** Protocolo atribui um comerciante on-chain com base em USDC apostado. Títulos reembolsáveis podem bloquear.
3. **Financiar Fiduciário:** Usuário paga fiduciário para conta fornecida dentro de `T_fiat`.
4. **Reconhecimento do Comerciante:** Comerciante confirma recebimento de pagamento fiduciário.
5. **Liquidar:** Contrato libera USDC para usuário; taxas avaliadas; títulos desbloqueados.
6. **Disputa:** Se conflito, partes submetem evidência; admins autorizados emitem veredito on-chain.

## 5.2 Off-Ramp (USDC em Base → Fiduciário; Solana planejado)

1. **Abrir:** Usuário abre pedido SELL; transfere USDC para adaptador de liquidação sem escrow (contrato mantém ou fluxos atomicamente por design).
2. **Corresponder:** Comerciante aceita e publica cotação/título.
3. **Financiar Cripto:** USDC do usuário é bloqueado para liquidação.
4. **Comerciante Paga Fiduciário:** Comerciante paga fiduciário e confirma conclusão; ou usuário desafia.
5. **Liquidar/Disputa:** Como acima.

## 5.3 Classes de Risco de Trilho de Pagamento

Trilhos diferem (instantâneo/irreversível vs reversível/propenso a chargeback). O protocolo mapeia trilhos para multiplicadores de título, requisitos de confirmação e janelas de disputa mais longas/mais curtas.

---

