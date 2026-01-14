import React, { useMemo, useState } from "react";
import { FiChevronLeft, FiLock, FiMail, FiUser, FiPhone } from "react-icons/fi";
import { HiBuildingOffice } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

export const SurveyPage = ({ title = "Category", onBack }) => {
  const navigate = useNavigate();

  const QUESTIONS = useMemo(() => {
    const bestToWorst = (a, b, c, d) => [a, b, c, d];

    const COMMERCIAL_STRATEGY = [
      {
        q: "How clearly defined is your overall commercial strategy?",
        options: bestToWorst(
          "Documented strategy aligned with business goals and reviewed regularly",
          "Clear strategy but reviewed infrequently",
          "Strategy exists but lacks clarity or alignment",
          "No defined commercial strategy"
        ),
      },
      {
        q: "How effective is your pricing governance process?",
        options: bestToWorst(
          "Formal governance with approvals, controls, and audit trail",
          "Defined process with occasional exceptions",
          "Informal pricing decisions with limited oversight",
          "No pricing governance in place"
        ),
      },
      {
        q: "How well do you understand customer profitability?",
        options: bestToWorst(
          "Profitability tracked by customer, contract, and service",
          "High-level customer profitability visibility",
          "Limited understanding of customer-level margins",
          "Customer profitability not analysed"
        ),
      },
      {
        q: "How consistent are margins across similar contracts?",
        options: bestToWorst(
          "Margins consistently controlled within target range",
          "Minor variance across similar contracts",
          "Significant margin inconsistency",
          "Margins vary widely without explanation"
        ),
      },
      {
        q: "How effectively do you manage commercial risks?",
        options: bestToWorst(
          "Risks proactively identified, tracked, and mitigated",
          "Risks identified but mitigation inconsistent",
          "Risks addressed reactively after issues occur",
          "Commercial risks not actively managed"
        ),
      },
      {
        q: "How strong is your contract approval process?",
        options: bestToWorst(
          "Multi-level approvals with financial and legal review",
          "Standard approvals with limited financial review",
          "Basic approval process with minimal controls",
          "Contracts approved without formal review"
        ),
      },
      {
        q: "How accurately are cost assumptions validated during bidding?",
        options: bestToWorst(
          "Assumptions validated using historical and real-time data",
          "Assumptions reviewed using recent experience",
          "Limited validation of assumptions",
          "No validation of cost assumptions"
        ),
      },
      {
        q: "How effective is your discount approval and tracking process?",
        options: bestToWorst(
          "Discounts governed, approved, and fully tracked",
          "Discounts approved but tracking inconsistent",
          "Discounts granted informally",
          "No controls over discounting"
        ),
      },
      {
        q: "How well do you balance growth versus profitability?",
        options: bestToWorst(
          "Growth targets balanced with margin thresholds",
          "Profitability considered but not enforced",
          "Growth prioritised over profitability",
          "No balance between growth and profit"
        ),
      },
      {
        q: "How effective is your bid / no-bid decision process?",
        options: bestToWorst(
          "Formal evaluation using financial and strategic criteria",
          "Defined process but inconsistently applied",
          "Decisions based on limited criteria",
          "No formal bid decision process"
        ),
      },
      {
        q: "How well are contract variations and scope changes monetised?",
        options: bestToWorst(
          "All variations priced, approved, and recovered promptly",
          "Most variations monetised with some delays",
          "Variations often absorbed without recovery",
          "Scope changes not monetised"
        ),
      },
      {
        q: "How effective is your commercial performance reporting?",
        options: bestToWorst(
          "Real-time dashboards with actionable insights",
          "Regular reports with limited insights",
          "Infrequent or manual reports",
          "No commercial performance reporting"
        ),
      },
      {
        q: "How aligned are sales and operations on commercial outcomes?",
        options: bestToWorst(
          "Strong alignment with shared KPIs and reviews",
          "General alignment with occasional conflict",
          "Limited alignment between teams",
          "Sales and operations operate in silos"
        ),
      },
      {
        q: "How effective is your renewal and retention strategy?",
        options: bestToWorst(
          "Proactive renewal planning with risk scoring",
          "Renewals managed but reactive",
          "Renewals handled late in the cycle",
          "No renewal strategy"
        ),
      },
      {
        q: "How well do you leverage data in commercial decision-making?",
        options: bestToWorst(
          "Decisions driven by accurate, timely data",
          "Data used but not consistently",
          "Decisions often based on intuition",
          "Data not used in decisions"
        ),
      },
      {
        q: "How structured is your upsell and cross-sell approach?",
        options: bestToWorst(
          "Defined offerings with tracking and targets",
          "Some structure but inconsistent execution",
          "Opportunistic upselling only",
          "No upsell or cross-sell approach"
        ),
      },
      {
        q: "How effective is your claims and dispute management?",
        options: bestToWorst(
          "Claims tracked, aged, and resolved quickly",
          "Claims managed but resolution slow",
          "Claims handled inconsistently",
          "No formal claims process"
        ),
      },
      {
        q: "How competitive and differentiated is your value proposition?",
        options: bestToWorst(
          "Clear differentiation supported by data",
          "Value proposition defined but generic",
          "Limited differentiation",
          "No clear value proposition"
        ),
      },
      {
        q: "How well do you capture lessons learned from wins and losses?",
        options: bestToWorst(
          "Structured reviews with actions implemented",
          "Reviews conducted but actions limited",
          "Lessons discussed informally",
          "No lessons-learned process"
        ),
      },
      {
        q: "How resilient is your commercial strategy to market changes?",
        options: bestToWorst(
          "Strategy reviewed and adapted proactively",
          "Strategy updated occasionally",
          "Strategy updated only after issues",
          "Strategy not reviewed for market changes"
        ),
      },
    ];

    // Distinct questions and distinct options for non-commercial categories
    const topics = [
      "process ownership clarity",
      "SLA tracking accuracy",
      "data quality at source",
      "dashboard adoption",
      "root-cause analysis practice",
      "corrective action tracking",
      "training & documentation currency",
      "system integration effectiveness",
      "vendor performance review cadence",
      "budget setting methodology",
      "backlog visibility and control",
      "customer feedback loops",
      "risk tracking and mitigation",
      "handoffs between teams",
      "audit frequency and follow-up",
      "continuous improvement activities",
      "resource utilisation measurement",
      "incident response timeliness",
      "quality assurance checks",
      "reporting cadence and accuracy",
    ];

    const optionSets = {
      "process ownership clarity": bestToWorst(
        "RACI documented and enforced",
        "Roles defined with occasional gaps",
        "Informal ownership varies by team",
        "No clear ownership"
      ),
      "SLA tracking accuracy": bestToWorst(
        "Real-time SLA dashboard with alerts",
        "Monthly SLA reports with sampling checks",
        "Manual tracking; occasional errors",
        "No consistent SLA tracking"
      ),
      "data quality at source": bestToWorst(
        "Validation at entry; automated checks",
        "Periodic validation; some errors",
        "Manual fixes common; many errors",
        "Unvalidated data; high error rate"
      ),
      "dashboard adoption": bestToWorst(
        "Widely used daily across teams",
        "Used monthly by managers",
        "Limited use by few users",
        "No dashboards"
      ),
      "root-cause analysis practice": bestToWorst(
        "Structured RCA after incidents with actions",
        "RCA performed for high-impact issues",
        "Occasional RCA; outcomes not tracked",
        "No root-cause analysis"
      ),
      "corrective action tracking": bestToWorst(
        "Action log with owners, due dates, status",
        "Action log exists; follow-up inconsistent",
        "Actions tracked in emails/spreadsheets",
        "No corrective action tracking"
      ),
      "training & documentation currency": bestToWorst(
        "Up-to-date SOPs; mandatory training refreshing",
        "SOPs mostly current; ad-hoc refresh",
        "Outdated SOPs; limited training",
        "No formal SOPs or training"
      ),
      "system integration effectiveness": bestToWorst(
        "Systems integrated with automated data sync",
        "Key systems integrated; some manual steps",
        "Mostly manual transfers between systems",
        "Disconnected systems"
      ),
      "vendor performance review cadence": bestToWorst(
        "Quarterly vendor reviews with KPIs and actions",
        "Semi-annual reviews; limited actions",
        "Ad-hoc vendor discussions",
        "No vendor performance reviews"
      ),
      "budget setting methodology": bestToWorst(
        "Data-driven budgets with rolling forecasts",
        "Annual budgets using recent history",
        "Budgets set top-down; limited analysis",
        "No formal budgeting methodology"
      ),
      "backlog visibility and control": bestToWorst(
        "Live backlog with prioritisation and SLAs",
        "Backlog tracked weekly; prioritisation basic",
        "Spreadsheet-only view; irregular updates",
        "Backlog not visible"
      ),
      "customer feedback loops": bestToWorst(
        "Feedback captured continuously; actions tracked",
        "Periodic surveys; actions sometimes tracked",
        "Occasional feedback; no action tracking",
        "No feedback mechanism"
      ),
      "risk tracking and mitigation": bestToWorst(
        "Risk register live with owners and mitigations",
        "Quarterly risk review; some mitigations",
        "Static register; limited ownership",
        "No risk tracking"
      ),
      "handoffs between teams": bestToWorst(
        "Defined handoffs with SLAs and checklists",
        "Handoffs documented; compliance varies",
        "Informal handoffs; frequent delays",
        "No defined handoff process"
      ),
      "audit frequency and follow-up": bestToWorst(
        "Monthly audits with corrective actions",
        "Quarterly audits; sporadic follow-up",
        "Ad-hoc audits; minimal follow-up",
        "No audits performed"
      ),
      "continuous improvement activities": bestToWorst(
        "Active CI programme with Kaizen events",
        "CI initiatives exist; irregular cadence",
        "Occasional improvements; no programme",
        "No CI activities"
      ),
      "resource utilisation measurement": bestToWorst(
        "Real-time utilisation tracked and optimised",
        "Monthly utilisation reports; some actions",
        "Basic utilisation tracking only",
        "No utilisation measurement"
      ),
      "incident response timeliness": bestToWorst(
        "Response within SLA; escalations effective",
        "Generally within SLA; occasional overruns",
        "Often exceeds SLA; weak escalation",
        "No defined response targets"
      ),
      "quality assurance checks": bestToWorst(
        "QA checks embedded; defects tracked and fixed",
        "QA checks periodic; some tracking",
        "Ad-hoc QA checks only",
        "No QA process"
      ),
      "reporting cadence and accuracy": bestToWorst(
        "Weekly accurate reports with validation",
        "Monthly reports; minor discrepancies",
        "Quarterly reports; frequent corrections",
        "Irregular reporting; unreliable data"
      ),
    };

    const GENERIC_20 = topics.map((t) => ({
      q: `How effective is your ${title.toLowerCase()} ${t}?`,
      options: optionSets[t],
    }));

    return title === "Commercial Strategy" ? COMMERCIAL_STRATEGY : GENERIC_20;
  }, [title]);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState("quiz");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const total = QUESTIONS.length;
  const percent = Math.round((idx / total) * 100);

  const handleSelect = (choiceIndex) => {
    setScore((s) => s + (4 - choiceIndex));
    if (idx + 1 >= total) setStage("gate");
    else setIdx(idx + 1);
  };

  const finalPercent = Math.round((score / (total * 4)) * 100) || 0;

  if (stage === "quiz") {
    const q = QUESTIONS[idx];
    return (
      <div className="min-h-screen p-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
        
          <div className="flex justify-between mb-2 text-xs text-slate-500">
            <span>
              Question {idx + 1} of {total}
            </span>
            <span>{Math.max(percent, 1)}%</span>
          </div>

          <div className="h-2 mb-6 rounded bg-slate-200">
            <div
              className="h-2 bg-blue-600 rounded"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="p-6 bg-white border dark:bg-slate-900 rounded-xl">
            <h1 className="mb-6 text-2xl font-bold">{q.q}</h1>

            <div className="space-y-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="w-full p-4 text-left border rounded hover:border-blue-500"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-4 ">
            <button
              onClick={() => idx > 0 && setIdx(idx - 1)}
              className="flex items-center gap-2 px-3 py-1 border rounded"
            >
              <FiChevronLeft /> Previous
            </button>
            <button onClick={onBack} className="px-3 py-1 border rounded">
              Exit Assesment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🔓 Unlock Gate
  return (
    <div className="min-h-screen p-8 my-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl p-6 mx-auto bg-white border dark:bg-slate-900 rounded-xl">
        <div className="flex items-center justify-between gap-2 mb-4">
         <div className="flex items-center gap-2">
           <FiLock className="text-blue-600" />
          <h2 className="font-semibold">Unlock Full Report</h2>
         </div>
          <Link to="/" className="font-semibold text-md ">
            ← Back to Home
          </Link>
        </div>

        <form
          onSubmit={(e) => { 
            e.preventDefault();

            const payload = {
              category: title,
              reportName: `${title} Performance Assessment`,
              score: finalPercent,
              email,
              fullName,
              company,
              phone,
              createdAt: new Date().toISOString(),
            };

            navigate("/assessment", { state: payload });
          }}
          className="space-y-4"
        >
          <div>
            <label>Email *</label>
            <div className="relative">
              <FiMail className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 border rounded pl-9 dark:text-black"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label>Full Name</label>
            <div className="relative">
              <FiUser className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full py-2 border rounded pl-9 dark:text-black"
              />
            </div>
          </div>

          <div>
            <label>Company</label>
            <div className="relative">
              <HiBuildingOffice className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full py-2 border rounded pl-9 dark:text-black"
              />
            </div>
          </div>

          <div>
            <label>Phone</label>
            <div className="relative">
              <FiPhone className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full py-2 border rounded pl-9 dark:text-black"
              />
            </div>
          </div>

          <button className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
            Unlock Full Report
          </button>
        </form>
      </div>
    </div>
  );
};
