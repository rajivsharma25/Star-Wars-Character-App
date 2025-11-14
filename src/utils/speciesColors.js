const SWAPI_BASE_URL = import.meta.env.VITE_SWAPI_BASE_URL;

// Common glossy background styles
const glossyBase = "backdrop-blur-md backdrop-saturate-150 border border-white/10";

// Map of species API URLs to corresponding translucent glossy background color classes
const speciesColors = {
  [`${SWAPI_BASE_URL}/species/1/`]: `bg-blue-700/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/2/`]: `bg-green-700/30 ${glossyBase}`,     
  [`${SWAPI_BASE_URL}/species/3/`]: `bg-yellow-700/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/4/`]: `bg-teal-700/30 ${glossyBase}`,       
  [`${SWAPI_BASE_URL}/species/5/`]: `bg-green-800/30 ${glossyBase}`,     
  [`${SWAPI_BASE_URL}/species/6/`]: `bg-lime-700/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/7/`]: `bg-amber-700/30 ${glossyBase}`,     
  [`${SWAPI_BASE_URL}/species/8/`]: `bg-pink-700/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/9/`]: `bg-red-700/30 ${glossyBase}`,       
  [`${SWAPI_BASE_URL}/species/10/`]: `bg-indigo-700/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/11/`]: `bg-purple-700/30 ${glossyBase}`,   
  [`${SWAPI_BASE_URL}/species/12/`]: `bg-emerald-600/30 ${glossyBase}`,   
  [`${SWAPI_BASE_URL}/species/13/`]: `bg-cyan-700/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/14/`]: `bg-rose-600/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/15/`]: `bg-violet-600/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/16/`]: `bg-fuchsia-700/30 ${glossyBase}`,   
  [`${SWAPI_BASE_URL}/species/17/`]: `bg-slate-700/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/18/`]: `bg-amber-600/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/19/`]: `bg-cyan-600/30 ${glossyBase}`,      
  [`${SWAPI_BASE_URL}/species/20/`]: `bg-orange-600/30 ${glossyBase}`,    
  [`${SWAPI_BASE_URL}/species/21/`]: `bg-blue-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/22/`]: `bg-green-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/23/`]: `bg-yellow-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/24/`]: `bg-teal-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/25/`]: `bg-green-500/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/26/`]: `bg-lime-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/27/`]: `bg-amber-500/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/28/`]: `bg-pink-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/29/`]: `bg-red-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/30/`]: `bg-indigo-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/31/`]: `bg-purple-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/32/`]: `bg-emerald-500/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/33/`]: `bg-cyan-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/34/`]: `bg-rose-500/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/35/`]: `bg-violet-500/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/36/`]: `bg-fuchsia-600/30 ${glossyBase}`,
  [`${SWAPI_BASE_URL}/species/37/`]: `bg-slate-600/30 ${glossyBase}`,
};

export default speciesColors;
