import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ededed] p-4 sm:p-8">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side with background image */}
        <div className="md:w-1/2 w-full relative flex flex-col p-0 justify-between" style={{ minHeight: '500px' }}>
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1608233528867-0e0a31a5ee53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background House"
              fill
              className="object-cover w-full h-full"
              priority
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          {/* Overlay content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top row: Back arrow and divider */}
            <div className="flex items-center justify-between px-8 pt-6 pb-3">
              <button className="bg-white/80 backdrop-blur rounded-full shadow p-1 w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 z-10">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="w-32 hidden md:block" />
            </div>
            {/* Subtle divider line below top row */}
            <div className="h-px bg-gray-200/30 w-full" />
            {/* Buy a house section */}
            <div className="flex-1 flex flex-col justify-between px-8 pb-6 pt-4">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-normal text-white">Buy a house</span>
                  <span className="text-xs bg-gray-200/80 rounded-full px-2 py-0.5 text-gray-800 font-normal">June 2029</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">56%</div>
                {/* Amounts above progress bar */}
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-base sm:text-lg font-semibold text-white">$182,495</span>
                  <span className="text-xs sm:text-base text-gray-200 font-normal">$250,000</span>
                </div>
                {/* Progress bar - larger and more prominent */}
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-full h-8 flex items-center">
                    <div className="absolute inset-0 flex items-center px-1">
                      {[...Array(50)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-[25px] w-full mx-[2px] rounded ${i < 29 ? 'bg-[#d44]' : 'bg-gray-200/80'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Remove house image at bottom, since background is now the house */}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full flex flex-col p-0">
          {/* Top row: Edit/Add funds and divider */}
          <div className="flex items-center justify-between px-8 pt-6 pb-3">
            <div className="w-8 h-8 hidden md:block" />
            <div className="flex gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm font-medium">Edit</button>
              <button className="bg-black text-white hover:bg-gray-900 rounded-full px-4 py-1 text-sm font-medium">Add funds</button>
            </div>
          </div>
          {/* Subtle divider line below top row */}
          <div className="h-px bg-gray-200/30 w-full" />
          {/* Auto-invested section */}
          <div className="flex items-center gap-3 px-8 py-4">
            {/* Random logo */}
            <div className="w-10 h-10 rounded-full bg-[#e6e6fa] flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#7c3aed"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">LOGO</text></svg>
            </div>
            <div>
              <div className="text-sm font-normal text-gray-800">Auto-invested in VMFXX</div>
              <div className="text-xs font-medium text-green-600">Earning 4.23% yield</div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-gray-400"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          {/* Subtle divider line only below auto-invested */}
          <div className="h-px bg-gray-200/30 w-full mb-2" />
          {/* Transactions section */}
          <div className="flex-1 flex flex-col px-8 pb-6">
            <div className="text-base font-semibold text-gray-800 mb-3">Transactions</div>
            <ul className="flex flex-col gap-4">
              {/* Transaction items */}
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">One-time deposit</div>
                    <div className="text-xs font-normal text-gray-400">Yesterday</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$1,350.00</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ef4444"/><path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">Interest payout</div>
                    <div className="text-xs font-normal text-gray-400">June 16</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$148.95</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">Regular deposit</div>
                    <div className="text-xs font-normal text-gray-400">June 1</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$1,000.00</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">Regular deposit</div>
                    <div className="text-xs font-normal text-gray-400">May 2</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$1,000.00</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ef4444"/><path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">Interest payout</div>
                    <div className="text-xs font-normal text-gray-400">April 15</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$128.57</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <div>
                    <div className="text-sm font-normal text-gray-800">Regular deposit</div>
                    <div className="text-xs font-normal text-gray-400">April 1</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-800">+$1,000.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
