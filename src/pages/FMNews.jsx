import React from 'react'
import { ExternalLink } from "lucide-react"

const FMNews = () => {
  const news = [
    {
      title: "Peter Millham takes on expanded leadership role at Complii",
      source: "FMJ",
      text: "Complii, a leading provider of integrated safety and regulatory compliance across water, air, fire, and electrical sectors, has appointed Peter Millham as Managing Director...",
      tags: ["Appointments", "Compliance"]
    },
    {
      title: "UK's first fully robotic barista launched by Lexington at BT Snowhill",
      source: "FMJ",
      text: "Lexington, supported by Elior Vending, has launched the UK's first fully robotic barista coffee counter at BT's Snowhill office in Birmingham...",
      tags: ["catering", "drinks"]
    },
    {
      title: "Viessmann Climate Solutions appointed to £1.6bn national social housing decarbonisation framework",
      source: "FMJ",
      text: "Viessmann Climate Solutions has been appointed to the four-year Procure Plus Framework for the Supply of Low & Zero Carbon Technologies...",
      tags: ["Decarbonisation", "Frameworks"]
    }
  ]

  return (
    <section className="w-full py-20 transition-colors duration-300 bg-white dark:bg-slate-900">
      <div className="max-w-4xl px-6 mx-auto">
        
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">FM News</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Latest Facilities Management news from trusted industry sources
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item, index) => (
            <div 
              key={index} 
              className="p-6 transition-colors border rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-500 group"
            >
              <div className="mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.title}
                </h3>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                  {item.source}
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read on FMJ <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FMNews