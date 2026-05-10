# Kewei Zhan — 个人作品集网站

**Kewei Zhan** 的个人作品集，全栈与 AI 应用工程师，专注于构建分布式 AI 系统、后端平台与生产级开发者工具。

**其他语言：** [English](README.md)

## 功能概览

- 按区块组织的落地页（首屏、我能做什么、精选作品、关于、联系、页脚）
- 两个 AI / 后端特色项目，配有滚动联动交互与计数动画
- 平滑滚动（Lenis）与动画（GSAP、Motion）
- 联系表单提交到服务端路由，并通过 [Resend](https://resend.com) 发送邮件
- 多语言支持（English、简体中文、繁體中文）

## 技术栈

- **框架：** Next.js 16（App Router）、React 19、TypeScript
- **样式：** Tailwind CSS 4
- **UI：** Radix UI 原语、Lucide 图标，以及 class-variance-authority / clsx / tailwind-merge
- **动效：** GSAP、Motion（`motion/react`）、`@gsap/react`
- **滚动：** Lenis
- **表单：** react-hook-form
- **邮件：** Resend，出站模板使用 `@react-email/components`
- **国际化：** next-intl（en、zh-CN、zh-TW）

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。编辑 `src/` 下的文件即可，开发模式下支持热更新。

### 脚本说明

| 命令              | 说明           |
| ----------------- | -------------- |
| `npm run dev`     | 启动开发服务器 |
| `npm run build`   | 生产构建       |
| `npm run start`   | 运行生产服务   |
| `npm run lint`    | 运行 ESLint    |

## 上线前 TODO

- [ ] 将 `TODO_EMAIL@example.com` 替换为你的真实邮箱（见 `route.ts` 和 `NavOverlay.tsx`）
- [x] 将 `TODO_LINKEDIN_URL` 替换为你的 LinkedIn 主页 URL
- [ ] 将个人照片放至 `src/assets/image/cover.jpg` 并在 `HeroSection.tsx` 中恢复 `<Image>`
- [ ] 将关于页照片放至 `public/images/about/me.webp` 并在 `AboutSection.tsx` 中恢复 `<Image>`
- [ ] 添加项目截图（见 `SelectedWorksSection.tsx` 中的 TODO 注释）
- [ ] 如需简历下载功能，将简历 PDF 放至 `public/resume.pdf`

## 环境变量

联系表单对应的后端接口在 [`src/app/api/send/route.ts`](src/app/api/send/route.ts) 中使用 Resend。

- **`RESEND_API_KEY`** — 从 API 路由发信所必需。请在本地 `.env.local` 以及生产部署环境中配置。切勿将真实 API 密钥提交到仓库。

## 部署

可部署到任意支持 Next.js 的平台（例如 [Vercel](https://vercel.com)）。在项目环境变量中配置 `RESEND_API_KEY`。

## 致谢

本作品集基于 Weihang Li / Hanggesimida 的开源作品集模板进行二次定制，并已针对 Kewei Zhan 的个人项目与求职方向做了大量修改。

## 许可

见 [LICENSE](LICENSE)，保留原模板作者的 MIT 许可声明。
