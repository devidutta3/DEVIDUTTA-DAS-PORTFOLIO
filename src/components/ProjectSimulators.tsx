import React, { useState } from 'react';
import { Play, Sparkles, RefreshCw, BarChart2, CloudSun, Trophy, Satellite, ShieldAlert, ShieldCheck, Lock, AlertTriangle, Check } from 'lucide-react';

interface SimulatorProps {
  type?: 'weather' | 'ipl' | 'crop' | 'phishing';
}

export const ProjectSimulators: React.FC<SimulatorProps> = ({ type }) => {
  // Weather Simulator State
  const [temp, setTemp] = useState(28);
  const [humidity, setHumidity] = useState(65);
  const [pressure, setPressure] = useState(1012);
  const [weatherPredicting, setWeatherPredicting] = useState(false);
  const [weatherResult, setWeatherResult] = useState<{ rainChance: number; condition: string; dewPoint: number } | null>({
    rainChance: 35,
    condition: "Partly Cloudy / Mild Humidity",
    dewPoint: 20.8
  });

  const handlePredictWeather = () => {
    setWeatherPredicting(true);
    setTimeout(() => {
      const dewPoint = Number((temp - ((100 - humidity) / 5)).toFixed(1));
      let rainChance = Math.min(98, Math.max(5, Math.round((humidity * 0.7) + (30 - (pressure - 1000) * 2))));
      let condition = "Clear / Sunny";
      if (rainChance > 70) condition = "High Rain & Thunderstorm Risk";
      else if (rainChance > 40) condition = "Overcast & Humid Shower Likely";
      else if (rainChance > 20) condition = "Partly Cloudy";

      setWeatherResult({ rainChance, condition, dewPoint });
      setWeatherPredicting(false);
    }, 400);
  };

  // IPL Simulator State
  const [overs, setOvers] = useState(12);
  const [wickets, setWickets] = useState(3);
  const [currentRuns, setCurrentRuns] = useState(98);
  const [last5Runs, setLast5Runs] = useState(42);
  const [iplResult, setIplResult] = useState<{ projectedTotal: number; runRate: number; projectedRange: string }>({
    projectedTotal: 172,
    runRate: 8.17,
    projectedRange: "162 - 182"
  });

  const handlePredictIPL = () => {
    const crr = currentRuns / (overs || 1);
    const remainingOvers = 20 - overs;
    // Linear regression model simulation using learned weights:
    // Projected = current_runs + (remaining_overs * projected_rr) - (wickets * 4.5)
    const projectedRR = (last5Runs / 5) * 0.6 + crr * 0.4;
    const baseProjected = currentRuns + (remainingOvers * projectedRR) - (wickets * 3.8);
    const finalScore = Math.max(currentRuns + remainingOvers, Math.round(baseProjected));
    
    setIplResult({
      projectedTotal: finalScore,
      runRate: Number(crr.toFixed(2)),
      projectedRange: `${finalScore - 10} - ${finalScore + 10}`
    });
  };

  // Crop & Moisture Simulator State
  const [nir, setNir] = useState(0.48);
  const [red, setRed] = useState(0.12);
  const [swir, setSwir] = useState(0.22);
  const [green, setGreen] = useState(0.15);

  const calculateNdvi = () => (nir + red) === 0 ? 0 : Number(((nir - red) / (nir + red)).toFixed(3));
  const calculateNdmi = () => (nir + swir) === 0 ? 0 : Number(((nir - swir) / (nir + swir)).toFixed(3));
  const calculateNdwi = () => (green + nir) === 0 ? 0 : Number(((green - nir) / (green + nir)).toFixed(3));

  const ndvi = calculateNdvi();
  const ndmi = calculateNdmi();
  const ndwi = calculateNdwi();

  const getCropHealthStatus = () => {
    if (ndvi > 0.5 && ndmi > 0.2) return { crop: "Healthy Paddy Crop", stress: "Low Water Stress", recommendation: "Optimal soil moisture level. Maintain routine monitoring.", color: "#22C55E" };
    if (ndvi > 0.3 && ndmi < 0.1) return { crop: "Vegetation Present (Pulses/Groundnut)", stress: "Moderate Moisture Stress", recommendation: "Initiate light drip / furrow irrigation within 48 hours.", color: "#F97316" };
    if (ndvi <= 0.3) return { crop: "Bare Soil / Early Sowing Stage", stress: "High Water Requirement", recommendation: "Apply primary irrigation before seed germination phase.", color: "#EC4899" };
    return { crop: "Mixed Vegetation / Fallow", stress: "Mild Moisture Stress", recommendation: "Check localized rainfall feeds.", color: "#06B6D4" };
  };

  const cropStatus = getCropHealthStatus();

  // Student Grade Simulator State
  const [studyHours, setStudyHours] = useState(6);
  const [attendance, setAttendance] = useState(88);
  const [previousGpa, setPreviousGpa] = useState(8.2);

  const predictedGrade = Number(Math.min(10, Math.max(4, (studyHours * 0.25) + (attendance * 0.04) + (previousGpa * 0.45))).toFixed(2));

  if (type === 'weather') {
    return (
      <div className="p-5 rounded-2xl bg-[#080B18] border border-[#293056] space-y-4 font-sans text-xs sm:text-sm">
        <div className="flex items-center justify-between border-b border-[#293056] pb-3">
          <span className="font-bold text-white flex items-center gap-2 text-sm">
            <CloudSun className="w-4 h-4 text-[#06B6D4]" />
            FastAPI Weather Model Tester
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/30">
            Open-Meteo REST API
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-[#A5B4FC] flex justify-between">
              <span>Temperature</span>
              <span className="text-white font-mono">{temp}°C</span>
            </label>
            <input
              type="range"
              min="10"
              max="45"
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
              className="w-full accent-[#06B6D4] bg-[#141A32] rounded-lg h-2"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#A5B4FC] flex justify-between">
              <span>Humidity</span>
              <span className="text-white font-mono">{humidity}%</span>
            </label>
            <input
              type="range"
              min="20"
              max="98"
              value={humidity}
              onChange={(e) => setHumidity(Number(e.target.value))}
              className="w-full accent-[#06B6D4] bg-[#141A32] rounded-lg h-2"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#A5B4FC] flex justify-between">
              <span>Pressure</span>
              <span className="text-white font-mono">{pressure} hPa</span>
            </label>
            <input
              type="range"
              min="980"
              max="1030"
              value={pressure}
              onChange={(e) => setPressure(Number(e.target.value))}
              className="w-full accent-[#06B6D4] bg-[#141A32] rounded-lg h-2"
            />
          </div>
        </div>

        <button
          onClick={handlePredictWeather}
          disabled={weatherPredicting}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-90 active:scale-98 transition-all"
        >
          {weatherPredicting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>Execute FastAPI Weather Prediction</span>
        </button>

        {weatherResult && (
          <div className="p-3.5 rounded-xl bg-[#141A32] border border-[#293056] grid grid-cols-3 gap-2 text-center">
            <div>
              <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">Precipitation Risk</span>
              <span className="text-base font-bold text-[#06B6D4] font-mono">{weatherResult.rainChance}%</span>
            </div>
            <div>
              <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">Dew Point</span>
              <span className="text-base font-bold text-[#2563EB] font-mono">{weatherResult.dewPoint}°C</span>
            </div>
            <div>
              <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">Model Output</span>
              <span className="text-xs font-semibold text-white block truncate">{weatherResult.condition}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'ipl') {
    return (
      <div className="p-5 rounded-2xl bg-[#080B18] border border-[#293056] space-y-4 font-sans text-xs sm:text-sm">
        <div className="flex items-center justify-between border-b border-[#293056] pb-3">
          <span className="font-bold text-white flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-[#F97316]" />
            IPL Match Score Predictor
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30">
            Linear Regression Model
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC]">Overs (0-19)</label>
            <input
              type="number"
              min="1"
              max="19"
              value={overs}
              onChange={(e) => {
                setOvers(Number(e.target.value));
                handlePredictIPL();
              }}
              className="w-full px-3 py-1.5 rounded-lg bg-[#141A32] border border-[#293056] text-white font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC]">Wickets Lost (0-9)</label>
            <input
              type="number"
              min="0"
              max="9"
              value={wickets}
              onChange={(e) => {
                setWickets(Number(e.target.value));
                handlePredictIPL();
              }}
              className="w-full px-3 py-1.5 rounded-lg bg-[#141A32] border border-[#293056] text-white font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC]">Current Score</label>
            <input
              type="number"
              min="0"
              max="300"
              value={currentRuns}
              onChange={(e) => {
                setCurrentRuns(Number(e.target.value));
                handlePredictIPL();
              }}
              className="w-full px-3 py-1.5 rounded-lg bg-[#141A32] border border-[#293056] text-white font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC]">Runs Last 5 Overs</label>
            <input
              type="number"
              min="0"
              max="100"
              value={last5Runs}
              onChange={(e) => {
                setLast5Runs(Number(e.target.value));
                handlePredictIPL();
              }}
              className="w-full px-3 py-1.5 rounded-lg bg-[#141A32] border border-[#293056] text-white font-mono"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-[#F97316]/10 to-[#EC4899]/10 border border-[#F97316]/30 grid grid-cols-3 gap-2 text-center">
          <div>
            <span className="text-[10px] text-[#A5B4FC] block uppercase font-mono">Current Run Rate</span>
            <span className="text-base font-bold text-[#F97316] font-mono">{iplResult.runRate}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5B4FC] block uppercase font-mono">Predicted Final Score</span>
            <span className="text-lg font-black text-white font-mono">{iplResult.projectedTotal} Runs</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5B4FC] block uppercase font-mono">Model Confidence Band</span>
            <span className="text-xs font-bold text-[#EC4899] font-mono">{iplResult.projectedRange}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'crop') {
    return (
      <div className="p-5 rounded-2xl bg-[#080B18] border border-[#22C55E]/30 space-y-4 font-sans text-xs sm:text-sm">
        <div className="flex items-center justify-between border-b border-[#293056] pb-3">
          <span className="font-bold text-white flex items-center gap-2 text-sm">
            <Satellite className="w-4 h-4 text-[#22C55E]" />
            ISRO GEE Satellite Spectral Index Analyzer (Odisha Region)
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">
            Sentinel-1 & 2 Fusion
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC] flex justify-between">
              <span>NIR (B8)</span> <span className="font-mono text-white">{nir}</span>
            </label>
            <input
              type="range" min="0.05" max="0.8" step="0.01" value={nir}
              onChange={(e) => setNir(Number(e.target.value))}
              className="w-full accent-[#22C55E] bg-[#141A32] rounded-lg h-2"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC] flex justify-between">
              <span>Red (B4)</span> <span className="font-mono text-white">{red}</span>
            </label>
            <input
              type="range" min="0.02" max="0.4" step="0.01" value={red}
              onChange={(e) => setRed(Number(e.target.value))}
              className="w-full accent-[#22C55E] bg-[#141A32] rounded-lg h-2"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC] flex justify-between">
              <span>SWIR (B11)</span> <span className="font-mono text-white">{swir}</span>
            </label>
            <input
              type="range" min="0.05" max="0.5" step="0.01" value={swir}
              onChange={(e) => setSwir(Number(e.target.value))}
              className="w-full accent-[#22C55E] bg-[#141A32] rounded-lg h-2"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-[#A5B4FC] flex justify-between">
              <span>Green (B3)</span> <span className="font-mono text-white">{green}</span>
            </label>
            <input
              type="range" min="0.02" max="0.3" step="0.01" value={green}
              onChange={(e) => setGreen(Number(e.target.value))}
              className="w-full accent-[#22C55E] bg-[#141A32] rounded-lg h-2"
            />
          </div>
        </div>

        {/* Index Output Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-xl bg-[#141A32] border border-[#293056] text-center">
            <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">NDVI (Vegetation)</span>
            <span className="text-sm font-bold text-[#22C55E] font-mono">{ndvi}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#141A32] border border-[#293056] text-center">
            <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">NDMI (Moisture)</span>
            <span className="text-sm font-bold text-[#06B6D4] font-mono">{ndmi}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#141A32] border border-[#293056] text-center">
            <span className="text-[10px] text-[#A5B4FC] uppercase block font-mono">NDWI (Water Index)</span>
            <span className="text-sm font-bold text-[#2563EB] font-mono">{ndwi}</span>
          </div>
        </div>

        {/* AI Advisory Decision Output */}
        <div className="p-3.5 rounded-xl bg-[#141A32] border border-[#22C55E]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#22C55E]">Automated Remote Sensing Diagnosis</span>
            <h4 className="text-sm font-bold text-white">{cropStatus.crop} — <span style={{ color: cropStatus.color }}>{cropStatus.stress}</span></h4>
            <p className="text-xs text-[#A5B4FC]">{cropStatus.recommendation}</p>
          </div>
          <span className="px-3 py-1 rounded-lg bg-[#22C55E]/15 text-[#22C55E] text-xs font-mono font-bold shrink-0">
            Odisha Grid Active
          </span>
        </div>
      </div>
    );
  }

  // Phishing Website Detector State
  const [targetUrl, setTargetUrl] = useState('http://paypal-security-update.account-verify-login.com/auth');
  const [urlLength, setUrlLength] = useState(62);
  const [hasIp, setHasIp] = useState(false);
  const [hasAtSymbol, setHasAtSymbol] = useState(true);
  const [hasSsl, setHasSsl] = useState(false);
  const [domainAgeMonths, setDomainAgeMonths] = useState(2);
  const [phishingScanning, setPhishingScanning] = useState(false);

  const presets = [
    {
      label: "PayPal Phishing Specimen",
      url: "http://paypal-security-update.account-verify-login.com/auth",
      length: 62, ip: false, atSymbol: true, ssl: false, age: 2
    },
    {
      label: "Legitimate GitHub Profile",
      url: "https://github.com/devidutta3/phising-website-predictor",
      length: 56, ip: false, atSymbol: false, ssl: true, age: 36
    },
    {
      label: "IP-based Bank Scam Link",
      url: "http://192.168.43.102/online-banking/login.php",
      length: 46, ip: true, atSymbol: false, ssl: false, age: 1
    }
  ];

  const handleSelectPreset = (p: typeof presets[0]) => {
    setTargetUrl(p.url);
    setUrlLength(p.length);
    setHasIp(p.ip);
    setHasAtSymbol(p.atSymbol);
    setHasSsl(p.ssl);
    setDomainAgeMonths(p.age);
  };

  const calculateRiskScore = () => {
    let score = 15;
    if (!hasSsl) score += 30;
    if (hasIp) score += 25;
    if (hasAtSymbol) score += 20;
    if (urlLength > 50) score += 15;
    if (domainAgeMonths < 6) score += 20;
    return Math.min(99, Math.max(1, score));
  };

  const riskScore = calculateRiskScore();
  const isPhishing = riskScore >= 50;

  return (
    <div className="p-5 rounded-2xl bg-[#080B18] border border-[#EC4899]/30 space-y-4 font-sans text-xs sm:text-sm">
      <div className="flex items-center justify-between border-b border-[#293056] pb-3">
        <span className="font-bold text-white flex items-center gap-2 text-sm">
          <ShieldAlert className="w-4 h-4 text-[#EC4899]" />
          FastAPI Phishing Website Risk Classifier
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EC4899]/15 text-[#EC4899] border border-[#EC4899]/30">
          Random Forest 96.4% Acc
        </span>
      </div>

      {/* Preset Quick Test Buttons */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono uppercase text-[#A5B4FC]">Preset Test Samples:</span>
        <div className="flex flex-wrap gap-2">
          {presets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectPreset(p)}
              className="px-2.5 py-1 rounded-lg bg-[#141A32] hover:bg-[#1A2242] text-[11px] font-mono text-[#06B6D4] border border-[#293056] transition-colors text-left"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Target URL Input */}
      <div className="space-y-1">
        <label className="text-xs text-[#A5B4FC]">Target Web URL to Analyze</label>
        <input
          type="text"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          className="w-full px-3 py-2 rounded-xl bg-[#10152A] border border-[#293056] text-white font-mono text-xs focus:outline-none focus:border-[#EC4899]"
        />
      </div>

      {/* Feature Toggles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          type="button"
          onClick={() => setHasSsl(!hasSsl)}
          className={`p-2.5 rounded-xl border text-left transition-all ${
            hasSsl ? 'bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]' : 'bg-[#EC4899]/10 border-[#EC4899] text-[#EC4899]'
          }`}
        >
          <span className="text-[10px] font-mono block">SSL Certificate</span>
          <span className="font-bold text-xs">{hasSsl ? "HTTPS Valid" : "HTTP Unencrypted"}</span>
        </button>

        <button
          type="button"
          onClick={() => setHasIp(!hasIp)}
          className={`p-2.5 rounded-xl border text-left transition-all ${
            hasIp ? 'bg-[#EC4899]/10 border-[#EC4899] text-[#EC4899]' : 'bg-[#141A32] border-[#293056] text-white'
          }`}
        >
          <span className="text-[10px] font-mono block">Raw IP Address</span>
          <span className="font-bold text-xs">{hasIp ? "Detected in URL" : "Domain Name"}</span>
        </button>

        <button
          type="button"
          onClick={() => setHasAtSymbol(!hasAtSymbol)}
          className={`p-2.5 rounded-xl border text-left transition-all ${
            hasAtSymbol ? 'bg-[#EC4899]/10 border-[#EC4899] text-[#EC4899]' : 'bg-[#141A32] border-[#293056] text-white'
          }`}
        >
          <span className="text-[10px] font-mono block">Subdomain / '@' Symbol</span>
          <span className="font-bold text-xs">{hasAtSymbol ? "Present (@/nested)" : "Standard Path"}</span>
        </button>

        <div className="p-2.5 rounded-xl bg-[#141A32] border border-[#293056]">
          <span className="text-[10px] font-mono text-[#A5B4FC] block">Domain Age</span>
          <span className="font-bold text-xs text-white">{domainAgeMonths} Months</span>
        </div>
      </div>

      {/* Detection Result Banner */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isPhishing ? 'bg-[#EC4899]/15 border-[#EC4899]' : 'bg-[#22C55E]/15 border-[#22C55E]'
      }`}>
        <div className="flex items-center gap-3">
          {isPhishing ? (
            <ShieldAlert className="w-7 h-7 text-[#EC4899] shrink-0" />
          ) : (
            <ShieldCheck className="w-7 h-7 text-[#22C55E] shrink-0" />
          )}
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-white block">Classification Output</span>
            <h4 className="text-sm font-extrabold text-white">
              {isPhishing ? "MALICIOUS PHISHING WEBSITE DETECTED" : "LEGITIMATE / SAFE WEBSITE"}
            </h4>
            <p className="text-xs text-[#A5B4FC]">
              {isPhishing ? "High threat probability! Avoid sharing personal credentials." : "Clean lexical profile and verified domain authority."}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[10px] font-mono text-[#A5B4FC] block uppercase">Phishing Risk Score</span>
          <span className={`text-xl font-black font-mono ${isPhishing ? 'text-[#EC4899]' : 'text-[#22C55E]'}`}>
            {riskScore}%
          </span>
        </div>
      </div>
    </div>
  );
};
