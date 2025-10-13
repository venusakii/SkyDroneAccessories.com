"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Flight Time",
    dji: "30 min",
    autel: "28 min",
    holyStone: "20 min",
  },
  {
    feature: "Camera Resolution",
    dji: "4K 60fps",
    autel: "4K 30fps",
    holyStone: "2.7K 30fps",
  },
  {
    feature: "Range",
    dji: "10 km",
    autel: "9 km",
    holyStone: "1 km",
  },
  {
    feature: "Obstacle Avoidance",
    dji: true,
    autel: true,
    holyStone: false,
  },
  {
    feature: "Price",
    dji: "$1,599",
    autel: "$1,299",
    holyStone: "$399",
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Model <span className="text-primary">Comparison</span>
        </h2>

        <div className="glass rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-bold">Feature</th>
                  <th className="text-center p-6 font-bold">
                    <div className="flex flex-col items-center gap-2">
                      <span>DJI</span>
                      <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">Recommended ⚙️</span>
                    </div>
                  </th>
                  <th className="text-center p-6 font-bold">Autel</th>
                  <th className="text-center p-6 font-bold">Holy Stone</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/50 hover:bg-primary/5 transition-colors group"
                  >
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center group-hover:text-primary transition-colors">
                      {typeof row.dji === "boolean" ? (
                        row.dji ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        row.dji
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.autel === "boolean" ? (
                        row.autel ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        row.autel
                      )}
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof row.holyStone === "boolean" ? (
                        row.holyStone ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        row.holyStone
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
