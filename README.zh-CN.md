# Kewei Zhan 个人作品集

面向 AI 应用工程、后端基础设施与全栈系统的个人作品集网站。

**其他语言：** [English](README.md)

## 项目简介

本仓库是 [Kewei Zhan](https://github.com/keweizhan) 的个人作品集网站源代码。Kewei 是南加州大学计算机工程硕士在读生，聚焦 AI 应用工程、后端基础设施、LLM 智能体、ASR 评测与全栈系统。网站包含重点项目、服务、个人介绍与联系表单，并提供完整的多语言版本（English / 简体中文 / 繁體中文）。

## 技术栈

- **框架：** Next.js 16（App Router）、React 19、TypeScript
- **样式：** Tailwind CSS 4
- **动效：** Motion（`motion/react`，Framer Motion 风格 API）、GSAP
- **滚动：** Lenis
- **国际化：** next-intl（`en`、`zh-CN`、`zh-TW`）
- **表单：** react-hook-form
- **邮件：** Resend
- **部署目标：** Vercel

## 重点项目

### 1. Distributed AI Agent Platform
**仓库：** https://github.com/keweizhan/Distributed-ai-agent-platform

面向生产的 AI 智能体平台，使用 FastAPI、Celery、Redis、PostgreSQL 与 Docker 沙箱构建。包含 JWT 鉴权、工作空间隔离、可选 Qdrant 向量记忆、Prometheus / Grafana 可观测性，以及结构化的 LLM 规划与执行流程。

### 2. SwitchNet Bilingual ASR Pipeline
**仓库：** https://github.com/keweizhan/SwitchNet

基于 Whisper 与 WhisperX 的中英双语 / 语码转换 ASR 评测与演示框架。提供清单驱动的实验流程、切换点分析、字幕导出，以及用于交互式评测的 Streamlit Demo。

## 功能特性

- 单页结构：首屏 / 服务 / 作品 / 关于 / 联系，配合滚动联动动画
- 服务区块的 sticky 堆叠手风琴与计数器驱动的项目展示
- 平滑滚动（Lenis）与精心编排的动效
- 通过 `next-intl` 提供英文、简体中文、繁體中文完整翻译
- 联系表单通过 Next.js API 路由，由 Resend 发送邮件
- 自定义内联 SVG 网站图标与品牌化的标签页标题

## 本地运行

```bash
pnpm install
pnpm dev
```

然后访问 [http://localhost:3000](http://localhost:3000)。源代码位于 `src/`，开发模式支持热更新。

常用脚本：

| 命令          | 说明              |
| ------------- | ----------------- |
| `pnpm dev`    | 启动开发服务器    |
| `pnpm build`  | 生产构建          |
| `pnpm start`  | 运行生产服务      |
| `pnpm lint`   | 运行 ESLint       |

## 环境变量

联系表单（[`src/app/api/send/route.ts`](src/app/api/send/route.ts)）使用 Resend。

| 变量名             | 是否必填 | 说明                                                             |
| ------------------ | -------- | ---------------------------------------------------------------- |
| `RESEND_API_KEY`   | 是       | Resend 的 API Key，可在 <https://resend.com> 申请                 |
| `CONTACT_TO_EMAIL` | 否       | 联系表单的收件邮箱，未设置时使用默认收件地址                      |

请在本地 `.env.local` 中配置，并在部署平台的环境变量中同步设置。仓库内提供 `.env.example` 作为模板参考。

**`.env.local` 切勿提交到仓库** —— 它已被 [`.gitignore`](.gitignore) 中的 `.env*` 规则忽略，仅 `.env.example` 通过 `!.env.example` 例外被显式追踪。

## 部署

设计为部署到 [Vercel](https://vercel.com)，也可部署在任意支持 Next.js 的平台。请在项目环境变量中配置 `RESEND_API_KEY`（以及可选的 `CONTACT_TO_EMAIL`）。

## 致谢

本作品集基于 Weihang Li / Hanggesimida 的开源作品集模板进行二次定制，并已针对 Kewei Zhan 的个人项目与求职方向做了大量修改。

## License

见 [LICENSE](LICENSE)，保留原模板作者的 MIT License。
