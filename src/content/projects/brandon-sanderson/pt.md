---
title: O site do meu autor favorito merecia mais que 34.
summary: Um redesign não oficial do site do Brandon Sanderson, refeito do zero com foco em performance, acessibilidade e navegação.
url: https://brandonsanderson-redesign.carlosbronze.com.br/
repo: https://github.com/bronze/bsand
---

## O incômodo

Sou fã do Brandon Sanderson, e o site dele não fazia jus aos livros. Era um WordPress lento, com imagens de mais de 1 MB em formatos antigos, navegação confusa para achar séries e livros, e sem modo escuro. No Google PageSpeed, a nota era 34 de 100, mesmo no desktop.

Os fãs dele são muito engajados. Um site melhor faria diferença de verdade.

## O estalo

Eu tinha lido como a Smashing Magazine [migrou do WordPress para o JAMstack](https://www.smashingmagazine.com/2020/01/migration-from-wordpress-to-jamstack/), e aquilo ficou na cabeça. Minha aposta era que dava para resolver boa parte disso pela base. Sair do WordPress para uma ferramenta com etapa de build, como o Astro ou o 11ty, e adotar formatos de imagem mais leves e modernos, com srcset servindo uma imagem diferente para cada tamanho de tela. Só isso já faria uma diferença enorme no carregamento e na experiência.

## O que fiz

No fim de 2023, refiz o site do zero com o 11ty (Eleventy), um gerador de sites estáticos. Fiquei entre ele e o Astro e escolhi o 11ty para experimentar uma ferramenta nova.

- Imagens em AVIF e WebP, com PNG de reserva e srcset por tamanho de tela: até 90% mais leves, sem perda visível.
- Cache e CDN, sem nenhuma chamada desnecessária.
- Modo escuro que lembra a preferência de quem lê.
- Livros organizados por série e ordem cronológica, com filtros por formato e links entre personagens e universos.

## O resultado

- PageSpeed de 34 para 100, em performance, acessibilidade, boas práticas e SEO.
- Carregamento de cerca de 5 segundos para menos de 1.

## O que aprendi

Performance não é só velocidade. É respeito pelo tempo de quem usa.

O 11ty me deu controle total, mas senti falta do que o Astro faz bem na experiência de desenvolvimento. Não por acaso, este site é em Astro.
