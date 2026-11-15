import type { SolutionModule } from '../types';

export default {
  "slug": "securities",
  "order": 0,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "securities",
      "icon": "chart",
      "name": "券商解决方案",
      "tag": "证券业务",
      "title": "把研究与经营数据，变成业务行动",
      "description": "连接研究资料、经营数据与客户服务记录，让数字员工完成信息归集、分析和材料编制，把管理关注点落实到客户跟进与团队行动。",
      "tasks": [
        {
          "title": "财富经营分析",
          "problem": "看得到指标变化，却难以把变化落实到营业部与客户。",
          "input": "客户资产、交易、产品持仓和赎回明细",
          "action": "按统一口径分析趋势与结构，定位重点营业部、客群和产品，整理客户经理跟进事项。",
          "output": "经营分析简报、客户跟进表",
          "value": "让管理层看清变化，让一线接到行动。"
        },
        {
          "title": "投研资料与主题研究",
          "problem": "公告、研报与数据分散，专业人员反复做资料准备。",
          "input": "研报、公告、研究目标与授权金融数据",
          "action": "速读资料，抽取事件、指标和观点；按研究框架组织主题分析，保留来源与统计口径。",
          "output": "研究底稿、主题报告、引用索引",
          "value": "把精力留给观点与判断。"
        },
        {
          "title": "业务材料复核",
          "problem": "同一事项涉及多份文件，条款与数据差异容易遗漏。",
          "input": "产品材料、业务制度与审阅要求",
          "action": "检索适用条款，对照材料中的表述和数据，定位差异并交由业务人员复核。",
          "output": "条款对照表、问题定位与修改建议",
          "value": "让审核有依据，修改有落点。"
        }
      ],
      "scope": "可围绕研究与经营分析配置岗位技能。数据许可、系统接入和交付范围在项目中确定；投资判断、适当性和对客内容由业务人员复核。",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "把研究与经营数据",
          "变成业务行动"
        ],
        "priorities": [
          {
            "title": "经营变化要能解释",
            "body": "资产、交易和产品数据各自成表，管理者还需要知道变化发生在哪里、下一步跟进什么。"
          },
          {
            "title": "投研准备要有依据",
            "body": "材料数量持续增长，研究人员需要可引用、可继续分析的底稿，而非孤立摘要。"
          },
          {
            "title": "专业成果要接到业务",
            "body": "报告形成后，客户经理和业务团队仍需要明确的服务重点与行动材料。"
          }
        ],
        "exhibit": {
          "title": "财富经营行动简报",
          "request": "分析客户资产与产品赎回变化，整理营业部跟进重点。",
          "sources": [
            "客户资产明细",
            "产品持仓与赎回",
            "客户服务记录"
          ],
          "columns": [
            "分析对象",
            "核对重点",
            "后续行动"
          ],
          "rows": [
            [
              "营业部",
              "资产变化与结构",
              "定位重点客群"
            ],
            [
              "客户",
              "持仓与赎回变化",
              "准备跟进清单"
            ],
            [
              "产品",
              "赎回集中与到期",
              "补充服务材料"
            ]
          ],
          "deliverables": [
            "经营简报 · PPT",
            "客户跟进表 · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "数据接到同一口径",
            "body": "通过授权接口、数据库或文件归集经营与研究资料，按业务确认的指标口径组织分析。"
          },
          {
            "title": "岗位方法可以复用",
            "body": "将经营分析、研究框架与材料复核方法沉淀为技能，结合知识引用和专业 Agent 分工开展工作。"
          },
          {
            "title": "成果进入协作流程",
            "body": "在项目中审阅图表、底稿与客户材料；投资判断、适当性与对客内容由业务人员确认。"
          }
        ]
      }
    },
    "en": {
      "slug": "securities",
      "icon": "chart",
      "name": "Securities",
      "tag": "Financial services",
      "title": "Turn research and business data into action",
      "description": "Connect research, business data and service records. Digital employees collect, analyze and prepare the materials managers and client teams need to act.",
      "tasks": [
        {
          "title": "Wealth business analysis",
          "problem": "Metric changes do not yet identify the branches or clients to follow up.",
          "input": "Client assets, transactions, holdings and redemptions",
          "action": "Analyze trends and structure with agreed definitions, identify priority branches and client groups, and prepare follow-ups.",
          "output": "Management brief and client follow-up workbook",
          "value": "Connect management insight to frontline action."
        },
        {
          "title": "Research and thematic analysis",
          "problem": "Analysts repeatedly collect material scattered across reports, announcements and datasets.",
          "input": "Research reports, announcements, research goals and licensed data",
          "action": "Extract events, indicators and viewpoints; build thematic working papers with sources and metric definitions.",
          "output": "Research working papers, thematic report and source index",
          "value": "Give analysts more room for judgment."
        },
        {
          "title": "Business material review",
          "problem": "Related documents can contain inconsistent wording or figures.",
          "input": "Product materials, company policies and review requirements",
          "action": "Find relevant provisions, compare statements and figures, and bring discrepancies to the responsible reviewer.",
          "output": "Provision comparison and revision findings",
          "value": "Make each finding actionable."
        }
      ],
      "scope": "Configure role skills for research and business analysis. Data licensing, integrations and delivery scope are agreed for each project; business professionals review investment-related content.",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "Turn research and data",
          "into business action"
        ],
        "priorities": [
          {
            "title": "Explain business changes",
            "body": "Managers need to know where assets and product activity changed, and which follow-ups matter."
          },
          {
            "title": "Ground research preparation",
            "body": "Analysts need working papers they can cite and build on, rather than disconnected summaries."
          },
          {
            "title": "Connect insight to client work",
            "body": "Client teams need service priorities and useful preparation materials after the report is written."
          }
        ],
        "exhibit": {
          "title": "Wealth business action brief",
          "request": "Analyze asset and redemption changes and organize branch follow-ups.",
          "sources": [
            "Client asset records",
            "Holdings and redemptions",
            "Service records"
          ],
          "columns": [
            "Focus",
            "Review",
            "Action"
          ],
          "rows": [
            [
              "Branch",
              "Asset mix and change",
              "Prioritize client groups"
            ],
            [
              "Client",
              "Holdings and redemptions",
              "Prepare follow-ups"
            ],
            [
              "Product",
              "Redemptions and maturity",
              "Prepare service materials"
            ]
          ],
          "deliverables": [
            "Management brief · PPT",
            "Client follow-ups · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "Align data definitions",
            "body": "Use authorized APIs, databases or files and the metric definitions agreed with the business."
          },
          {
            "title": "Reuse specialist methods",
            "body": "Combine analysis skills, research frameworks, cited knowledge and specialist Agent work."
          },
          {
            "title": "Continue in the project",
            "body": "Review charts, working papers and service materials. Business professionals retain investment, suitability and client-facing decisions."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "证券",
      "description": "财富经营、投研支持、业务复核",
      "icon": "chart"
    },
    "en": {
      "name": "Securities",
      "description": "Wealth analysis, research and material review",
      "icon": "chart"
    }
  }
} satisfies SolutionModule;
