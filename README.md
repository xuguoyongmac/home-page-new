# TeGo 官网

TeGo 数字员工协作平台官网，基于 Astro、TypeScript 和静态资源构建，包含中英文页面、行业解决方案、产品博客、下载中心和发行记录。

当前源码版本：1.46.0。

## 本地运行

使用 Node.js 22.23.4 或更高版本与 npm。端口清理脚本依赖 macOS / Linux 的 `lsof`。

```sh
npm ci
npm run dev
```

中文首页：http://127.0.0.1:4350/zh/  
英文首页：http://127.0.0.1:4350/en/

开发和预览均固定使用 4350；启动前自动停止占用该端口的旧服务。

## 检查与构建

```sh
npm run check
npm run build
npm run verify
npm run preview
```

`build` 输出 `dist/` 静态站点，并清理未引用的历史图片。`verify` 核验页面、本地资源、锚点、文章完整性和发行记录。先构建，再校验或预览。

## 部署

将 `dist/` 完整内容部署到支持静态文件的 Web 服务。默认正式域名为 https://www.zhama.com；构建到其他域名时，通过 `PUBLIC_SITE_URL` 设置实际站点地址，控制 canonical、站点地图与分享链接。无需站点后端服务。

```sh
PUBLIC_SITE_URL=https://www.zhama.com npm run build
```

## 多人协作

页面按 `src/features/product/`、`src/features/solutions/`、`src/features/pricing/`、`src/features/download/` 拆分，每位同事维护自己的模块。目录分工、路由、资料和提交检查见 [多人协作开发约定](docs/多人协作开发约定_V1.1.md)。

## 源码目录

- `src/pages/`：统一页面路由。
- `src/features/`：按产品能力、行业、价格和下载隔离的页面模块。
- `src/components/navigation/`：共享顶部导航。
- `src/components/`：页面组件和产品场景重绘。
- `src/styles/`：页面样式与动效。
- `src/data/`、`src/content/`：站点内容与历史文章。
- `src/assets/`：构建时处理的首屏材质。
- `public/`：当前站点所需的图片、字体、品牌素材与静态文件。
- `scripts/`：端口清理、构建素材整理和站点校验。
- `docs/content-baseline_V1.0.json`：历史文章与发行数据的校验基线。

首页经营分析内容用于呈现数字员工任务成果，其数据口径维护在 `src/data/home-dashboard.ts`。
