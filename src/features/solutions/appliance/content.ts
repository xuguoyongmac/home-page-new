import type { Locale } from '../../../data/types';
import type { SolutionModule } from '../types';

type ApplianceFeature = {
  icon: string;
  title: string;
  description: string;
};

export interface AppliancePage {
  name: string;
  headline: string;
  description: string;
  action: string;
  highlights: { value: string; label: string }[];
  scenarios: ApplianceFeature[];
  specs: { name: string; value: string }[];
  delivery: ApplianceFeature[];
  titles: {
    scenarios: string;
    specs: string;
    delivery: string;
  };
}

export const appliancePage: Record<Locale, AppliancePage> = {
  zh: {
    name: 'TeGo Station',
    headline: '算力、模型与软件，\n一体交付',
    description: '内置 GB10 算力、预装 TeGo OS 与本地大模型，为企业提供软硬件一体的本地部署方案。',
    action: '咨询一体机',
    highlights: [
      { value: 'GB10', label: 'Grace Blackwell 超级芯片' },
      { value: '128 GB', label: 'LPDDR5x CPU / GPU 共享内存' },
      { value: '2 TB', label: 'M.2 NVMe SSD 本地存储' },
    ],
    scenarios: [
      { icon: 'key', title: '高数据安全要求', description: '在企业内网部署本地模型与存储，处理客户资料、内部文档等敏感业务数据。' },
      { icon: 'shield', title: '高安全与强监管', description: '面向金融、政务等业务，按组织要求配置访问权限、执行授权与操作审计。' },
      { icon: 'cpu', title: '缺少本地大模型', description: '为尚未部署本地大模型的企业，一体提供算力设备、模型服务与 TeGo OS。' },
      { icon: 'network', title: '并发需求持续增长', description: '支持多台一体机并联，随业务负载增加设备，持续扩展算力与并发处理能力。' },
    ],
    specs: [
      { name: '算力芯片', value: 'NVIDIA GB10 Grace Blackwell，20 核 Arm CPU' },
      { name: '统一系统内存', value: '128 GB LPDDR5x，CPU / GPU 共享' },
      { name: '本地存储', value: '2 TB M.2 NVMe SSD，支持自加密' },
      { name: '有线网络', value: '1 个 RJ-45 10 GbE 接口，ConnectX-7 Smart NIC' },
      { name: '无线连接', value: 'Wi-Fi 7，蓝牙 5.4' },
      { name: 'USB 与显示', value: '4 个 USB4 Type-C，1 个 HDMI 2.1a' },
      { name: '尺寸与重量', value: '150 × 150 × 50.5 mm，1.2 kg' },
      { name: '基础系统', value: '预装 NVIDIA DGX OS，支持 NVIDIA AI 软件栈与 CUDA 生态' },
    ],
    delivery: [
      {
        icon: 'cpu',
        title: 'GB10 算力硬件',
        description: 'GB10 一体机，单机配备 128 GB 共享内存、2 TB SSD 与供电附件，支持多机并联部署。',
      },
      {
        icon: 'layers',
        title: '预部署本地模型',
        description: '预部署本地大模型与推理服务，完成模型配置与调试。',
      },
      {
        icon: 'monitor',
        title: '预装 TeGo OS',
        description: '预装数字员工平台，完成组织、账号、权限与业务模板配置。',
      },
      {
        icon: 'check',
        title: '系统配置与售后',
        description: '完成系统配置、场景验证与管理员移交，提供售后支持。',
      },
    ],
    titles: {
      scenarios: '适用场景',
      specs: '硬件配置',
      delivery: '一体机交付内容',
    },
  },
  en: {
    name: 'TeGo Station',
    headline: 'Compute, models and software.\nDelivered together.',
    description: 'GB10 compute, preinstalled TeGo OS and local models in one appliance for enterprise deployment.',
    action: 'Discuss an appliance',
    highlights: [
      { value: 'GB10', label: 'Grace Blackwell Superchip' },
      { value: '128 GB', label: 'LPDDR5x shared CPU / GPU memory' },
      { value: '2 TB', label: 'M.2 NVMe SSD local storage' },
    ],
    scenarios: [
      { icon: 'key', title: 'Sensitive business data', description: 'Deploy models and storage within the enterprise network to process customer records and internal documents.' },
      { icon: 'shield', title: 'Security and regulatory requirements', description: 'Configure access, execution authorization and audit records for finance, government and other regulated work.' },
      { icon: 'cpu', title: 'No local model infrastructure', description: 'Bring compute hardware, local model services and TeGo OS together for organizations without local models.' },
      { icon: 'network', title: 'Growing concurrent demand', description: 'Connect multiple appliances and add devices as workloads grow to expand compute and concurrent processing capacity.' },
    ],
    specs: [
      { name: 'Compute chip', value: 'NVIDIA GB10 Grace Blackwell, 20-core Arm CPU' },
      { name: 'Unified system memory', value: '128 GB LPDDR5x, shared by CPU and GPU' },
      { name: 'Local storage', value: '2 TB M.2 NVMe SSD with self-encryption' },
      { name: 'Wired networking', value: '1 RJ-45 10 GbE port, ConnectX-7 Smart NIC' },
      { name: 'Wireless connectivity', value: 'Wi-Fi 7, Bluetooth 5.4' },
      { name: 'USB and display', value: '4 USB4 Type-C ports, 1 HDMI 2.1a port' },
      { name: 'Dimensions and weight', value: '150 × 150 × 50.5 mm, 1.2 kg' },
      { name: 'Base system', value: 'Preinstalled NVIDIA DGX OS with support for the NVIDIA AI software stack and CUDA ecosystem' },
    ],
    delivery: [
      {
        icon: 'cpu',
        title: 'GB10 compute hardware',
        description: 'GB10 appliances with 128 GB of shared memory, a 2 TB SSD and power accessories per unit, supporting multi-appliance deployment.',
      },
      {
        icon: 'layers',
        title: 'Predeployed local models',
        description: 'Predeployed local models and inference services, configured and validated for delivery.',
      },
      {
        icon: 'monitor',
        title: 'Preinstalled TeGo OS',
        description: 'The digital employee platform with organization, account, permission and business template configuration.',
      },
      {
        icon: 'check',
        title: 'Setup and support',
        description: 'System setup, scenario validation, administrator handover and after-sales support.',
      },
    ],
    titles: {
      scenarios: 'Where it fits',
      specs: 'Hardware specifications',
      delivery: 'What’s included',
    },
  },
};

export default {
  slug: 'appliance',
  order: 7,
  category: 'deployment',
  copy: {
    zh: {
      slug: 'appliance',
      icon: 'cpu',
      name: appliancePage.zh.name,
      tag: '软硬一体机',
      title: appliancePage.zh.headline,
      description: appliancePage.zh.description,
      scope: '软件、硬件、本地大模型与算力一体交付。',
      image: 'enterprise-connections',
      tasks: [],
    },
    en: {
      slug: 'appliance',
      icon: 'cpu',
      name: appliancePage.en.name,
      tag: 'AI appliance',
      title: appliancePage.en.headline,
      description: appliancePage.en.description,
      scope: 'Software, hardware, local models and compute, delivered together.',
      image: 'enterprise-connections',
      tasks: [],
    },
  },
  navigation: {
    zh: {
      name: '一体机解决方案',
      description: '软件、硬件、大模型与算力一体交付。',
      icon: 'cpu',
    },
    en: {
      name: 'AI appliance solution',
      description: 'Software, hardware, large language models and compute in one appliance.',
      icon: 'cpu',
    },
  },
} satisfies SolutionModule;
