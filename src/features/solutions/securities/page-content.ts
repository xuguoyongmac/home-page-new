import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type SecuritiesEmployee = IndustryEmployee;

export const securitiesPresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "让数字员工合规上岗，让专业成果进入业务",
      "pain": "结果停在对话、对客缺少确认、过程难以追溯、敏感数据出域，让券商难以把模型能力用于实际业务。",
      "value": "TeGo 数字员工协作平台以岗位技能、系统连接与审核审计承接券商作业，让成果进入业务系统，持牌判断和客户数据始终受控。",
      "scenarios": [
        "ETF 潜客",
        "经营问数",
        "客户意图",
        "投研报告",
        "内容审核",
        "审计溯源"
      ],
      "benefits": [
        {
          "title": "成果进入系统",
          "description": "经人工确认的成果回写客户关系系统与投顾工作台，跟进和转化有正式记录。"
        },
        {
          "title": "对客经过确认",
          "description": "适当性和内容审核覆盖对客作业，观点由持牌人员确认，触达遵循授权与审批。"
        },
        {
          "title": "数据与过程受控",
          "description": "客户数据在私有环境使用，来源、调用、修改与成果关联留痕，支撑审阅追溯。"
        }
      ]
    },
    "hero": {
      "lines": [
        "让数字员工合规上岗",
        "让专业成果进入业务"
      ],
      "background": "/images/industries/securities-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "券商业务应用的四个断点",
        "body": "名单、问数和研究初稿已经能够生成，但结果停在对话、对客缺少确认、过程难以追溯、敏感数据出域，仍让券商难以放心投入业务。"
      },
      "mappingsTitle": "券商业务断点的对应解法",
      "mappings": [
        {
          "problemTitle": "结果停在对话里",
          "problem": "潜客名单与分析已经生成，却未进入客户关系系统和投顾工作台，跟进与转化难以追踪。",
          "capabilities": [
            "技能与插件",
            "业务系统连接",
            "平台 OpenAPI"
          ],
          "response": "将投顾方法封装为岗位技能，连接客户关系系统与投顾工作台；经人工确认的结果回写并回读状态，让跟进有正式记录。",
          "deliverables": [
            "客户关系系统回写记录",
            "客户跟进与转化记录"
          ],
          "value": "成果接上日常业务，客户跟进和转化有据可查。",
          "icon": "plug"
        },
        {
          "problemTitle": "对客缺少持牌确认",
          "problem": "观点建议缺少适当性校验与人工复核，生成内容直接对客，持牌责任和内容边界难以守住。",
          "capabilities": [
            "待处理事项",
            "内容策略",
            "风险规则"
          ],
          "response": "匹配客户风险等级、产品风险与销售限制，按规则检查收益承诺和诱导交易；异常转人工，观点经持牌人员确认后对客。",
          "deliverables": [
            "适当性与内容审核记录",
            "持牌人员确认回执"
          ],
          "value": "对客内容经过专业把关，持牌责任清楚落位。",
          "icon": "user-check"
        },
        {
          "problemTitle": "过程缺少完整记录",
          "problem": "输入、知识引用、工具调用和人工修改没有关联记录，出现争议后难以还原依据与责任。",
          "capabilities": [
            "审计中心",
            "内容标识与溯源",
            "版本机制"
          ],
          "response": "关联请求、知识来源、模型规则版本、工具调用与人工修改，保留成果溯源和复测记录，让合规审阅能够还原当时依据。",
          "deliverables": [
            "任务审计证据链",
            "成果溯源与复测记录"
          ],
          "value": "过程可还原、依据可追查，合规审阅有据可依。",
          "icon": "file-search"
        },
        {
          "problemTitle": "敏感数据离开内网",
          "problem": "客户身份、持仓与交易信息需要参与分析，公有服务依赖却让数据路径和访问边界难以控制。",
          "capabilities": [
            "私有化部署",
            "本地模型接入",
            "最小授权"
          ],
          "response": "模型与数据在券商私有环境分区运行，检索、工具、消息与第三方服务按人员权限和接口白名单连接，统一管理数据路径。",
          "deliverables": [
            "企业域内模型与数据运行环境",
            "人员权限与接口白名单"
          ],
          "value": "客户数据留在企业域内，业务接入范围清楚可控。",
          "icon": "key-round"
        }
      ],
      "governance": {
        "title": "治理嵌入每次业务作业",
        "items": [
          {
            "title": "对客审核",
            "body": "客户触达核对适当性与销售限制，对客观点由持牌投顾确认，研究结论与评级由持牌分析师审定；系统写入和主动触达按授权审批。"
          },
          {
            "title": "上线准入",
            "body": "以正常、边界、异常和对抗样本检验岗位成果、工具权限与人工门禁，形成测评基线、风险失效清单和准入标准。"
          },
          {
            "title": "持续留痕",
            "body": "行情、研报、规则与模型版本纳入维护，工具调用和人员修改保持关联；重要变更复测，审计记录支撑问题追溯。"
          }
        ]
      },
      "values": {
        "title": "让券商放心投入实际业务",
        "items": [
          {
            "title": "合规使用有抓手",
            "body": "适当性、内容审核、持牌确认和审计各有落点，让业务与合规围绕同一记录判断是否可用。"
          },
          {
            "title": "专业时间回到判断",
            "body": "圈客、取数、引用核对与初稿准备由数字员工承接，投顾和研究人员集中服务客户、分析依据与确认观点。"
          },
          {
            "title": "岗位经验成为自有资产",
            "body": "投顾方法、研究技能、企业知识和审计记录沉淀在券商环境，底层模型调整时，已积累的岗位资产继续复用。"
          }
        ]
      }
    }
  },
  "en": {
    "home": {
      "title": "Governed digital employees. Outputs connected to business.",
      "pain": "Outputs confined to chat, missing client approvals, incomplete records and sensitive-data exposure prevent model capabilities from becoming usable securities operations.",
      "value": "The platform connects role skills, business systems and review controls, turning securities work into recorded business outcomes while licensed professionals retain judgment and client data stays under institutional control.",
      "scenarios": [
        "ETF prospects",
        "Business data queries",
        "Client intent",
        "Research reports",
        "Content review",
        "Audit provenance"
      ],
      "benefits": [
        {
          "title": "Outputs reach business systems",
          "description": "Staff-confirmed outputs reach the CRM and adviser workbench, giving follow-up and conversion a formal record."
        },
        {
          "title": "Client communications are reviewed",
          "description": "Suitability and content controls cover client-facing work; licensed staff confirm opinions and outreach follows authorization and approval."
        },
        {
          "title": "Data and work remain controlled",
          "description": "Client data is used privately, with sources, calls, revisions and outputs connected for review and investigation."
        }
      ]
    },
    "hero": {
      "lines": [
        "Governed digital employees",
        "Outcomes ready for business"
      ],
      "background": "/images/industries/securities-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "Four gaps in operational adoption",
        "body": "Lists, analysis and research drafts can already be generated. Adoption remains constrained when outputs stay in chat, client communications bypass approval, work cannot be reconstructed and sensitive data leaves the institution."
      },
      "mappingsTitle": "Securities gaps and their solutions",
      "mappings": [
        {
          "problemTitle": "Outputs stop at the conversation",
          "problem": "Prospect lists and analysis do not reach the CRM or adviser workbench, leaving follow-up and conversion disconnected from the generated output.",
          "capabilities": [
            "Skills and plugins",
            "Business system connections",
            "Platform OpenAPI"
          ],
          "response": "Role skills retain adviser methods and connect with the CRM and adviser workbench. Staff-confirmed outputs are written back and their status read back, giving follow-up a formal business record.",
          "deliverables": [
            "CRM write-back records",
            "Client follow-up and conversion records"
          ],
          "value": "Connect outputs with daily business and trace client follow-up through to conversion.",
          "icon": "plug"
        },
        {
          "problemTitle": "Client content lacks licensed approval",
          "problem": "Opinions reach clients without suitability checks or professional review, leaving content boundaries and the responsibility of licensed personnel unclear.",
          "capabilities": [
            "Pending matters",
            "Content policies",
            "Risk rules"
          ],
          "response": "Match client risk profiles, product risk and sales restrictions, and check return promises and trading inducements against the firm’s rules. Refer exceptions to staff; licensed professionals confirm opinions before client communication.",
          "deliverables": [
            "Suitability and content-review records",
            "Licensed professional approval receipts"
          ],
          "value": "Give client communications professional review and clear licensed ownership.",
          "icon": "user-check"
        },
        {
          "problemTitle": "The work cannot be reconstructed",
          "problem": "Inputs, knowledge citations, tool calls and staff revisions lack connected records, making it difficult to establish the evidence and responsibility behind an output.",
          "capabilities": [
            "Audit center",
            "Content identification and provenance",
            "Version management"
          ],
          "response": "Requests, source material, model and rule versions, tool calls and staff revisions remain connected. Output provenance and retest records allow compliance reviewers to reconstruct the evidence available at the time.",
          "deliverables": [
            "Task audit evidence chain",
            "Output provenance and retest records"
          ],
          "value": "Reconstruct the work and trace its evidence for informed compliance review.",
          "icon": "file-search"
        },
        {
          "problemTitle": "Sensitive data leaves the private network",
          "problem": "Client identities, holdings and transactions are needed for analysis, while reliance on public services makes data routes and access boundaries difficult to control.",
          "capabilities": [
            "Private deployment",
            "Local model connections",
            "Least-privilege access"
          ],
          "response": "Models and data run in separate zones within the firm’s private environment. Retrieval, tools, messaging and third-party services follow user permissions and interface allowlists, keeping data routes under institutional control.",
          "deliverables": [
            "Private model and data environment",
            "User permissions and interface allowlist"
          ],
          "value": "Keep client data inside the enterprise boundary and business access clearly controlled.",
          "icon": "key-round"
        }
      ],
      "governance": {
        "title": "Controls within each business assignment",
        "items": [
          {
            "title": "Client-facing review",
            "body": "Client outreach checks suitability and sales restrictions. Licensed advisers confirm client-facing opinions; licensed analysts approve research conclusions and ratings. System writes and proactive contact follow the assigned authorizations and approvals."
          },
          {
            "title": "Production admission",
            "body": "Normal, boundary, exception and adversarial cases test role outputs, tool permissions and staff approval controls, producing a baseline, failure register and admission criteria."
          },
          {
            "title": "Ongoing traceability",
            "body": "Market data, research, rules and model versions have maintenance owners. Tool calls and staff changes remain connected; material changes are retested and audit records support investigation."
          }
        ]
      },
      "values": {
        "title": "Put digital employees to work with confidence",
        "items": [
          {
            "title": "Concrete compliance controls",
            "body": "Suitability, content review, licensed approval and audit have identifiable records, giving business and compliance teams a shared basis for judging whether outputs can be used."
          },
          {
            "title": "Professional attention on judgment",
            "body": "Digital employees undertake prospect preparation, data retrieval, citation checks and drafting, allowing advisers and researchers to concentrate on clients, evidence and professional conclusions."
          },
          {
            "title": "Institution-owned role assets",
            "body": "Adviser methods, research skills, enterprise knowledge and audit records remain in the firm’s environment, preserving accumulated role assets when underlying models change."
          }
        ]
      }
    }
  }
};
