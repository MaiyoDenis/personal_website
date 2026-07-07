export default function HeroDashboard() {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-3xl border border-white/10 bg-[#111827]/90 backdrop-blur-xl p-8 shadow-2xl">

        {/* Browser Header */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-6 h-8 flex-1 rounded-lg bg-white/5 flex items-center px-4 text-sm text-gray-500">
            https://ewifi.app/dashboard
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white">
          E-WiFi Analytics
        </h3>

        <p className="mt-2 text-gray-400">
          Live monitoring of connected users and revenue.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <Card value="1,247" label="Online Users" />

          <Card value="KES 84K" label="Revenue" />

          <Card value="326" label="Devices" />

          <Card value="99.8%" label="Uptime" />

        </div>

        {/* Fake Chart */}

        <div className="mt-10">

          <div className="mb-4 flex items-center justify-between">
            <span className="text-gray-400">Traffic</span>

            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
              Today
            </span>
          </div>

          <div className="flex h-40 items-end gap-3">

            {[45,60,35,70,90,65,100,80].map((h,i)=>(
              <div
                key={i}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                style={{height:`${h}%`}}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({
  value,
  label,
}:{
  value:string;
  label:string;
}){

  return(
    <div className="rounded-2xl border border-white/5 bg-white/5 p-5">

      <h4 className="text-3xl font-bold text-white">
        {value}
      </h4>

      <p className="mt-2 text-gray-400">
        {label}
      </p>

    </div>
  );
}