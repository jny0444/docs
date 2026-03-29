---
id: metadao-sale
sidebar_position: 7
title: "Venda MetaDAO"
slug: metadao-sale
---

> *Esta página é fornecida para fins informativos para explicar a mecânica do protocolo. Não constitui uma oferta de valores mobiliários ou aconselhamento de investimento. $P2P não está disponível para pessoas dos EUA. Nada aqui deve ser interpretado como uma promessa de retorno financeiro. Por favor, leia a [Divulgação completa](/pt/for-token-holders/disclosures) antes de prosseguir.*

O token $P2P é lançado em Solana através de um mecanismo de venda estilo MetaDAO projetado para distribuição justa e orientada pela comunidade.

1. Os usuários comprometem USDC em Solana durante uma janela de compromisso de 4 dias
2. Os fundadores definem o total de USDC aceito (**F**) usando camadas ponderadas por compromisso (veja abaixo)
3. Se superfaturado, as alocações e reembolsos são distribuídos pro-rata
4. 10M de tokens são distribuídos proporcionalmente entre todos os participantes no lançamento
5. Pós-venda, o tesouro fornece 20% do USDC arrecadado e 2,9M de tokens para pools de liquidez
6. A autoridade de cunhagem é transferida para o tesouro governado pelo mercado

**Nota — sem parede de lances.** A venda não usa uma parede de lances ou escada de lance mínimo. O preço é pro-rata contra o limite aceito; qualquer USDC que não seja alocado é reembolsado.

## Tamanho de levantamento, etapas FDV e reembolsos

O pedido público é **$6M** USDC. Se os compromissos totais excederem **$6M**, apenas o valor aceito será preenchido; **os compromissos em excesso serão reembolsados** de acordo com as etapas pro-rata e de preferência de XP abaixo.

A quantidade que pode ser aceita varia com **compromissos totais** (**C**):

| Se o total de compromissos **C**… | USDC aceito | FDV Implícito |
|----------------------------|---------------|----------------|
| **C** ≤ **$80M** | Até **$6M** | **$15,48M** |
| **$80M** < **C** ≤ **$150M** | Até **$8M** | **$20,64M** |
| **C** > **$150M** | Até **$10M** | **$25,8M** |

Apenas quando **C** é **maior que $80M** a venda aceita até **$8M** a **$20,64M** FDV. Apenas quando **C** é **maior que $150M** aceita até **$10M** a **$25,8M** FDV. Em todos os casos, USDC não aceito é devolvido aos participantes.

Os usuários de protocolo existentes recebem uma alocação preferencial com a mesma avaliação de todos os participantes da venda pública, com base em seu XP em [p2p.foundation](https://p2p.foundation/). Antes de participar, por favor revise a [Divulgação](/pt/for-token-holders/disclosures).

## Fórmula de alocação preferencial

O seguinte define como os compromissos são convertidos em alocações finais quando a venda é superfaturada e os níveis de XP aplicam multiplicadores. Participantes sem XP ainda recebem uma cota pro-rata; detentores de XP recebem uma parcela potencializada do levantamento aceito, limitada ao que comprometeram.

### Variáveis

| Símbolo | Definição |
|--------|------------|
| **C** | Total de USDC comprometido por todos os participantes |
| **F** | Limite de financiamento aceito pelos fundadores (**F** ≤ **C**) |
| **c_i** | USDC comprometido pelo participante *i* |
| **T1, T2, T3** | Conjuntos de participantes nos níveis de XP 1 (maior), 2 e 3 |
| **N** | Conjunto de participantes sem XP |
| **m_1 = 3** | Multiplicador Tier 1 |
| **m_2 = 2** | Multiplicador Tier 2 |
| **m_3 = 1,5** | Multiplicador Tier 3 |

### Passos

**Passo 1 — Taxa pro-rata base.** Calcule a taxa de aceitação como se não houvesse preferências.

```
r = F / C
```

**Passo 2 — Alocação base por participante.** Cada participante recebe uma fatia base proporcional ao seu compromisso.

```
base_i = c_i * r
```

**Passo 3 — Aplicar multiplicador de XP.** Para cada detentor de XP no nível *t*, multiplique sua alocação base pelo multiplicador desse nível. A alocação não pode exceder o que eles comprometeram.

```
pref_i = min(base_i * m_t, c_i)
```

Participantes sem XP permanecem inalterados neste passo.

**Passo 4 — Alocação preferida total.** Some todas as alocações preferenciais de XP.

```
A_pref = sum(pref_i)  para todos i em T1 + T2 + T3
```

**Passo 5 — Pool restante para detentores sem XP.** Subtraia as alocações de XP do limite de financiamento.

```
A_remaining = F - A_pref
```

**Passo 6 — Realocação sem XP.** Detentores sem XP dividem o pool restante pro-rata por compromisso.

```
C_N = sum(c_j)  para todos j em N
final_j = c_j * (A_remaining / C_N)
```

**Passo 7 — Reembolsos.** Cada participante recebe a diferença entre compromisso e alocação final.

```
refund_i = c_i - final_allocation_i
```

### Exemplo prático

**Configuração.** Detentores de XP são uma fração pequena do pool. Dez participantes sem XP comprometem $10.000 cada. Três detentores de XP comprometem quantidades menores.

| Participante | Compromisso | Nível XP | Multiplicador |
|---------------|------------|---------|------------|
| Alice | $500 | Tier 1 | 3× |
| Bob | $300 | Tier 2 | 2× |
| Carol | $200 | Tier 3 | 1,5× |
| D1 a D10 | $10.000 cada | Nenhum | 1× |

- **C** = $101.000 (total comprometido)
- **F** = $10.000 (fundadores aceitam $10.000; o resto é reembolsado)

**Passo 1 — Taxa base.**

```
r = 10.000 / 101.000 = 0,099010 (9,9%)
```

**Passo 2 — Alocação base.** Nota: valores intermediários usam precisão completa; valores exibidos são arredondados.

| Participante | Compromisso | base_i |
|---------------|------------|--------|
| Alice | $500 | $49,50 |
| Bob | $300 | $29,70 |
| Carol | $200 | $19,80 |
| Cada D | $10.000 | $990,10 |

Sem preferências, Alice receberia $49,50 alocados e $450,50 reembolsados.

**Passo 3 — Aplicar multiplicadores.** Multiplicadores são aplicados a valores base de precisão completa, depois arredondados.

| Participante | base_i | Multiplicador | pref_i |
|---------------|--------|------------|--------|
| Alice | $49,50 | 3× | min($148,51, $500) = **$148,51** |
| Bob | $29,70 | 2× | min($59,41, $300) = **$59,41** |
| Carol | $19,80 | 1,5× | min($29,70, $200) = **$29,70** |

**Passo 4 — Preferido total.**

```
A_pref = 148,51 + 59,41 + 29,70 = $237,62
```

**Passo 5 — Pool restante.**

```
A_remaining = 10.000 - 237,62 = $9.762,38
```

**Passo 6 — Realocação sem XP.**

```
C_N = 10 * 10.000 = $100.000
Cada D: 10.000 * (9.762,38 / 100.000) = $976,24
```

**Resultado.** Os totais podem diferir por pequenas quantidades devido ao arredondamento.

| Participante | Alocação final | Reembolso |
|-------------|------------------|--------|
| Alice (T1) | $148,51 | $351,49 |
| Bob (T2) | $59,41 | $240,59 |
| Carol (T3) | $29,70 | $170,30 |
| Cada D (×10) | $976,24 | $9.023,76 |
| **Total** | **~$10.000** | **~$91.000** |

**Versus sem preferências.**

| Participante | Sem preferência | Com preferência | Diferença |
|---------------|-------------------|-----------------|------------|
| Alice | $49,50 | $148,51 | +$99,01 (3×) |
| Bob | $29,70 | $59,41 | +$29,71 (2×) |
| Carol | $19,80 | $29,70 | +$9,90 (1,5×) |
| Cada D | $990,10 | $976,24 | −$13,86 |

Os detentores de XP recebem aproximadamente **$138,62** a mais em conjunto do que receberiam sem preferências. Esse valor é distribuído entre dez participantes sem XP, então cada D é menor por aproximadamente **$13,86** (cerca de **1,4%** de sua alocação base). O efeito nos detentores sem XP permanece pequeno quando os compromissos de XP são uma pequena parte de **C**.

---

