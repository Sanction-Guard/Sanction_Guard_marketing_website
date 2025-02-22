import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xbbe0e0,
        size: 0.8,
        backgroundColor: 0x100004, // Ensure a valid color
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null); // Prevent memory leaks
      }
    };
  }, []); // Removed vantaEffect from the dependency array

  return (
    <div ref={vantaRef} className="relative w-full h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="mt-40">
            <h1 className="text-4xl sm:text-7xl font-bold text-white leading-tight mb-6">
              Stay Compliant.<br />
              Minimize Risk.<br />
              Protect Your Business.
            </h1>
            <p className="sm:text-1.5xl text-white mb-10">
              At Sanction Guard, our mission is to empower organizations with a robust, efficient, and accurate
              sanctions screening solution. We aim to help businesses stay compliant with global regulations and
              mitigate financial risks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("/pricing")} className="bg-[#51aee5] text-white px-6 py-3 rounded-lg hover:bg-[#3b92c7] transition-colors flex items-center">
                Price Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => navigate("/about")} className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </div>
    </div>
  );
}
