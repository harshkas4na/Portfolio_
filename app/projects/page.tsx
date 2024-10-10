import { ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  const projects = {
    "Frontend projects": [
      { name: "HOOBANK", url: "https://github.com/harshkas4na/HooBank" },
      { name: "DASHBOARD", url: "https://github.com/harshkas4na/Dashboard" },
    ],
    "Web3 Projects": [
      { name: "CROWDFUNDING", url: "https://github.com/harshkas4na/CrowdFunding" },
      { name: "FIDUCIA", url: "https://github.com/harshkas4na/Fiducia" },
      { name: "MERCADO", url: "https://github.com/harshkas4na/Mercado" },
      { name: "SECUREID-CHAIN", url: "https://github.com/harshkas4na/SecureIDChain" },
      { name: "SWARTZ", url: "https://github.com/harshkas4na/SWARTZ" },
      { name: "CROSS-CHAIN-BRIDGE", url: "https://github.com/harshkas4na/Complete_OnChain_Bridge" },
    ],
    "Full-Stack Projects": [
      { name: "SUBASTA", url: "https://github.com/harshkas4na/SUBASTA" },
      { name: "HEALTHSPHERE", url: "https://github.com/harshkas4na/HealthSphere" },
      { name: "REACTIVE_TEMPLATE_GEN", url: "https://github.com/harshkas4na/Reactive_template_deployer" },
    ],
    "Solidity Smart Contracts": [
      { name: "AUTOMATIC INSURANCE PAYOUTS", url: "https://github.com/harshkas4na/Auto_Insurance_Payouts" },
      { name: "AUTOMATIC GOVERNANCE SYSTEM", url: "https://github.com/harshkas4na/Dec_Autnomous_Governance" },
      { name: "DECENTRALIZED SOCIAL MEDIA", url: "https://github.com/harshkas4na/SocialMedia_SmartContract" },
      { name: "COIN-MIXER", url: "https://github.com/harshkas4na/CoinMixer_Contract" },
      { name: "P2P_EXCHANGE", url: "https://github.com/harshkas4na/P2P_EXCHANGE" },
    ],
    "React Native Projects": [
      { name: "COMPANION", url: "https://github.com/harshkas4na/Companion" },
    ],
    "Rust Programs": [
      { name: "TIC-TAC-TOE GAME", url: "https://github.com/harshkas4na/TicTacToe-Rust" },
      { name: "RUST-BLOCKCHAIN", url: "https://github.com/harshkas4na/Rust-blockchain" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">My Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(projects).map(([category, projectList]) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <ul className="space-y-2">
                {projectList.map((project, index) => (
                  <li key={index}>
                    <Link href={project.url} passHref>
                      <Button variant="link" className="text-left">
                        <span className="mr-2">{project.name}</span>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}