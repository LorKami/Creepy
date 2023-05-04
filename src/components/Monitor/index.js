import React, { useState } from "react";
import "../Monitor/Monitor.css";

import Pop1 from "../../images/pop1.gif";
import Discord from "../../images/discord.png"
import Twitter from "../../images/twitter.png"
import SUI from "../../images/sui.png"

import { BsDiscord } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';

const Monitor = () => {

  const [textID, setTextID] = useState (null);

  return (
    <div>
      <div className="Monitor">
        <div className="PrincipalImage">
          <img src={Pop1}></img>
        </div>
        <div className="InfoLeft">
          <div className="InfoSection">
          {
            textID === 'CreepyP' ? (<div className="SectionTeam-Open">
              <h2>CREEPY</h2>
              <p>
              Coming soon, we're working like creepy
              </p>
            </div>) : (<div></div>)  
          }
          
          {
            textID === 'AboutP' ? (<div className="SectionTeam-Open"> 
            <h2>LOREM</h2>

            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p>

            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p>

            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p></div>) : (<></>)
          }

{
            textID === 'RoadmapP' ? (<div className="SectionTeam-Open"> 
            <h2>LOREM</h2>

            <h3>Q1</h3>
            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p>

              <h3>Q2</h3>
            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p>

              <h3>Q3</h3>
            <p>It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.</p></div>) : (<></>)
          }

             

  
          </div>
          <div className="MenuSection">

          <div className="MenuIndex">
            <p onClick={() => setTextID(textID === "CreepyP" ? null : "CreepyP")}>CREEPY POPS</p>
            {/* <p onClick={() => setTextID(textID === "AboutP" ? null : "AboutP")}>ABOUT</p> */}
            {/* <p onClick={() => setTextID(textID === "RoadmapP" ? null : "RoadmapP")}>ROADMAP</p> */}
            <a><p className="TextLocked">RAFFLE</p></a>
            {/* <a href="https://creepy-pops.vercel.app/" target="_blank"><p>MINT PAGE</p></a> */}
            </div>

            <div className="ImageSocial">
              <div className="ImageUp">
              {/* <a href="https://discord.com/" target="_blank"><img src={Discord}></img></a> */}
              <a href="https://discord.com/" target="_blank"><BsDiscord className="ButtonDiscord" size='2rem'/></a>
              <a href="https://twitter.com/creepypopsnft" target="_blank"><SiTwitter className="ButtonTwitter" size='2rem'/></a>
              {/* <a href="https://twitter.com/creepypopsnft" target="_blank"><img src={Twitter}></img></a> */}
              </div>
              <div className="ImageDown">
              {/* <a href="#" target="_blank"><img src={SUI}></img></a> */}
              {/* <a href="#" target="_blank"><img src={BlueMove}></img></a> */}
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Monitor;
