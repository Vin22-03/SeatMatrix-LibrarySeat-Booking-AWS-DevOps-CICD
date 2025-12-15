export default function Tech() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827] text-white">

      <h1 className="text-center text-5xl font-extrabold mb-14">
        Technical <span className="text-cyan-400">Architecture</span>
      </h1>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* UI/UX BOX */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">🎨 UI / UX Design</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Modern SaaS layout</li>
            <li>• Glassmorphism with soft gradients</li>
            <li>• Smooth seat animations</li>
            <li>• Mobile-friendly responsive design</li>
            <li>• Clean, elegant, distraction-free UI</li>
          </ul>
        </div>

        {/* FRONTEND BOX */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">⚛️ Frontend Stack</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• React + Vite (super fast builds)</li>
            <li>• TailwindCSS for full styling control</li>
            <li>• Dynamic SVG seat map</li>
            <li>• Tooltip engine for owner-only details</li>
            <li>• Component-based architecture</li>
          </ul>
        </div>

        {/* DEVOPS BOX */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">🛠 DevOps & CI/CD</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Dockerized frontend & backend</li>
            <li>• CI/CD with Jenkins or GitHub Actions</li>
            <li>• Build → Test → Docker Image → Deploy</li>
            <li>• Automated version rollout</li>
            <li>• Optional: Prometheus + Grafana monitoring</li>
          </ul>
        </div>

        {/* AWS BOX */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">☁️ AWS Cloud Architecture</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• AWS ECS or EKS for production deployment</li>
            <li>• Amazon ECR for storing container images</li>
            <li>• Terraform IaC for creating infra</li>
            <li>• VPC, Subnets, Security Groups</li>
            <li>• ALB for load balancing traffic</li>
          </ul>
        </div>
      </div>

      {/* ARCHITECTURE DIAGRAM TEXT */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/10 border border-white/10 p-10 rounded-3xl backdrop-blur-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">📡 High-Level Architecture</h2>

        <pre className="text-gray-300 whitespace-pre-wrap text-lg text-left">
User → React UI → API → Backend Service → Database (Seats, Owners, Libraries)

                                       ↓
                                 Docker & CI/CD

                                       ↓
                          AWS ECR → ECS/EKS → Load Balancer

                                       ↓
                                 Terraform IaC
        </pre>
      </div>

    </div>
  );
}
