import dash from "../../content/data.json";

import FlipImg from "./FlipImg.jsx";

export default function Dashboard() {
  return (
    <div className="dashboardCont">
      <h1>{dash.dashboard.title}</h1>
      <div className="dashPart">
        <FlipImg />
      </div>
    </div>
  );
}
//
//     <div className="dashPart">
//       <div className="flip-card">
//         <div className="flip-card-inner">
//           <div className="flip-card-front">
//             {imgs.map((img) => {
//               return <img src={img} alt="img" />;
//             })}
//           </div>
//           <ul className="flip-card-back">
//             {dash.dashboard.paths.map((paths) => {
//               return (
//                 <li>
//                   <a href={`/dashboard/${paths}`}>
//                     Manage Here Data
//                     <br />
//                     {paths.charAt(0).toUpperCase() + paths.slice(1)}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//
