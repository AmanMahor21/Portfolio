// Each skill in utils/data/skills.js maps to its own dedicated SVG.
// Official brand logos are reused where available; concept/AI skills have custom icons.
import react from '../app/assets/svg/skills/react.svg';
import nextjs from '../app/assets/svg/skills/nextJS.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import nodejs from '../app/assets/svg/skills/node.svg';
import express from '../app/assets/svg/skills/express.svg';
import python from '../app/assets/svg/skills/python.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import mongodb from '../app/assets/svg/skills/mongoDB.svg';
import redis from '../app/assets/svg/skills/redis.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import restApi from '../app/assets/svg/skills/rest-api.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import aws from '../app/assets/svg/skills/aws.svg';

// Generative AI / Agentic system concept icons
import llm from '../app/assets/svg/skills/llm.svg';
import rag from '../app/assets/svg/skills/rag.svg';
import prompt from '../app/assets/svg/skills/prompt.svg';
import langgraph from '../app/assets/svg/skills/langgraph.svg';
import langchain from '../app/assets/svg/skills/langchain.svg';
import multiAgent from '../app/assets/svg/skills/multi-agent.svg';
import toolCalling from '../app/assets/svg/skills/tool-calling.svg';
import agentMemory from '../app/assets/svg/skills/agent-memory.svg';
import semanticSearch from '../app/assets/svg/skills/semantic-search.svg';
import embeddings from '../app/assets/svg/skills/embeddings.svg';
import reranking from '../app/assets/svg/skills/reranking.svg';
import structuredOutputs from '../app/assets/svg/skills/structured-outputs.svg';
import aiGuardrails from '../app/assets/svg/skills/ai-guardrails.svg';
import vectorDb from '../app/assets/svg/skills/vector-db.svg';
import anthropic from '../app/assets/svg/skills/anthropic.svg';

// Fallback image - using one of the existing icons as a safe placeholder
const fallbackImage = react;

// Keyed by the lowercase skill name as it appears in utils/data/skills.js
const skillImages = {
  // Frontend
  'react': react,
  'next.js': nextjs,
  'vue.js': vue,
  'typescript': typescript,
  'javascript': javascript,
  'tailwind css': tailwind,
  'html': html,
  'css': css,

  // Backend
  'node.js': nodejs,
  'express': express,
  'python': python,
  'fastapi': fastapi,
  'postgresql': postgresql,
  'mysql': mysql,
  'mongodb': mongodb,
  'redis': redis,
  'graphql': graphql,
  'rest api': restApi,

  // Generative AI & Agentic Systems
  'llm application development': llm,
  'rag pipelines': rag,
  'prompt engineering': prompt,
  'langgraph': langgraph,
  'langchain': langchain,
  'multi-agent workflows': multiAgent,
  'tool/function calling': toolCalling,
  'agent state & memory': agentMemory,
  'semantic search': semanticSearch,
  'embeddings': embeddings,
  'reranking': reranking,

  // AI Quality & Safety
  'structured outputs': structuredOutputs,
  'ai guardrails': aiGuardrails,

  // Data & Infrastructure
  'docker': docker,
  'vector databases': vectorDb,
  'nginx': nginx,

  // LLM Providers
  'anthropic': anthropic,
  'aws': aws,

  // Common aliases for robustness
  'html/css': html,
  'nextjs': nextjs,
  'nodejs': nodejs,
  'express.js': express,
  'vue': vue,
  'react.js': react,
  'tailwind': tailwind,
  'rest apis': restApi,
  'rest api': restApi,
  'rest microservices': restApi,
  'vector search': vectorDb,
  'vector databases': vectorDb,
  'playwright': aiGuardrails,
};

export const skillsImage = (skill) => {
  if (!skill) return fallbackImage;
  const skillID = skill.toLowerCase().trim();
  return skillImages[skillID] || fallbackImage;
};