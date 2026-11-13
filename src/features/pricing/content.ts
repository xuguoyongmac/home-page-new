import type { Locale } from '../../data/types';
interface QuotePlan { id: string; icon: string; name: string; description: string; items: string[]; }
export const quotePlans: Record<Locale, QuotePlan[]> = {
  zh: [
    { id: 'team', icon: 'network', name: '团队协作方案', description: '从岗位任务与团队使用规模出发。', items: ['数字员工与岗位配置', '企业知识与项目协作', '使用规模与模型用量评估'] },
    { id: 'enterprise', icon: 'shield', name: '企业私有化方案', description: '结合企业网络、数据与管理要求。', items: ['私有化环境与模型选型', '组织权限与系统连接', '部署实施与服务范围评估'] },
    { id: 'appliance', icon: 'cpu', name: '行业一体机方案', description: '围绕业务场景确定软硬一体交付。', items: ['行业岗位与知识配置', '计算资源与设备选型', '现场环境与交付范围评估'] },
  ],
  en: [
    { id: 'team', icon: 'network', name: 'Team collaboration', description: 'Scope your roles and team usage.', items: ['Digital employee configuration', 'Knowledge and project collaboration', 'Team scale and model usage assessment'] },
    { id: 'enterprise', icon: 'shield', name: 'Private deployment', description: 'Align with your network, data and governance needs.', items: ['Deployment and model selection', 'Roles, access and integrations', 'Implementation and service scoping'] },
    { id: 'appliance', icon: 'cpu', name: 'Industry appliance', description: 'Scope an integrated hardware and software delivery.', items: ['Industry roles and knowledge', 'Compute and hardware selection', 'On-site environment and delivery scoping'] },
  ],
};
