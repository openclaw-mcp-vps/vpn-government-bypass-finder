export default function Home() {
  const faqs = [
    {
      q: 'How is the data collected?',
      a: 'Users in restricted countries submit real-time reports on which VPN protocols and configurations are currently working. Each submission is timestamped and voted on by the community for accuracy.'
    },
    {
      q: 'What do I get with the premium plan?',
      a: 'Premium members get access to verified working configurations with exact server settings, obfuscation parameters, and port numbers — updated daily by our network of trusted contributors.'
    },
    {
      q: 'Which countries are covered?',
      a: 'We cover 30+ countries including China, Russia, Iran, UAE, Turkey, and more. Coverage expands as our community grows.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Crowdsourced &amp; Real-Time
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find VPN Protocols That Actually Work During Government Blocks
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A live, community-driven database of VPN protocols verified to bypass censorship in 30+ countries. Updated daily by journalists, activists, and remote workers on the ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Premium Access — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[['30+', 'Countries'], ['12k+', 'Submissions'], ['98%', 'Uptime']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg py-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Premium</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime. Instant access.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Verified working configurations',
              'Exact server + port settings',
              'Daily updates per country',
              'Obfuscation & stealth protocols',
              'Priority community support',
              'Export configs to your VPN app'
            ].map(f => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-xs mt-12">
          &copy; {new Date().getFullYear()} VPN Bypass Finder. For legal use only.
        </p>
      </section>
    </main>
  )
}
